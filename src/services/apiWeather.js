import PropTypes from "prop-types";
import getForecast from "./apiForecast";
import getCurrent from "./apiCurrent";
import getHistory from "./apiHistory";

const fetchWeatherData = async ({ city, days = 3 }) => {
	try {
		const [forecastData, currentData, historyData] = await Promise.all([
			getForecast(city, days),
			getCurrent(city),
			getHistory(city),
		]);

		// Now you have both forecastData and currentData here.
		console.log("Forecast Data:", forecastData);
		console.log("Current Data:", currentData);
		console.log("History Dara:", historyData);
	} catch (error) {
		console.error("Error while fetching weather data: " + error);
	}
};

fetchWeatherData.propTypes = {
	city: PropTypes.string.isRequired,
	days: PropTypes.number,
};
