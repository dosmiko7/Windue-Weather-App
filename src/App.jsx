import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles";

import DarkThemeProvider from "./context/DarkThemeContext";
import WeatherContextProvider from "./context/WeatherContext";
import AppLayout from "./ui/AppLayout";
import Starter from "./windows/Starter";
import Weather from "./windows/Weather";
import Cities from "./windows/Cities";
import Geolocation from "./windows/Geolocation";

const App = () => {
	return (
		<DarkThemeProvider>
			<WeatherContextProvider>
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
								path="geolocation"
								element={<Geolocation />}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</WeatherContextProvider>
		</DarkThemeProvider>
	);
};

export default App;
