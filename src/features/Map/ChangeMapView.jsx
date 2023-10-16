import { useMapEvent } from "react-leaflet";
import PropTypes from "prop-types";

const ChangeMapView = ({ onMapClick }) => {
	useMapEvent("click", onMapClick);
	return null;
};

ChangeMapView.propTypes = {
	onMapClick: PropTypes.func.isRequired,
};

export default ChangeMapView;
