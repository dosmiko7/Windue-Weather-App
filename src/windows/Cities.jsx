import { styled } from "styled-components";

import LatestSearches from "../features/LatestSearches/LatestSearches";
import ForecastBasicInfo from "../features/Forecast/ForecastBasicInfo";
import TodayForecast from "../features/Forecast/TodayForecast";
import NDaysForecast from "../features/Forecast/NDaysForecast";
import Suggestions from "../features/Suggestions/Suggestions";
import List from "../ui/List";
import Sidebar from "../ui/Sidebar";
import OutletLayout from "../ui/OutletLayout";

const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Cities = () => {
	return (
		<OutletLayout>
			<Box>
				<LatestSearches />
				<Suggestions />
			</Box>

			<Sidebar variant="nonColor">
				<List orientation="vertical">
					<ForecastBasicInfo />
					<TodayForecast
						hoursCount={3}
						variant="nonColor"
					/>
					<NDaysForecast
						daysCount={2}
						variant="nonColor"
					/>
				</List>
			</Sidebar>
		</OutletLayout>
	);
};

export default Cities;
