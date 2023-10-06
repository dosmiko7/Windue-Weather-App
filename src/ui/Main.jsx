import { styled } from "styled-components";

const StyledMain = styled.section`
	border: 1px solid blue;
`;

const Main = () => {
	return (
		<StyledMain>
			<p>MAIN</p>
		</StyledMain>
	);
};

export default Main;
