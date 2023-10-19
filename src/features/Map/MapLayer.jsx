import { TileLayer } from "react-leaflet";
import PropTypes from "prop-types";

const MapLayer = ({ layer }) => {
	if (layer === "default") return null;
	const url = `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=3960cd393d839b44f5b1434370c66d00`;

	return (
		<TileLayer
			attribution='&copy; <a href="https://openweathermap.org">OpenWeather</a> contributors'
			url={url}
		/>
	);
};

MapLayer.propTypes = {
	layer: PropTypes.array.isRequired,
};

export default MapLayer;
