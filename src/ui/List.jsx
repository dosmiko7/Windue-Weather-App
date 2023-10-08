import { css, styled } from "styled-components";

const List = styled.ul`
	display: flex;

	${(props) =>
		props.type === "horizontal" &&
		css`
			flex-direction: row;

			li:not(:last-child) {
				border-right: 2px solid var(--misc-color-1);
			}
		`}

	${(props) =>
		props.type === "vertical" &&
		css`
			flex-direction: column;

			li:not(:last-child) {
				border-bottom: 2px solid var(--misc-color-1);
			}
		`}
`;

List.defaultProps = {
	type: "horizontal",
};

export default List;
