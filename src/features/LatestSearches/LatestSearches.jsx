import PropTypes from "prop-types";

import Container, { ContainerName } from "../../ui/Container";
import LatestSearchesList from "./LatestSearchesList";
import { styled } from "styled-components";
import { useMediumRes} from "../../hooks/useMediumRes";

const StyledLatestSearches = styled(Container)`
	@media only screen and (width <= 1280px) {
		height: auto;
	}
`;

const LatestSearches = ({ searchHistory = [], count = 3 }) => {
	const { isMediumRes } = useMediumRes();

	return (
		<StyledLatestSearches variant="nonColor">
			<ContainerName>Latest Searches</ContainerName>
			<LatestSearchesList
				searches={searchHistory.slice(0, count)}
				orientation={isMediumRes ? "horizontal" : "vertical"}
			/>
		</StyledLatestSearches>
	);
};

LatestSearches.propTypes = {
	searchHistory: PropTypes.array,
	count: PropTypes.number,
};

export default LatestSearches;
