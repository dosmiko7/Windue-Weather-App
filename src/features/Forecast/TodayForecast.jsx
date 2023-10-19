import { styled } from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";

import useWeather from "../../hooks/useWeather";

import Container, { ContainerName } from "../../ui/Container";
import ForecastList from "./ForecastList";
import Button from "../../ui/Button";
import { getCurrentLeftIndex } from "../../utils/getCurrentLeftIndex";

const StyledTodayForecast = styled(Container)`
	position: relative;
	padding: 2.4rem 1.6rem;
	z-index: 0;
`;

const MoveButton = styled(Button)`
	position: absolute;
	top: 50%;
	z-index: 1;
	width: auto;
`;

const MoveLeft = styled(MoveButton)`
	left: 0;
	margin-left: 0.3rem;
`;

const MoveRight = styled(MoveButton)`
	right: 0;
	margin-right: 0.3rem;
`;

const TodayForecast = ({ hoursCount, variant }) => {
	const { forecast } = useWeather();
	const left = getCurrentLeftIndex(forecast.todayForecast, new Date(), hoursCount);
	const [leftIndex, setLeftIndex] = useState(left);

	const currentDay = leftIndex >= 24 ? "Tomorrow" : "Today";

	const onLeft = () => {
		if (leftIndex - 1 < 0) return;
		setLeftIndex(leftIndex - 1);
	};

	const onRight = () => {
		if (leftIndex + 1 > 47) return;
		setLeftIndex(leftIndex + 1);
	};

	return (
		<StyledTodayForecast variant={variant}>
			{leftIndex > 0 && (
				<MoveLeft onClick={onLeft}>
					<TbArrowLeft />
				</MoveLeft>
			)}
			<ContainerName>{currentDay}&apos;s Forecast</ContainerName>
			<ForecastList
				forecast={forecast.todayForecast.slice(leftIndex, leftIndex + hoursCount)}
				orientation="horizontal"
			/>
			{leftIndex < 47 && (
				<MoveRight onClick={onRight}>
					<TbArrowRight />
				</MoveRight>
			)}
		</StyledTodayForecast>
	);
};

TodayForecast.propTypes = {
	hoursCount: PropTypes.number.isRequired,
	variant: PropTypes.string,
};
/* 

			*/
export default TodayForecast;
