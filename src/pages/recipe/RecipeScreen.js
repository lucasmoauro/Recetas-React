import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loader/Loading";
import { getRecipe } from "../../firebase/firebaseService";
import "../../styles/recipe.scss";

const RecipeScreen = () => {
	const [recipe, setRecipe] = useState({});
	const [loading, setloading] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		setloading(true);
		getRecipe(id).then((data) => {
			setRecipe(data);
			setloading(false);
		});
	}, [id]);

	return (
		<div className="recipe-container">
			{loading ? (
			<Loading />
			) : (
				<div className="recipe">
					<h1 className="recipe-title">{recipe.title}</h1>

					{recipe.image?.map((img, i) => {
						return <img key={i} className="recipe-image" src={img} alt="" />;
					})}
				</div>
			)}
		</div>
	);
};

export default RecipeScreen;
