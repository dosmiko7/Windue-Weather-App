import { useEffect, useState } from "react";
import getCities from "../services/apiCities";
import { formatCities, formatLocation } from "../utils/formatData";
import useWeather from "./useWeather";

export const useCities = async () => {
	const [cities, setCities] = useState([]);
	const { forecast } = useWeather();
	const location = forecast.current.location;
	const formattedLocation = formatLocation({ latitude: location.lat, longitude: location.lng });

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getCities({ location: formattedLocation });
				console.log("Data from getCities: ", data); // Add this line
				if (data.data) {
					const formattedData = formatCities(data);
					console.log("Formatted data: ", formattedData); // Add this line
					setCities(formattedData);
				}
			} catch (error) {
				console.error("Error while fetching cities: " + error);
			}
		};

		fetchData();
	}, [formattedLocation]);

	console.log("Cities in hook: ", cities);
	return cities;
};
