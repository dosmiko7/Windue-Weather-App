import PropTypes from "prop-types";
import { weatherAPIKey } from "./weatherAPIKey";

const getCurrent = async ({ city }) => {
	try {
		const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${city}&aqi=yes`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error while fetching current weather: " + error);
	}
};

getCurrent.propTypes = {
	city: PropTypes.string.isRequired,
};

export default getCurrent;
