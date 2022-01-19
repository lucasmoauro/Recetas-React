import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { context } from "../../context/RecipeContext";
import "../../styles/search.scss";

export const Search = () => {
	const { setSearch, isLight } = useContext(context);

	const { id } = useParams();

	const handleChange = (e) => {
		e.preventDefault();
		const query = e.target.value;
		setSearch(query);
	};

	useEffect(() => {
		setSearch("");
	}, [id]);

	return (
		<div className="search-container">
			<input
				type="text"
				name="search"
				id="search"
				className={`search ${ isLight ? "search-light" : "search-dark"}`}
				placeholder="Buscar receta..."
				autoComplete="off"
				onChange={handleChange}
				
			/>
		</div>
	);
};
