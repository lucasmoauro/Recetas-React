import { createContext, useState } from "react";

export const context = createContext();

export const RecipeContext = ({ children }) => {
	const [recipes, setRecipes] = useState([]);

	const [search, setSearch] = useState("");

	const { Provider } = context;

	const initialValue = {
		recipes,
		setRecipes,
		search,
		setSearch,
	};

	return <Provider value={initialValue}>{children}</Provider>;
};
