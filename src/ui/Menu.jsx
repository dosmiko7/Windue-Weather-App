import styled from "styled-components";

import Container from "./Container";
import MainNav from "./MainNav";
import Logo from "./Logo";
import DarkThemeToggle from "./DarkThemeToggle";

const StyledMenu = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6.8rem;

	@media only screen and (width <= 1280px) {
		flex-direction: row;
		padding: 0.8rem 1.6rem;

		& > :last-child {
			margin-left: auto;
		}
	}
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
