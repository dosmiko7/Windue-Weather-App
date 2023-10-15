import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

import OutletLayout from "../ui/OutletLayout";
import Map from "../features/Map/Map";
import Sidebar from "../ui/Sidebar";
import LatestSearches from "../features/LatestSearches/LatestSearches";

const Geolocation = () => {
	return (
		<OutletLayout>
			<Map />
			<Sidebar variant="nonColor">
				<LatestSearches count={5} />
			</Sidebar>
		</OutletLayout>
	);
};

export default Geolocation;
