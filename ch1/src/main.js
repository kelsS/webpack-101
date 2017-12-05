// const $ = require('jquery');
// $('#target').html('Hellow World!');

// simple React Component
var React = require('react');
var ReactDOM = require('react-dom');

class Message extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

// Mount this component to the DOM
// Can define the props here
ReactDOM.render(<Message title="Email Joe" message="Can you email him?"/>, document.getElementById('react-container'));

// Define the mount node or in other words where we want to add this to the DOM
