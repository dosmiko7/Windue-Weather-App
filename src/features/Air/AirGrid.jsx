import styled from "styled-components";
import PropTypes from "prop-types";
import { TbTemperature, TbBrandDrops, TbArrowBarToDown, TbUvIndex } from "react-icons/tb";

import AirElement from "./AirElement";

const StyledAirGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	height: 100%;
	padding-left: 1.6rem;
`;

const AirGrid = ({ data }) => {
	const { tempFeel, humidity, pressure, uv } = data;

	return (
		<StyledAirGrid>
			<AirElement
				symbol={<TbTemperature />}
				title="Real Feel"
				data={tempFeel}
			/>
			<AirElement
				symbol={<TbBrandDrops />}
				title="Humidity"
				data={humidity}
			/>
			<AirElement
				symbol={<TbArrowBarToDown />}
				title="Pressure"
				data={pressure}
			/>
			<AirElement
				symbol={<TbUvIndex />}
				title="UV Index"
				data={uv}
			/>
		</StyledAirGrid>
	);
};

AirGrid.propTypes = {
	data: PropTypes.object.isRequired,
};

export default AirGrid;
