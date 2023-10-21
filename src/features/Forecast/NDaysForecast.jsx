import PropTypes from "prop-types";
import { styled } from "styled-components";
import { TbArrowBarLeft } from "react-icons/tb";

import Container, { ContainerName } from "../../ui/Container";
import ForecastList from "./ForecastList";
import NDaysForecastElement from "../Forecast/NDaysForecastElement";
import ForecastDayDetails from "./ForecastDayDetails";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

const StyledButton = styled(Button)`
	width: 2.2rem;
	font-size: 2.4rem;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	color: var(--font-color-2);

	@media only screen and (width <= 1280px) {
		left: 50%;
		top: 0;
		transform: translateY(0) translateX(-50%);
	}
`;

const StyledNDaysForecast = styled(Container)`
	padding: 1.6rem;
`;

const StyledModal = styled(Modal)`
	position: relative;
`;

const NDaysForecast = ({ nDayForecast, daysCount, variant }) => {
	const mediumResolution = window.innerWidth <= 1280;

	const generateForecastComponents = () => {
		return nDayForecast.slice(0, daysCount).map((item) => (
			<StyledModal key={Math.random()}>
				<NDaysForecastElement
					data={item}
					orientation={mediumResolution ? "vertical" : "horizontal"}
				>
					<Modal.Open opens={item.day}>
						<StyledButton>
							<TbArrowBarLeft />
						</StyledButton>
					</Modal.Open>
				</NDaysForecastElement>
				<Modal.Window name={item.day}>
					<ForecastDayDetails day={item} />
				</Modal.Window>
			</StyledModal>
		));
	};

	return (
		<StyledNDaysForecast variant={variant}>
			<ContainerName>{daysCount}-Day Forecast</ContainerName>
			<ForecastList
				internalEls={generateForecastComponents()}
				orientation={mediumResolution ? "horizontal" : "vertical"}
			/>
		</StyledNDaysForecast>
	);
};

NDaysForecast.propTypes = {
	nDayForecast: PropTypes.array.isRequired,
	daysCount: PropTypes.number.isRequired,
	variant: PropTypes.string,
};

export default NDaysForecast;
