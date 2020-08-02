import React from 'react';
import { connect } from 'react-redux';

class EditTaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleUpdate(event) {
        event.preventDefault();
        const newTask = this.getTask.value;
        if (!newTask.trim()) {
            alert('Task is required.');
            return;
        }
        this.props.dispatch({ type: 'UPDATE_TASK', id: this.props.task.id, data: { task: newTask } });
        this.props.updateTaskHandler();
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.dispatch({ type: 'CANCEL_TASK', id: this.props.task.id })
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
                    <button type="submit" className="btn btn-success btn-sm custom-btn" onClick={this.handleUpdate}>Update</button> &nbsp;
                    <button type="button" className="btn btn-light btn-sm custom-btn" onClick={this.handleCancel}>Cancel</button>
                </td>
            </tr>
        )
    }

}

export default connect()(EditTaskForm)