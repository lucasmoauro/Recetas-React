import { Link } from "react-router-dom";
import "../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar-links">
				<li className="nav-item dropdown">
					<span
						className="dropdown-toggle"
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
				<Link className="nav-links" to="/recetas/panaderia">
					Panaderia
				</Link>

				<Link to="/recetas/chocolateria" className="nav-links">
					Chocolateria
				</Link>
			</ul>
		</nav>
	);
};
