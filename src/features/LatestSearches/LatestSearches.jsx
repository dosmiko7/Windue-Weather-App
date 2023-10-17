import PropTypes from "prop-types";

import useWeather from "../../hooks/useWeather";

import Container, { ContainerName } from "../../ui/Container";
import LatestSearchesList from "./LatestSearchesList";

const LatestSearches = ({ count = 3 }) => {
	const { searchHistory } = useWeather();
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
