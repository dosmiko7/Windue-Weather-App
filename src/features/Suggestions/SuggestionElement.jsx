import PropTypes from "prop-types";
import { styled } from "styled-components";

import ListElement from "../../ui/ListElement";

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

const Distance = styled.span`
	font-weight: var(--font-weight-500);
	font-size: 2.8rem;
	color: var(--font-color-2);
`;

const SuggestionElement = ({ suggestion }) => {
	const { cityName, distance } = suggestion;

	return (
		<StyledSuggestionElement orientation="vertical">
			<CityName>{cityName}</CityName>
			<Distance>{distance}km;</Distance>
		</StyledSuggestionElement>
	);
};

SuggestionElement.propTypes = {
	suggestion: PropTypes.object.isRequired,
};

export default SuggestionElement;
