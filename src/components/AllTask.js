import React from 'react'
import { connect } from "react-redux";
import EditTaskForm from './EditTaskForm'

class AllTask extends React.Component {

    render() {
        return (
            <div className="table1">
                <h1 className="text-center">All tasks</h1>
                <table>
                    <thead className="table table-hover">
                        <tr>
                            <th> Index </th>
                            <th> Task </th>
                            <th> Action </th>
                        </tr>
                    </thead>

                    {this.props.tasks.map((task) => {
                        return <tbody key={task.id} id={task.id}>
                            {task.editing ? <EditTaskForm task={task} /> :
                                <tr>
                                    <td> {task.id}</td>
                                    <td> {task.task} </td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => this.props.dispatch({ type: 'EDIT_TASK', id: task.id })}> Edit </button> &nbsp;
                                            <button className="btn btn-danger" onClick={() => this.props.dispatch({ type: 'DELETE_TASK', id: task.id })}> Delete </button>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    })}
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

export default connect(mapStateToProps)(AllTask);