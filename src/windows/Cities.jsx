import { styled } from "styled-components";

import LatestSearches from "../features/LatestSearches/LatestSearches";
import BasicInfo from "../features/BasicInfo";
import TodayForecast from "../features/Forecast/TodayForecast";
import NDaysForecast from "../features/Forecast/NDaysForecast";
import List from "../ui/List";
import Sidebar from "../ui/Sidebar";

const StyledCities = styled.div`
	display: grid;
	grid-template-columns: 6fr 3fr;
	height: 100%;
`;

const Cities = () => {
	return (
		<StyledCities>
			<LatestSearches />
			<Sidebar variant="nonColor">
				<List type="vertical">
					<BasicInfo />
					<TodayForecast
						hoursCount={3}
						variant="nonColor"
					/>
					<NDaysForecast
						daysCount={3}
						variant="nonColor"
					/>
				</List>
			</Sidebar>
		</StyledCities>
	);
};

export default Cities;
