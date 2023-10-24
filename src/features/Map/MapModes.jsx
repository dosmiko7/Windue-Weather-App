import styled from "styled-components";
import { TbMap, TbTemperature, TbWind, TbCloud, TbDroplets, TbStepInto } from "react-icons/tb";
import PropTypes from "prop-types";

import List from "../../ui/List";
import Button from "../../ui/Button";

const StyledMapModes = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	max-width: 80%;

	background: var(--background-app-1);
	color: var(--font-color-2);
	border-radius: 0 20px 0 0;
	z-index: 10;

	& ul button:last-child {
		border-radius: 0 20px 0 0;
	}
`;

const MapButton = styled(Button)`
	padding: 0.4rem 0;
	font-size: 2rem;
	border-radius: 0;

	@media only screen and (width <= 1280px) {
		padding: 0.6rem 6.4rem;
		font-size: 3.8rem;
	}

	@media only screen and (width <= 950px) {
		padding: 0.6rem 4.2rem;
		font-size: 3.8rem;
	}
`;

const MapModes = ({ onLayerChange }) => {
	return (
		<StyledMapModes>
			<List
				orientation="horizontal"
				border="nonBorder"
			>
				<MapButton onClick={() => onLayerChange("default")}>
					<TbMap />
				</MapButton>
				<MapButton onClick={() => onLayerChange("temp_new")}>
					<TbTemperature />
				</MapButton>
				<MapButton onClick={() => onLayerChange("wind_new")}>
					<TbWind />
				</MapButton>
				<MapButton onClick={() => onLayerChange("clouds_new")}>
					<TbCloud />
				</MapButton>
				<MapButton onClick={() => onLayerChange("precipitation_new")}>
					<TbDroplets />
				</MapButton>
				<MapButton onClick={() => onLayerChange("pressure_new")}>
					<TbStepInto />
				</MapButton>
			</List>
		</StyledMapModes>
	);
};

MapModes.propTypes = {
	onLayerChange: PropTypes.func.isRequired,
};

export default MapModes;
