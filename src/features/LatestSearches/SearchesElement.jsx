import { styled } from "styled-components";
import PropTypes from "prop-types";

import ListElement from "../../ui/ListElement";
import ForecastCondition from "../Forecast/ForecastCondition";

const StyledSearchesElement = styled(ListElement)`
	background-color: var(--background-color-1);
	padding-top: 2.6rem;
	padding-bottom: 2.6rem;
	border-radius: 20px;
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-left: 2.6rem;
`;

const CityName = styled.h4`
	color: var(--font-color-2);
`;

const Time = styled.span`
	font-size: 1.6rem;
`;

const Temperature = styled.span`
	margin-left: auto;
	font-size: 3.2rem;
	color: var(--font-color-2);
`;

const SearchesElement = ({ search }) => {
	const { cityName, condition, time, temp } = search;

	return (
		<StyledSearchesElement orientation="horizontal">
			<ForecastCondition condition={condition} />
			<Box>
				<CityName>{cityName}</CityName>
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
