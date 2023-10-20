import { styled } from "styled-components";
import { GiRaining, GiSnowing } from "react-icons/gi";

import useWeather from "../../hooks/useWeather";

import Container from "../../ui/Container";

const StyledBasicInfo = styled(Container)`
	background-color: inherit;
	display: flex;
	padding: 1.6rem;
`;

const Box = styled.div`
	display: flex;
	padding-top: 1.2rem;
	gap: 1.2rem;
`;

const InfoContainer = styled.div`
	width: 75%;
	display: flex;
	flex-direction: column;

	&:nth-child(2) {
		width: 25%;
	}
`;

const CityNameInfo = styled.h2`
	color: var(--font-color-2);
`;

const Precipitation = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 4.2rem;
	font-weight: var(--font-weight-500);
	align-items: center;
	justify-content: center;
`;

const Value = styled.span`
	font-size: 1.6rem;
	text-align: center;
	width: 100%;
`;

const TemperatureInfo = styled.span`
	color: var(--font-color-2);
	font-size: 3.6rem;
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
	const { cityName, rainProb, snowProb, temp, condition } = forecast.current;

	return (
		<StyledBasicInfo>
			<InfoContainer>
				<CityNameInfo>{cityName}</CityNameInfo>
				<Box>
					<Precipitation>
						<GiRaining />
						<Value>{rainProb}%</Value>
					</Precipitation>
					<Precipitation>
						<GiSnowing />
						<Value>{snowProb}%</Value>
					</Precipitation>
				</Box>
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
