import { FaSearch } from "react-icons/fa";
import { styled } from "styled-components";
import { useState } from "react";

import useWeather from "../hooks/useWeather";

import Container from "./Container";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

const SearchBox = styled(Container)`
	display: flex;
	align-items: center;
	padding: 0.4rem 1rem;
	margin-bottom: 1.2rem;
	border: 1px solid;
	border-color: ${(props) => (props.error === "true" ? "red" : "transparent")};
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
	const [isWrongInput, setIsWrongInput] = useState("false");
	const { updateForecast } = useWeather();

	const handleOnSubmit = (event) => {
		event.preventDefault();
		if (/[^a-zA-Ząćęłńóśźż\s]/.test(inputValue)) {
			setIsWrongInput("true");
		} else {
			setIsWrongInput("false");
			updateForecast({ city: inputValue });
		}
	};

	const handleInputChange = (e) => {
		const value = e.target.value;
		setInputValue(value);
	};

	return (
		<SearchBox error={isWrongInput}>
			<Form onSubmit={handleOnSubmit}>
				<Input
					type="text"
					placeholder="Search for cities"
					value={inputValue}
					onChange={handleInputChange}
				/>
				<SearchButton type="submit">
					<FaSearch />
				</SearchButton>
			</Form>
		</SearchBox>
	);
};

export default Search;
