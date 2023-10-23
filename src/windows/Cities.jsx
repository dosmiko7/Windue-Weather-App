import { styled } from "styled-components";

import LatestSearches from "../features/LatestSearches/LatestSearches";
import ForecastBasicInfo from "../features/Forecast/ForecastBasicInfo";
import CurrentForecast from "../features/Forecast/CurrentForecast";
import NDaysForecast from "../features/Forecast/NDaysForecast";
import Suggestions from "../features/Suggestions/Suggestions";
import List from "../ui/List";
import Sidebar from "../ui/Sidebar";
import OutletLayout from "../ui/OutletLayout";
import useWeather from "../hooks/useWeather";
import { FlexColumn } from "../ui/Flex";

const Box = styled(FlexColumn)`
	justify-content: space-between;
	row-gap: 2.6rem;
`;

const Cities = () => {
	const { forecast, searchHistory, updateForecast } = useWeather();
	return (
		<OutletLayout>
			<Box>
				<LatestSearches searchHistory={searchHistory} />
				<Suggestions
					lat={forecast.current.location.lat}
					lng={forecast.current.location.lng}
					updateForecast={updateForecast}
				/>
			</Box>

			<Sidebar variant="nonColor">
				<List orientation="vertical">
					<ForecastBasicInfo forecastCurrent={forecast.current} />
					<CurrentForecast
						hoursDataList={forecast.currentForecast}
						hoursCount={3}
						variant="nonColor"
					/>
					<NDaysForecast
						nDayForecast={forecast.nDayForecast}
						daysCount={2}
						variant="nonColor"
					/>
				</List>
			</Sidebar>
		</OutletLayout>
	);
};

export default Cities;
