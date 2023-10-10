import { styled } from "styled-components";
import PropTypes from "prop-types";

import ListElement from "../../ui/ListElement";
import ForecastCondition from "../Forecast/ForecastCondition";

const StyledSearchesElement = styled(ListElement)`
	background-color: var(--background-color-2);
	border-radius: 20px;
`;

const Box = styled.div``;
const CityName = styled.h3``;
const Time = styled.h4``;

const Temperature = styled.span`
	margin-left: auto;
`;

const SearchesElement = ({ search }) => {
	const { city, condition, time, temp } = search;

	return (
		<StyledSearchesElement orientation="horizontal">
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
