import { css, styled } from "styled-components";
import PropTypes from "prop-types";

const variants = {
	normal: css`
		padding: 0.6rem;
		height: 5.6rem;
	`,

	huge: css`
		padding: 1.2rem;
		height: 9.6rem;
	`,
};

const StyledLogo = styled.div`
	background-color: var(--background-color-2);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20%;

	${(props) => variants[props.variant]}
`;

const Image = styled.img`
	height: 100%;
	width: auto;
`;

const Logo = ({ variant }) => {
	return (
		<StyledLogo variant={variant}>
			<Image
				src="/logo.png"
				alt="logo"
			/>
		</StyledLogo>
	);
};

Logo.propTypes = {
	variant: PropTypes.string,
};

StyledLogo.defaultProps = {
	variant: "normal",
};

export default Logo;
