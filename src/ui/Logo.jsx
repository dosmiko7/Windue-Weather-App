import { css, styled } from "styled-components";
import PropTypes from "prop-types";
import { FlexRow } from "./Flex";
import Image from "./Image";

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

const LogoContainer = styled(FlexRow)`
	background-color: var(--background-color-2);
	align-items: center;
	justify-content: center;
	border-radius: 20%;

	${(props) => variants[props.variant]}
`;

const LogoImage = styled(Image)`
	height: 100%;
	width: auto;
`;

const Logo = ({ variant }) => {
	return (
		<LogoContainer variant={variant}>
			<LogoImage
				src="/logo.png"
				alt="logo"
			/>
		</LogoContainer>
	);
};

Logo.propTypes = {
	variant: PropTypes.string,
};

LogoContainer.defaultProps = {
	variant: "normal",
};

export default Logo;
