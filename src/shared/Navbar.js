import { Link } from "react-router-dom";
import useMobileScreen from "../hooks/useMobileScreen";
import close from "../assets/images/close.png";
import burguer from "../assets/images/bars-solid.svg";
import "../styles/navbar.scss";
import { useState } from "react";

export const Navbar = () => {
	const [isClosed, setIsClosed] = useState(true);

	const handleClose = () => {
		setIsClosed(!isClosed);
	};

	return (
		<nav className={`navbar ${isClosed ? "navbar__hide" : ""}`}>
			{useMobileScreen() && isClosed ? (
				<img src={burguer} alt="" className="nav-image" onClick={handleClose} />
			) : (
				<img src={close} alt="" className="nav-image" onClick={handleClose} />
			)}

			<ul className="navbar-links-container">
				{useMobileScreen() === false ? (
					<li className="nav-item dropdown">
						<span
							className="dropdown-toggle nav-links"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Pasteleria
						</span>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
							<Link className="dropdown-item" to="/recetas/pasteleria-basica">
								Pasteleria Basica
							</Link>
							<Link className="dropdown-item" to="/recetas/pasteleria-avanzada">
								Pasteleria Avanzada
							</Link>
						</ul>
					</li>
				) : (
					<>
						<Link
							className="nav-links"
							to="/recetas/pasteleria-basica"
							onClick={handleClose}
						>
							Pasteleria Basica
						</Link>
						<Link
							className="nav-links"
							to="/recetas/pasteleria-avanzada"
							onClick={handleClose}
						>
							Pasteleria Avanzada
						</Link>
					</>
				)}

				<Link
					className="nav-links"
					to="/recetas/panaderia"
					onClick={handleClose}
				>
					Panaderia
				</Link>

				<Link
					to="/recetas/chocolateria"
					className="nav-links"
					onClick={handleClose}
				>
					Chocolateria
				</Link>
			</ul>
		</nav>
	);
};
