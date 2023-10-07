import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import Menu from "./Menu";
import Search from "./Search";

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 11fr;
	padding: 2.2rem;
	background-color: var(--background-app-1);
	width: 160rem;
	height: 80rem;
	border-radius: 20px;
	gap: 2.2rem;

	margin: 30px auto;
`;

const Main = styled.div`
	display: grid;
	grid-template-rows: 0.8fr 12fr;
`;

const AppLayout = () => {
	return (
		<StyledAppLayout>
			<Menu />
			<Main>
				<Search />
				<Outlet />
			</Main>
		</StyledAppLayout>
	);
};

export default AppLayout;
