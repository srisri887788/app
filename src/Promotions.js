import React, { Component } from 'react';
import EmployeesTable from "./EmployeesTable";
import EmployeeForm from "./EmployeeForm";
export default class Promotions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: [
            ],
            selectionCount: 0,
            formData: {
                name: '',
                isPromoted: true,
                salary: ''
            },
            totalCreditedSalary: 0
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const count = this.state.employees.filter(employee => employee.isPromoted).length;
        const totalSalary = this.state.employees.reduce((total, employee) => {
            return total + employee.salary;
            }, 0)
        if (prevState.selectionCount != count) {
            this.setState({ selectionCount: count , totalCreditedSalary: totalSalary})
        }
    }
    componentDidMount() {
        fetch('https://jsonblob.com/api/f64e61bc-7fc8-11ea-9f9d-9dfeed336a93')
            .then(response => response.json())
            .then(json => {
                this.setState({ employees: [...json] })
            })
    }
    handleInput(e) {
        const { id, value } = e.target;
        console.log(id, value)
        this.setState({ formData: { ...this.state.formData, [id]: value } })
    }
    addEmployee() {
        const { employees, formData } = this.state
        this.setState({ employees: [...employees, { ...formData, id: employees.length + 1 }] });
        this.setState({ formData: { name: '', salary:'', isPromoted: true } })
    }
    deleteEmployees() {

        this.setState({ employees: [...this.state.employees.filter(employee => !employee.isPromoted)] })
    }
    updatePromotions(e, id) {
        console.log(e.target.checked, id);
        const { employees } = this.state;
        employees[id].isPromoted = e.target.checked;
        this.setState({ employees: [...employees] })
    }
    render() {
        const { employees, formData, selectionCount , totalCreditedSalary} = this.state

        return (
            <div className="jumbotron">
                <pre>{JSON.stringify(employees, null, 4)}</pre>
                <div className="alert alert-success"> ({selectionCount}) got promoteed out of ({employees.length})</div>
                {
                    !employees.length ?
                        (<div className="alert alert-danger"> No records found</div>) :
                        <EmployeesTable
                            employees={employees}
                            updatePromotions={this.updatePromotions.bind(this)}
                        ></EmployeesTable>
                }
                <div class="row">
                    <div className="col-md-6">
                        <EmployeeForm addEmployee={this.addEmployee.bind(this)} formData={formData} handleInput={this.handleInput.bind(this)} deleteEmployees={this.deleteEmployees.bind(this)}></EmployeeForm>
                    </div>
                    <div className="col-md-6">
                        <div className="badges">
                            <h3> Total Salary Credited: ${totalCreditedSalary}</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

