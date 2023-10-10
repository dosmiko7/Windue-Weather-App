import { useContext } from "react";
import { DarkThemeContext } from "../context/DarkThemeContext";

const useDarkTheme = () => {
	const context = useContext(DarkThemeContext);
	if (context === undefined) {
		throw new Error("DarkModeContext was used outside of DarkModeProvider");
	}

	return context;
};

export default useDarkTheme;
