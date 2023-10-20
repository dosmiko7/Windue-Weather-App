import PropTypes from "prop-types";
import { GiRaining, GiSnowing } from "react-icons/gi";
import { TbWind } from "react-icons/tb";

import { styled } from "styled-components";
import Container from "../../ui/Container";
import CurrentForecast from "./CurrentForecast";

const Flex = styled.div`
	display: flex;
`;

const StyledDetails = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 70rem;
	height: 50rem;
`;

const NameContainer = styled(Flex)`
	flex-direction: column;
	gap: 0.6rem;
`;

const Day = styled.h2`
	color: var(--font-color-2);
`;

const Wind = styled(Flex)`
	align-items: center;
	gap: 0.8rem;
`;

const Box = styled(Flex)`
	gap: 1.6rem;
`;

const Details = styled(Container)`
	display: flex;
	justify-content: space-between;
	padding: 1.6rem;
`;

const ConditionContainer = styled(Flex)`
	flex-direction: column;
	align-items: center;
`;

const Precipitation = styled(Flex)`
	flex-direction: column;
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

const ImageContainer = styled(Flex)`
	align-items: center;
	max-height: 100%;
`;

const Image = styled.img`
	width: 8.8rem;
`;

const TemperatureInfo = styled.span`
	color: var(--font-color-2);
	font-size: 4.2rem;
	font-weight: var(--font-weight-700);
`;

const ForecastDayDetails = ({ day }) => {
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
						<Image
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
					hoursCount={4}
				/>
			</Container>
		</StyledDetails>
	);
};

ForecastDayDetails.propTypes = {
	day: PropTypes.object,
};

export default ForecastDayDetails;
