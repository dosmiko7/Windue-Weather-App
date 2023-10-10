import { styled } from "styled-components";

import LatestSearches from "../features/LatestSearches/LatestSearches";
import BasicInfo from "../features/BasicInfo";
import TodayForecast from "../features/Forecast/TodayForecast";
import NDaysForecast from "../features/Forecast/NDaysForecast";
import Suggestions from "../features/Suggestions/Suggestions";
import List from "../ui/List";
import Sidebar from "../ui/Sidebar";
import OutletLayout from "../ui/OutletLayout";

const Box = styled.div`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	row-gap: 1.2rem;
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
		</OutletLayout>
	);
};

export default Cities;
