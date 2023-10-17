import convertDateIntoDayName from "./convertDateIntoDayName";

export const formatForecast = (data) => {
	const current = {
		cityName: data.location.name,
		rainProb: data.forecast.forecastday[0].day.daily_chance_of_rain,
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

	const hoursToExtract = [6, 9, 12, 15, 18, 21];
	const todayForecast = [];
	for (const hour of hoursToExtract) {
		const hourData = data.forecast.forecastday[0].hour[hour];
		todayForecast.push({
			time: hourData.time.slice(-5),
			condition: {
				icon: hourData.condition.icon,
				text: hourData.condition.text,
			},
			temp: hourData.temp_c,
		});
	}

	const nDayForecast = [];
	data.forecast.forecastday.forEach((day) => {
		nDayForecast.push({
			day: convertDateIntoDayName(day.date),
			condition: { icon: day.day.condition.icon, text: day.day.condition.text },
			wind: day.day.avgvis_km,
		});
	});

	const airCondition = {
		tempFeel: data.current.feelslike_c,
		humidity: data.current.humidity,
		pressure: data.current.pressure_mb,
		uv: data.current.uv,
	};

	return { current, todayForecast, nDayForecast, airCondition };
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
	data.geonames.forEach((el) => {
		let tmpDst = el.distance;
		formattedCities.push({
			cityName: el.name,
			location: { lat: el.lat, lng: el.lng },
			distance: tmpDst.slice(0, 5),
		});
	});
	return formattedCities;
};
