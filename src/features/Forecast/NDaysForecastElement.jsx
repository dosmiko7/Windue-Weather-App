import styled from "styled-components";
import PropTypes from "prop-types";
import { TbWind } from "react-icons/tb";

import ForecastCondition from "./ForecastCondition";
import ListElement from "../../ui/ListElement";
import { FlexRow } from "../../ui/Flex";

const Day = styled.div`
	font-size: 1.8rem;
	width: 30%;
	margin-left: 1.6rem;

	@media only screen and (width <= 1280px) {
		font-size: 2.6rem;
		margin-left: 0;
		text-align: center;
	}
`;

const Wind = styled(FlexRow)`
	font-size: 1.8rem;
	align-items: center;
	justify-content: flex-end;
	width: 30%;
	gap: 0.2rem;

	@media only screen and (width <= 1280px) {
		font-size: 2.6rem;
		justify-content: center;
		padding-bottom: 1.2rem;
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
