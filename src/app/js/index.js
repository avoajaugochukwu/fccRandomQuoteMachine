var React = require('react');
var ReactDOM = require('react-dom');

class Layout extends React.Component {

	backgroundColor () {
		var colorArray = ['green', 'pink', 'yellow', 'blue', 'brown'];
		var randomNumber = Math.floor(Math.random() * colorArray.length);
		document.body.style.backgroundColor = colorArray[randomNumber];
		console.log(randomNumber);
	}

	render() {
		return (
			<div>
				<h1>Color Changer</h1>
				<button onClick={this.backgroundColor}>Change Color</button>
			</div>
		);
	}
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);