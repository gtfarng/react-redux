import React from 'react'
import '../../App.css'

const TaskList = (props) => {
  let { task } = props;
  task = (task && task.length) ? task : [];
  let Tasklist = task.map((task, index) => {
    return (
      <div key={index} align="center">  
      <ul>
        <div><li> <h5>Activity : <small>{task.activity}</small><a className="tab"> Localtion :</a> <small>{task.location}</small><a className="tab"> Date : </a> <small>{task.date}</small> 
        <a className="tab">  <button class="btn btn-outline-primary" onClick={() => { props.deleteTask(task.id) }}> Delete </button></a></h5></li>
        </div>
        </ul>
      </div>
    )
  })
  return (
    <div>

      {Tasklist}

    </div>
  )
}
export default TaskList