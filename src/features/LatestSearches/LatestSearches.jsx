import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/WeatherContext";

import Container, { ContainerName } from "../../ui/Container";
import LatestSearchesList from "./LatestSearchesList";

// TODO: Change data from dump to API's
// const LATEST_SEARCHES = [
// 	{ cityName: "Madrid", condition: { text: "sunny" }, time: "10:23", temp: "31" },
// 	{ cityName: "Malaga", condition: { text: "sunny" }, time: "11:23", temp: "33" },
// 	{ cityName: "Malacky", condition: { text: "sunny" }, time: "11:23", temp: "22" },
// ];

const LatestSearches = () => {
	const [latestSearches, setLatestSearches] = useState([]);
	const { forecast } = useContext(WeatherContext);

	useEffect(() => {
		const searchData = {
			cityName: forecast.current.cityName,
			condition: forecast.current.condition,
			temp: forecast.current.temp,
			time: new Date().toLocaleTimeString("pl-PL", {
				hour: "2-digit",
				minute: "2-digit",
			}),
		};
		setLatestSearches((prev) => {
			return [...prev, searchData];
		});
	}, [forecast]);

	return (
		<Container variant="nonColor">
			<ContainerName>Latest Searches</ContainerName>
			<LatestSearchesList
				searches={latestSearches.slice(0, 3)}
				orientation="vertical"
			/>
		</Container>
	);
};

export default LatestSearches;
