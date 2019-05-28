import {SUBMIT_INPUT_ONE, UPDATE_INPUT} from '../actions/input'

const initialState = JSON.parse(sessionStorage.getItem('companyInfo')) || {
    elasticity: -1,
    taxToCustomer: 100,
    turnoverGrowth: 10
}

export default ( state = initialState, action = {} ) => {
    switch(action.type) {
    case SUBMIT_INPUT_ONE:
        sessionStorage.setItem( 'companyInfo', JSON.stringify({...state, ...action.payload} ))
        return { ...state, ...action.payload }
    case UPDATE_INPUT:
        return { ...state, ...action.payload }
    default:
        return state
    }
}