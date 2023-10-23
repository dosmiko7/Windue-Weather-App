import { styled } from "styled-components";
import { GiRaining, GiSnowing } from "react-icons/gi";
import PropTypes from "prop-types";

import Container from "../../ui/Container";
import { FlexColumn, FlexRow } from "../../ui/Flex";

const StyledBasicInfo = styled(Container)`
	display: flex;
	background-color: inherit;
	padding: 1.6rem;
`;

const Box = styled(FlexRow)`
	padding-top: 1.2rem;
	gap: 1.2rem;
`;

const InfoContainer = styled(FlexColumn)`
	width: 75%;

	&:nth-child(2) {
		width: 25%;
	}
`;

const CityNameInfo = styled.h2`
	color: var(--font-color-2);
`;

const Precipitation = styled(FlexColumn)`
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

const ImageContainer = styled(FlexRow)`
	justify-content: flex-end;
	align-items: center;
	max-height: 100%;
`;

const Image = styled.img`
	width: auto;
`;

const ForecastBasicInfo = ({ forecastCurrent }) => {
	const { cityName, rainProb, snowProb, temp, condition } = forecastCurrent;

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

ForecastBasicInfo.propTypes = {
	forecastCurrent: PropTypes.object.isRequired,
};

export default ForecastBasicInfo;
