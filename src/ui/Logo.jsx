import { styled } from "styled-components";

const StyledLogo = styled.div`
	background-color: var(--background-container-2);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.6rem;
	border-radius: 20%;
`;

const Image = styled.img`
	height: 4.8rem;
	width: auto;
`;

const Logo = () => {
	return (
		<StyledLogo>
			<Image
				src="/logo.png"
				alt="logo"
			/>
		</StyledLogo>
	);
};

export default Logo;
