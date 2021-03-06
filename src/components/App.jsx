import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text);
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div>{reminder.text}</div>
                            </li>
                        )
                    }

                    )
                }

            </ul>
        )
    }

    render() {
        return(
            <>
                <div className="App">
                    <div className="title">
                        Reminder Pro
                    </div>
                    <div className="form-inline">
                        <div className="form-group">
                            <input 
                                className="form-control"
                                placeholder="I have to..."
                                onChange={event => this.setState({text: event.target.value})}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-success" onClick={() => this.addReminder()}>
                            Add Reminder
                            </button>
                    </div>
                    {this.renderReminders()}
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {

    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder })(App);


// returning some jsx

// onChange={event => this.setState({text: event.target.value <--- this helps us know what the user has typed in.

//addReminder() function is now attached to the button click with onClick={() => this.addReminder()}

//connect function works by hooking up two functions to react component. It connects a mapsStatesToProps function and a mapDispatchToProps function. 