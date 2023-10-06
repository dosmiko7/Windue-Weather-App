import { styled } from "styled-components";

const StyledMainNav = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;

const Option = styled.li`
	font-size: 1.6rem;
`;

const MainNav = () => {
	return (
		<StyledMainNav>
			<Option>Weather</Option>
			<Option>Cities</Option>
			<Option>Map</Option>
			<Option>Settings</Option>
		</StyledMainNav>
	);
};

export default MainNav;
