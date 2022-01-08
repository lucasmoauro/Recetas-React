import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipeCategory } from "../../firebase/firebaseService";

import "../../styles/recipeCards.scss";

const RecipesListScreen = () => {
	const [recipes, setRecipes] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		getRecipeCategory(id).then((data) => {
			setRecipes(data);
		});
	}, [id]);

	return (
		<div className="card-container">
			{recipes.map((recipe, i) => {
				return (
					<Link className="card" key={i} to={`/receta/${recipe.id}`}>
						<h1>{recipe.title}</h1>
					</Link>
				);
			})}
			);
		</div>
	);
};

export default RecipesListScreen;
