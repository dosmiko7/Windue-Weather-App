import { useEffect, useState } from "react";

export const useMediumRes = () => {
	const [isMediumRes, setIsMediumRes] = useState(1280 >= window.innerWidth);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1280px)");

		const handleWidthChange = (e) => {
			setIsMediumRes(e.matches);
		};

		mediaQuery.addEventListener("change", handleWidthChange);

		return () => {
			mediaQuery.removeEventListener("change", handleWidthChange);
		};
	}, []);

	return { isMediumRes };
};
