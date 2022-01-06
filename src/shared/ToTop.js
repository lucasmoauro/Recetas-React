import { useEffect, useState } from "react";
import arrow from "../assets/images/up-arrow.svg";
import "../styles/toTop.scss";

export const ToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<>
			{isVisible && (
				<div
					onClick={scrollToTop}
					className="to-top animate__animated animate__fadeIn"
				>
					<img src={arrow} alt="" />
				</div>
			)}
		</>
	);
};
