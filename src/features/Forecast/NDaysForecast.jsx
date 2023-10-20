import PropTypes from "prop-types";
import { styled } from "styled-components";
import { TbArrowBarLeft } from "react-icons/tb";

import useWeather from "../../hooks/useWeather";

import Container, { ContainerName } from "../../ui/Container";
import ForecastList from "./ForecastList";
import ForecastElement from "./ForecastElement";
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
`;

const StyledNDaysForecast = styled(Container)`
	padding: 1.6rem;
`;

const StyledModal = styled(Modal)`
	position: relative;
`;

const NDaysForecast = ({ daysCount, variant }) => {
	const { forecast } = useWeather();
	const nDayForecast = forecast.nDayForecast;

	const generateForecastComponents = () => {
		return nDayForecast.slice(0, daysCount).map((item) => (
			<StyledModal key={Math.random()}>
				<ForecastElement
					data={item}
					elementType="horizontal"
				>
					<Modal.Open opens={item.day}>
						<StyledButton>
							<TbArrowBarLeft />
						</StyledButton>
					</Modal.Open>
				</ForecastElement>
				<Modal.Window name={item.day}>
					<ForecastDayDetails details={item.day} />
				</Modal.Window>
			</StyledModal>
		));
	};

	const internalElements = generateForecastComponents();

	return (
		<StyledNDaysForecast variant={variant}>
			<ContainerName>{daysCount}-Day Forecast</ContainerName>
			<ForecastList
				internalEls={internalElements}
				orientation="vertical"
			/>
		</StyledNDaysForecast>
	);
};

NDaysForecast.propTypes = {
	daysCount: PropTypes.number.isRequired,
	variant: PropTypes.string,
};

export default NDaysForecast;
