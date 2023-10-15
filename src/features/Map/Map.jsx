import { Marker, Popup, MapContainer, TileLayer, useMapEvent } from "react-leaflet";

import { WeatherContext } from "../../context/WeatherContext";

import Container from "../../ui/Container";
import { useContext } from "react";

const Map = () => {
	const { forecast, updateForecast } = useContext(WeatherContext);
	const { lat, lng } = forecast.current.location;

	const mapStyles = {
		width: "100%",
		height: "100%",
	};

	const ChangeMapView = () => {
		const map = useMapEvent("click", (event) => {
			const coordinates = `${event.latlng.lat},${event.latlng.lng}`;
			console.log("coordinates: ", coordinates);
			updateForecast({ city: coordinates });
			map.setView([event.latlng.lat, event.latlng.lng], map.getZoom());
		});
		return null;
	};

	return (
		<Container variant="nonColor">
			<MapContainer
				center={{ lat: lat, lng: lng }}
				zoom={13}
				scrollWheelZoom={true}
				style={mapStyles}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[lat, lng]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
				<ChangeMapView />
			</MapContainer>
		</Container>
	);
};

export default Map;
