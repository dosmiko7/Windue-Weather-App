import PropTypes from "prop-types";
import { styled } from "styled-components";

import ListElement from "../../ui/ListElement";

const StyledSuggestionElement = styled(ListElement)`
	background-color: var(--background-color-1);
	border-radius: 20px;
	padding: 2.4rem 3.6rem;
	gap: 1.2rem;
	flex: 0;
	transition: all 0.3s;

	&:hover {
		background-color: var(--background-color-2);
		cursor: pointer;
	}
`;
const CityName = styled.h4`
	color: var(--font-color-2);
	text-align: center;
`;

const Distance = styled.span`
	font-weight: var(--font-weight-500);
	font-size: 2rem;
	color: var(--font-color-2);
`;

const SuggestionElement = ({ suggestion, onSuggestionClick }) => {
	const { cityName, location, distance } = suggestion;

	const handleOnClick = () => {
		onSuggestionClick(location);
	};

	return (
		<StyledSuggestionElement
			orientation="vertical"
			onClick={handleOnClick}
		>
			<CityName>{cityName}</CityName>
			<Distance>{distance}km</Distance>
		</StyledSuggestionElement>
	);
};

SuggestionElement.propTypes = {
	suggestion: PropTypes.object.isRequired,
	onSuggestionClick: PropTypes.func,
};

export default SuggestionElement;
