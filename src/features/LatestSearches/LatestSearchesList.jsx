import PropTypes from "prop-types";

import List from "../../ui/List";
import SearchesElement from "./SearchesElement";

const LatestSearchesList = ({ searches }) => {
	return (
		<List
			orientation="vertical"
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
};

export default LatestSearchesList;
