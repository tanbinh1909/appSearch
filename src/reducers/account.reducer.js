import {SET_LOGIN} from '../actions/account.action';
const initState = {
    customers: {}
}

export default function accountReducer(state = initState, action) {
    switch(action.type) {
        case SET_LOGIN : 
            return Object.assign({}, state, {
                customers: action.customers
            });
        default :
            return state;
    }
}