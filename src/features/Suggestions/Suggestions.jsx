import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Container, { ContainerName } from "../../ui/Container";
import SuggestionsList from "./SuggestionsList";
import getCities from "../../services/apiCities";
import { formatCities } from "../../utils/formatData";
import Spinner from "../../ui/Spinner";
import { styled } from "styled-components";

const Info = styled.h3`
	margin-left: 0.6rem;
`;

const Suggestions = ({ lat, lng, updateForecast }) => {
	const [cities, setCities] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const location = { lat: lat, lng: lng };
				const data = await getCities({ location });
				const formattedData = formatCities(data);
				setCities(formattedData);
			} catch (error) {
				console.error("Error while fetching cities: " + error);
			}
		};

		fetchData();
	}, [lat, lng]);

	const handleOnSuggestionClick = (location) => {
		const coordinates = `${location.lat},${location.lng}`;
		updateForecast({ city: coordinates });
	};

	return (
		<Container variant="nonColor">
			<ContainerName>Suggestions</ContainerName>
			{cities.length !== 0 ? (
				<SuggestionsList
					suggestions={cities}
					orientation="horizontal"
					onSuggestionClick={handleOnSuggestionClick}
				/>
			) : cities ? (
				<Info>No nearby places found</Info>
			) : (
				<Spinner />
			)}
		</Container>
	);
};

Suggestions.propTypes = {
	lat: PropTypes.number,
	lng: PropTypes.number,
	updateForecast: PropTypes.func,
};

export default Suggestions;
