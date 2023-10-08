import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Starter from "./windows/Starter";
import Weather from "./windows/Weather";

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
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
