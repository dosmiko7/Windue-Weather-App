import { styled } from "styled-components";

import Container, { ContainerName } from "../../ui/Container";
import AirGrid from "./AirGrid";
import Button from "../../ui/Button";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

const StyledAirCondition = styled(Container)`
	position: relative;
	padding: 2.4rem 1.6rem;
`;

const SeeMore = styled(Button)`
	position: absolute;
	right: 20px;
	top: 20px;
`;

// TODO: Change to dynamically getting it from API
// const AIR_CONDITION = { tmpFeel: "30", humidity: "80", pressure: "1025", uv: "3" };

const AirCondition = () => {
	const { forecast } = useContext(WeatherContext);
	const airCondition = forecast.airCondition;

	return (
		<StyledAirCondition>
			<ContainerName>Air Conditions</ContainerName>
			<AirGrid data={airCondition}></AirGrid>
			<SeeMore type="common">See more</SeeMore>
		</StyledAirCondition>
	);
};

export default AirCondition;
