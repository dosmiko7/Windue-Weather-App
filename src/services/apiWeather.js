import PropTypes from "prop-types";
import getForecast from "./apiForecast";
import getHistory from "./apiHistory";

const fetchWeatherData = async ({ city, days = 3 }) => {
	try {
		const [forecastData, historyData] = await Promise.all([getForecast({ city, days }), getHistory({ city })]);

		console.log("Forecast Data:", forecastData);
		console.log("History Dara:", historyData);
	} catch (error) {
		console.error("Error while fetching weather data: " + error);
	}
};

fetchWeatherData.propTypes = {
	city: PropTypes.string.isRequired,
	days: PropTypes.number,
};

export default fetchWeatherData;
