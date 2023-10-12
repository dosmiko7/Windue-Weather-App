import convertDateIntoDayName from "./convertDateIntoDayName";

const formatData = (data) => {
	const current = {
		cityName: data.location.name,
		rainProb: data.forecast.forecastday[0].day.daily_chance_of_rain,
		temp: data.current.temp_c,
		condition: { icon: data.current.condition.icon, text: data.current.condition.text },
	};

	const hoursToExtract = [6, 9, 12, 15, 18, 21];
	const todayForecast = [];
	for (const hour of hoursToExtract) {
		const hourData = data.forecast.forecastday[0].hour[hour];
		todayForecast.push({
			time: hourData.time.slice(-6),
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

	// const todayForecast = [
	// 	{
	// 		time: data.forecast.forecastday.hour[6].time.slice(-6),
	// 		condition: {
	// 			icon: data.forecast.forecastday.hour[6].condition.icon,
	// 			text: data.forecast.forecastday.hour[6].condition.text,
	// 		},
	// 		temp: data.forecast.forecastday.hour[6].temp_c,
	// 	},
	// 	{
	// 		time: data.forecast.forecastday.hour[9].time.slice(-6),
	// 		condition: {
	// 			icon: data.forecast.forecastday.hour[9].condition.icon,
	// 			text: data.forecast.forecastday.hour[9].condition.text,
	// 		},
	// 		temp: data.forecast.forecastday.hour[9].temp_c,
	// 	},
	// 	{
	// 		time: data.forecast.forecastday.hour[12].time.slice(-6),
	// 		condition: {
	// 			icon: data.forecast.forecastday.hour[12].condition.icon,
	// 			text: data.forecast.forecastday.hour[12].condition.text,
	// 		},
	// 		temp: data.forecast.forecastday.hour[12].temp_c,
	// 	},
	// 	{
	// 		time: data.forecast.forecastday.hour[15].time.slice(-6),
	// 		condition: {
	// 			icon: data.forecast.forecastday.hour[15].condition.icon,
	// 			text: data.forecast.forecastday.hour[15].condition.text,
	// 		},
	// 		temp: data.forecast.forecastday.hour[15].temp_c,
	// 	},
	// 	{
	// 		time: data.forecast.forecastday.hour[18].time.slice(-6),
	// 		condition: {
	// 			icon: data.forecast.forecastday.hour[18].condition.icon,
	// 			text: data.forecast.forecastday.hour[18].condition.text,
	// 		},
	// 		temp: data.forecast.forecastday.hour[18].temp_c,
	// 	},
	// 	{
	// 		time: data.forecast.forecastday.hour[21].time.slice(-6),
	// 		condition: {
	// 			icon: data.forecast.forecastday.hour[21].condition.icon,
	// 			text: data.forecast.forecastday.hour[21].condition.text,
	// 		},
	// 		temp: data.forecast.forecastday.hour[21].temp_c,
	// 	},
	// ];
};

export default formatData;
