import PropTypes from "prop-types";

import List from "../../ui/List";
import SearchesElement from "./SearchesElement";

const LatestSearchesList = ({ searches }) => {
	return (
		<List type="vertical">
			{searches.map((search) => {
				<SearchesElement search={search} />;
			})}
		</List>
	);
};

LatestSearchesList.propTypes = {
	searches: PropTypes.array.isRequired,
};

export default LatestSearchesList;
