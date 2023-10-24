import styled from "styled-components";
import Container from "./Container";

const Sidebar = styled(Container)`
	padding: 0;
	margin-left: 3.2rem;

	@media only screen and (width <= 1280px) {
		margin-left: 0;
	}
`;

export default Sidebar;
