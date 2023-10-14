import { useEffect, useState } from "react";

export const useGeolocation = () => {
	const [userLocation, setUserLocation] = useState("");

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setUserLocation(`${latitude},${longitude}`);
				},
				(error) => {
					console.error("Error getting user location:", error);
					setUserLocation("Warsaw");
				}
			);
		} else {
			console.error("Geolocation is not supported in this browser.");
			setUserLocation("Warsaw");
		}
	}, []);

	return { userLocation };
};
