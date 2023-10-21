import { styled } from "styled-components";

const Window = styled.div`
	width: 160rem;
	height: 80rem;
	border-radius: 20px;
	margin: 30px auto;
	padding: 2.2rem;
	background: var(--background-app-1);

	@media only screen and (width <= 1280px) {
		width: 140rem;
		height: 160rem;
	}
`;

export default Window;
