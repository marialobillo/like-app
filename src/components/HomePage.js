var React = require('react')
var PetComponent = require('./PetComponent');

class HomePage extends React.Component{
	render(){
		return (
			<div className="container">
				<h1 style={style} >
					Welcome to Cat and Dog Cuteness Fight Game!</h1>
					<div className="row">
								<PetComponent
									petName="Cat"
									petImageUrl="https://i.pinimg.com/originals/05/83/69/05836996c7f72c287ad227a937b03dc7.jpg"
								/>
								<PetComponent
									petName="Dog"
									petImageUrl="https://thiswallpaper.com/cdn/hdwallpapers/649/beautiful%20cute%20dog%20high%20resolution%20wallpaper.jpg"
								/>
					</div>
			</div>
		);
	}
}

var style = {
	textAlign : 'center',
	fontSize: '2em',
	color: 'rebeccapurple',
	margin: '15px'
};



module.exports = HomePage;
