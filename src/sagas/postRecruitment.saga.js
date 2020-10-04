import {put, call, takeLatest, select, all} from 'redux-saga/effects';
import {SET_LIST_POST_RECRUTMENT,
        GET_LIST_POST_RECRUTMENT,
        SET_ADD_POST_RECRUTMENT,
        GET_ADD_POST_RECRUTMENT, 
        SET_UPDATE_POST_RECRUTMENT,
        GET_UPDATE_POST_RECRUTMENT,
        LOADDING_POST_RECRUITMENT,
        SUCCESS_POST_RECRUTMENT,
        ERROR_POST_RECRUTMENT,
        SET_DELETE_POST_RECRUITMENT,
        GET_DELETE_POST_RECRUITMENT,
        SET_LIST_POST_RECRUTMENT_SLIDE,
        SET_LIST_POST_RECRUTMENT_LIMIT,
        SET_LIST_POST_RECRUTMENT_SEARCH,
        GET_LIST_POST_RECRUTMENT_SLIDE,
        GET_LIST_POST_RECRUTMENT_LIMIT,
        SET_LIST_TYPE_JOB,
        GET_LIST_TYPE_JOB,
        GET_LIST_POST_RECRUTMENT_SEARCH,
        SET_LIST_APPLY_CV,
        GET_LIST_APPLY_CV} from '../actions/postRecrument.action';
import PostRecruitment from "../apis/postRecrument.api";
import Toast from '@remobile/react-native-toast';
// get list post recruiment
function* getPostRecrument(){
    yield put({type: LOADDING_POST_RECRUITMENT, loading: false})
    try {
        const data = yield call(PostRecruitment.getPostRecruitment);
        let listRecruitment = data;
        yield put({type: LOADDING_POST_RECRUITMENT, loading: true})
        yield put({
            type: SET_LIST_POST_RECRUTMENT,
            postRecruitments: listRecruitment || []
        })
    } catch (error) {
        yield put({type: ERROR_POST_RECRUTMENT, error: "Error"})
    }
}

function* getListSlidePostRecruiment() {
    yield put({type: LOADDING_POST_RECRUITMENT, loading: false})
    try {
        const data = yield call(PostRecruitment.getListSlidePostRecruiment);
        let listRecruitment = data;
        
        yield put({type: LOADDING_POST_RECRUITMENT, loading: true})
        yield put({
            type: SET_LIST_POST_RECRUTMENT_SLIDE,
            postRecruitmentsSlide: listRecruitment
        });
    } catch (error) {
        yield put({type: LOADDING_POST_RECRUITMENT, loading: true})
        yield put({type: ERROR_POST_RECRUTMENT, error: "Error"})
    }
}

function* getListPostRecruimentLimit(pageCurrent) {
    yield put({type: LOADDING_POST_RECRUITMENT, loading: false})
    try {
        const data = yield call(PostRecruitment.getListPostRecruimentLimit, pageCurrent.pageCurrent);
        let listRecruitment = data;
        console.log(listRecruitment)
        yield put({type: LOADDING_POST_RECRUITMENT, loading: true})
        yield put({
            type: SET_LIST_POST_RECRUTMENT_LIMIT,
            postRecruitmentsLimit: listRecruitment
        });
    } catch (error) {
        yield put({type: LOADDING_POST_RECRUITMENT, loading: true})
        yield put({type: ERROR_POST_RECRUTMENT, error: "Error"})
    }
}
//get list type jobs
function* getTypeJobs(){
    try {
        const data = yield call(PostRecruitment.getTypeJobs);
        let listTypeJob = data;
        yield put({
            type: SET_LIST_TYPE_JOB,
            typeJobs: listTypeJob || []})
    } catch (error) {
        yield put({type: ERROR_POST_RECRUTMENT, error: "Error"});
    }
}

// search post Recruitment
function* getListSearchPostRecruitment(body){
    yield put({type: LOADDING_POST_RECRUITMENT, loading: false})
    try {
        const response = yield call(PostRecruitment.getListSeachPostRecruiments, body.data);
        if(response.data.success == true) {
            const listSearchPostRecruitment = response;
            yield put({type: LOADDING_POST_RECRUITMENT, loading: true})
            yield put({
                type: SET_LIST_POST_RECRUTMENT_SEARCH,
                postRecruitmentsSearch : listSearchPostRecruitment || []
            });
        }else if(response.data.success == false) {
            yield put({type: ERROR_POST_RECRUTMENT, error: "Error"});
        }
    } catch (error) {
        yield put({type: ERROR_POST_RECRUTMENT, error: "Error"});
        alert(error)
    }
}
// add post recruitment
function* addPostRecruitment(body){
    try {
        const data = yield call(PostRecruitment.addPostRecruiment, body.data);
        yield put({
            type: SET_ADD_POST_RECRUTMENT,
            addPostRecruitments: data
        })
    } catch (error) {
        yield put({type: ERROR_POST_RECRUTMENT, error: "Error"})
    }
}
//
function* updatePostRecruitment(body) {
    try {
        const data = yield call(PostRecruitment.updatePostRecruiment, body.data);
        yield put({
            type: SET_UPDATE_POST_RECRUTMENT,
            updatePostRecruitments: data
        })
    } catch (error) {
        yield put({type: ERROR_POST_RECRUTMENT, error: "Error"})
    }
}
function* deletePostRecruitment(id){
    try {
        yield call(PostRecruitment.deletePostRecruitment, id.id);
        yield put({
            type: SUCCESS_POST_RECRUTMENT,
            success: true
        })
    } catch (error) {
        yield put({type: ERROR_POST_RECRUTMENT, error: "Error"})
    }
}
//get list type jobs
function* getListApplyCv(idPostRecruiment){
    try {
        const data = yield call(PostRecruitment.getListApplyCv, idPostRecruiment.customerId);
        let listApplyCv = data;
     
        yield put({
            type: SET_LIST_APPLY_CV,
            listApplyCv: listApplyCv || []})
    } catch (error) {
        yield put({type: ERROR_POST_RECRUTMENT, error: "Error"});
    }
}
export default function* watchPostRecruitmentSagasAsync() {
    yield all([
        takeLatest(GET_LIST_POST_RECRUTMENT, getPostRecrument),
        takeLatest(GET_ADD_POST_RECRUTMENT, addPostRecruitment),
        takeLatest(GET_UPDATE_POST_RECRUTMENT, updatePostRecruitment),
        takeLatest(GET_DELETE_POST_RECRUITMENT, deletePostRecruitment),
        takeLatest(GET_LIST_POST_RECRUTMENT_SLIDE, getListSlidePostRecruiment),
        takeLatest(GET_LIST_POST_RECRUTMENT_LIMIT, getListPostRecruimentLimit),
        takeLatest(GET_LIST_TYPE_JOB, getTypeJobs),
        takeLatest(GET_LIST_POST_RECRUTMENT_SEARCH, getListSearchPostRecruitment),
        takeLatest(GET_LIST_APPLY_CV, getListApplyCv)
    ])
}
