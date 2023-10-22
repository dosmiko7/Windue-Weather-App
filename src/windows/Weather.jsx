import { styled } from "styled-components";

import ForecastBasicInfo from "../features/Forecast/ForecastBasicInfo";
import CurrentForecast from "../features/Forecast/CurrentForecast";
import AirCondition from "../features/Air/AirConditions";
import NDaysForecast from "../features/Forecast/NDaysForecast";
import Sidebar from "../ui/Sidebar";
import OutletLayout from "../ui/OutletLayout";
import useWeather from "../hooks/useWeather";

const Box = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	row-gap: 1.2rem;
`;

const Weather = () => {
	const { forecast } = useWeather();
	const smallResolution = window.innerWidth <= 950;

	return (
		<OutletLayout>
			<Box>
				<ForecastBasicInfo forecastCurrent={forecast.current} />
				<CurrentForecast
					hoursDataList={forecast.currentForecast}
					hoursCount={smallResolution ? 5 : 6}
				/>
				<AirCondition forecast={forecast} />
			</Box>
			<Sidebar>
				<NDaysForecast
					nDayForecast={forecast.nDayForecast}
					daysCount={3}
				/>
			</Sidebar>
		</OutletLayout>
	);
};

export default Weather;
