import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import Menu from "./Menu";
import Search from "./Search";
import Window from "./Window";

const StyledAppLayout = styled(Window)`
	display: grid;
	grid-template-columns: 0.8fr 11fr;
	gap: 2.2rem;

	@media only screen and (width <= 1280px) {
		grid-template-columns: 1fr;
		grid-template-rows: 0.8fr 11fr;
	}
`;

const Main = styled.div`
	display: grid;
	grid-template-rows: 0.8fr 12fr;
	grid-template-columns: 6fr 3fr;

	@media only screen and (width <= 1280px) {
		grid-template-columns: 1fr;
		grid-template-rows: 0.6fr 13fr;
	}
`;

const PositionedSearch = styled(Search)`
	grid-column: 1/2;
	grid-row: 1/2;
	margin-bottom: 1.2rem;

	@media only screen and (width <= 1280px) {
		grid-column: unset;
	}
`;

const PositionedOutlet = styled.div`
	grid-column: 1/3;
	grid-row: 2/3;

	@media only screen and (width <= 1280px) {
		grid-column: unset;
		grid-row: unset;
	}
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
