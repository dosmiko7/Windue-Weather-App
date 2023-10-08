import { styled } from "styled-components";
import PropTypes from "prop-types";

import Container, { ContainerName } from "../../ui/Container";
import ForecastList from "./ForecastList";

const StyledTodayForecast = styled(Container)`
	padding: 2.4rem 1.6rem;
`;

//TODO: Generate list's elements from API
const FORECAST = [
	{ time: "6:00 AM", condition: "overclouded", temp: "25" },
	{ time: "9:00 AM", condition: "cloudy", temp: "28" },
	{ time: "12:00 PM", condition: "sunny", temp: "33" },
	{ time: "3:00 PM", condition: "sunny", temp: "34" },
	{ time: "6:00 PM", condition: "sunny", temp: "32" },
	{ time: "9:00 PM", condition: "cloudy", temp: "30" },
];

const TodayForecast = ({ hoursCount, variant }) => {
	return (
		<StyledTodayForecast variant={variant}>
			<ContainerName>Today&apos;s Forecast</ContainerName>
			<ForecastList
				forecast={FORECAST.slice(0, hoursCount)}
				type="horizontal"
			/>
		</StyledTodayForecast>
	);
};

TodayForecast.propTypes = {
	hoursCount: PropTypes.number.isRequired,
	variant: PropTypes.string,
};

export default TodayForecast;
