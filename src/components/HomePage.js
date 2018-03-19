var React = require('react');
var axios = require('axios');
var PetComponent = require('./PetComponent');

const API_KEY = '123456789';
const CAT_URL = 'http://localhost:63000/cat/?api_key=' + API_KEY;
const DOG_URL = 'http://localhost:63000/dog/?api_key=' + API_KEY;



class HomePage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cat: {likesCount: 0, result: '', imageurl: ''},
			dog: {likesCount: 0, result: '', imageurl: ''}
		};
		this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
		this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
		this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
		this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
	}
	componentDidMount(){
		this.fetchCatImage();
		this.fetchDogImage();
	}
	fetchCatImage(){
		axios.get(CAT_URL)
				.then(function(resp) {
					var imageUrl = resp.data.imageUrl;

					this.setState(function(prevState) {
						return {
							cat: { likesCount: prevState.cat.likesCount,
										 result: prevState.cat.result,
										 imageUrl: imageUrl }
						};
					});
				}.bind(this));
	}
	fetchDogImage(){
		axios.get(DOG_URL)
				.then(function(resp) {
					var imageUrl = resp.data.imageUrl;

					this.setState(function(prevState) {
						return {
							dog: { likesCount: prevState.dog.likesCount,
										 result: prevState.dog.result,
										 imageUrl: imageUrl }
						};
					});
				}.bind(this));
	}

	handleLikeBtnClick(event){
		var petName = event.target.value;

		if(petName === 'Cat'){
			this.setState((prevState) => {
				return {
					cat: {likesCount: prevState.cat.likesCount + 1,
								result: prevState.cat.result},
								imageUrl: prevState.cat.imageUrl
				}
			});
		} else if(petName === 'Dog'){
			this.setState((prevState) => {
				return {
					dog: {likesCount: prevState.dog.likesCount + 1,
								result: prevState.dog.result},
								imageUrl: prevState.dog.imageUrl
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
								result: prevState.cat.result},
								imageUrl: prevState.cat.imageUrl

				}
			});
		} else if(petName === 'Dog'){
			this.setState((prevState) => {
				return {
					dog: {likesCount: prevState.dog.likesCount - 1,
								result: prevState.dog.result},
								imageUrl: prevState.dog.imageUrl

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
							result: catResult,
							imageUrl: prevState.cat.imageUrl

						},
				dog: {likesCount: prevState.dog.likesCount ,
							result: dogResult,
							imageUrl: prevState.dog.imageUrl
						}

			}
		});
	}
	handleStartOverBtnClick(){
		this.setState(() => {
			return {
				cat: {likesCount: 0, result: '', imageUrl: ''},
				dog: {likesCount: 0, result: '', imageUrl: ''}
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
									petImageUrl={this.state.cat.imageurl}
									result={this.state.cat.result}
									onLikeBtnClick={this.handleLikeBtnClick}
									onDislikeBtnClick={this.handleDislikeBtnClick}
								/>
								<PetComponent
									petName="Dog"
									likesCount={this.state.dog.likesCount}
									petImageUrl={this.state.dog.imageurl}
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
