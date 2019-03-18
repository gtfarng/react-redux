import React, { Component } from 'react'
import CompanyEmployee from './EmployeeList.jsx'
import AddEmployee from './AddEmployee.jsx'

export default class employee extends Component {
    state = {
        employee : [
            {name: "Indra", age: "21", designation: "Software Engineer 1", id: 1},
            {name: "Mohan", age: "33", designation: "Software Engineer 2", id: 2},
            {name: "John", age: "36", designation: "Software Engineer 3", id: 3}
        ]
    }
    addEmployee = (emp) => {
        console.log(emp);
        emp.id = Math.floor(Math.random() * 10) + 3;
        let employee1 = [...this.state.employee , emp];
        this.setState({
            employee: employee1
        })
    }
    deleteEmployee = (id) => {
        console.log(id);
        let filterEmployee = this.state.employee.filter((employee) => {
            return employee.id !== id
        });
        this.setState({
            employee: filterEmployee
        })

    }
  render() {
    return (
      <div className="employee">
        <CompanyEmployee employee={this.state.employee} deleteEmployee={this.deleteEmployee}/>
        <AddEmployee addEmployee={this.addEmployee}/>
      </div>
    )
  }
}
