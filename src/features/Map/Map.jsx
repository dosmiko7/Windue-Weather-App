import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useRef, useState } from "react";

import useWeather from "../../hooks/useWeather";

import Container from "../../ui/Container";
import ChangeMapView from "./ChangeMapView";
import MapMarker from "./MapMarker";

const Map = () => {
	const { forecast, updateForecast } = useWeather();
	const [zoom, setZoom] = useState(9);
	const mapRef = useRef();
	const { location, cityName, condition, temp } = forecast.current;

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
				<TileLayer
					attribution='&copy; <a href="https://openweathermap.org">OpenWeather</a> contributors'
					url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=3960cd393d839b44f5b1434370c66d00"
				/>
				<MapMarker
					info={{ cityName: cityName, condition: condition, temp: temp }}
					position={[location.lat, location.lng]}
				/>
				<ChangeMapView onMapClick={handleMapClick} />
			</MapContainer>
		</Container>
	);
};

export default Map;
