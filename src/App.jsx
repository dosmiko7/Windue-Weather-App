import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Starter from "./windows/Starter";
import Weather from "./windows/Weather";
import Cities from "./windows/Cities";
import Geolocation from "./windows/Geolocation";
import DarkThemeProvider from "./context/DarkThemeContext";

const App = () => {
	return (
		<DarkThemeProvider>
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
		</DarkThemeProvider>
	);
};

export default App;
