var React = require('react')
var PetComponent = require('./PetComponent');


class HomePage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			catLikesCount: 0,
			dogLikesCount: 0
		}
		this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
		this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
		this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
		this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
	}
	handleShowWinnerBtnClick(){
		console.log(this.catCompInstRef);
		console.log(this.dogCompInstRef);

		if(catLikesCount > dogLikesCount){
			console.log('Cat is the Winner');
		} else if (catLikesCount < dogLikesCount){
			console.log('Dog is the Winner');
		} else {
			console.log('Game is a TIE');
		}

	}
	handleLikeBtnClick(){

	}
	handleDislikeBtnClick(){

	}
	handleStartOverBtnClick(){

	}
	render(){
		return (
			<div className="container">
				<h1 className="title" >
					Welcome to Cat and Dog Cuteness Fight Game!</h1>
					<div className="row">
								<PetComponent
									petName="Cat"
									likesCount={catLikesCount}
									petImageUrl="https://i.pinimg.com/originals/05/83/69/05836996c7f72c287ad227a937b03dc7.jpg"
								/>
								<PetComponent
									petName="Dog"
									likesCount={dogLikesCount}
									petImageUrl="https://thiswallpaper.com/cdn/hdwallpapers/649/beautiful%20cute%20dog%20high%20resolution%20wallpaper.jpg"
								/>
					</div>
					<div className="row boton">
						<button
							className="btn btn-lg btn-warning"
							onClick={this.handleShowWinnerBtnClick}
							>Show Winner</button>
						<button
							className="btn btn-lg btn-info"
							onClick={this.handleStartOverBtnClick}
							>Start Over</button>
					</div>
			</div>
		);
	}
}



module.exports = HomePage;
