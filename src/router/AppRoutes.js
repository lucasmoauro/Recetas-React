import {  Route, Routes } from "react-router-dom";
import { HomeScreen } from "../home/HomeScreen";

export const AppRoutes = () => {
	return (
			<Routes>
				<Route exact path="/pasteleria-basica" />
				<Route exact path="/pasteleria-avanzada" />
				<Route exact path="/chocolateria" />
				<Route exact path="/panaderia" />
				<Route exact path="/viennoiserie" />
				<Route path="/" element={<HomeScreen />}/>
			</Routes>
	);
};
