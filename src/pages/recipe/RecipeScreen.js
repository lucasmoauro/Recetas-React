import "../../styles/recipe.scss";

const RecipeScreen = () => {
	
	return (
		<div className="recipe-container">
			<div className="recipe">
				<h1 className="recipe-title">Recipe Screen</h1>

				<img
					style={{ maxWidth: "80%" }}
					src="https://res.cloudinary.com/dw33r7aul/image/upload/v1641524630/Recetas-React/Chocolateria/Almendras-al-chocolate.pdf/Almendras-al-chocolate.pdf-1_rq0zz8.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default RecipeScreen;
