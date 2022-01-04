import { useState } from "react";
import "../styles/navbar.scss";

export const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleEnter = () => {
		setShow(true);
	};

	return (
		<nav className="navbar">
			<ul className="navbar-links">
				<li class="nav-item dropdown">
					<span
						class="dropdown-toggle"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						onMouseOver={() => handleEnter}
					>
						Pasteleria
					</span>
					<ul
						class={show ? "dropdown-menu show" : "dropdown-menu"}
						aria-labelledby="navbarDropdown"
					>
						<li class="dropdown-item">Pasteleria Basica</li>
						<li class="dropdown-item"> Pasteleria Avanzada</li>
					</ul>
				</li>
				<li class="nav-item dropdown">
					<span
						class="dropdown-toggle"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Panaderia
					</span>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
						<li class="dropdown-item">Panaderia</li>
						<li class="dropdown-item">Viennoiserie</li>
					</ul>
				</li>
				<li>Chocolateria</li>
			</ul>
		</nav>
	);
};
