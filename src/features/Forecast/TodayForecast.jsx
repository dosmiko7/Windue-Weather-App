import { styled } from "styled-components";
import PropTypes from "prop-types";

import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

import Container, { ContainerName } from "../../ui/Container";
import ForecastList from "./ForecastList";

const StyledTodayForecast = styled(Container)`
	padding: 2.4rem 1.6rem;
`;

const TodayForecast = ({ hoursCount, variant }) => {
	const { forecast } = useContext(WeatherContext);
	const todayForecast = forecast.todayForecast;

	return (
		<StyledTodayForecast variant={variant}>
			<ContainerName>Today&apos;s Forecast</ContainerName>
			<ForecastList
				forecast={todayForecast.slice(0, hoursCount)}
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
