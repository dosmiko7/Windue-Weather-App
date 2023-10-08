import { styled } from "styled-components";
import { FaCloudSunRain, FaList, FaMap, FaScrewdriverWrench } from "react-icons/fa6";

import MenuLink from "./MenuLink";

const StyledMainNav = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 3.4rem;
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
			<MenuLink
				icon={<FaScrewdriverWrench />}
				name="Settings"
				address="settings"
			/>
		</StyledMainNav>
	);
};

export default MainNav;
