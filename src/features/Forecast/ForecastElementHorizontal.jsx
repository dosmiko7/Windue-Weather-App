import { styled } from "styled-components";
import PropTypes from "prop-types";
import { TbWind } from "react-icons/tb";

import ForecastCondition from "./ForecastCondition";

const Day = styled.span`
	width: 30%;
	margin-left: 1.6rem;
`;

const Wind = styled.span`
	font-size: 1.8rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 30%;
`;

const ForecastElementHorizontal = ({ data, children }) => {
	const { day, condition, wind } = data;
	return (
		<>
			<Day>{day}</Day>
			<ForecastCondition condition={condition} />
			<Wind>
				<TbWind />
				{wind}km/h
			</Wind>
			{children}
		</>
	);
};

ForecastElementHorizontal.propTypes = {
	data: PropTypes.object.isRequired,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ForecastElementHorizontal;
