import { styled } from "styled-components";
import Container from "./Container";
import Form from "./Form";
import Input from "./Input";

const SearchBox = styled(Container)`
	display: flex;
	align-items: center;
	padding: 0.8rem 1rem;
	width: 65%;
	margin-bottom: 1.2rem;
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
