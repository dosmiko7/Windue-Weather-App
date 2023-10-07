import { styled } from "styled-components";
import { FaCloudSunRain, FaList, FaMap, FaScrewdriverWrench } from "react-icons/fa6";
import Button from "./Button";

const StyledMainNav = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 3.4rem;
`;

const OptionName = styled.span`
	font-size: 1.2rem;
	font-weight: var(--font-weight-700);
`;

const MainNav = () => {
	return (
		<StyledMainNav>
			<Button>
				<FaCloudSunRain />
				<OptionName>Weather</OptionName>
			</Button>
			<Button>
				<FaList />
				<OptionName>Cities</OptionName>
			</Button>
			<Button>
				<FaMap />
				<OptionName>Map</OptionName>
			</Button>
			<Button>
				<FaScrewdriverWrench />
				<OptionName>Settings</OptionName>
			</Button>
		</StyledMainNav>
	);
};

export default MainNav;
