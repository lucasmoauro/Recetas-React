import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";

export const Loader = () => {
	const ref = useRef(null);

	// ref.current.continuousStart();
	// useEffect(() => {
	// 	ref.current.complete();
	// }, []);

	return (
		<div>
			<LoadingBar color="#f11946" ref={ref} />
		</div>
	);
};
