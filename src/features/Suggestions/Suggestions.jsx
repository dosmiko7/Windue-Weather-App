import Container, { ContainerName } from "../../ui/Container";
import SuggestionsList from "./SuggestionsList";

// TODO: Change dump data to API's
const SUGGESTIONS = [
	{ city: "Madrid", condition: { text: "Sunny" }, temp: "31" },
	{ city: "Malaga", condition: { text: "Cloudy" }, temp: "33" },
];

const Suggestions = () => {
	return (
		<Container variant="nonColor">
			<ContainerName>Suggestions</ContainerName>
			<SuggestionsList
				suggestions={SUGGESTIONS}
				orientation="horizontal"
			/>
		</Container>
	);
};

export default Suggestions;
