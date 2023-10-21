import { TbMoonFilled, TbSunFilled } from "react-icons/tb";
import { styled } from "styled-components";

import Button from "./Button";
import useDarkTheme from "../hooks/useDarkTheme";

const StyledToggleButton = styled(Button)`
	position: relative;
	font-size: 1.6rem;
	width: 80%;
	background-color: ${(props) => (props.isdarktheme === "yes" ? "#0b131e" : "#4682A9")};
	padding: 0.6rem;
	transition: background-color 0.3s ease;

	&::after {
		content: "";
		position: absolute;
		width: 2.4rem;
		height: 2.4rem;
		border-radius: 50%;
		background-color: grey;
		transform: ${(props) => (props.isdarktheme === "no" ? "translate(-100%)" : "translate(100%)")};
		transition: transform 0.4s ease;
	}

	@media only screen and (width <= 1280px) {
		width: 8rem;
	}
`;

const Flex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Sun = styled(Flex)`
	font-size: 2rem;
	color: orange;
	margin-left: auto;
`;

const Moon = styled(Flex)`
	color: yellow;
`;

const DarkThemeToggle = () => {
	const { isDarkTheme, toggleDarkTheme } = useDarkTheme();

	return (
		<StyledToggleButton
			onClick={toggleDarkTheme}
			type="common"
			isdarktheme={isDarkTheme ? "yes" : "no"}
		>
			<Moon>
				<TbMoonFilled />
			</Moon>

			<Sun>
				<TbSunFilled />
			</Sun>
		</StyledToggleButton>
	);
};

export default DarkThemeToggle;
