import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Starter from "./windows/Starter";
import Weather from "./windows/Weather";
import Cities from "./windows/Cities";
import Geolocation from "./windows/Geolocation";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Starter />}
					/>
					<Route element={<AppLayout />}>
						<Route
							path="weather"
							element={<Weather />}
						/>
						<Route
							path="cities"
							element={<Cities />}
						/>
						<Route
							path="Geolocation"
							element={<Geolocation />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
