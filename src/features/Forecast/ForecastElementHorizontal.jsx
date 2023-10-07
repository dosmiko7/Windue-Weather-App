import { styled } from "styled-components";
import PropTypes from "prop-types";

import ForecastCondition from "./ForecastCondition";

const Day = styled.span`
	width: 30%;
`;

const Sth = styled.span`
	width: 30%;
	text-align: end;
`;

const ForecastElementHorizontal = ({ data }) => {
	const { day, condition, sth } = data;
	return (
		<>
			<Day>{day}</Day>
			<ForecastCondition condition={condition} />
			<Sth>{sth}</Sth>
		</>
	);
};

ForecastElementHorizontal.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ForecastElementHorizontal;
