import { styled } from "styled-components";
import Container, { ContainerName } from "../../ui/Container";
import ForecastList from "./ForecastList";

const StyledSevenDayForecast = styled(Container)`
	margin-top: 6rem;
`;

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

const SevenDayForecast = () => {
	return (
		<StyledSevenDayForecast>
			<ContainerName>7-Day Forecast</ContainerName>
			<ForecastList
				forecast={FORECAST}
				type="vertical"
			/>
		</StyledSevenDayForecast>
	);
};

export default SevenDayForecast;
