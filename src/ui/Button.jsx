import { css, styled } from "styled-components";

const types = {
	menu: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 2.6rem;
		font-weight: var(--font-weight-500);
		gap: 0.8rem;
		padding: 0.6rem;
		transition: all 0.3s;
		border-radius: 10px;

		&:hover {
			color: var(--font-color-2);
			background-color: var(--background-container-2);
		}

		&:active {
			background-color: var(--background-container-3);
		}
	`,
};

const Button = styled.button`
	border: none;
	border-radius: 10px;

	${(props) => types[props.type]}
`;

Button.defaultProps = {
	type: "menu",
};

export default Button;
