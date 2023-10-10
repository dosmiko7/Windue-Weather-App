import PropTypes from "prop-types";

import List from "../../ui/List";
import SearchesElement from "./SearchesElement";

const LatestSearchesList = ({ searches, orientation }) => {
	return (
		<List
			orientation={orientation}
			border="nonBorder"
		>
			{searches.map((search) => (
				<SearchesElement
					key={Math.random()}
					search={search}
				/>
			))}
		</List>
	);
};

LatestSearchesList.propTypes = {
	searches: PropTypes.array.isRequired,
	orientation: PropTypes.string,
};

export default LatestSearchesList;
