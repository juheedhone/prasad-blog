import { useEffect, useState } from "react";

const useIsMobile = (breakpoint = 768) => {
	const [isMobile, setIsMobile] = useState(false);

	const checkIsMobile = () => {
		if (typeof window !== "undefined") {
			return window.innerWidth < breakpoint;
		}
		return false;
	};

	useEffect(() => {
		// Set initial value
		setIsMobile(checkIsMobile());

		// Update on resize
		const handleResize = () => {
			setIsMobile(checkIsMobile());
		};

		// Attach event listener for window resize
		if (typeof window !== "undefined") {
			window.addEventListener("resize", handleResize);
		}

		// Cleanup event listener on unmount
		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
		};
	}, [breakpoint]);

	return isMobile;
};

export default useIsMobile;
