import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

import Container, { ContainerName } from "../../ui/Container";
import LatestSearchesList from "./LatestSearchesList";

const LatestSearches = () => {
	const { searchHistory } = useContext(WeatherContext);
	return (
		<Container variant="nonColor">
			<ContainerName>Latest Searches</ContainerName>
			<LatestSearchesList
				searches={searchHistory.slice(0, 3)}
				orientation="vertical"
			/>
		</Container>
	);
};

export default LatestSearches;
