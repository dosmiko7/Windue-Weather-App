import { Marker, Popup, MapContainer, TileLayer } from "react-leaflet";
import { useContext, useEffect, useRef, useState } from "react";

import { WeatherContext } from "../../context/WeatherContext";

import Container from "../../ui/Container";
import ChangeMapView from "./ChangeMapView";

const Map = () => {
	const { forecast, updateForecast } = useContext(WeatherContext);
	const [zoom, setZoom] = useState(9);
	const mapRef = useRef();
	const location = forecast.current.location;

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

	return (
		<Container variant="nonColor">
			<MapContainer
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
				<Marker position={[location.lat, location.lng]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
				<ChangeMapView onMapClick={handleMapClick} />
			</MapContainer>
		</Container>
	);
};

export default Map;
