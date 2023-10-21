import { styled } from "styled-components";
import PropTypes from "prop-types";
import { TbWind } from "react-icons/tb";

import ForecastCondition from "./ForecastCondition";
import ListElement from "../../ui/ListElement";

const Box = styled.span`
	font-size: 1.6rem;
`;

const Day = styled(Box)`
	width: 30%;
	margin-left: 1.6rem;

	@media only screen and (width <= 1280px) {
		margin-left: 0;
		text-align: center;
	}
`;

const Wind = styled(Box)`
	font-size: 1.8rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 30%;

	@media only screen and (width <= 1280px) {
		justify-content: center;
	}
`;

const NDaysForecastElement = ({ data, children, orientation }) => {
	const { day, condition, wind } = data;
	return (
		<ListElement orientation={orientation}>
			<Day>{day}</Day>
			<ForecastCondition condition={condition} />
			<Wind>
				<TbWind />
				{wind}km/h
			</Wind>
			{children}
		</ListElement>
	);
};

NDaysForecastElement.propTypes = {
	data: PropTypes.object.isRequired,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	orientation: PropTypes.string,
};

export default NDaysForecastElement;
