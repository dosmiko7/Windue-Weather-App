import convertDateIntoDayName from "./convertDateIntoDayName";

export const formatForecast = (data) => {
	console.log(data);
	const current = {
		cityName: data.location.name,
		rainProb: data.forecast.forecastday[0].day.daily_chance_of_rain,
		snowProb: data.forecast.forecastday[1].day.daily_chance_of_snow,
		temp: data.current.temp_c,
		condition: { icon: data.current.condition.icon, text: data.current.condition.text },
		details: {
			carbon: data.current.air_quality.co,
			nitrogen: data.current.air_quality.no2,
			ozone: data.current.air_quality.o3,
			sulphur: data.current.air_quality.so2,
			pm10: data.current.air_quality.pm10,
			pm2_5: data.current.air_quality.pm2_5,
		},
		location: { lat: data.location.lat, lng: data.location.lon },
	};

	const daysToExtract = [0, 1];
	const currentForecast = [];
	for (const day of daysToExtract) {
		let dayData = data.forecast.forecastday[day].hour;
		for (let hour = 0; hour < dayData.length; hour++) {
			const hourData = dayData[hour];
			currentForecast.push({
				day: hourData.time.slice(0, 10),
				time: hourData.time.slice(-5),
				condition: {
					icon: hourData.condition.icon,
					text: hourData.condition.text,
				},
				temp: hourData.temp_c,
			});
		}
	}

	const nDayForecast = [];
	data.forecast.forecastday.forEach((day) => {
		let details = [];
		let tmpObj = {};

		tmpObj["day"] = convertDateIntoDayName(day.date);
		tmpObj["condition"] = { icon: day.day.condition.icon, text: day.day.condition.text };
		tmpObj["wind"] = day.day.avgvis_km;
		tmpObj["rainProb"] = day.daily_chance_of_rain;
		tmpObj["snowProb"] = day.daily_chance_of_snow;
		day.hour.forEach((hour) => {
			details.push({
				time: hour.time.slice(-5),
				condition: { icon: hour.condition.icon, text: hour.condition.text },
				temp: hour.temp_c,
			});
		});

		nDayForecast.push({ ...tmpObj, details: details });
	});

	const airCondition = {
		tempFeel: data.current.feelslike_c,
		humidity: data.current.humidity,
		pressure: data.current.pressure_mb,
		uv: data.current.uv,
	};

	return { current, currentForecast, nDayForecast, airCondition };
};

export const formatSearch = (formattedData) => {
	const { cityName, condition, temp } = formattedData.current;
	const searchData = {
		cityName,
		condition,
		temp,
		date: new Date().toLocaleTimeString("pl-PL", {
			hour: "2-digit",
			minute: "2-digit",
		}),
	};

	return searchData;
};

export const formatLocation = ({ latitude, longitude }) => {
	let latitudeSymbol = latitude >= 0 ? "+" : "-";
	let longitudeSymbol = longitude >= 0 ? "+" : "-";
	let location = `${latitudeSymbol}${latitude}${longitudeSymbol}${longitude}`;

	return location;
};

export const formatCities = (data) => {
	let formattedCities = [];
	for (let i = 1; i < data.geonames.length; i++) {
		const el = data.geonames[i];
		let tmpDst = el.distance;
		formattedCities.push({
			cityName: el.name,
			location: { lat: el.lat, lng: el.lng },
			distance: tmpDst.slice(0, 5),
		});
	}
	return formattedCities;
};
