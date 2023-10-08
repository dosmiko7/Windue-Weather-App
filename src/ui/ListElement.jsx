import { css, styled } from "styled-components";

const ListElement = styled.li`
	display: flex;

	align-items: center;
	justify-content: space-between;
	flex-grow: 1;

	${(props) =>
		props.type === "vertical" &&
		css`
			flex-direction: column;
		`}

	${(props) =>
		props.type === "horizontal" &&
		css`
			flex-direction: row;
		`}
`;

ListElement.defaultProps = {
	type: "vertical",
};

export default ListElement;
