import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import Menu from "./Menu";
import Search from "./Search";
import Window from "./Window";

const StyledAppLayout = styled(Window)`
	display: grid;
	grid-template-columns: 0.8fr 11fr;
	gap: 2.2rem;
`;

const Main = styled.div`
	display: grid;
	grid-template-rows: 0.8fr 12fr;
	grid-template-columns: 6fr 3fr;
	row-gap: 1.2rem;
`;

const PositionedSearch = styled(Search)`
	grid-column: 1/2;
	grid-row: 1/2;
`;

const PositionedOutlet = styled.div`
	grid-column: 1/3;
	grid-row: 2/3;
`;

const AppLayout = () => {
	return (
		<StyledAppLayout>
			<Menu />
			<Main>
				<PositionedSearch />
				<PositionedOutlet>
					<Outlet />
				</PositionedOutlet>
			</Main>
		</StyledAppLayout>
	);
};

export default AppLayout;
