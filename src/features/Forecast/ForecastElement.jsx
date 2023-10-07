import { styled } from "styled-components";
import PropTypes from "prop-types";

import ForecastCondition from "./ForecastCondition";

const StyledForecastElement = styled.li`
	display: flex;
	flex-direction: row;
`;

const Time = styled.span``;

const Temperature = styled.span``;

const ForecastElement = ({ data }) => {
	const { time, condition, temp } = data;

	return (
		<StyledForecastElement>
			<Time>{time}</Time>
			<ForecastCondition condition={condition} />
			<Temperature>{temp}</Temperature>
		</StyledForecastElement>
	);
};

ForecastElement.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ForecastElement;
