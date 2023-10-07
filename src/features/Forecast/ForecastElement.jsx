import { styled } from "styled-components";
import PropTypes from "prop-types";

import ForecastCondition from "./ForecastCondition";

const StyledForecastElement = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	flex-grow: 1;
`;

const Time = styled.span`
	text-transform: uppercase;
	font-weight: var(--font-weight-500);
`;

const Temperature = styled.span`
	font-weight: var(--font-weight-500);
	font-size: 2.8rem;
	color: var(--font-color-2);
`;

const ForecastElement = ({ data }) => {
	const { time, condition, temp } = data;

	return (
		<StyledForecastElement>
			<Time>{time}</Time>
			<ForecastCondition condition={condition} />
			<Temperature>{temp}&#8451;</Temperature>
		</StyledForecastElement>
	);
};

ForecastElement.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ForecastElement;
