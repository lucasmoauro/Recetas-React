import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router/AppRoutes";
import { Navbar } from "./shared/Navbar";
import { ToTop } from "./shared/ToTop";

import "animate.css";
import { RecipeContext } from "./context/RecipeContext";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<RecipeContext>
				<AppRoutes />
			</RecipeContext>
			<ToTop />
		</BrowserRouter>
	);
}

export default App;
