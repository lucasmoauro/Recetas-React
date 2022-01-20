import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import useMobileScreen from "../hooks/useMobileScreen";
import Switch from "react-switch";

// import close from "../assets/images/close.png";
import { ReactComponent as Close } from "../assets/images/close-menu.svg";
import { ReactComponent as Burger } from "../assets/images/menu-icon.svg";

import "../styles/navbar.scss";
import { SunSlider } from "../components/SliderImgs/SunSlider";
import { MoonSlider } from "../components/SliderImgs/MoonSlider";
import { context } from "../context/RecipeContext";

export const Navbar = () => {
	const [isClosed, setIsClosed] = useState(true);

	const { isLight, setIsLight } = useContext(context);

	const handleClose = () => {
		setIsClosed(!isClosed);
	};

	const handleChange = () => {
		setIsLight(!isLight);
	};

	return (
		<nav
			className={`navbar ${isClosed ? "navbar__hide" : ""} ${
				isLight ? "navbar-light" : "navbar-dark"
			}`}
		>
			{useMobileScreen() && isClosed ? (
				<Burger
					className={`nav-image ${
						isLight ? "nav-image-light" : "nav-image-dark"
					}`}
					onClick={handleClose}
				/>
			) : (
				<Close
					className={`nav-image close-icon ${
						isLight ? "nav-image-light" : "nav-image-dark"
					}`}
					onClick={handleClose}
				/>
			)}

			<ul className="navbar-links-container">
				{useMobileScreen() === false ? (
					<li className="nav-item dropdown">
						<span
							className={`dropdown-toggle nav-links ${
								isLight ? "nav-links-light" : "nav-links-dark"
							}`}
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Pasteleria
						</span>
						<ul
							className={`dropdown-menu ${
								isLight ? "dropdown-menu-light" : "dropdown-menu-dark"
							}`}
							aria-labelledby="navbarDropdown"
						>
							<Link
								className={`dropdown-item ${
									isLight ? "dropdown-item-light" : "dropdown-item-dark"
								}`}
								to="/recetas/pasteleria-basica"
							>
								Pasteleria Basica
							</Link>
							<Link
								className={`dropdown-item ${
									isLight ? "dropdown-item-light" : "dropdown-item-dark"
								}`}
								to="/recetas/pasteleria-avanzada"
							>
								Pasteleria Avanzada
							</Link>
						</ul>
					</li>
				) : (
					<>
						<Link
							className={`nav-links ${
								isLight ? "nav-links-light" : "nav-links-dark"
							}`}
							to="/recetas/pasteleria-basica"
							onClick={handleClose}
						>
							Pasteleria Basica
						</Link>
						<Link
							className={`nav-links ${
								isLight ? "nav-links-light" : "nav-links-dark"
							}`}
							to="/recetas/pasteleria-avanzada"
							onClick={handleClose}
						>
							Pasteleria Avanzada
						</Link>
					</>
				)}

				<Link
					className={`nav-links ${
						isLight ? "nav-links-light" : "nav-links-dark"
					}`}
					to="/recetas/panaderia"
					onClick={handleClose}
				>
					Panaderia
				</Link>

				<Link
					to="/recetas/chocolateria"
					className={`nav-links ${
						isLight ? "nav-links-light" : "nav-links-dark"
					}`}
					onClick={handleClose}
				>
					Chocolateria
				</Link>
				<div className="theme-switch">
					<Switch
						onChange={handleChange}
						checkedHandleIcon={<SunSlider />}
						uncheckedHandleIcon={<MoonSlider />}
						checked={isLight}
						checkedIcon={false}
						uncheckedIcon={false}
						onColor="#f5f5f5"
						offColor="#000"
					/>
				</div>
			</ul>
		</nav>
	);
};
