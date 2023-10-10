import { styled } from "styled-components";
import PropTypes from "prop-types";

import ListElement from "../../ui/ListElement";
import ForecastCondition from "../Forecast/ForecastCondition";

const StyledSearchesElement = styled(ListElement)`
	background-color: var(--background-color-1);
	border-radius: 20px;
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-left: 2.6rem;
`;
const CityName = styled.h3``;
const Time = styled.span`
	font-size: 1.6rem;
`;

const Temperature = styled.span`
	margin-left: auto;
	font-size: 3.2rem;
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
			<Temperature>{temp}&#8451;</Temperature>
		</StyledSearchesElement>
	);
};

SearchesElement.propTypes = {
	search: PropTypes.object.isRequired,
};

export default SearchesElement;
