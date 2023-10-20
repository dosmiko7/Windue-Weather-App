import { styled } from "styled-components";
import PropTypes from "prop-types";

import List from "../../ui/List";

const StyledForecastList = styled(List)`
	height: 100%;
	padding-bottom: 1.6rem;
	font-size: 1.6rem;
`;

const ForecastList = ({ orientation, internalEls }) => {
	return <StyledForecastList orientation={orientation}>{internalEls}</StyledForecastList>;
};

ForecastList.propTypes = {
	orientation: PropTypes.string,
	internalEls: PropTypes.node.isRequired,
};

export default ForecastList;
