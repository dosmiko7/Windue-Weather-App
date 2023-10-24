import styled from "styled-components";

const Window = styled.div`
	width: 160rem;
	max-width: 100%;
	height: 90rem;
	border-radius: 20px;
	margin: 20px auto;
	padding: 2.2rem;
	background: var(--background-app-1);

	@media only screen and (width <= 1280px) {
		width: 140rem;
		height: 160rem;
	}

	@media only screen and (width <= 950px) {
		width: 90rem;
	}

	@media only screen and (width <= 615px) {
		width: 100vw;
		height: auto;
		margin: 0;
		border-radius: 0;
	}
`;

export default Window;
