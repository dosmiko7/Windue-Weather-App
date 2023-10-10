import PropTypes from "prop-types";
import { styled } from "styled-components";

import ListElement from "../../ui/ListElement";
import ForecastCondition from "../Forecast/ForecastCondition";

const StyledSuggestionElement = styled(ListElement)`
	background-color: var(--background-color-1);
	border-radius: 20px;
	padding: 2.4rem 4.8rem;
	gap: 1.2rem;
	flex: 0;
`;
const CityName = styled.h3`
	color: var(--font-color-2);
`;

const Temperature = styled.span`
	font-weight: var(--font-weight-500);
	font-size: 2.8rem;
	color: var(--font-color-2);
`;

const SuggestionElement = ({ suggestion }) => {
	const { city, condition, temp } = suggestion;

	return (
		<StyledSuggestionElement orientation="vertical">
			<CityName>{city}</CityName>
			<ForecastCondition condition={condition} />
			<Temperature>{temp}&#8451;</Temperature>
		</StyledSuggestionElement>
	);
};

SuggestionElement.propTypes = {
	suggestion: PropTypes.object.isRequired,
};

export default SuggestionElement;
