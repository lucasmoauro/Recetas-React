import data from "../lib/mock/recipesMock.json";
import "../styles/recipeCards.scss";

export const HomeScreen = () => {
	return (
		<div className="card-container">
			{data.map((recipe, i) => {
				return (
					<div className="card" key={i}>
						<h1>{recipe.title}</h1>
						<p>{recipe.description}</p>
					</div>
				);
			})}
		</div>
	);
};
