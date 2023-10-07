import { styled } from "styled-components";

import Container, { ContainerName } from "../../ui/Container";
import AirGrid from "./AirGrid";

const StyledAirCondition = styled(Container)`
	padding: 2.4rem 1.6rem;
`;

// TODO: Change to dynamically getting it from API
const AIR_CONDITION = { tmpFeel: "30", wind: "0.2", rain: "0", UV: "3" };

const AirCondition = () => {
	return (
		<StyledAirCondition>
			<ContainerName>Air Conditions</ContainerName>
			<AirGrid data={AIR_CONDITION}></AirGrid>
		</StyledAirCondition>
	);
};

export default AirCondition;
