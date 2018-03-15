var React = require('react')
var CatComponent = require('./CatComponent');
var DogComponent = require('./DogComponent');

class HomePage extends React.Component{
	render(){
		var style = {
			textAlign : 'center',
			fontSize: '2em',
			color: 'rebeccapurple',
			margin: '15px'
		};
		return (
			<div className="container">
				<h1 style={style} >
					Welcome to Cat and Dog Cuteness Fight Game!</h1>
					<div className="row">
								<CatComponent clasName="col-md"/>
								<DogComponent className="col-md"/>
					</div>
			</div>
		);
	}
}


module.exports = HomePage;
