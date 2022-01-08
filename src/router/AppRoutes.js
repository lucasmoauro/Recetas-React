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
				<Route exact path="/recetas/:id" element={<RecipesListScreen />} />
				<Route exact path="/receta/:id" element={<RecipeScreen />} />
				<Route path="/" element={<HomeScreen />} />
			</Routes>
		</Suspense>
	);
};
