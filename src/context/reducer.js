import {ADD_TODO,REMOVE_TODO} from "./action.types"

export const initialState = null

export const todoReducer=(state,action)=>{

    switch(action.type)
    {
        case ADD_TODO:
            return action.payload
        case REMOVE_TODO:
            return initialState
        default:return state
    }
        
}