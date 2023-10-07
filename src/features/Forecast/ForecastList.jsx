import { styled } from "styled-components";
import PropTypes from "prop-types";

import ForecastElement from "./ForecastElement";

const StyledForecastList = styled.ul`
	display: flex;
	height: 100%;
	padding: 1.6rem 0;
	font-size: 1.6rem;

	li:not(:last-child) {
		border-right: 2px solid var(--misc-color-1);
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
