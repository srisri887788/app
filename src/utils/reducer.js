 const reducer = (state, { type, payload }) => {
    console.log(state);
    switch (type) {

        case 'API_CALL':
            return { ...state, employees: [...state.employees, ...payload] }
        case 'UPDATE_COUNT_AND_SALARY': {
            const { employees } = state;
            const selectionCount = employees.filter(employee => employee.isPromoted).length
            const totalCreditedSalary = employees.reduce((total, employee) => {
                return total + parseInt(employee.salary);
            }, 0)
            return {
                ...state,
                selectionCount,
                totalCreditedSalary
            }

        }
        case 'UPDATE_PROMOTIONS': {
            const { isChecked, id, employees } = payload;
            const list = [...employees]
            list[id].isPromoted = isChecked;

            return {
                ...state,
                employees: [...list]
            }
        }
        case 'UPDATE_INPUT':{
            const {id, value} = payload;
            return {
                ...state,
                formatData: { ...state.formData, [id]: value }
            }
        }
        case 'ADD_EMPLOYEE' :{
            const {formData} = payload;
            return  {
                ...state,
                employees: [...state.employees, { ...formData, id: state.employees.length + 1 }],
                formData: { name: '', salary: '', isPromoted: true }
            }
        }
        case 'DELETE_ALL' :{
            const {employees} = payload;
            return  {
                ...state,
                employees: [...employees.filter(employee => !employee.isPromoted)]
            }
        }
        default:
            return state
    }
}

export default reducer;