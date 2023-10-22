import PropTypes from "prop-types";

import List from "../../ui/List";
import SearchesElement from "./SearchesElement";
import { styled } from "styled-components";

const StyledLatestSearchesList = styled(List)`
	gap: 0.6rem;
`;

const LatestSearchesList = ({ searches, orientation }) => {
	return (
		<StyledLatestSearchesList
			orientation={orientation}
			border="nonBorder"
		>
			{searches.map((search) => (
				<SearchesElement
					key={Math.random()}
					search={search}
					orientation={orientation}
				/>
			))}
		</StyledLatestSearchesList>
	);
};

LatestSearchesList.propTypes = {
	searches: PropTypes.array.isRequired,
	orientation: PropTypes.string,
};

export default LatestSearchesList;
