import { styled } from "styled-components";
import Container from "../ui/Container";

const StyledBasicInfo = styled(Container)`
	padding: 2.8rem 3.2rem;
	background-color: inherit;
	display: flex;
`;

const InfoContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
`;

const CityNameInfo = styled.h1``;

const RainInfo = styled.h4`
	font-size: 1.4rem;
	font-weight: var(--font-weight-500);
	color: var(--font-color-2);
	padding: 1.2rem 0;
	flex-grow: 1;
`;

const TemperatureInfo = styled.span`
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


const BasicInfo = () => {
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

export default BasicInfo;
