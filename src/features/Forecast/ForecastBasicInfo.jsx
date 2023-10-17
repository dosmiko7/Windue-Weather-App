import { styled } from "styled-components";

import useWeather from "../../hooks/useWeather";

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

const CityNameInfo = styled.h2`
	color: var(--font-color-2);
`;

const RainInfo = styled.h5`
	font-weight: var(--font-weight-500);
	padding: 1.2rem 0;
`;

const TemperatureInfo = styled.span`
	color: var(--font-color-2);
	font-size: 4.2rem;
	font-weight: var(--font-weight-700);
	text-align: end;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	max-height: 100%;
`;

const Image = styled.img`
	width: auto;
`;

const ForecastBasicInfo = () => {
	const { forecast } = useWeather();
	const { cityName, rainProb, temp, condition } = forecast.current;

	return (
		<StyledBasicInfo>
			<InfoContainer>
				<CityNameInfo>{cityName}</CityNameInfo>
				<RainInfo>Chance of rain: {rainProb}%</RainInfo>
			</InfoContainer>
			<InfoContainer>
				<ImageContainer>
					<Image
						src={condition.icon}
						alt={condition.text}
					/>
				</ImageContainer>
				<TemperatureInfo>{temp}&#8451;</TemperatureInfo>
			</InfoContainer>
		</StyledBasicInfo>
	);
};

export default ForecastBasicInfo;
