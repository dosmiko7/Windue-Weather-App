import PropTypes from "prop-types";

import ForecastElementHorizontal from "./ForecastElementHorizontal";
import ForecastElementVertical from "./ForecastElementVertical";
import ListElement from "../../ui/ListElement";

const ForecastElement = ({ data, elementType }) => {
	return (
		<ListElement type={elementType}>
			{elementType === "horizontal" ? (
				<ForecastElementHorizontal data={data} />
			) : (
				<ForecastElementVertical data={data} />
			)}
		</ListElement>
	);
};

ForecastElement.propTypes = {
	data: PropTypes.object.isRequired,
	elementType: PropTypes.string,
};

export default ForecastElement;
