import OutletLayout from "../ui/OutletLayout";
import Map from "../features/Map/Map";
import Sidebar from "../ui/Sidebar";
import LatestSearchesList from "../features/LatestSearches/LatestSearchesList";

// TODO: Change data from dump to API's
const LATEST_SEARCHES = [
	{ city: "Madrid", condition: "sunny", time: "10:23", temp: "31" },
	{ city: "Malaga", condition: "cloudy", time: "11:23", temp: "33" },
	{ city: "Malacky", condition: "windy", time: "11:23", temp: "22" },
];

const Geolocation = () => {
	return (
		<OutletLayout>
			<Map />
			<Sidebar variant="nonColor">
				<LatestSearchesList searches={LATEST_SEARCHES} />
			</Sidebar>
		</OutletLayout>
	);
};

export default Geolocation;
