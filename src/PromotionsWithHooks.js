import React, { useContext } from 'react';
import EmployeesTable from "./EmployeesTable";
import EmployeeForm from "./EmployeeForm";
import { PromotionsContext  } from "./PromotionsContext";
const PromotionsWithHooks = () => {

    const { 
        state: {employees, totalCreditedSalary, selectionCount, formData},
        addEmployee,
        deleteEmployees,
        handleInput,
    } = useContext(PromotionsContext);
    return (
        <div className="jumbotron">
            <div className="alert alert-success"> ({selectionCount}) got promoteed out of ({employees.length})</div>
            {
                !employees.length ?
                    (<div className="alert alert-danger"> No records found</div>) :
                    <EmployeesTable
                    ></EmployeesTable>
            }
            <div class="row">
                <div className="col-md-6">
                    <EmployeeForm addEmployee={addEmployee} formData={formData} handleInput={handleInput} deleteEmployees={deleteEmployees}></EmployeeForm>
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
export default PromotionsWithHooks 