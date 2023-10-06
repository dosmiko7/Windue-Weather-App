import { styled } from "styled-components";
import Main from "./Main";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

// TODO: Change width and height to rem;
const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 5fr 3fr;
	column-gap: 2rem;
	padding: 2.2rem;
	background-color: var(--background-app-1);
	width: 160rem;
	height: 80rem;

	margin: 30px auto;
`;

const AppLayout = () => {
	return (
		<StyledAppLayout>
			<Menu />
			<Main />
			<Sidebar />
		</StyledAppLayout>
	);
};

export default AppLayout;
