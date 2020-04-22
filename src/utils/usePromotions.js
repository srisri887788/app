import React, { useEffect, useReducer } from 'react';
import reducer from "./reducer";
const usePromotions = (() => {

    const INITIAL_STATE = {
        employees: [],
        selectionCount: 0,
        formData: {
            name: '',
            isPromoted: true,
            salary: ''
        },
        totalCreditedSalary: 0
    }
   
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    const { employees, totalCreditedSalary, selectionCount, formData } = state;
    useEffect(() => {
        fetch('https://jsonblob.com/api/f64e61bc-7fc8-11ea-9f9d-9dfeed336a93')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: 'API_CALL', payload: [...json] })
            })

    }, [])
    useEffect(() => {
        dispatch({ type: 'UPDATE_COUNT_AND_SALARY', payload: [...employees] })
    }, [employees])
    const updatePromotions = (e, id) => {
        dispatch({ type: 'UPDATE_PROMOTIONS', payload: { employees, id, isChecked: e.target.checked } })
    }
    const handleInput = (e) => {
        const { id, value } = e.target;
        dispatch({ type: 'UPDATE_INPUT', payload:  {id, value}})
    }
    const addEmployee = () => {
        dispatch({ type: 'ADD_EMPLOYEE', payload:  {formData}})
    }
    const deleteEmployees = () => {
        dispatch({ type: 'DELETE_ALL', payload:  {employees  }})
    }


    //expose the api to consue in any component.
    return {
        dispatch,
        state,
        addEmployee,
        deleteEmployees,
        handleInput,
        updatePromotions
    }
});


export default usePromotions;