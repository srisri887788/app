import React, {createContext, useReducer  } from "react";
import usePromotions from "./utils/usePromotions";


export const PromotionsContext = createContext();
export const PromotionsProvider = props => {
    const {
        dispatch,
        state,
        addEmployee,
        deleteEmployees,
        handleInput,
        updatePromotions
    } = usePromotions();

    return(
        <PromotionsContext.Provider  value={{...usePromotions()}}>
            {props.children}
        </PromotionsContext.Provider>
    )



}