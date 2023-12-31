import PropTypes from "prop-types";
/*
	Note: The free version of WeatherAPI can not support more than 3 days
*/
const getForecast = async ({ city, days = 3 }) => {
	const correctDays = days > 3 ? 3 : days;

	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=${
				import.meta.env.VITE_WEATHER_API_KEY
			}&q=${city}&days=${correctDays}&aqi=yes&alerts=no`
		);
		const forecast = await response.json();
		return forecast;
	} catch (error) {
		console.error("Error while fetching forecast: " + error);
	}
};

getForecast.propTypes = {
	city: PropTypes.string.isRequired,
	days: PropTypes.number,
};

export default getForecast;
