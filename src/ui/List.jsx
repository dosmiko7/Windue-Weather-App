import { css, styled } from "styled-components";

const List = styled.ul`
	display: flex;
	height: 100%;
	width: 100%;

	& > * {
		position: relative;
	}

	${(props) =>
		props.type === "horizontal" &&
		css`
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
		`}

	${(props) =>
		props.type === "vertical" &&
		css`
			flex-direction: column;

			& > *:not(:last-child)::after {
				content: "";
				position: absolute;
				width: 100%;
				height: 2px;
				bottom: 0;
				left: 0;
				background-color: var(--misc-color-1);
			}
		`}
`;

List.defaultProps = {
	type: "vertical",
};

export default List;
