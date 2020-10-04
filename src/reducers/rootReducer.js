import { combineReducers } from 'redux';
import accountReducer from '../reducers/account.reducer';
import postRecruitmentReducer from '../reducers/postrecruitment.reducer';
import refreshReducer from '../reducers/refresh.reducer';
import modalReducer from '../reducers/modal.reducer';
import recruitmentReducer from '../reducers/recruiment.reducer';
export default combineReducers({
    login : accountReducer,
    postRecruitment: postRecruitmentReducer,
    refresh: refreshReducer,
    modal : modalReducer,
    recruiment: recruitmentReducer
});