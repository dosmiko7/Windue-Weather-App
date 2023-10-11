import PropTypes from "prop-types";
import { weatherAPIKey } from "./weatherAPIKey";

const getCurrent = async ({ city }) => {
	try {
		const response = fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${city}&aqi=yes`);
		const current = await response.json();
		return current;
	} catch (error) {
		console.error("Error while fetching current weather: " + error);
	}
};

getCurrent.propTypes = {
	city: PropTypes.string.isRequired,
};

export default getCurrent;
