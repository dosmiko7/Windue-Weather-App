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
		width: 6.2rem;

		&:hover {
			color: var(--font-color-2);
			background-color: var(--background-container-2);
		}

		&:active {
			background-color: var(--background-container-3);
		}
	`,

	common: css`
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.6rem 1.6rem;
		color: var(--font-color-2);
		background-color: var(--background-container-4);
		font-weight: var(--font-weight-700);

		&:hover {
			color: var(--font-color-2);
			background-color: var(--background-container-5);
		}

		&:active {
			background-color: var(--background-container-4);
			transform: translateY(3px);
		}
	`,
};

const Button = styled.button`
	border: none;
	border-radius: 10px;
	transition: all 0.3s;

	${(props) => types[props.type]}
`;

Button.defaultProps = {
	type: "menu",
};

export default Button;
