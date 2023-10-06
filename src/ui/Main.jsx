import { styled } from "styled-components";
import Search from "../features/Search";
import BasicInfo from "../features/BasicInfo";
import Container from "./Container";

const StyledMain = styled(Container)`
	display: grid;
	grid-template-rows: 1fr 5fr 4fr 4fr;
	row-gap: 1.2rem;
	background-color: transparent;
	padding-top: 0;
`;

const Main = () => {
	return (
		<StyledMain>
			<Search />
			<BasicInfo />
		</StyledMain>
	);
};

export default Main;
