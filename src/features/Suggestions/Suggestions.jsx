import { useEffect, useState } from "react";
import { useCities } from "../../hooks/useCities";

import Container, { ContainerName } from "../../ui/Container";
import SuggestionsList from "./SuggestionsList";

// TODO: Still undefined
const Suggestions = () => {
	const { cities } = useCities();
	const [loading, setLoading] = useState(true);
	console.log("Cities in Suggestions: ", cities);

	useEffect(() => {
		setLoading(false);
	}, [cities]);

	return (
		<Container variant="nonColor">
			<ContainerName>Suggestions</ContainerName>
			{!loading ? (
				<SuggestionsList
					suggestions={cities}
					orientation="horizontal"
				/>
			) : (
				<div>Loading...</div>
			)}
		</Container>
	);
};

export default Suggestions;
