import { styled } from "styled-components";
import PropTypes from "prop-types";

import ForecastCondition from "./ForecastCondition";

const Day = styled.span`
	width: 30%;
`;

const Wind = styled.span`
	width: 30%;
	text-align: end;
`;

const ForecastElementHorizontal = ({ data }) => {
	const { day, condition, wind } = data;
	return (
		<>
			<Day>{day}</Day>
			<ForecastCondition condition={condition} />
			<Wind>{wind}</Wind>
		</>
	);
};

ForecastElementHorizontal.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ForecastElementHorizontal;
