import { FaSearch } from "react-icons/fa";
import { styled } from "styled-components";
import { useState } from "react";

import Container from "./Container";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import fetchWeatherData from "../services/apiWeather";

const SearchBox = styled(Container)`
	display: flex;
	align-items: center;
	padding: 0.4rem 1rem;
	margin-bottom: 1.2rem;
`;

const SearchButton = styled(Button)`
	font-size: 1.6rem;
	margin-right: 1.2rem;
	padding: 0.6rem;

	&:hover {
		color: var(--font-color-2);
		background-color: var(--background-color-2);
	}
`;

const Search = () => {
	const [inputValue, setInputValue] = useState("");

	const handleOnSubmit = (event) => {
		event.preventDefault();
		fetchWeatherData({ city: inputValue });
	};

	return (
		<SearchBox>
			<Form onSubmit={handleOnSubmit}>
				<Input
					type="text"
					placeholder="Search for cities"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<SearchButton type="submit">
					<FaSearch />
				</SearchButton>
			</Form>
		</SearchBox>
	);
};

export default Search;
