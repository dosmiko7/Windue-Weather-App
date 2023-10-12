import PropTypes from "prop-types";
import { styled } from "styled-components";

import Container, { ContainerName } from "../../ui/Container";
import ForecastList from "./ForecastList";

const StyledNDaysForecast = styled(Container)`
	padding: 1.6rem;
`;

// TODO: Change into data from API
const FORECAST = [
	{ day: "Today", condition: { text: "Sunny" }, wind: "22" },
	{ day: "Tue", condition: { text: "Sunny" }, wind: "22" },
	{ day: "Wed", condition: { text: "Sunny" }, wind: "22" },
	{ day: "Thu", condition: { text: "Cloudy" }, wind: "22" },
	{ day: "Fri", condition: { text: "Cloudy" }, wind: "22" },
	{ day: "Sat", condition: { text: "Rainy" }, wind: "22" },
	{ day: "Sun", condition: { text: "Storm" }, wind: "22" },
];

const NDaysForecast = ({ daysCount, variant }) => {
	return (
		<StyledNDaysForecast variant={variant}>
			<ContainerName>{daysCount}-Day Forecast</ContainerName>
			<ForecastList
				forecast={FORECAST.slice(0, daysCount)}
				orientation="vertical"
			/>
		</StyledNDaysForecast>
	);
};

NDaysForecast.propTypes = {
	daysCount: PropTypes.number.isRequired,
	variant: PropTypes.string,
};

export default NDaysForecast;
