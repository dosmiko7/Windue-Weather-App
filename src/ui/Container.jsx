import styled, { css } from "styled-components";

const variants = {
	color: css`
		background-color: var(--background-color-1);
	`,
	nonColor: css`
		background-color: transparent;
	`,
};

export const ContainerName = styled.h6`
	margin-left: 0.6rem;
	padding-bottom: 1.2rem;
	text-transform: uppercase;
`;

const Container = styled.div`
	border-radius: 20px;
	color: var(--font-color-1);
	font-size: 2rem;
	padding: 1.6rem 0;
	height: 100%;

	${(props) => variants[props.variant]}
`;

Container.defaultProps = {
	variant: "color",
};

export default Container;
