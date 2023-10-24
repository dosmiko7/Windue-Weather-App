import { styled } from "styled-components";
import PropTypes from "prop-types";

import ListElement from "../../ui/ListElement";
import ForecastCondition from "../Forecast/ForecastCondition";
import { FlexColumn } from "../../ui/Flex";

const StyledSearchesElement = styled(ListElement)`
	background-color: var(--background-color-1);
	padding-top: 2.6rem;
	padding-bottom: 2.6rem;
	border-radius: 20px;
	flex-grow: 0;

	@media only screen and (width <= 1280px) {
		width: 20%;
	}

	@media only screen and (width <= 950px) {
		padding: 2.6rem 0.6rem;
		width: 25%;
	}
`;

const Box = styled(FlexColumn)`
	justify-content: space-between;
	padding-left: 2.6rem;

	@media only screen and (width <= 1280px) {
		padding-left: 0;
	}
`;

const CityName = styled.h4`
	color: var(--font-color-2);

	@media only screen and (width <= 1280px) {
		text-align: center;
	}
`;

const Time = styled.span`
	font-size: 1.6rem;
`;

const Temperature = styled.span`
	margin-left: auto;
	font-size: 3.2rem;
	color: var(--font-color-2);

	@media only screen and (width <= 1280px) {
		margin-left: 0;
	}
`;

const SearchesElement = ({ search, orientation }) => {
	const { cityName, condition, time, temp } = search;
	const elOrientation = orientation === "horizontal" ? "vertical" : "horizontal";

	return (
		<StyledSearchesElement orientation={elOrientation}>
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
	orientation: PropTypes.string,
};

export default SearchesElement;
