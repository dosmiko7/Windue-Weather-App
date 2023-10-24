import { styled } from "styled-components";

import useWeather from "../hooks/useWeather";

import OutletLayout from "../ui/OutletLayout";
import Map from "../features/Map/Map";
import Sidebar from "../ui/Sidebar";
import LatestSearches from "../features/LatestSearches/LatestSearches";
import { useMediumRes } from "../hooks/useMediumRes";

const PositionedOutletLayout = styled(OutletLayout)`
	@media only screen and (width <= 1280px) {
		grid-template-rows: 0.7fr 3fr;
	}
`;

const PositionedSidebar = styled(Sidebar)`
	@media only screen and (width <= 1280px) {
		grid-row: 1/2;
	}
`;

const Geolocation = () => {
	const { forecast, searchHistory, updateForecast } = useWeather();
	const { isMediumRes } = useMediumRes();

	return (
		<PositionedOutletLayout>
			<Map
				forecastCurrent={forecast.current}
				updateForecast={updateForecast}
			/>
			<PositionedSidebar variant="nonColor">
				<LatestSearches
					searchHistory={searchHistory}
					count={isMediumRes ? 4 : 5}
				/>
			</PositionedSidebar>
		</PositionedOutletLayout>
	);
};

export default Geolocation;
