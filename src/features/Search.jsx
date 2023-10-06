import { styled } from "styled-components";
import Container from "../ui/Container";
import Form from "../ui/Form";
import Input from "../ui/Input";

const SearchBox = styled(Container)`
	display: flex;
	align-items: center;
	padding: 0 1rem;
`;

const Search = () => {
	return (
		<SearchBox>
			<Form>
				<Input
					type="text"
					placeholder="Search for cities"
				/>
			</Form>
		</SearchBox>
	);
};

export default Search;
