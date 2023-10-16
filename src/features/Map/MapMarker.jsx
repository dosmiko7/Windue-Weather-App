import { Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import { styled } from "styled-components";

const CityName = styled.h5``;
const Image = styled.img``;
const Temperature = styled.span`
	font-weight: var(--font-weight-500);
`;

const MapMarker = ({ info, position }) => {
	const { cityName, condition, temp } = info;

	return (
		<Marker position={position}>
			<Popup className="custom">
				<CityName>{cityName}</CityName>
				<Image
					src={condition.icon}
					alt={condition.text}
				/>
				<Temperature>{temp}&#8451;</Temperature>
			</Popup>
		</Marker>
	);
};

MapMarker.propTypes = {
	info: PropTypes.object.isRequired,
	position: PropTypes.array.isRequired,
};

export default MapMarker;
