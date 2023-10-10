import { styled } from "styled-components";
import PropTypes from "prop-types";
import { FaTemperatureHalf, FaWind, FaDroplet, FaSun } from "react-icons/fa6";

import AirElement from "./AirElement";

const StyledAirGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	height: 100%;
	padding-left: 1.6rem;
`;

const AirGrid = ({ data }) => {
	const { tmpFeel, wind, rain, UV } = data;

	return (
		<StyledAirGrid>
			<AirElement
				symbol={<FaTemperatureHalf />}
				title="Real Feel"
				data={tmpFeel}
			/>
			<AirElement
				symbol={<FaWind />}
				title="Wind"
				data={wind}
			/>
			<AirElement
				symbol={<FaDroplet />}
				title="Chance of rain"
				data={rain}
			/>
			<AirElement
				symbol={<FaSun />}
				title="UV Index"
				data={UV}
			/>
		</StyledAirGrid>
	);
};

AirGrid.propTypes = {
	data: PropTypes.object.isRequired,
};

export default AirGrid;
