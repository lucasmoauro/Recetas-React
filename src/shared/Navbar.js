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
						<Link className="dropdown-item" to="/pasteleria-basica">
							Pasteleria Basica
						</Link>
						<Link className="dropdown-item" to="/pasteleria-avanzada">
							Pasteleria Avanzada
						</Link>
					</ul>
				</li>
				<li className="nav-item dropdown">
					<span
						className="dropdown-toggle"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Panaderia
					</span>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<Link className="dropdown-item" to="/panaderia">
							Panaderia
						</Link>
						<Link className="dropdown-item" to="/viennoiserie">
							Viennoiserie
						</Link>
					</ul>
				</li>
				<Link to="/chocolateria" className="nav-links">
					Chocolateria
				</Link>
			</ul>
		</nav>
	);
};
