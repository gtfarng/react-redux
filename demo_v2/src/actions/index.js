var x=3
const addTaskAction = dispatch => ({
        updateTask: (task) => {
          task.id = x++
          dispatch({
            type: 'UPDATE_TASK',
            payload: { task },
          })
    },
        deleteTask: (task) => {
            dispatch({
                type: 'DELETE',
                payload: { task }
            })
        }
});

export default addTaskAction;