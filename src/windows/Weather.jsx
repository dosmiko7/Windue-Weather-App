import { styled } from "styled-components";

import ForecastBasicInfo from "../features/Forecast/ForecastBasicInfo";
import TodayForecast from "../features/Forecast/TodayForecast";
import AirCondition from "../features/Air/AirConditions";
import NDaysForecast from "../features/Forecast/NDaysForecast";
import Sidebar from "../ui/Sidebar";
import OutletLayout from "../ui/OutletLayout";

const Box = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	row-gap: 1.2rem;
`;

const Weather = () => {
	return (
		<OutletLayout>
			<Box>
				<ForecastBasicInfo />
				<TodayForecast hoursCount={6} />
				<AirCondition />
			</Box>
			<Sidebar>
				<NDaysForecast daysCount={3} />
			</Sidebar>
		</OutletLayout>
	);
};

export default Weather;
