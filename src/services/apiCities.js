const getCities = async ({ location }) => {
	try {
		const response = await fetch(
			`http://api.geonames.org/findNearbyPlaceNameJSON?lat=${location.lat}&lng=${location.lng}&radius=50&cities=cities5000&username=dosmiko`
		);
		//const response = await fetch("https://random-data-api.com/api/v2/users?size=2");
		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Error while fetching cities: " + error);
	}
};

export default getCities;
