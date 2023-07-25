const defaultState = {
    expression: "",
}

const ADD = "ADD"
const REMOVE = "REMOVE"
const REPLACE = "REPLACE"

export const calculateReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD:
            return  {...state, expression: state.expression === ""? `${action.payload}`: `${state.expression}${action.payload}`}
        case REMOVE:
            return {...state, expression: ""}
        case REPLACE:
            return {...state, expression: state.expression = `${action.payload}`}
        default:
            return state
    }
}

export const addSymbolAction = (payload) => ({type: ADD, payload})
export const removeSymbolsAction = () => ({type: REMOVE})
export const replaceSymbolsAction = (payload) => ({type: REPLACE, payload})