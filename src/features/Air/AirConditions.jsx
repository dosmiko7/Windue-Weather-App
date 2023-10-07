import { styled } from "styled-components";

import Container, { ContainerName } from "../../ui/Container";
import AirGrid from "./AirGrid";
import Button from "../../ui/Button";

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
const AIR_CONDITION = { tmpFeel: "30", wind: "0.2", rain: "0", UV: "3" };

const AirCondition = () => {
	return (
		<StyledAirCondition>
			<ContainerName>Air Conditions</ContainerName>
			<AirGrid data={AIR_CONDITION}></AirGrid>
			<SeeMore type="common">See more</SeeMore>
		</StyledAirCondition>
	);
};

export default AirCondition;
