import { styled } from "styled-components";
import PropTypes from "prop-types";

import ForecastElement from "./ForecastElement";
import List from "../../ui/List";

const StyledForecastList = styled(List)`
	height: 100%;
	padding-bottom: 1.6rem;
	font-size: 1.6rem;
`;

// TODO: change key
const ForecastList = ({ forecast, orientation }) => {
	const elementOrientation = orientation === "vertical" ? "horizontal" : "vertical";

	return (
		<StyledForecastList orientation={orientation}>
			{forecast.map((item) => (
				<ForecastElement
					key={Math.random()}
					data={item}
					elementType={elementOrientation}
				/>
			))}
		</StyledForecastList>
	);
};

ForecastList.propTypes = {
	forecast: PropTypes.array.isRequired,
	orientation: PropTypes.string,
};

export default ForecastList;
