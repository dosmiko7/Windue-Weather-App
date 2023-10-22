import { styled } from "styled-components";

import useWeather from "../hooks/useWeather";

import OutletLayout from "../ui/OutletLayout";
import Map from "../features/Map/Map";
import Sidebar from "../ui/Sidebar";
import LatestSearches from "../features/LatestSearches/LatestSearches";

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
	const mediumResolution = window.innerWidth <= 1280;

	return (
		<PositionedOutletLayout>
			<Map
				forecastCurrent={forecast.current}
				updateForecast={updateForecast}
			/>
			<PositionedSidebar variant="nonColor">
				<LatestSearches
					searchHistory={searchHistory}
					count={mediumResolution ? 4 : 5}
				/>
			</PositionedSidebar>
		</PositionedOutletLayout>
	);
};

export default Geolocation;
