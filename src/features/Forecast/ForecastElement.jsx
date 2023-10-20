import PropTypes from "prop-types";

import ForecastElementHorizontal from "./ForecastElementHorizontal";
import ForecastElementVertical from "./ForecastElementVertical";
import ListElement from "../../ui/ListElement";

const ForecastElement = ({ data, elementType, children }) => {
	return (
		<ListElement orientation={elementType}>
			{elementType === "horizontal" ? (
				<ForecastElementHorizontal data={data}>{children}</ForecastElementHorizontal>
			) : (
				<ForecastElementVertical data={data}>{children}</ForecastElementVertical>
			)}
		</ListElement>
	);
};

ForecastElement.propTypes = {
	data: PropTypes.object.isRequired,
	elementType: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ForecastElement;
