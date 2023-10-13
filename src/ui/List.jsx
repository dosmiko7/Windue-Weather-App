import { css, styled } from "styled-components";

const orientations = {
	horizontal: css`
		flex-direction: row;

		& > *:not(:last-child)::after {
			content: "";
			position: absolute;
			height: 100%;
			width: 2px;
			right: 0;
			top: 0;
			background-color: var(--misc-color-1);
		}
	`,

	vertical: css`
		flex-direction: column;
		row-gap: 0.8rem;

		& > *:not(:last-child)::after {
			content: "";
			position: absolute;
			width: 100%;
			height: 2px;
			bottom: 0;
			left: 0;
			background-color: var(--misc-color-1);
		}
	`,
};

const List = styled.ul`
	display: flex;
	max-height: 100%;
	width: 100%;

	& > * {
		position: relative;
	}

	${(props) => orientations[props.orientation]};

	${(props) =>
		props.border === "nonBorder" &&
		css`
			& > *:not(:last-child)::after {
				content: none;
			}
		`}
`;

List.defaultProps = {
	orientation: "vertical",
	border: "withBorder",
};

export default List;
