let incrementId = 1;

const TaskReducer = (state = [], action) => {

    switch (action.type) {

        case 'ADD_TASK':
            return state.concat([
                {
                    id: incrementId++, task: action.data.task, editing: false, status: 'Active'
                }
            ]);

        case 'DELETE_TASK':
            return state.filter((task) => task.id !== action.id);

        case 'EDIT_TASK':
            return state.map((task) => task.id === action.id ? { ...task, editing: !action.editing } : task);

        case 'UPDATE_TASK':
            return state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        task: action.data.task,
                        editing: false,
                        status: task.status
                    }
                } else return task;
            });

        case 'STATUS_UPDATE':
            return state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        task: task.task,
                        editing: task.editing,
                        status: action.data.status
                    }
                } else return task;
            });

        case 'SHOW_ALL_TASK':
            return state;

        case 'SHOW_ACTIVE_TASK':
            // return state.filter((task) => task.status === 'Active');
            return {
                ...state,
                status: 'Active'
            }

        case 'SHOW_COMPLETED_TASK':
            // return state.filter((task) => task.status === 'Completed');
            return {
                ...state,
                status: 'Completed'
            }

        default:
            return state;
    }
}

export default TaskReducer;