import { styled } from "styled-components";
import Container from "./Container";
import MainNav from "./MainNav";

const StyledMenu = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.4rem;
`;

const Menu = () => {
	return (
		<StyledMenu>
			<MainNav></MainNav>
		</StyledMenu>
	);
};

export default Menu;
