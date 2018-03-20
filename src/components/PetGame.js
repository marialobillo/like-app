var React = require('react');
var axios = require('axios');
var PetComponent = require('./PetComponent');

var style = {
	textAlign: 'center',
	fontSize: '2em',
	color: 'rebeccapurple'
};

var btnStyle = {
	marginTop: '30px',
	marginRight: '5px',
	height: '25px'
};

var API_KEY = '123456789';

var CAT_URL = 'http://localhost:63000/cat/?api_key=' + API_KEY;
var DOG_URL = 'http://localhost:63000/dog/?api_key=' + API_KEY;

class PetGame extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cat: { result: '', imageUrl: '' },
			dog: { result: '', imageUrl: '' }
		};
		this.catLikesCount = 0;
		this.dogLikesCount = 0;
		this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
		this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
		this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
		this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
	}
	componentDidMount() {
		this.fetchImages();
	}
	
	fetchPetImage(PET_URL, petName){
		axios.get(PET_URL)
				.then(function(resp){
					var imageUrl = resp.data.imageUrl;
					this.setState((prevState) => {
						var state = {};
						state[petName] = {
							result: prevState[petName].result,
							imageUrl: imageUrl
						};
						return state;
					});
				}.bind(this));
	}
	fetchImages() {
		this.fetchCatImage();
		this.fetchDogImage();
	}
	handleLikeDislikeBtnClicks(petName, operation){
		this.fetchImages();

		if (petName === 'Cat') {
			this.catLikesCount += operation;
		} else if (petName === 'Dog') {
			this.dogLikesCount += operation;
		}
	}
	handleLikeBtnClick(event) {
		this.handleLikeDislikeBtnClicks(event.target.value, 1);
	}
	handleDislikeBtnClick(event) {
		this.handleLikeDislikeBtnClicks(event.target.value, -1);
	}
	handleShowWinnerBtnClick() {
		var catLikesCount = this.catLikesCount;
		var dogLikesCount = this.dogLikesCount;
		var catResult = 'TIE';
		var dogResult = 'TIE';

		if (catLikesCount > dogLikesCount) {
			catResult = 'WINNER';
			dogResult = 'LOSER';
		} else if (catLikesCount < dogLikesCount) {
			catResult = 'LOSER';
			dogResult = 'WINNER';
		}

		this.setState(function(prevState) {
			return {
				cat: { result: catResult, imageUrl: prevState.cat.imageUrl },
				dog: { result: dogResult, imageUrl: prevState.dog.imageUrl }
			};
		});
	}
	handleStartOverBtnClick() {
		this.fetchImages();
		this.catLikesCount = 0;
		this.dogLikesCount = 0;
		this.setState({
			cat: { result: '', imageUrl: '' },
			dog: { result: '', imageUrl: '' }
		});
	}
	render() {
		return (
			<div>
				<div style={{marginTop: 60, textAlign: 'center'}}>
					<PetComponent
						petName="Cat"
						likesCount={this.catLikesCount}
						petImageUrl={this.state.cat.imageUrl}
						result={this.state.cat.result}
						onLikeBtnClick={this.handleLikeBtnClick}
						onDislikeBtnClick={this.handleDislikeBtnClick}
					/>
					<PetComponent
						petName="Dog"
						likesCount={this.dogLikesCount}
						petImageUrl={this.state.dog.imageUrl}
						result={this.state.dog.result}
						onLikeBtnClick={this.handleLikeBtnClick}
						onDislikeBtnClick={this.handleDislikeBtnClick}
					/>
				</div>
				<div style={{textAlign: 'center'}}>
					{!this.state.dog.result &&
						<button style={btnStyle} onClick={this.handleShowWinnerBtnClick}>Show Winner</button>}
					<button style={btnStyle} onClick={this.handleStartOverBtnClick}>Start Over</button>
				</div>
			</div>
		);
	}
}

module.exports = PetGame;
