import { styled } from "styled-components";
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

	border: 1px solid red;
`;

// TODO: Change dump data to API's data
const ForecastBasicInfo = () => {
	const cityName = "Madrid";
	const rainProb = 0;
	const temp = 31;

	return (
		<StyledBasicInfo>
			<InfoContainer>
				<CityNameInfo>{cityName}</CityNameInfo>
				<RainInfo>Chance of rain: {rainProb}%</RainInfo>
				<TemperatureInfo>{temp}&#8451;</TemperatureInfo>
			</InfoContainer>
			<ImageContainer></ImageContainer>
		</StyledBasicInfo>
	);
};

export default ForecastBasicInfo;