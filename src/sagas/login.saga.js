import {put, call, takeLatest, select, all} from 'redux-saga/effects';
import {SET_LOGIN, GET_LOGIN} from '../actions/account.action';
import {getToken} from '../helpers/storage.helper';
import CustomerApi from '../apis/customer.api';
function* getInforCustomer(id){
    try {
       const data =  yield call(CustomerApi.getInforCustomer, id.id);
        yield put({type: SET_LOGIN, customers : data});
    } catch (error) {
       console.log(error); 
    }
}
export default function* watchCustomerSagasAsync() {
    yield all([
        takeLatest(GET_LOGIN, getInforCustomer)
    ])
}