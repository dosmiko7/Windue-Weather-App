import { styled, css } from "styled-components";
import PropTypes from "prop-types";

import ForecastElement from "./ForecastElement";

const StyledForecastList = styled.ul`
	display: flex;
	height: 100%;
	padding: 1.6rem 0;
	font-size: 1.6rem;

	${(props) =>
		props.type === "horizontal" &&
		css`
			flex-direction: row;

			li:not(:last-child) {
				border-right: 2px solid var(--misc-color-1);
			}
		`}

	${(props) =>
		props.type === "vertical" &&
		css`
			flex-direction: column;

			li:not(:last-child) {
				border-bottom: 2px solid var(--misc-color-1);
			}
		`}
`;

// TODO: change key
const ForecastList = ({ forecast, type }) => {
	return (
		<StyledForecastList type={type}>
			{forecast.map((item) => (
				<ForecastElement
					key={Math.random()}
					data={item}
					type={type}
				/>
			))}
		</StyledForecastList>
	);
};

ForecastList.propTypes = {
	forecast: PropTypes.array.isRequired,
	type: PropTypes.string,
};

StyledForecastList.defaultProps = {
	type: "horizontal",
};

export default ForecastList;
