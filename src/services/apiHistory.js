//api.weatherapi.com/v1/history.json?key=e07ed9594a2a4f8e841104804231110&q=Warsaw&dt=2010-01-01

import PropTypes from "prop-types";
import { weatherAPIKey } from "./weatherAPIKey";

const getHistory = async ({ city }) => {
	const date = new Date();

	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	try {
		const response = await fetch(
			`//api.weatherapi.com/v1/history.json?key=${weatherAPIKey}&q=${city}&dt=${year}-${month}-${day}`
		);
		const history = await response.json();
		return history;
	} catch (error) {
		console.error("Error while fetching history: " + error);
	}
};

getHistory.propTypes = {
	city: PropTypes.string.isRequired,
};

export default getHistory;
