import { styled } from "styled-components";
import PropTypes from "prop-types";

import ListElement from "../../ui/ListElement";
import ForecastCondition from "../Forecast/ForecastCondition";

const StyledSearchesElement = styled(ListElement)``;

const Box = styled.div``;
const CityName = styled.h3``;
const Time = styled.h4``;

const Temperature = styled.span``;

const SearchesElement = ({ search }) => {
	const { city, condition, time, temp } = search;

	return (
		<StyledSearchesElement type="horizontal">
			<ForecastCondition condition={condition} />
			<Box>
				<CityName>{city}</CityName>
				<Time>{time}</Time>
			</Box>
			<Temperature>{temp}</Temperature>
		</StyledSearchesElement>
	);
};

SearchesElement.propTypes = {
	search: PropTypes.object.isRequired,
};

export default SearchesElement;
