var React = require('react');

class CatComponent extends React.Component{
	handleLikeBtnClick(){
		console.log('CatComponent Like Button');
	}
	handleDislikeBtnClick(){
		console.log('CatComponent DisLike Button')
	}
	render(){
		return (
			<div className="comp">
					 <h3>Cat Component</h3>
					 <img
						 src="https://i.pinimg.com/originals/05/83/69/05836996c7f72c287ad227a937b03dc7.jpg"
						 alt="Cute Cat"
						 className="pet_image"
					 />
					 <br />
					 <button
						 className="btn btn-warning btn-lg pet_btn"
						 onClick={this.handleLikeBtnClick} >
						 Like</button>
					 <button
						 className="btn btn-secondary btn-lg pet_btn"
						 onClick={this.handleDislikeBtnClick} >
						 Dislike</button>

			</div>
		);
	}
}


module.exports = CatComponent;
