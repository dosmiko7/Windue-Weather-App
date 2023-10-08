import { styled } from "styled-components";

import BasicInfo from "../features/BasicInfo";
import TodayForecast from "../features/Forecast/TodayForecast";
import AirCondition from "../features/Air/AirConditions";
import NDaysForecast from "../features/Forecast/NDaysForecast";

const StyledWeather = styled.div`
	display: grid;
	grid-template-columns: 6fr 3fr;
	gap: 1.2rem;
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
			<NDaysForecast daysCount={7} />
		</StyledWeather>
	);
};

export default Weather;
