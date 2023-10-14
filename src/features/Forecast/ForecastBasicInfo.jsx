import { styled } from "styled-components";
import { useContext } from "react";

import { WeatherContext } from "../../context/WeatherContext";

import Container from "../../ui/Container";

const StyledBasicInfo = styled(Container)`
	background-color: inherit;
	display: flex;
	padding: 1.6rem;
`;

const InfoContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
`;

const CityNameInfo = styled.h1`
	color: var(--font-color-2);
`;

const RainInfo = styled.h6`
	font-weight: var(--font-weight-500);
	padding: 1.2rem 0;
	flex-grow: 1;
`;

const TemperatureInfo = styled.span`
	color: var(--font-color-2);
	font-size: 4.2rem;
	font-weight: var(--font-weight-700);
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	max-height: 100%;
`;

const Image = styled.img`
	height: 12rem;
	width: auto;
`;

const ForecastBasicInfo = () => {
	const { forecast } = useContext(WeatherContext);
	const { cityName, rainProb, temp, condition } = forecast.current;

	return (
		<StyledBasicInfo>
			<InfoContainer>
				<CityNameInfo>{cityName}</CityNameInfo>
				<RainInfo>Chance of rain: {rainProb}%</RainInfo>
				<TemperatureInfo>{temp}&#8451;</TemperatureInfo>
			</InfoContainer>
			<ImageContainer>
				<Image
					src={condition.icon}
					alt={condition.text}
				/>
			</ImageContainer>
		</StyledBasicInfo>
	);
};

export default ForecastBasicInfo;
