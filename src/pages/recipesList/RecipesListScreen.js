import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Loading } from "../../components/Loader/Loading";
import { getRecipeCategory } from "../../firebase/firebaseService";

import "../../styles/recipeCards.scss";

const RecipesListScreen = () => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		setRecipes([]);
		getRecipeCategory(id).then((data) => {
			setRecipes(data);
			setLoading(false);
		});
	}, [id]);

	return (
		<div className="card-container mt-3">
			{loading ? (
				<Loading />
			) : (
				recipes.map((recipe, i) => {
					return (
						<Link className="card animate__animated animate__fadeIn" key={i} to={`/receta/${recipe.id}`}>
							<span>{recipe.title}</span>
						</Link>
					);
				})
			)}
		</div>
	);
};

export default RecipesListScreen;
