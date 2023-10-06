import { styled } from "styled-components";
import { FaCloudSunRain, FaList, FaMap, FaScrewdriverWrench } from "react-icons/fa6";

const StyledMainNav = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 3.4rem;
`;

const Option = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 2.6rem;
	gap: 0.8rem;
`;

const OptionName = styled.span`
	font-size: 1.4rem;
`;

const MainNav = () => {
	return (
		<StyledMainNav>
			<Option>
				<FaCloudSunRain />
				<OptionName>Weather</OptionName>
			</Option>
			<Option>
				<FaList />
				<OptionName>Cities</OptionName>
			</Option>
			<Option>
				<FaMap />
				<OptionName>Map</OptionName>
			</Option>
			<Option>
				<FaScrewdriverWrench />
				<OptionName>Settings</OptionName>
			</Option>
		</StyledMainNav>
	);
};

export default MainNav;
