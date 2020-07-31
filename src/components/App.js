import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm'
import AllTask from './AllTask';

class App extends Component {
    render() {
        return (
            <div>
                <br />
                <div className="container">
                    <div className="jumbotron">
                        <AddTaskForm />
                        <hr />
                        <AllTask />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;