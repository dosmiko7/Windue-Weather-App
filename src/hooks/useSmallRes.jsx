import { useEffect, useState } from "react";

export const useSmallRes = () => {
	const [isSmallRes, setIsSmallRes] = useState(1280 >= window.innerWidth);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 950px)");

		const handleWidthChange = (e) => {
			setIsSmallRes(e.matches);
		};

		mediaQuery.addEventListener("change", handleWidthChange);

		return () => {
			mediaQuery.removeEventListener("change", handleWidthChange);
		};
	}, []);

	return { isSmallRes };
};
