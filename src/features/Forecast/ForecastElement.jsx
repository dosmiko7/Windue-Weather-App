import PropTypes from "prop-types";

import ForecastElementHorizontal from "./ForecastElementVertical";
import ForecastElementVertical from "./ForecastElementHorizontal";
import ListElement from "../../ui/ListElement";

const ForecastElement = ({ data, type }) => {
	return (
		<ListElement type={type}>
			{type === "horizontal" ? <ForecastElementHorizontal data={data} /> : <ForecastElementVertical data={data} />}
		</ListElement>
	);
};

ForecastElement.propTypes = {
	data: PropTypes.object.isRequired,
	type: PropTypes.string,
};

export default ForecastElement;
