import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import Menu from "./Menu";
import Search from "./Search";
import Window from "./Window";

const StyledAppLayout = styled(Window)`
	display: grid;
	grid-template-columns: 1fr 11fr;
	gap: 2.2rem;
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
