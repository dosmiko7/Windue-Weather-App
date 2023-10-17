import { useEffect, useState } from "react";

import Container, { ContainerName } from "../../ui/Container";
import SuggestionsList from "./SuggestionsList";
import useWeather from "../../hooks/useWeather";
import getCities from "../../services/apiCities";
import { formatCities } from "../../utils/formatData";

const Suggestions = () => {
	const [cities, setCities] = useState([]);
	const { forecast, updateForecast } = useWeather();
	const location = forecast.current.location;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getCities({ location });
				const formattedData = formatCities(data);
				setCities(formattedData);
			} catch (error) {
				console.error("Error while fetching cities: " + error);
			}
		};

		fetchData();
	}, [location]);

	const handleOnSuggestionClick = (location) => {
		const coordinates = `${location.lat},${location.lng}`;
		updateForecast({ city: coordinates });
	};

	return (
		<Container variant="nonColor">
			<ContainerName>Suggestions</ContainerName>
			{cities ? (
				<SuggestionsList
					suggestions={cities}
					orientation="horizontal"
					onSuggestionClick={handleOnSuggestionClick}
				/>
			) : (
				<div>Loading...</div>
			)}
		</Container>
	);
};

export default Suggestions;
