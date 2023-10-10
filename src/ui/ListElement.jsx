import { css, styled } from "styled-components";

const orientations = {
	vertical: css`
		flex-direction: column;
	`,

	horizontal: css`
		flex-direction: row;
		padding: 1.6rem 2.4rem;
	`,
};

const ListElement = styled.li`
	display: flex;

	align-items: center;
	justify-content: space-between;
	flex-grow: 1;

	${(props) => orientations[props.orientation]}
`;

ListElement.defaultProps = {
	orientation: "vertical",
};

export default ListElement;
