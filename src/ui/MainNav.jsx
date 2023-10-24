import styled from "styled-components";
import { FaCloudSunRain, FaList, FaMap } from "react-icons/fa6";

import MenuLink from "./MenuLink";

const StyledMainNav = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 3.4rem;

	@media only screen and (width <= 1280px) {
		flex-direction: row;
		justify-content: space-between;
		width: 30%;
		gap: 0;
	}

	@media only screen and (width <= 950px) {
		width: 50%;
		gap: 3.4rem;
	}
`;

const MainNav = () => {
	return (
		<StyledMainNav>
			<MenuLink
				icon={<FaCloudSunRain />}
				name="Weather"
				address="weather"
			/>
			<MenuLink
				icon={<FaList />}
				name="Cities"
				address="cities"
			/>
			<MenuLink
				icon={<FaMap />}
				name="Map"
				address="map"
			/>
		</StyledMainNav>
	);
};

export default MainNav;
