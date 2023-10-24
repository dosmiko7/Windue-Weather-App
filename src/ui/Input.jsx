import styled from "styled-components";

const Input = styled.input`
	background-color: none;
	width: 100%;
	font-size: 1.6rem;
	color: var(--font-color-1);

	@media only screen and (width <= 1280px) {
		font-size: 2.4rem;
	}
`;

export default Input;
