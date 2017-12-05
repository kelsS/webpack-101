// react content
var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
    // adding state
    constructor() {
        super();
        this.state = {title: "Webpack"}
    }
    render() {
        return <div>
            <h1>My {this.state.title} App</h1>
            <p>Cool webpack app with some changes</p>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('react-container'));