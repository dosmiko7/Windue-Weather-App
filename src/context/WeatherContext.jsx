import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
	const [forecast, setForecast] = useState(null);
	const [history, setHistory] = useState(null);

	const updateForecast = (data) => {
		setForecast(data);
	};

	const updateHistory = (data) => {
		setHistory(data);
	};

	return (
		<WeatherContext.Provider value={{ forecast, history, updateForecast, updateHistory }}>
			{children}
		</WeatherContext.Provider>
	);
};

WeatherContextProvider.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default WeatherContextProvider;
