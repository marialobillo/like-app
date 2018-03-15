var React = require('react');

class PetComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			likesCount: 0
		};
		this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
		this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
	}
	handleLikeBtnClick(){
		this.setState((prevState) => {
			return {
				likesCount: prevState.likesCount + 1
			}
		});
	}
	handleDislikeBtnClick(){
		this.setState((prevState) => {
			return {
				likesCount: prevState.likesCount - 1
			}
		});
	}

	render(){
		return (
			<div className="comp">
				<h3>{this.props.petName} Likes: {this.state.likesCount}</h3>
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
