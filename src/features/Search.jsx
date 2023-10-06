import { styled } from "styled-components";
import { Container } from "../ui/Container";

const SearchBox = styled(Container)`
	display: flex;
	align-items: center;
`;

const Search = () => {
	return (
		<SearchBox>
			<form>
				<input
					type="text"
					placeholder="Search for cities..."
				/>
			</form>
		</SearchBox>
	);
};

export default Search;
