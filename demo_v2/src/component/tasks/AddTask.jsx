import React, { Component } from 'react'
import '../../App.css'

export default class addEmployee extends Component {
  state = {
    activity: null,
    location: null,
    date: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    e.target.value = ""
  }

  render() {
    return (
      <div><br/>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="activity">Activity</label><a className="tab"></a>
          <input type="text" id="activity" onChange={this.handleChange} />
          <label htmlFor="location"><a className="tab"></a>Location</label><a className="tab"></a>
          <input type="text" id="location" onChange={this.handleChange} />
          <label htmlFor="date"><a className="tab"></a>Date</label><a className="tab"></a>
          <input type="date" id="date" onChange={this.handleChange} />
          <br/><br/><button class="btn btn-primary btn-lg btn-block">Submit</button>
        </form>

      </div>
    )
  }
}
