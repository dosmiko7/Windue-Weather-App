import PropTypes from "prop-types";
import { styled } from "styled-components";
import { CiCircleMore } from "react-icons/ci";

import { useMediumRes } from "../../hooks/useMediumRes";
import Container, { ContainerName } from "../../ui/Container";
import ForecastList from "./ForecastList";
import NDaysForecastElement from "../Forecast/NDaysForecastElement";
import ForecastDayDetails from "./ForecastDayDetails";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

const StyledButton = styled(Button)`
	width: auto;
	font-size: 2.4rem;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	color: var(--font-color-2);

	@media only screen and (width <= 1280px) {
		left: 20%;
		top: 50%;
		transform: translateY(-50%) translateX(-50%);
		font-size: 3.8rem;
	}
`;

const StyledNDaysForecast = styled(Container)`
	padding: 1.6rem;
`;

const StyledModal = styled(Modal)`
	position: relative;
`;

const NDaysForecast = ({ nDayForecast, daysCount, variant }) => {
	const { isMediumRes } = useMediumRes();

	const generateForecastComponents = () => {
		return nDayForecast.slice(0, daysCount).map((item) => (
			<StyledModal key={Math.random()}>
				<NDaysForecastElement
					data={item}
					orientation={isMediumRes ? "vertical" : "horizontal"}
				>
					<Modal.Open opens={item.day}>
						<StyledButton>
							<CiCircleMore />
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
				orientation={isMediumRes ? "horizontal" : "vertical"}
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
