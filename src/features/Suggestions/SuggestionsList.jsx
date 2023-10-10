import PropTypes from "prop-types";
import { styled } from "styled-components";

import List from "../../ui/List";
import SuggestionElement from "./SuggestionElement";

const StyledSuggestionList = styled(List)`
	justify-content: flex-start;
	gap: 1.2rem;
`;

const SuggestionsList = ({ suggestions, orientation }) => {
	return (
		<StyledSuggestionList
			orientation={orientation}
			border="nonBorder"
		>
			{suggestions.map((suggestion) => (
				<SuggestionElement
					key={Math.random()}
					suggestion={suggestion}
				/>
			))}
		</StyledSuggestionList>
	);
};

SuggestionsList.propTypes = {
	suggestions: PropTypes.array.isRequired,
	orientation: PropTypes.string,
};

export default SuggestionsList;
