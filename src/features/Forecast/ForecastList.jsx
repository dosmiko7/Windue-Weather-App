import { styled } from "styled-components";
import PropTypes from "prop-types";

import ForecastElement from "./ForecastElement";
import List from "../../ui/List";

const StyledForecastList = styled(List)`
	height: 100%;
	padding: 1.6rem 0;
	font-size: 1.6rem;
`;

// TODO: change key
const ForecastList = ({ forecast, type }) => {
	const elementType = type === "vertical" ? "horizontal" : "vertical";

	return (
		<StyledForecastList type={type}>
			{forecast.map((item) => (
				<ForecastElement
					key={Math.random()}
					data={item}
					elementType={elementType}
				/>
			))}
		</StyledForecastList>
	);
};

ForecastList.propTypes = {
	forecast: PropTypes.array.isRequired,
	type: PropTypes.string,
};

export default ForecastList;
