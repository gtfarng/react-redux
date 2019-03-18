import React from 'react'

 const  employeeList =  (props) => {
      let {employee} = props;
      employee = (employee && employee.length) ? employee : [];
      let employeeList = employee.map((employee) => {
          return (
              <div className="employee" key={employee.id}>
                <div>Name: {employee.name}</div>
                <div>Age: {employee.age}</div>
                <div>Designation: {employee.designation}</div>
                <button onClick={() => {props.deleteEmployee(employee.id)}}>Delete Employee</button>
              </div>
          )
      })
    return (
      <div className="employeeList">
        {employeeList}
      </div>
    )
}
export default employeeList
