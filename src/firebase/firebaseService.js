import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const recipes = collection(db, "recipes");
const recipesDB = getDocs(recipes);

export const getRecipe = async (id) => {
	const recipe = doc(db, "recipes", id);

	const recipeRef = await getDoc(recipe);

	return recipeRef.data();
};

export const getRecipeCategory = (category) => {
	return recipesDB.then((data) => {
		const arr = [];
		data.forEach((doc) => {
			arr.push(doc.data());
		});
		return arr.filter((recipe) => recipe.category === category);
	});
};
