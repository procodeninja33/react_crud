import React from 'react';
import { connect } from 'react-redux';

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { task: '' }
    }

    handleChange(event) {
        this.setState({ task: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.task.trim()) {
            alert('Task is required.');
            return;
        }
        this.props.dispatch({
            type: 'ADD_TASK',
            data: { task: this.state.task }
        });
        this.setState({ task: '' })
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> Create Task</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col-2"></div>
                        <div className="col-7">
                            <input className="form-control" type="text" placeholder="Enter Task" value={this.state.task}
                                onChange={this.handleChange} />
                        </div>
                        <div className="col-3">
                            <button type="submit" className="btn btn-success mb-2">Add Task</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(AddTaskForm)