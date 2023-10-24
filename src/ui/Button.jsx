import styled, { css } from "styled-components";

const types = {
	menu: css`
		flex-direction: column;
		align-items: center;
		font-size: 2.6rem;
		font-weight: var(--font-weight-500);
		gap: 0.8rem;
		padding: 0.6rem;
		width: 6.2rem;

		&:hover {
			color: var(--font-color-2);
			background-color: var(--background-color-2);
		}

		&:active {
			background-color: var(--background-color-3);
		}
	`,

	common: css`
		align-items: center;
		justify-content: center;
		padding: 0.6rem 1.6rem;
		color: var(--font-color-2);
		background-color: var(--background-color-4);
		font-weight: var(--font-weight-700);

		&:hover {
			color: var(--font-color-2);
			background-color: var(--background-color-5);
		}

		&:active {
			background-color: var(--background-color-4);
			transform: translateY(3px);
		}
	`,

	close: css`
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background-color: var(--background-color-4);
		padding: 0.6rem;
		font-size: 1.8rem;
		font-weight: var(--font-weight-500);
		color: var(--font-color-2);

		&:hover {
			color: var(--font-color-2);
			background-color: var(--background-color-5);
			& > * {
				transform: scale(1.2);
			}
		}
	`,
};

const Button = styled.button`
	border: none;
	border-radius: 10px;
	transition: all 0.3s;
	display: flex;
	${(props) => types[props.type]};
`;

Button.defaultProps = {
	type: "menu",
};

export default Button;
