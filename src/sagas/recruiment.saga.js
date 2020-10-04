import {put, call, takeLatest, select, all} from 'redux-saga/effects';
import {SET_APPLY_CV, GET_APPLY_CV, LOADING_APPLY_CV} from '../actions/recruiment.action';
import RecruitmentApi from '../apis/recruiment.api';

function* applyCv(data){
    yield put({type: LOADING_APPLY_CV, loading: false})
    try {
        const response = yield call(RecruitmentApi.applyCVRecruitment, data.data);
        yield put({type: LOADING_APPLY_CV, loading: true})
        yield put({type: SET_APPLY_CV, applyCV: response})
    } catch (error) {
        console.log(error)
    }
}
export default function* watchRecruitmentSagasAsync() {
    yield all([
        takeLatest(GET_APPLY_CV, applyCv),
    ])
}