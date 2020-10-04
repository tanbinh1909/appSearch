import {Api} from '../helpers/request.helper';

export default class RecruitmentApi {
    static applyCVRecruitment(data){
        return Api.post(`/recruitment/applyCVRecruitment`, data, true);
    }
}