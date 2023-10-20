import PropTypes from "prop-types";

import { styled } from "styled-components";
import Container from "../../ui/Container";

const StyledDetails = styled(Container)`
	width: 70rem;
	height: 50rem;
`;

const ForecastDayDetails = ({ details }) => {
	console.log("ForecastDayDetails: " + details);
	return <StyledDetails>DETAILS</StyledDetails>;
};

ForecastDayDetails.propTypes = {
	details: PropTypes.string,
};

export default ForecastDayDetails;
