var React = require('react');


var PetComponent = function(props){
	return (
		<div className="comp">
			<h3>{props.petName} Likes: {props.likesCount}</h3>
			<img
				src={props.petImageUrl}
				alt="cute pet"
				className="pet_image"
			/>
			<br />
			<button
				className="btn btn-warning btn-lg pet_btn"
				onClick={props.onLikeBtnClick}
				value={props.petName}
				>Like</button>
			<button
				className="btn btn-secondary btn-lg pet_btn"
				onClick={props.onDislikeBtnClick}
				value={props.petName}
				>Dislike</button>
		</div>
	);
}



module.exports = PetComponent;
