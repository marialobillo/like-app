var React = require('react');


var PetComponent = function(props){
	var result = null;
	var disabled = false;

	if (props.result !== ''){
		var resultStyle = null;
		if(props.result === 'LOSER'){
			resultStyle = { color: 'red'};
		} else {
			resultStyle = { color: 'green'};
		}
		result = <h2 style={resultStyle}>{props.result}</h2>;
		disabled = true;
	}

	return (
		<div className="comp">
			{result}
			{(props.result) ? (
				<h3>{props.petName} Likes: {props.likesCount}</h3>
			) : (
				<h3>{props.petName}</h3>
			)}
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
				disabled={disabled}
				>Like</button>
			<button
				className="btn btn-secondary btn-lg pet_btn"
				onClick={props.onDislikeBtnClick}
				value={props.petName}
				disabled={disabled}
				>Dislike</button>
		</div>
	);
}



module.exports = PetComponent;
