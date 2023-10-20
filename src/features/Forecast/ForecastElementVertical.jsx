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

const ForecastElementVertical = ({ data, children }) => {
	const { time, condition, temp } = data;

	return (
		<>
			<Time>{time}</Time>
			<ForecastCondition condition={condition} />
			<Temperature>{temp}&#8451;</Temperature>
			{children}
		</>
	);
};

ForecastElementVertical.propTypes = {
	data: PropTypes.object.isRequired,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ForecastElementVertical;
