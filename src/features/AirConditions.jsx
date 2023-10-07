import { styled } from "styled-components";
import Container, { ContainerName } from "../ui/Container";

const StyledAirCondition = styled(Container)``;

const AirCondition = () => {
	return (
		<StyledAirCondition>
			<ContainerName>Air Conditions</ContainerName>
		</StyledAirCondition>
	);
};

export default AirCondition;
