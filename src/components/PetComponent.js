var React = require('react');

class PetComponent extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		return (
			<div className="comp">
				<h3>{this.props.petName} Likes: {this.props.likesCount}</h3>
				<img
					src={this.props.petImageUrl}
					alt="cute pet"
					className="pet_image"
				/>
				<br />
				<button
					className="btn btn-warning btn-lg pet_btn"
					onClick={this.props.onLikeBtnClick}
					value={this.props.petName}
					>Like</button>
				<button
					className="btn btn-secondary btn-lg pet_btn"
					onClick={this.props.onDislikeBtnClick}
					value={this.props.petName}
					>Dislike</button>
			</div>
		);
	}
}


module.exports = PetComponent;
