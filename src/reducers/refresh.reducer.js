import {SET_REFRESH, GET_REFRESH} from '../actions/refresh.action';
const initState = {
    refreshs: false
}
export default function RefreshReducer(state = initState, action){
    switch(action.type) {
        case SET_REFRESH:
            return Object.assign({}, state, {
                refreshs: false
            });
        case GET_REFRESH:
            return Object.assign({}, state, {
                refreshs: true
            });
        default: return state;
    }
}
