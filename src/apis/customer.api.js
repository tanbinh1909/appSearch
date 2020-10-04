import {Api} from '../helpers/request.helper';

export default class CustomerApi {
    static createCustomer(data){
        return Api.post(`/customer/createCustomer`, data, false);
    }
    static login(data){
        return Api.post(`/customer/checkLogin`, data, false);
    }

    static getInforCustomer(id) {
        return Api.get(`/customer/findByIdUser?id=${id}`, true);
    }

    static confirmAccount(code){
        return Api.get(`/customer/changeStatus?code=${code}`, false);
    }

    static checkUsername(username){
        return Api.get(`/customer/checkUsername?username=${username}`, false);
    }

    static forgetPassword(code, passwordNew){
        return Api.get(`/customer/forgetPassword?code=${code}&passwordNew=${passwordNew}`, false)
    }
}