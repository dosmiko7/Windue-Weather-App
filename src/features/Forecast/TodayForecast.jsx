import { styled } from "styled-components";
import Container from "../../ui/Container";
import ForecastList from "./ForecastList";

const StyledTodayForecast = styled(Container)``;

//TODO: Generate list's elements from API
const FORECAST = [
	{ time: "6:00 AM", condition: "overclouded", temp: "25" },
	{ time: "9:00 AM", condition: "cloudy", temp: "28" },
	{ time: "12:00 PM", condition: "sunny", temp: "33" },
	{ time: "3:00 PM", condition: "sunny", temp: "34" },
	{ time: "6:00 PM", condition: "sunny", temp: "32" },
	{ time: "9:00 PM", condition: "cloudy", temp: "30" },
];

const TodayForecast = () => {
	return (
		<StyledTodayForecast>
			<ForecastList forecast={FORECAST} />
		</StyledTodayForecast>
	);
};

export default TodayForecast;
