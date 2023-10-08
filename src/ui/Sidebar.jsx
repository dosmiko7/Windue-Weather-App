import { css, styled } from "styled-components";
import Container from "./Container";

const variants = {
	color: css`
		background-color: inherit;
	`,
	nonColor: css`
		background-color: transparent;
	`,
};

const Sidebar = styled(Container)`
	padding: 0;
	margin-left: 3.2rem;

	${(props) => variants[props.variant]}
`;

Sidebar.defaultProps = {
	variant: "color",
};

export default Sidebar;
