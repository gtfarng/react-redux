import initialData from '../initialData/initialData'

const initialState = initialData.task;
const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TASK':
      let data = state.concat(action.payload.task)
      return data
    case 'DELETE':
      let filterTask = state.filter((filtered_task) => {
        return filtered_task.id !== action.payload.task
      });
      return filterTask
    default:
      return state;
  }
};
export default tasks