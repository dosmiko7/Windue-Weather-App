import { createContext, useState } from "react";
import PropTypes from "prop-types";
import getForecast from "../services/apiForecast";
import formatData from "../utils/formatData";

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
	const [forecast, setForecast] = useState(null);

	const updateForecast = async ({ city }) => {
		const data = await getForecast({ city });
		const formattedData = formatData(data);
		setForecast(formattedData);
	};

	return <WeatherContext.Provider value={{ forecast, updateForecast }}>{children}</WeatherContext.Provider>;
};

WeatherContextProvider.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default WeatherContextProvider;
