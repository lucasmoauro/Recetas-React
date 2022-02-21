import React, { lazy, Suspense, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "../components/Loader/Loading";
import { context } from "../context/RecipeContext";

const HomeScreen = lazy(() => import("../home/HomeScreen"));
const RecipeScreen = lazy(() => import("../pages/recipe/RecipeScreen"));
const RecipesListScreen = lazy(() =>
	import("../pages/recipesList/RecipesListScreen")
);

export const AppRoutes = () => {
	const { setIsLight } = useContext(context);

	useEffect(() => {
		if (!localStorage.getItem("theme")) {
			setIsLight(true);
		} else {
			setIsLight(JSON.parse(localStorage.getItem("theme")));
		}
	}, []);

	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route exact path="/recetas/:id" element={<RecipesListScreen />} />
				<Route exact path="/receta/:id" element={<RecipeScreen />} />
				<Route path="/" element={<HomeScreen />} />
				<Route path="/*" element={<HomeScreen />} />
			</Routes>
		</Suspense>
	);
};
