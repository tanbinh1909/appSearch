import {Api} from '../helpers/request.helper';

export default class PostRecruitment {
    static getPostRecruitment(){
        return Api.get(`/postRecruiment/getPostRecruiment`, true);
    }
    static getListSeachPostRecruiments(data) {
        return Api.post( `/postRecruiment/getListSeachPostRecruiment`, data, true);
    }
    static addPostRecruiment(data){
        return Api.post( `/postRecruiment/createPostRecruiment`, data, true);
    }
    static updatePostRecruiment(data){
        return Api.post( `/postRecruiment/updatePostRecruiment`, data, true);
    }
    static deletePostRecruitment(id) {
        return Api.get(`/postRecruiment/deletePostRecruiment/${id}`, true)
    }
    static getPostRecruitmentById(id){
        return Api.get(`/postRecruiment/findByIdPostRecruiment/${id}`, true);
    }
    static getListSlidePostRecruiment(){
        return Api.get('/postRecruiment/getListSlidePostRecruiment', true);
    }
    static getListPostRecruimentLimit(pageCurrent) {
        return Api.get(`/postRecruiment/getListPostRecruimentLimit?pageCurrent=${pageCurrent}`, true);
    }
    static getTypeJobs(){
        return Api.get(`/postRecruiment/getTypeJobs`);
    }
    static getListApplyCv(idPostRecruiment){
        return Api.get(`/recruitment/getListRecruitmentByIdCustomer/${idPostRecruiment}`, true);
    }
}