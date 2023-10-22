import { styled } from "styled-components";
import PropTypes from "prop-types";

import ForecastCondition from "./ForecastCondition";
import ListElement from "../../ui/ListElement";

const Time = styled.span`
	text-transform: uppercase;
	font-weight: var(--font-weight-500);

	@media only screen and (width <= 1280px) {
		font-size: 2.2rem;
	}
`;

const Temperature = styled.span`
	font-weight: var(--font-weight-500);
	font-size: 2.8rem;
	color: var(--font-color-2);
`;

const CurrentForecastElement = ({ data, children, orientation }) => {
	const { time, condition, temp } = data;

	return (
		<ListElement orientation={orientation}>
			<Time>{time}</Time>
			<ForecastCondition condition={condition} />
			<Temperature>{temp}&#8451;</Temperature>
			{children}
		</ListElement>
	);
};

CurrentForecastElement.propTypes = {
	data: PropTypes.object.isRequired,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	orientation: PropTypes.string,
};

export default CurrentForecastElement;
