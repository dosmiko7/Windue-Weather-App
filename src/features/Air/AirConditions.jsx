import { styled } from "styled-components";
import Container, { ContainerName } from "../../ui/Container";

const StyledAirCondition = styled(Container)`
	padding: 2.4rem 1.6rem;
`;

const AirCondition = () => {
	return (
		<StyledAirCondition>
			<ContainerName>Air Conditions</ContainerName>
		</StyledAirCondition>
	);
};

export default AirCondition;
