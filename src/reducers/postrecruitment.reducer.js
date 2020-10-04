import {SET_ADD_POST_RECRUTMENT,
        SET_LIST_POST_RECRUTMENT, 
        SET_UPDATE_POST_RECRUTMENT,
        SET_LIST_POST_RECRUTMENT_SLIDE,
        SET_LIST_POST_RECRUTMENT_LIMIT,
        SET_LIST_POST_RECRUTMENT_SEARCH,
        SUCCESS_POST_RECRUTMENT,
        LOADDING_POST_RECRUITMENT,
        LOADDING_DETAIL_POST_RECRUITMENT,
        ERROR_POST_RECRUTMENT,
        SET_LIST_TYPE_JOB,
        SET_LIST_APPLY_CV}
 from '../actions/postRecrument.action';
 const initState = {
     postRecruitments: [],
     postRecruitmentsSlide: [],
     postRecruitmentsLimit: [],
     postRecruitmentsSearch: [],
     listApplyCv: [],
     typeJobs: [],
     success: false,
     error: "",
     loading: false,
     addPostRecruitments: {},
     updatePostRecruitments:{}
 }
 export default function postRecruitmentReducer(state = initState, action) {
    switch(action.type) {
        case SET_LIST_POST_RECRUTMENT : 
            return Object.assign({}, state, {
                postRecruitments: action.postRecruitments,
                success : true,
                loading : true
            });
        case SET_ADD_POST_RECRUTMENT :
            return Object.assign({},state, {
                addPostRecruitments :action.addPostRecruitments
            });
        case SET_UPDATE_POST_RECRUTMENT :
            return Object.assign({},state, {
                updatePostRecruitments :action.updatePostRecruitments
            });
        case LOADDING_POST_RECRUITMENT :
            return Object.assign({}, state, {
                loading: action.loading
            });
        case ERROR_POST_RECRUTMENT: 
            return Object.assign({}, state, {
                error : action.error
            });
        case SUCCESS_POST_RECRUTMENT: 
            return Object.assign({}, state, {
                success : action.success
            });
        case SET_LIST_POST_RECRUTMENT_SLIDE:
            return Object.assign({}, state, {
                postRecruitmentsSlide: action.postRecruitmentsSlide 
            });
        case SET_LIST_POST_RECRUTMENT_LIMIT:
            return Object.assign({}, state, {
                postRecruitmentsLimit: action.postRecruitmentsLimit 
        });
        case SET_LIST_POST_RECRUTMENT_SEARCH:
            return Object.assign({}, state, {
                postRecruitmentsSearch: action.postRecruitmentsSearch 
        });
        case SET_LIST_TYPE_JOB:
            return Object.assign({}, state, {
                typeJobs: action.typeJobs 
        });
        case SET_LIST_APPLY_CV:
            return Object.assign({}, state, {
                listApplyCv: action.listApplyCv 
        });
        default :
            return state;
    }
}