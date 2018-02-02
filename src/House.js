import React, {Component} from 'react';
import App from './App'

class House extends Component {
    buttonClicked() {
        console.log("You're a slimy Slytherin")
    }

    render() {
        return (<div>
            
            <button onClick={this.buttonClicked}> GET SORTED </button>
        </div>);
    }
}

export default House;