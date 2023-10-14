import { styled } from "styled-components";
import PropTypes from "prop-types";

import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

import Container, { ContainerName } from "../../ui/Container";
import ForecastList from "./ForecastList";
import { getClosestPeriods } from "../../utils/getClosestPeriods";

const StyledTodayForecast = styled(Container)`
	padding: 2.4rem 1.6rem;
`;

const TodayForecast = ({ hoursCount, variant }) => {
	const { forecast } = useContext(WeatherContext);
	const periods = getClosestPeriods(forecast.todayForecast, new Date(), hoursCount);

	return (
		<StyledTodayForecast variant={variant}>
			<ContainerName>Today&apos;s Forecast</ContainerName>
			<ForecastList
				forecast={periods}
				orientation="horizontal"
			/>
		</StyledTodayForecast>
	);
};

TodayForecast.propTypes = {
	hoursCount: PropTypes.number.isRequired,
	variant: PropTypes.string,
};

export default TodayForecast;
