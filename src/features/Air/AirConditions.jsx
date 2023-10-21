import { styled } from "styled-components";
import PropTypes from "prop-types";

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
	right: 2rem;
	top: 2rem;
`;

const AirCondition = ({ forecast }) => {
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

AirCondition.propTypes = {
	forecast: PropTypes.object.isRequired,
};

export default AirCondition;
