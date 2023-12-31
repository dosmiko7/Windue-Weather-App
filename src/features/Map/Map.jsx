import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Container from "../../ui/Container";
import ChangeMapView from "./ChangeMapView";
import MapMarker from "./MapMarker";
import MapLayer from "./MapLayer";
import MapModes from "./MapModes";

const StyledMap = styled(Container)`
	position: relative;
	padding-bottom: 0;
`;

const StyledMapContainer = styled(MapContainer)`
	z-index: 2;
`;

const Map = ({ forecastCurrent, updateForecast }) => {
	const [zoom, setZoom] = useState(9);
	const [layer, setLayer] = useState("default");
	const mapRef = useRef();
	const { location, cityName, condition, temp } = forecastCurrent;

	useEffect(() => {
		if (mapRef.current) {
			mapRef.current.setView([location.lat, location.lng], zoom);
		}
	}, [location, zoom]);

	const handleMapClick = (event) => {
		const coordinates = `${event.latlng.lat},${event.latlng.lng}`;
		setZoom(event.sourceTarget._zoom);
		updateForecast({ city: coordinates });
	};

	const handleLayerChange = (newLayer) => {
		if (newLayer === layer) return;
		setLayer(newLayer);
	};

	return (
		<StyledMap variant="nonColor">
			<MapModes onLayerChange={handleLayerChange} />
			<StyledMapContainer
				ref={mapRef}
				center={{ lat: location.lat, lng: location.lng }}
				zoom={zoom}
				scrollWheelZoom={true}
				style={{ width: "100%", height: "100%" }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapLayer layer={layer} />
				<MapMarker
					info={{ cityName: cityName, condition: condition, temp: temp }}
					position={[location.lat, location.lng]}
				/>
				<ChangeMapView onMapClick={handleMapClick} />
			</StyledMapContainer>
		</StyledMap>
	);
};

Map.propTypes = {
	forecastCurrent: PropTypes.object.isRequired,
	updateForecast: PropTypes.func.isRequired,
};

export default Map;
