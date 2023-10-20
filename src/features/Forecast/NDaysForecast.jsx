import PropTypes from "prop-types";
import { styled } from "styled-components";

import useWeather from "../../hooks/useWeather";

import Container, { ContainerName } from "../../ui/Container";
import ForecastList from "./ForecastList";
import ForecastElement from "./ForecastElement";
import ForecastDayDetails from "./ForecastDayDetails";
import Modal from "../../ui/Modal";

const StyledNDaysForecast = styled(Container)`
	padding: 1.6rem;
`;

const NDaysForecast = ({ daysCount, variant }) => {
	const { forecast } = useWeather();
	const nDayForecast = forecast.nDayForecast;

	const generateForecastComponents = () => {
		return nDayForecast.slice(0, daysCount).map((item) => (
			<Modal key={Math.random()}>
				<Modal.Open opens={item.day}>
					<button>SEE</button>
				</Modal.Open>
				<ForecastElement
					data={item}
					elementType="horizontal"
				/>
				<Modal.Window name={item.day}>
					<ForecastDayDetails details={item.day} />
				</Modal.Window>
			</Modal>
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
