import PropTypes from "prop-types";

import Container from "../../ui/Container";

const ForecastDayDetails = ({ details }) => {
	console.log("ForecastDayDetails: " + details);
	return <Container>DETAILS</Container>;
};

ForecastDayDetails.propTypes = {
	details: PropTypes.string,
};

export default ForecastDayDetails;
