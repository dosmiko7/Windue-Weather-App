import { styled, css } from "styled-components";
import PropTypes from "prop-types";

import ForecastElementHorizontal from "./ForecastElementVertical";
import ForecastElementVertical from "./ForecastElementHorizontal";

const StyledForecastElement = styled.li`
	display: flex;

	align-items: center;
	justify-content: space-between;
	flex-grow: 1;

	${(props) =>
		props.type === "horizontal" &&
		css`
			flex-direction: column;
		`}

	${(props) =>
		props.type === "vertical" &&
		css`
			flex-direction: row;
		`}
`;

const ForecastElement = ({ data, type }) => {
	return (
		<StyledForecastElement type={type}>
			{type === "horizontal" ? <ForecastElementHorizontal data={data} /> : <ForecastElementVertical data={data} />}
		</StyledForecastElement>
	);
};

ForecastElement.propTypes = {
	data: PropTypes.object.isRequired,
	type: PropTypes.string,
};

StyledForecastElement.defaultProps = {
	type: "horizontal",
};

export default ForecastElement;
