import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "../components/Loader/Loader";

//Lazy loading of components
const HomeScreen = lazy(() => import("../home/HomeScreen"));
const RecipeScreen = lazy(() => import("../pages/recipe/RecipeScreen"));
const RecipesListScreen = lazy(() =>
	import("../pages/recipesList/RecipesListScreen")
);

export const AppRoutes = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route
					exact
					path="/pasteleria-basica"
					element={<RecipesListScreen />}
				/>
				<Route
					exact
					path="/pasteleria-avanzada"
					element={<RecipesListScreen />}
				/>
				<Route exact path="/chocolateria" element={<RecipesListScreen />} />
				<Route exact path="/panaderia" element={<RecipesListScreen />} />
				<Route exact path="/viennoiserie" element={<RecipesListScreen />} />
				<Route exact path="/receta/:id" element={<RecipeScreen />} />
				<Route path="/" element={<HomeScreen />} />
			</Routes>
		</Suspense>
	);
};
