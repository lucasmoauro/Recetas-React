import { useContext } from "react";
import { context } from "../../context/RecipeContext";
import "../../styles/search.scss";

export const Search = () => {
	const { setSearch } = useContext(context);

	const handleChange = (e) => {
		e.preventDefault();
		const query = e.target.value;
		setSearch(query);
	};

	return (
		<div className="search-container">
			<input
				type="text"
				name="search"
				id="search"
				className="search"
				placeholder="Buscar receta..."
				autoComplete="off"
				onChange={handleChange}
			/>
		</div>
	);
};
