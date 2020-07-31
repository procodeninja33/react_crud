import React from 'react';
import { connect } from 'react-redux';

class EditTaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(event) {
        event.preventDefault();
        const newTask = this.getTask.value;
        if (!newTask.trim()) {
            alert('Task is required.');
            return;
        }
        this.props.dispatch({ type: 'UPDATE_TASK', id: this.props.task.id, data: { task: newTask } })
    }

    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>
                    <form onSubmit={this.handleUpdate}>
                        <input className="form-control" defaultValue={this.props.task.task} placeholder="Enter Task"
                            ref={(input) => this.getTask = input}></input>
                    </form>
                </td>
                <td className={this.props.task.status === 'Active' ? 'text-success' : 'text-primary'}>
                    {this.props.task.status}
                </td>
                <td>
                    <button type="submit" className="btn btn-success" onClick={this.handleUpdate}>Update</button>
                </td>
            </tr>
        )
    }

}

export default connect()(EditTaskForm)