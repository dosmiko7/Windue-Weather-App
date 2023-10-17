import { rapidAPIKey } from "./APIKeys";

const getCities = async ({ location }) => {
	const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${location}/nearbyCities?radius=100&types=CITY&distanceUnit=KM&minPopulation=10000&limit=5`;
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": `${rapidAPIKey}`,
			"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		return result;
	} catch (error) {
		console.error("Error while fetching cities: " + error);
	}
};

export default getCities;
