import { styled } from "styled-components";
import Main from "./Main";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

// TODO: Change width and height to rem;
const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr 2fr;
	column-gap: 2rem;
	padding: 2.2rem;

	width: 1600px;
	height: 800px;
	margin: 30px auto;
	border: 1px solid red;
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
