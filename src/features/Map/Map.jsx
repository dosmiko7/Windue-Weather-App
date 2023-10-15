import { MapContainer, TileLayer, useMap } from "react-leaflet";
import Container from "../../ui/Container";

const Map = () => {
	const mapStyles = {
		width: "100%",
		height: "400px",
	};

	const ChangeMapView = () => {
		const map = useMap();
		map.setView([51.505, -0.09], 13);
		return null;
	};

	return (
		<Container variant="nonColor">
			<MapContainer
				center={{ lat: 51.505, lng: -0.09 }}
				zoom={13}
				scrollWheelZoom={false}
				style={mapStyles}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=05da97fe7db591db6f362786e177e635`}
				/>
				<ChangeMapView />
			</MapContainer>
		</Container>
	);
};

export default Map;
