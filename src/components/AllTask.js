import React from 'react'
import { connect } from 'react-redux';
import EditTaskForm from './EditTaskForm';
import Task from './Task';

class AllTask extends React.Component {

    handleChangeEvent(event) {
        if (event.target.value === 'Active') {
            this.props.dispatch({ type: 'SHOW_ACTIVE_TASK' })
        } else if (event.target.value === 'Completed') {
            this.props.dispatch({ type: 'SHOW_COMPLETED_TASK' })
        } else {
            this.props.dispatch({ type: 'SHOW_ALL_TASK' })
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-center">All tasks</h1><br />
                {/* <select className="form-control select-tab" title="Select Status" onChange={(e) => this.handleChangeEvent(e)}>
                    <option value="All"> All </option>
                    <option value="Active"> Active </option>
                    <option value="Completed"> Completed </option>
                </select> */}
                <table className="table">
                    <thead className="table table-hover">
                        <tr>
                            <th> Index </th>
                            <th> Task </th>
                            <th> Status </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.map((task, index) => {
                            return (task.editing ? <EditTaskForm key={task.id} task={task} index={index + 1} /> : <Task key={task.id} task={task} index={index + 1} />)
                        })}
                    </tbody>
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