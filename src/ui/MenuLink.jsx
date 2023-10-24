import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "./Button";

const StyledButton = styled(Button)`
	font-size: 2.4rem;
	display: flex;
	width: 8.2rem;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const OptionName = styled.span`
	font-size: 1.4rem;
	font-weight: var(--font-weight-700);

	@media only screen and (width <= 1280px) {
		font-size: 1.8rem;
	}
`;

const MenuLink = ({ icon, name, address }) => {
	return (
		<Link to={address}>
			<StyledButton>
				{icon}
				<OptionName>{name}</OptionName>
			</StyledButton>
		</Link>
	);
};

MenuLink.propTypes = {
	icon: PropTypes.element.isRequired,
	name: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
};

export default MenuLink;
