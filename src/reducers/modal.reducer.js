import {SHOW_MODAL, HIDE_MODAL} from '../actions/modal.action';
const initState = {
    modals: false,
    idPost: null
}
export default function ModalReducer(state = initState, action){
    switch(action.type) {
        case SHOW_MODAL:
            return Object.assign({}, state, {
                modals: true,
                idPost: action.idPost
            });
        case HIDE_MODAL:
            return Object.assign({}, state, {
                modals: false
            });
        default: return state;
    }
}
