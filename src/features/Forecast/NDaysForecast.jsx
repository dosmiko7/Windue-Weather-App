import PropTypes from "prop-types";
import { styled } from "styled-components";

import Container, { ContainerName } from "../../ui/Container";
import ForecastList from "./ForecastList";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

const StyledNDaysForecast = styled(Container)`
	padding: 1.6rem;
`;

const NDaysForecast = ({ daysCount, variant }) => {
	const { forecast } = useContext(WeatherContext);
	const nDayForecast = forecast.nDayForecast;

	return (
		<StyledNDaysForecast variant={variant}>
			<ContainerName>{daysCount}-Day Forecast</ContainerName>
			<ForecastList
				forecast={nDayForecast.slice(0, daysCount)}
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
