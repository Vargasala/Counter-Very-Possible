import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className= "app d-flex justify-content-center">
				<div className="box icon">
					<p className="far fa-clock"></p>
				</div>

				<div className="box">
					{props.horasDecena}
				</div>

				<div className="box">
				    {props.horasUnidad}
				</div>

				<div className="box">
					{props.minutosDecena}
				</div>

				<div className="box">
					{props.minutosUnidad}
				</div>

				<div className="box">
					{props.segundosDecena}
				</div>

				<div className="box">
					{props.segundosUnidad}
				</div>

		</div>
	);
};

export default Home;
