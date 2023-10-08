import { styled } from "styled-components";
import PropTypes from "prop-types";

import Container, { ContainerName } from "../../ui/Container";
import ForecastList from "./ForecastList";

const StyledNDaysForecast = styled(Container)``;

// TODO: Change into data from API
const FORECAST = [
	{ day: "Today", condition: "Sunny", sth: "36/22" },
	{ day: "Tue", condition: "Sunny", sth: "37/21" },
	{ day: "Wed", condition: "Sunny", sth: "37/21" },
	{ day: "Thu", condition: "Cloudy", sth: "37/21" },
	{ day: "Fri", condition: "Cloudy", sth: "37/21" },
	{ day: "Sat", condition: "Rainy", sth: "37/21" },
	{ day: "Sun", condition: "Storm", sth: "37/21" },
];

const NDaysForecast = ({ daysCount }) => {
	return (
		<StyledNDaysForecast>
			<ContainerName>{daysCount}-Day Forecast</ContainerName>
			<ForecastList
				forecast={FORECAST.slice({ daysCount })}
				type="vertical"
			/>
		</StyledNDaysForecast>
	);
};

NDaysForecast.propTypes = {
	daysCount: PropTypes.number.isRequired,
};

export default NDaysForecast;
