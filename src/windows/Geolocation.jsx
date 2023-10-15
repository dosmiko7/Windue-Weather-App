import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

import OutletLayout from "../ui/OutletLayout";
import Map from "../features/Map/Map";
import Sidebar from "../ui/Sidebar";
import LatestSearchesList from "../features/LatestSearches/LatestSearchesList";

const Geolocation = () => {
	const { searchHistory } = useContext(WeatherContext);

	return (
		<OutletLayout>
			<Map />
			<Sidebar variant="nonColor">
				<LatestSearchesList searches={searchHistory} />
			</Sidebar>
		</OutletLayout>
	);
};

export default Geolocation;
