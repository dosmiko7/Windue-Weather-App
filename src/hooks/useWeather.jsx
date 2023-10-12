import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const useWeather = () => {
	const context = useContext(WeatherContext);
	if (context === undefined) {
		throw new Error("WeatherContext was used outside of WeatherProvider");
	}

	return context;
};

export default useWeather;
