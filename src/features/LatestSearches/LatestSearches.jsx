import PropTypes from "prop-types";

import Container, { ContainerName } from "../../ui/Container";
import LatestSearchesList from "./LatestSearchesList";

const LatestSearches = ({ searchHistory = [], count = 3 }) => {
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
	searchHistory: PropTypes.array,
	count: PropTypes.number,
};

export default LatestSearches;
