let incrementId = 1;

const TaskReducer = (state = [], action) => {

    switch (action.type) {

        case 'ADD_TASK':
            return state.concat([
                {
                    id: incrementId++, task: action.data.task, editing: false
                }
            ]);

        case 'DELETE_TASK':
            return state.filter((task) => task.id !== action.id);

        case 'EDIT_TASK':
            return state.map((task) => task.id === action.id ? { ...task, editing: !action.editing } : task);

        case 'UPDATE_TASK':
            return state.map((task) => {
                if(task.id === action.id) {
                    return {
                        ...state,
                        task: action.data.task,
                        editing: !task.editing
                    }
                }
            })

        default:
            return state;
    }
}

export default TaskReducer;