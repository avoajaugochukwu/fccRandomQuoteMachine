var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
	var quote;
$(document).ready(function() {





class Layout extends React.Component {

	changeBackgroundAndQuote () {
		var colorArray = ['green', 'pink', 'yellow', 'blue', 'brown'];
		var randomNumber = Math.floor(Math.random() * colorArray.length);
		document.body.style.backgroundColor = colorArray[randomNumber];


			$.getJSON({
	        url: "http://quotes.stormconsultancy.co.uk/random.json"
	  }).then(function(data) {

	  		quote = data.quote;
		     // $('.greeting-id').append(data.quote);
		     $('.greeting-content').append(data.author);
		  });

	}



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
				<p>This paragraph {this.props.quote}</p>
				<button onClick={this.backgroundColor}>Change Color</button>
			</div>
		);
	}
}




const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);


});
