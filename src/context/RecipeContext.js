import { createContext, useEffect, useState } from "react";

export const context = createContext();

export const RecipeContext = ({ children }) => {
	const [recipes, setRecipes] = useState([]);

	const [search, setSearch] = useState("");

	const { Provider } = context;

	const [isLight, setIsLight] = useState(true);

	

	useEffect(() => {
		if (isLight) {
			document.body.classList.remove("body-dark");
			document.body.classList.add("body-light");
		} else {
			document.body.classList.remove("body-light");
			document.body.classList.add("body-dark");
		}

		localStorage.setItem("theme", isLight);
	}, [isLight]);

	const initialValue = {
		recipes,
		setRecipes,
		search,
		setSearch,
		setIsLight,
		isLight
	};

	return <Provider value={initialValue}>{children}</Provider>;
};
