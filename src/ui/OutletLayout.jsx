import { styled } from "styled-components";

const OutletLayout = styled.div`
	display: grid;
	grid-template-columns: 6fr 3fr;
	height: 100%;

	@media only screen and (width <= 1280px) {
		grid-template-columns: 1fr;
		row-gap: 1.2rem;
	}
`;

export default OutletLayout;
