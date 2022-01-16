import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { context } from "../../context/RecipeContext";
import "../../styles/search.scss";

export const Search = () => {
	const { setSearch } = useContext(context);

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
				className="search"
				placeholder="Buscar receta..."
				autoComplete="off"
				onChange={handleChange}
				
			/>
		</div>
	);
};
