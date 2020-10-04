import {AsyncStorage} from "react-native";

const FCM_TOKEN = "fcm_token";
const KEY_TOKEN = "user_token";
const KEY_USER = "user_info";
const REGISTER_JOB = "register_job";
const REGISTER_RECRUITMENT = "register_recruitment";
const CUSTOMER_ID = "customer_id";
export const saveFCMToken = fCMToken =>
    AsyncStorage.setItem(FCM_TOKEN, fCMToken);

export const getFCMToken = () => {
    return AsyncStorage.getItem(FCM_TOKEN);
};

export const removeTokenFCM = () => AsyncStorage.removeItem(FCM_TOKEN);

// token login
export const saveToken = (token) => AsyncStorage.setItem(KEY_TOKEN, token);

export const getToken = () => {
    return AsyncStorage.getItem(KEY_TOKEN)
};

export const removeToken = () => AsyncStorage.removeItem(KEY_TOKEN);
// user info
export const saveUser = async user => {
    const _stringifyUser = JSON.stringify(user);
    await AsyncStorage.setItem(KEY_USER, _stringifyUser);
};
export const getUser = () => {
    return AsyncStorage.getItem(KEY_USER)
    .then(user => {
        return JSON.parse(user);
    });
};

export const removeUser = () => AsyncStorage.removeItem(KEY_USER);

export const saveRegisterJob = async user => {
    const _stringifyUser = JSON.stringify(user);
    await AsyncStorage.setItem(REGISTER_JOB, _stringifyUser);
};
export const getRegisterJob = () => {
    return AsyncStorage.getItem(REGISTER_JOB)
    .then(user => {
        return JSON.parse(user);
    });
};

// save customerid
export const saveCustomerId = (customerid) => AsyncStorage.setItem(CUSTOMER_ID, customerid);

export const getCustomerId = () => {
    return AsyncStorage.getItem(CUSTOMER_ID)
};

export const removeCustomter = () => AsyncStorage.removeItem(CUSTOMER_ID);


export const removeRegisterJob = () => AsyncStorage.removeItem(REGISTER_JOB);

export const saveRegisterRecruitment = async user => {
    const _stringifyUser = JSON.stringify(user);
    await AsyncStorage.setItem(REGISTER_RECRUITMENT, _stringifyUser);
};
export const getRegisterRecruitment = () => {
    return AsyncStorage.getItem(REGISTER_RECRUITMENT)
    .then(user => {
        return JSON.parse(user);
    });
};

export const removeRegisterRecruitment = () => AsyncStorage.removeItem(REGISTER_RECRUITMENT);


export const clearAll = () => AsyncStorage.clear();
