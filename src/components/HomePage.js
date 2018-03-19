var React = require('react')
var PetComponent = require('./PetComponent');


class HomePage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cat: {likesCount: 0, result: ''},
			dog: {likesCount: 0, result: ''}
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
					cat: {likesCount: prevState.cat.likesCount + 1,
								result: prevState.cat.result}
				}
			});
		} else if(petName === 'Dog'){
			this.setState((prevState) => {
				return {
					dog: {likesCount: prevState.dog.likesCount + 1,
								result: prevState.dog.result}
				}
			});
		}
	}
	handleDislikeBtnClick(event){
		var petName = event.target.value;

		if(petName === 'Cat'){
			this.setState((prevState) => {
				return {
					cat: {likesCount: prevState.cat.likesCount - 1,
								result: prevState.cat.result}
				}
			});
		} else if(petName === 'Dog'){
			this.setState((prevState) => {
				return {
					dog: {likesCount: prevState.dog.likesCount - 1,
								result: prevState.dog.result}
				}
			});
		}
	}

	handleShowWinnerBtnClick(){
		var catLikesCount = this.state.cat.likesCount;
		var dogLikesCount = this.state.dog.likesCount;
		var catResult = 'TIE';
		var dogResult = 'TIE';

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
		this.setState((prevState) => {
			return {
				cat: {likesCount: prevState.cat.likesCount ,
							result: catResult},
				dog: {likesCount: prevState.dog.likesCount ,
							result: dogResult}

			}
		});
	}
	handleStartOverBtnClick(){
		this.setState(() => {
			return {
				cat: {likesCount: 0, result: ''},
				dog: {likesCount: 0, result: ''}
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
									likesCount={this.state.cat.likesCount}
									petImageUrl="https://i.pinimg.com/originals/05/83/69/05836996c7f72c287ad227a937b03dc7.jpg"
									result={this.state.cat.result}
									onLikeBtnClick={this.handleLikeBtnClick}
									onDislikeBtnClick={this.handleDislikeBtnClick}
								/>
								<PetComponent
									petName="Dog"
									likesCount={this.state.dog.likesCount}
									petImageUrl="https://thiswallpaper.com/cdn/hdwallpapers/649/beautiful%20cute%20dog%20high%20resolution%20wallpaper.jpg"
									result={this.state.dog.result}
									onLikeBtnClick={this.handleLikeBtnClick}
									onDislikeBtnClick={this.handleDislikeBtnClick}
								/>
					</div>
					<div className="row boton">
						{	!this.state.dog.result &&
							<button
							className="btn btn-lg btn-warning"
							onClick={this.handleShowWinnerBtnClick}
							>Show Winner</button>}
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
