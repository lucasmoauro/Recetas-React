import { useContext } from "react";
import { context } from "../context/RecipeContext";
import "../styles/utils.scss";

const HomeScreen = () => {

	const { isLight } = useContext(context)



	return (
		<div className="flex height-25">
			<div>
				<p className={`fs-3 text-last text-center alert ${ isLight ? "alert-info" : "alert-warning" } `} >Para empezar seleccione una de las categorías.</p>
			</div>
		</div>
	);
};

export default HomeScreen;
