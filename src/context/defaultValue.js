export const defaultValue = {
	current: {
		cityName: "Warszawa",
		rainProb: 93,
		temp: 10,
		condition: {
			icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
			text: "Sunny",
		},
		details: {
			carbon: 260.4,
			nitrogen: 4.5,
			ozone: 56.5,
			sulphur: 2.8,
			pm10: 4.8,
			pm2_5: 3.4,
		},
		location: {
			lat: 52.25,
			lng: 21,
		},
	},
	currentForecast: [
		{
			time: "06:00",
			condition: {
				icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
				text: "Overcast",
			},
			temp: 5.8,
		},
		{
			time: "09:00",
			condition: {
				icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
				text: "Sunny",
			},
			temp: 7.6,
		},
		{
			time: "12:00",
			condition: {
				icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
				text: "Partly cloudy",
			},
			temp: 10.2,
		},
		{
			time: "15:00",
			condition: {
				icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
				text: "Sunny",
			},
			temp: 10,
		},
		{
			time: "18:00",
			condition: {
				icon: "//cdn.weatherapi.com/weather/64x64/night/176.png",
				text: "Patchy rain possible",
			},
			temp: 10.3,
		},
		{
			time: "21:00",
			condition: {
				icon: "//cdn.weatherapi.com/weather/64x64/night/266.png",
				text: "Light drizzle",
			},
			temp: 8.7,
		},
	],
	nDayForecast: [
		{
			day: "Thursday",
			condition: {
				icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
				text: "Patchy rain possible",
			},
			wind: 9.7,
		},
		{
			day: "Friday",
			condition: {
				icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
				text: "Patchy rain possible",
			},
			wind: 9.3,
		},
		{
			day: "Saturday",
			condition: {
				icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
				text: "Patchy rain possible",
			},
			wind: 9.3,
		},
	],
	airCondition: {
		tempFeel: 8.1,
		humidity: 62,
		pressure: 1003,
		uv: 4,
	},
};
