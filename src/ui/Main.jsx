import { styled } from "styled-components";
import Search from "../features/Search";

const StyledMain = styled.section`
	display: grid;
	grid-template-rows: 1fr 5fr 4fr 4fr;
`;

const Main = () => {
	return (
		<StyledMain>
			<Search />
		</StyledMain>
	);
};

export default Main;
