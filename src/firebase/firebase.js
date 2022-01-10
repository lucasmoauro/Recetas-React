import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCG_tcqVm08qv_R9jVRb7QCo3pJjghhTMU",
	authDomain: "recetas-react-99007.firebaseapp.com",
	databaseURL: "https://recetas-react-99007-default-rtdb.firebaseio.com",
	projectId: "recetas-react-99007",
	storageBucket: "recetas-react-99007.appspot.com",
	messagingSenderId: "967362440001",
	appId: "1:967362440001:web:e095a563a4415ea1eb0fc0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
