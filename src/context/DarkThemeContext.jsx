import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const DarkThemeContext = createContext();

const DarkThemeProvider = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(true);

	const toggleDarkTheme = () => {
		setIsDarkTheme((prevTheme) => !prevTheme);
	};

	useEffect(() => {
		if (isDarkTheme) {
			document.documentElement.classList.add("dark-theme");
			document.documentElement.classList.remove("light-theme");
		} else {
			document.documentElement.classList.add("light-theme");
			document.documentElement.classList.remove("dark-theme");
		}
	}, [isDarkTheme]);

	return <DarkThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>{children}</DarkThemeContext.Provider>;
};

DarkThemeProvider.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default DarkThemeProvider;
