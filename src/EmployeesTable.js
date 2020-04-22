import React, { Component, useContext } from 'react'
import Employee from "./Employee";
import { PromotionsContext  } from "./PromotionsContext";


 const EmployeesTable = (props) => {
    const { 
        state: {employees},
        updatePromotions
    } = useContext(PromotionsContext);
    return (
        <table class="table">
            <caption>Optional table caption.</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Employee Name</th>
                    <th>Promoted (y/n)</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employee, index) => <Employee employee={employee} index={index} updatePromotions={updatePromotions}></Employee>)
                }
            </tbody>
        </table>

    )
}
export default EmployeesTable