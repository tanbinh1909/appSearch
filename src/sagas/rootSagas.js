import {all} from 'redux-saga/effects';
import watchPostRecruitmentSagasAsync from '../sagas/postRecruitment.saga';
import watchCustomerSagasAsync from '../sagas/login.saga';
import watchRecruitmentSagasAsync from '../sagas/recruiment.saga';
export default function* RootSaga() {
    yield all([
        watchPostRecruitmentSagasAsync(),
        watchCustomerSagasAsync(),
        watchRecruitmentSagasAsync()
    ]);
}