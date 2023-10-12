import Container, { ContainerName } from "../../ui/Container";
import LatestSearchesList from "./LatestSearchesList";

// TODO: Change data from dump to API's
const LATEST_SEARCHES = [
	{ city: "Madrid", condition: { text: "sunny" }, time: "10:23", temp: "31" },
	{ city: "Malaga", condition: { text: "sunny" }, time: "11:23", temp: "33" },
	{ city: "Malacky", condition: { text: "sunny" }, time: "11:23", temp: "22" },
];

const LatestSearches = () => {
	return (
		<Container variant="nonColor">
			<ContainerName>Latest Searches</ContainerName>
			<LatestSearchesList
				searches={LATEST_SEARCHES}
				orientation="vertical"
			/>
		</Container>
	);
};

export default LatestSearches;
