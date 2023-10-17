import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";

import { useGeolocation } from "../hooks/useGeolocation";
import getForecast from "../services/apiForecast";
import { formatForecast, formatSearch } from "../utils/formatData";

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
	const [forecast, setForecast] = useState({});
	const [searchHistory, setSearchHistory] = useState([]);
	const { userLocation } = useGeolocation();

	const updateForecast = async ({ city }) => {
		const data = await getForecast({ city });
		if (!data.error) {
			const formattedData = formatForecast(data);
			setForecast(formattedData);

			const searchData = formatSearch(formattedData);
			setSearchHistory((prevHistory) => [searchData, ...prevHistory]);
		} else toast.error(data.error.message);
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
