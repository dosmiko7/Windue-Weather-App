import { styled } from "styled-components";

import BasicInfo from "../features/BasicInfo";
import TodayForecast from "../features/Forecast/TodayForecast";
import AirCondition from "../features/Air/AirConditions";
import NDaysForecast from "../features/Forecast/NDaysForecast";
import Sidebar from "../ui/Sidebar";

const StyledWeather = styled.div`
	display: grid;
	grid-template-columns: 6fr 3fr;
	height: 100%;
`;

const Box = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	row-gap: 1.2rem;
`;

const Weather = () => {
	return (
		<StyledWeather>
			<Box>
				<BasicInfo />
				<TodayForecast hoursCount={6} />
				<AirCondition />
			</Box>
			<Sidebar>
				<NDaysForecast daysCount={7} />
			</Sidebar>
		</StyledWeather>
	);
};

export default Weather;
