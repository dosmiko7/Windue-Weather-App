import { useContext } from "react";
import PropTypes from "prop-types";

import { WeatherContext } from "../../context/WeatherContext";

import Container, { ContainerName } from "../../ui/Container";
import LatestSearchesList from "./LatestSearchesList";

const LatestSearches = ({ count = 3 }) => {
	const { searchHistory } = useContext(WeatherContext);
	return (
		<Container variant="nonColor">
			<ContainerName>Latest Searches</ContainerName>
			<LatestSearchesList
				searches={searchHistory.slice(0, count)}
				orientation="vertical"
			/>
		</Container>
	);
};

LatestSearches.propTypes = {
	count: PropTypes.number,
};

export default LatestSearches;
