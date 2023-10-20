import { styled } from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";

import Container, { ContainerName } from "../../ui/Container";
import ForecastList from "./ForecastList";
import Button from "../../ui/Button";
import ForecastElement from "./ForecastElement";
import { getCurrentLeftIndex } from "../../utils/getCurrentLeftIndex";

const StyledCurrentForecast = styled(Container)`
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

const CurrentForecast = ({ hoursDataList, hoursCount, variant }) => {
	const left = getCurrentLeftIndex(hoursDataList, new Date(), hoursCount);
	const countHours = hoursDataList.length;
	const [leftIndex, setLeftIndex] = useState(left);

	const currentDay = leftIndex >= 24 ? "Tomorrow" : "Today";

	const onLeft = () => {
		if (leftIndex - 1 < 0) return;
		setLeftIndex(leftIndex - 1);
	};

	const onRight = () => {
		if (leftIndex + 1 >= countHours) return;
		setLeftIndex(leftIndex + 1);
	};

	const generateForecastComponents = () => {
		return hoursDataList.slice(leftIndex, leftIndex + hoursCount).map((item) => (
			<ForecastElement
				key={Math.random()}
				data={item}
				elementType="vertical"
			/>
		));
	};

	const internalElements = generateForecastComponents();

	return (
		<StyledCurrentForecast variant={variant}>
			{leftIndex > 0 && (
				<MoveLeft onClick={onLeft}>
					<TbArrowLeft />
				</MoveLeft>
			)}
			<ContainerName>{currentDay}&apos;s Forecast</ContainerName>
			<ForecastList
				internalEls={internalElements}
				orientation="horizontal"
			/>
			{leftIndex < 47 && (
				<MoveRight onClick={onRight}>
					<TbArrowRight />
				</MoveRight>
			)}
		</StyledCurrentForecast>
	);
};

CurrentForecast.propTypes = {
	hoursDataList: PropTypes.array.isRequired,
	hoursCount: PropTypes.number.isRequired,
	variant: PropTypes.string,
};

export default CurrentForecast;
