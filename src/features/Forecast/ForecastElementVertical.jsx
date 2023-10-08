import { styled } from "styled-components";
import PropTypes from "prop-types";

import ForecastCondition from "./ForecastCondition";

const Time = styled.span`
	text-transform: uppercase;
	font-weight: var(--font-weight-500);
`;

const Temperature = styled.span`
	font-weight: var(--font-weight-500);
	font-size: 2.8rem;
	color: var(--font-color-2);
`;

const ForecastElementVertical = ({ data }) => {
	const { time, condition, temp } = data;

	return (
		<>
			<Time>{time}</Time>
			<ForecastCondition condition={condition} />
			<Temperature>{temp}&#8451;</Temperature>
		</>
	);
};

ForecastElementVertical.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ForecastElementVertical;
