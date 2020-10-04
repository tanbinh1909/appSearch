import {SET_APPLY_CV, LOADING_APPLY_CV} from '../actions/recruiment.action';

const initState = {
    applyCV : {},
    loading: false
}
export default function recruitmentReducer(state = initState, action) {
    switch(action.type){
        case SET_APPLY_CV:
            return Object.assign({}, state, {
                applyCV: action.applyCV
            });
        case LOADING_APPLY_CV:
            return Object.assign({}, state, {
                loading: !action.loading
            })
        default:
            return state;
    }
}