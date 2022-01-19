import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Loading } from "../../components/Loader/Loading";
import { Search } from "../../components/Search/Search";
import { context } from "../../context/RecipeContext";
import { getRecipeCategory } from "../../firebase/firebaseService";

import "../../styles/recipeCards.scss";

const RecipesListScreen = () => {
	const { recipes, setRecipes, search, isLight } = useContext(context);
	const [loading, setLoading] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		setRecipes([]);
		getRecipeCategory(id).then((data) => {
			setRecipes(data);
			setLoading(false);
		});
	}, [id]);

	const filteredRecipes = recipes.filter((recipe) => {
		return recipe.title.toLowerCase().includes(search.toLowerCase());
	});

	return (
		<div className="card-container mt-3">
			{!loading && <Search />}
			{loading ? (
				<Loading />
			) : (
				filteredRecipes.map((recipe, i) => {
					return (
						<Link
							className={`card animate__animated animate__fadeIn ${isLight ? "card-light" : "card-dark"}`}
							key={i}
							to={`/receta/${recipe.id}`}
						>
							<span>{recipe.title}</span>
						</Link>
					);
				})
			)}
		</div>
	);
};

export default RecipesListScreen;
