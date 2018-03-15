var React = require('react');

class PetComponent extends React.Component{
	handleLikeBtnClick(){
		console.log(this.props.petName + ' Component Like Button');
	}
	handleDislikeBtnClick(){
		console.log(this.props.petName + 'Component DisLike Button')
	}

	render(){
		return (
			<div className="comp">
				<h3>{this.props.petName} Component</h3>
				<img
					src={this.props.petImageUrl}
					alt="cute pet"
					className="pet_image"
				/>
				<br />
				<button
					className="btn btn-warning btn-lg pet_btn"
					onClick={this.handleLikeBtnClick}>Like</button>
				<button
					className="btn btn-secondary btn-lg pet_btn"
					onClick={this.handleDislikeBtnClick}>Dislike</button>
			</div>
		);
	}
}


module.exports = PetComponent;
