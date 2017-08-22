import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            deadline: 'August 8, 2018'
        }
    }

    render() {

        return (
            <div className = 'App'>
                <div className = 'App-title'>Countdown to {this.state.deadline}
                </div>
                <div>
                    <div className = 'Clock-days'>300 days</div>
                    <div className = 'Clock-hours'>20 hours</div>
                    <div className = 'Clock-minutes'>33 minutes</div>
                    <div className = 'Clock-seconds'>55 seconds</div>
                </div>
                <div>
                    <input placeholder = 'new date'/>
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

export default App;
