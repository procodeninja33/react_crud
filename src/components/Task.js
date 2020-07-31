import React from 'react';
import { connect } from 'react-redux';

class Task extends React.Component {

    handleStatusUpdate(task) {
        this.props.dispatch({
            type: 'STATUS_UPDATE',
            id: task.id,
            data: {
                status: (task.status === 'Active') ? 'Completed' : 'Active'
            }
        })
    }

    render() {
        return (
            <tr>
                <td> {this.props.index}</td>
                <td> {this.props.task.task} </td>
                <td onClick={() => this.handleStatusUpdate(this.props.task)} className="cursor-pointer">
                    <a href className={this.props.task.status === 'Active' ? 'text-success' : 'text-primary'}>{this.props.task.status}</a>
                </td>
                <td>
                    <button className="btn btn-primary btn-sm" onClick={() => this.props.dispatch({ type: 'EDIT_TASK', id: this.props.task.id })}> Edit </button> &nbsp;
                    <button className="btn btn-danger btn-sm" onClick={() => this.props.dispatch({ type: 'DELETE_TASK', id: this.props.task.id })}> Delete </button>
                </td>
            </tr>
        )
    }

}

export default connect()(Task);