var React = require('react')
var PetComponent = require('./PetComponent');


class HomePage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			catLikesCount: 0,
			dogLikesCount: 0,
			catResult: '',
			dogResult: ''
		};
		this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
		this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
		this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
		this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
	}
	handleLikeBtnClick(event){
		var petName = event.target.value;

		if(petName === 'Cat'){
			this.setState((prevState) => {
				return {
					catLikesCount: prevState.catLikesCount + 1,
				}
			});
		} else if(petName === 'Dog'){
			this.setState((prevState) => {
				return {
					dogLikesCount: prevState.dogLikesCount + 1
				}
			});
		}
	}
	handleDislikeBtnClick(event){
		var petName = event.target.value;

		if(petName === 'Cat'){
			this.setState((prevState) => {
				return {
					catLikesCount: prevState.catLikesCount - 1,
				}
			});
		} else if(petName === 'Dog'){
			this.setState((prevState) => {
				return {
					dogLikesCount: prevState.dogLikesCount - 1
				}
			});
		}
	}

	handleShowWinnerBtnClick(){
		var catLikesCount = this.state.catLikesCount;
		var dogLikesCount = this.state.dogLikesCount;
		var catResult = 'TIE';
		var dogResult = 'TIE';

		console.log(this.catCompInstRef);
		console.log(this.dogCompInstRef);

		if(catLikesCount > dogLikesCount){
			catResult = 'WINNER';
			dogResult = 'LOSER';
		} else if (catLikesCount < dogLikesCount){
			catResult = 'LOSER';
			dogResult = 'WINNER';
		}
		this.setState({
			catResult: catResult,
			dogResult: dogResult
		});
	}
	handleStartOverBtnClick(){
		this.setState(() => {
			return {
				catLikesCount: 0,
				dogLikesCount: 0
			}
		});
	}
	render(){
		return (
			<div className="container">
				<h1 className="title" >
					Welcome to Cat and Dog Cuteness Fight Game!</h1>
					<div className="row">
								<PetComponent
									petName="Cat"
									likesCount={this.state.catLikesCount}
									petImageUrl="https://i.pinimg.com/originals/05/83/69/05836996c7f72c287ad227a937b03dc7.jpg"
									result={this.state.catResult}
									onLikeBtnClick={this.handleLikeBtnClick}
									onDislikeBtnClick={this.handleDislikeBtnClick}
								/>
								<PetComponent
									petName="Dog"
									likesCount={this.state.dogLikesCount}
									petImageUrl="https://thiswallpaper.com/cdn/hdwallpapers/649/beautiful%20cute%20dog%20high%20resolution%20wallpaper.jpg"
									result={this.state.dogResult}
									onLikeBtnClick={this.handleLikeBtnClick}
									onDislikeBtnClick={this.handleDislikeBtnClick}
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
