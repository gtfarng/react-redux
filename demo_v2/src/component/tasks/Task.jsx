import React, { Component } from 'react'
import TaskList from './TaskList.jsx'
import AddTask from './AddTask.jsx'
import AddTaskAction from '../../actions/index'
import { connect } from 'react-redux'
import '../../App.css'

class task extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  addTask(task1) {
    console.log(task1);
    this.props.updateTask(task1);
  }
  deleteTask(id) {
    console.log(id);
    this.props.deleteTask(id);
  }
  render() {
    let { tasks } = this.props
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <br />
            <h1>My-App</h1>
            <br />
          </header>
        </div>

        <br />
        <h1 className="u1">Todo App ( React-Redux )</h1><br />

        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <div class="card">
              <div class="card-body">
                <br />
                <TaskList task={tasks} deleteTask={this.deleteTask} />
                <AddTask addTask={this.addTask} />

              </div>
            </div>

          </div>
          <div class="col-2"></div>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => (AddTaskAction(dispatch))

const mapStateToProps = ({ tasks }) => {
  return {
    tasks: tasks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(task);