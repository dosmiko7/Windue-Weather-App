import PropTypes from "prop-types";

import { styled } from "styled-components";
import Container from "../../ui/Container";
import CurrentForecast from "./CurrentForecast";

const StyledDetails = styled(Container)`
	width: 70rem;
	height: 50rem;
`;

/*
const nDayForecast = [];
	data.forecast.forecastday.forEach((day) => {
		let details = [];
		let tmpObj = {};

		tmpObj["day"] = convertDateIntoDayName(day.date);
		tmpObj["condition"] = { icon: day.day.condition.icon, text: day.day.condition.text };
		tmpObj["wind"] = day.day.avgvis_km;
		tmpObj["rainProb"] = day.daily_chance_of_rain;
		tmpObj["snowProb"] = day.daily_chance_of_snow;
		day.hour.forEach((hour) => {
			details.push({
				time: hour.time.slice(-5),
				condition: { icon: hour.condition.icon, text: hour.condition.text },
				temp: hour.temp_c,
			});
		});

		nDayForecast.push({ ...tmpObj, details: details });
	});
*/

const Day = styled.span``;
const Precipitation = styled.h3``;

const ForecastDayDetails = ({ day }) => {
	return (
		<StyledDetails>
			<CurrentForecast
				hoursDataList={day.details}
				hoursCount={4}
			/>
		</StyledDetails>
	);
};

ForecastDayDetails.propTypes = {
	day: PropTypes.object,
};

export default ForecastDayDetails;
