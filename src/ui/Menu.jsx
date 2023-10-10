import { styled } from "styled-components";

import Container from "./Container";
import MainNav from "./MainNav";
import Logo from "./Logo";
import DarkThemeToggle from "./DarkThemeToggle";

const StyledMenu = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 7.2rem;
`;

const Menu = () => {
	return (
		<StyledMenu>
			<Logo />
			<DarkThemeToggle />
			<MainNav />
		</StyledMenu>
	);
};

export default Menu;
