import { Link } from "react-router-dom";
import { styled } from "styled-components";
import PropTypes from "prop-types";

import Button from "./Button";

const OptionName = styled.span`
	font-size: 1.2rem;
	font-weight: var(--font-weight-700);
`;

const MenuLink = ({ icon, name, address }) => {
	return (
		<Link to={address}>
			<Button>
				{icon}
				<OptionName>{name}</OptionName>
			</Button>
		</Link>
	);
};

MenuLink.propTypes = {
	icon: PropTypes.element.isRequired,
	name: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
};

export default MenuLink;
