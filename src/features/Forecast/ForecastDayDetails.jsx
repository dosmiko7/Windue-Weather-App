import PropTypes from "prop-types";
import styled from "styled-components";
import { GiRaining, GiSnowing } from "react-icons/gi";
import { TbWind } from "react-icons/tb";

import { useSmallRes } from "../../hooks/useSmallRes";
import Container from "../../ui/Container";
import CurrentForecast from "./CurrentForecast";
import { FlexColumn, FlexRow } from "../../ui/Flex";
import Image from "../../ui/Image";

const StyledDetails = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 70rem;
	height: 50rem;

	@media only screen and (width <= 615px) {
		width: 50rem;
		height: 40rem;
	}
`;

const NameContainer = styled(FlexColumn)`
	gap: 0.6rem;
`;

const Day = styled.h2`
	color: var(--font-color-2);
`;

const Wind = styled(FlexRow)`
	align-items: center;
	gap: 0.8rem;
`;

const Box = styled(FlexRow)`
	gap: 1.6rem;
	justify-content: end;
`;

const Details = styled(Container)`
	display: flex;
	justify-content: space-between;
	padding: 1.6rem;

	& > * {
		width: 33%;
	}
`;

const ConditionContainer = styled(FlexColumn)`
	align-items: center;
`;

const Precipitation = styled(FlexColumn)`
	gap: 0.6rem;
	font-size: 4.2rem;
	font-weight: var(--font-weight-500);
	align-items: center;
`;

const Value = styled.span`
	font-size: 1.6rem;
	text-align: center;
	width: 100%;
`;

const ImageContainer = styled(FlexRow)`
	max-height: 100%;
`;

const ConditionImage = styled(Image)`
	width: 8.8rem;
`;

const TemperatureInfo = styled.span`
	color: var(--font-color-2);
	font-size: 4.2rem;
	font-weight: var(--font-weight-700);
`;

const ForecastDayDetails = ({ day }) => {
	const { isSmallRes } = useSmallRes();
	return (
		<StyledDetails>
			<Details>
				<NameContainer>
					<Day>{day.day}</Day>
					<Wind>
						<TbWind /> {day.wind}km/h
					</Wind>
				</NameContainer>
				<ConditionContainer>
					<ImageContainer>
						<ConditionImage
							src={day.condition.icon}
							alt={day.condition.text}
						/>
					</ImageContainer>
					<TemperatureInfo>{day.temp}&#8451;</TemperatureInfo>
				</ConditionContainer>
				<Box>
					<Precipitation>
						<GiRaining />
						<Value>{day.rainProb}%</Value>
					</Precipitation>
					<Precipitation>
						<GiSnowing />
						<Value>{day.snowProb}%</Value>
					</Precipitation>
				</Box>
			</Details>
			<Container>
				<CurrentForecast
					hoursDataList={day.details}
					hoursCount={isSmallRes ? 3 : 4}
				/>
			</Container>
		</StyledDetails>
	);
};

ForecastDayDetails.propTypes = {
	day: PropTypes.object,
};

export default ForecastDayDetails;
