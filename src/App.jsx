import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { GlobalStyles } from "./styles/GlobalStyles";

import DarkThemeProvider from "./context/DarkThemeContext";
import WeatherContextProvider from "./context/WeatherContext";
import AppLayout from "./ui/AppLayout";
import Starter from "./windows/Starter";
import Weather from "./windows/Weather";
import Cities from "./windows/Cities";
import Geolocation from "./windows/Geolocation";
import PageNotFound from "./windows/PageNotFound";

const App = () => {
	return (
		<DarkThemeProvider>
			<WeatherContextProvider>
				<GlobalStyles />
				<BrowserRouter>
					<Routes>
						<Route
							index
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
								path="map"
								element={<Geolocation />}
							/>
						</Route>
						<Route
							path="*"
							element={<PageNotFound />}
						/>
					</Routes>
				</BrowserRouter>
				<Toaster
					position="top-center"
					gutter={12}
					containerStyle={{ margin: "8px" }}
					toastOptions={{
						success: {
							duration: 3000,
						},
						error: {
							duration: 5000,
						},
						style: {
							fontSize: "16px",
							maxWidth: "500px",
							padding: "16px 24px",
							backgroundColor: "var(--background-color-1)",
							color: "var(--font-color-1)",
						},
					}}
				/>
			</WeatherContextProvider>
		</DarkThemeProvider>
	);
};

export default App;
