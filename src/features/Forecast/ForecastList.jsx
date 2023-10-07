import { styled } from "styled-components";
import PropTypes from "prop-types";

import ForecastElement from "./ForecastElement";

const StyledForecastList = styled.ul`
	display: flex;

	li:not(:last-child) {
		border-right: 1px solid #000;
	}
`;

// TODO: change key
const ForecastList = ({ forecast }) => {
	return (
		<StyledForecastList>
			{forecast.map((item) => (
				<ForecastElement
					key={Math.random()}
					data={item}
				/>
			))}
		</StyledForecastList>
	);
};

ForecastList.propTypes = {
	forecast: PropTypes.array.isRequired,
};

export default ForecastList;
