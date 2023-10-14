import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import getForecast from "../services/apiForecast";
import formatData from "../utils/formatData";
import { useGeolocation } from "../hooks/useGeolocation";

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
	const [forecast, setForecast] = useState(null);
	const [searchHistory, setSearchHistory] = useState([]);
	const { userLocation } = useGeolocation();

	const updateForecast = async ({ city }) => {
		const data = await getForecast({ city });
		const formattedData = formatData(data);
		setForecast(formattedData);

		const { cityName, condition, temp } = formattedData.current;
		const searchData = {
			cityName,
			condition,
			temp,
			date: new Date().toLocaleTimeString("pl-PL", {
				hour: "2-digit",
				minute: "2-digit",
			}),
		};

		setSearchHistory((prevHistory) => [searchData, ...prevHistory]);
	};

	useEffect(() => {
		if (userLocation !== "") {
			updateForecast({ city: userLocation });
		}
	}, [userLocation]);

	return (
		<WeatherContext.Provider value={{ forecast, searchHistory, updateForecast }}>{children}</WeatherContext.Provider>
	);
};

WeatherContextProvider.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default WeatherContextProvider;
