const getCities = async ({ location }) => {
	try {
		const response = await fetch(
			`https://secure.geonames.org/findNearbyPlaceNameJSON?lat=${location.lat}&lng=${location.lng}&radius=100&cities=cities5000&maxRows=5&username=dosmiko`
		);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Error while fetching cities: " + error);
	}
};

export default getCities;
