import { styled } from "styled-components";

import LatestSearches from "../features/LatestSearches/LatestSearches";
import BasicInfo from "../features/BasicInfo";
import TodayForecast from "../features/Forecast/TodayForecast";
import NDaysForecast from "../features/Forecast/NDaysForecast";
import List from "../ui/List";

const StyledCities = styled.div`
	display: grid;
	grid-template-columns: 6fr 3fr;
	gap: 1.2rem;
`;

const Sidebar = styled(List)`
	gap: 1.2rem;
`;

const Cities = () => {
	return (
		<StyledCities>
			<LatestSearches />
			<Sidebar type="vertical">
				<BasicInfo />
				<TodayForecast hoursCount={3} />
				<NDaysForecast daysCount={3} />
			</Sidebar>
		</StyledCities>
	);
};

export default Cities;
