var React = require('react');

class DogComponent extends React.Component{
	handleLikeBtnClick(){
		console.log('DogComponent Like Button');
	}
	handleDislikeBtnClick(){
		console.log('DogComponent DisLike Button')
	}

	render(){
		return (
			<div className="comp">
				<h3>Dog Component</h3>
				<img
					src="https://thiswallpaper.com/cdn/hdwallpapers/649/beautiful%20cute%20dog%20high%20resolution%20wallpaper.jpg"
					alt="cute dog"
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


module.exports = DogComponent;
