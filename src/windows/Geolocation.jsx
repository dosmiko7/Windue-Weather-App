import useWeather from "../hooks/useWeather";

import OutletLayout from "../ui/OutletLayout";
import Map from "../features/Map/Map";
import Sidebar from "../ui/Sidebar";
import LatestSearches from "../features/LatestSearches/LatestSearches";

const Geolocation = () => {
	const { forecast, searchHistory, updateForecast } = useWeather();

	return (
		<OutletLayout>
			<Map
				forecastCurrent={forecast.current}
				updateForecast={updateForecast}
			/>
			<Sidebar variant="nonColor">
				<LatestSearches
					searchHistory={searchHistory}
					count={5}
				/>
			</Sidebar>
		</OutletLayout>
	);
};

export default Geolocation;
