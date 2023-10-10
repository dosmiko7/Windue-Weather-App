import Button from "./Button";
import useDarkTheme from "../hooks/useDarkTheme";

const DarkThemeToggle = () => {
	const { toggleDarkTheme } = useDarkTheme();

	return <Button onClick={toggleDarkTheme}>Change Theme</Button>;
};

export default DarkThemeToggle;
