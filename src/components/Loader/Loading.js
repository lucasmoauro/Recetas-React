import Loader from "react-loader-spinner";
import "../../styles/utils.scss";

export const Loading = () => {
	return (
		<div className="height-50 flex">
			<div>
				<Loader
					className="align"
					type="Bars"
					heigth="100"
					width="100"
					color="#00BFFF"
					arialLabel="loading-indicator"
				/>
			</div>
		</div>
	);
};
