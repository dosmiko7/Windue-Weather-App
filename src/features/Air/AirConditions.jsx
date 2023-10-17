import { styled } from "styled-components";

import useWeather from "../../hooks/useWeather";

import Container, { ContainerName } from "../../ui/Container";
import AirGrid from "./AirGrid";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import AirDetails from "./AirDetails";

const StyledAirCondition = styled(Container)`
	position: relative;
	padding: 2.4rem 1.6rem;
`;

const SeeMore = styled(Button)`
	position: absolute;
	right: 20px;
	top: 20px;
`;

const AirCondition = () => {
	const { forecast } = useWeather();
	const airCondition = forecast.airCondition;
	const details = forecast.current.details;

	return (
		<StyledAirCondition>
			<ContainerName>Air Conditions</ContainerName>
			<AirGrid data={airCondition}></AirGrid>
			<Modal>
				<Modal.Open opens="airDetails">
					<SeeMore type="common">See more</SeeMore>
				</Modal.Open>
				<Modal.Window name="airDetails">
					<AirDetails details={details} />
				</Modal.Window>
			</Modal>
		</StyledAirCondition>
	);
};

export default AirCondition;
