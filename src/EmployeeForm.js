import React, { Component } from 'react'

export default class EmployeeForm extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props)
        const {handleInput, addEmployee, deleteEmployees,formData} = this.props;
        return (
            <>
                 <div class="form-group">
                    <label htmlFor="name">Employee Name</label>
                    <input type="text" onChange={(e) => handleInput(e)} class="form-control" id="name" value={formData.name} placeholder="Employee Name" />
                </div>
                <div class="form-group">
                    <label htmlFor="salary">Salary </label>
                    <input type="text" onChange={(e) => handleInput(e)} class="form-control" id="salary" value={formData.salary} placeholder="Employee Salary" />
                </div>
                <button type="button" onClick = {() => addEmployee()} class="btn btn-primary">ADD</button>
                <button type="button" onClick = {() => deleteEmployees()} class="btn btn-danger">Delete</button>
                
            </>
        )
    }
}
