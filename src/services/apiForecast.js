import PropTypes from "prop-types";
import { weatherAPIKey } from "./APIKeys";

/*
	Note: The free version of WeatherAPI can not support more than 3 days
*/
const getForecast = async ({ city, days = 3 }) => {
	const correctDays = days > 3 ? 3 : days;

	try {
		const response = await fetch(
			`http://api.weatherapi.com/v1/forecast.json?key=${weatherAPIKey}&q=${city}&days=${correctDays}&aqi=yes&alerts=no`
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
