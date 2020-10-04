import axios from "axios";
import qs from 'qs';
import { getToken } from '../helpers/storage.helper';
import Toast from "react-native-root-toast";
import { configUrl } from "../configs/server";

const instanceAxios = axios.create({
  baseURL: configUrl.url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 6000
});

async function addToken() {
  const token = await getToken();
  const bearer = token ? `Bearer ${token}` : '';
  instanceAxios.defaults.headers.common['Authorization'] = bearer;
}
const handleError = error => {
  if (error.response) {
    Toast.show("Lỗi 500");
  } else if (error.request) {
    Toast.show("Lỗi đường dẫn");
  } else {
    Toast.show("Lỗi server");
  }
};

async function get(url, isNeedToken, params) {
  try {
    if(isNeedToken){
      await addToken();
    }
    const response = await instanceAxios.get(url, {
      params: params,
      paramsSerializer: params => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      }
    });
    if(response.status == '200') {
      return response.data;
    }
    return response;
  } catch (error) {
    return {status: 500};  
  }
}
async function post(url, data, isNeedToken, isPostForm) {
  try {
    if (isNeedToken) {
      await addToken();
    }
    if (isPostForm) {
      instanceAxios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    }
    const response = await instanceAxios.post(url, data);
    if (response.status == '200') {
      return response.data;
    }
    return response;
  } catch (error) {
    return {status: 500, message: 'Error'};
  }
}
export const Api = {
  get,
  post
}

// export default class RequestHelper {

//   static async getHeader(config = {}) {
//     const token = await getToken();
//     return {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`,
//       ...config
//     };
//   }

//   static async getHeaderUploadFile() {
//     const token = await getToken();
//     return {
//       Accept: "application/json",
//       ContentType: "multipart/form-data",
//       //Authorization: token && `Bearer ${token}`
//     };
//   }
//   static async getParam(url, params) {
//     // const header = await this.getHeader();
//     try {
//       const { data } = await instance.get(urlApp+url, {
//         data: params,
//         paramsSerializer: params => {
//           return qs.stringify(params, { arrayFormat: "repeat" });
//         }
//       });
//       return data;
//     } catch (error) {
//       handleError(error);
//       throw error;
//     }
//   }

//   static async get(url) {
//     try {
//       return instance.get(urlApp+url).then((response) => {
//         return response.data;
//       });
//     } catch (error) {
//       handleError(error);
//       throw error;
//     }
//   }
//   static async postSeach(url , body) {
//     const header = await this.getHeader();
//     const instance = axios.create({
//       headers: header
//     })
//     try {
//       return instance.post(urlApp+url, body).then((responseJson) => {
//         return responseJson.data;
//       })
//     } catch (error) {
//       handleError(error);
//       throw error;
//     }
//   }
//   static async post(url, body) {
//     // const header = await this.getHeader();
//     // const instance = axios.create({
//     //   headers: header
//     // })
//     try {
//       const { response } = await instance.post(urlApp+url, body);
//       console.log('request '+JSON.stringify(response))
//       if(response && response.success === true) {
//         return response.data;
//       }
//       else if(response && response.success === false) {
//         return Toast.show("Error");
//       }
//       return response;
//     } catch (error) {
//       console.log(error)
//       handleError(error);
//       throw error;
//     }
//   }
//   static async getLogOut(url, params) {
//     const header = await this.getHeader();
//     try {
//       const { data } = await instance.get(url, {
//         headers: header,
//         data: params,
//         paramsSerializer: params => {
//           return qs.stringify(params, { arrayFormat: "repeat" });
//         }
//       });
//       return data;
//     } catch (error) {
//       handleError(error);
//       throw error;
//     }
//   }
 
  
 
//   static async putUploadFile(url, file) {
//     let body = new FormData();
//     body.append("user[profile_picture]", file);
//     return instance({
//       method: "PUT",
//       url: baseApiUrl + url,
//       headers: await this.getHeader(),
//       data: body
//     })
//       .then(res => {
//         return res.data;
//       })
//       .catch(error => {
//         handleError(error, apiUrl, file);
//         throw error;
//       });
//   }

//   static async postFormLogin(username, password) {
//     const header = await this.getHeader();
//     const body = {
//       username,
//       password
//     }
//     try{
//       const response = await instance.post(loginUrl, body, header);
//       return response.data;
//     }catch(error){
//       handleError(error);
//       throw error;
//     }
//   }

//   static async postFormAuth(url, username, password) {
//     const header = await this.getHeader();
//     const body = {
//       username,
//       password
//     }
//     try {
//     const response = await instance.post(url, body, header);
//     return response.data;
//     }catch(error){
//       handleError(error);
//       throw error;
//     }
//   }

//   static async postUploadFile(url, data) {
//     return instance({
//       method: "POST",
//       url: baseApiUrl + url,
//       headers: await this.getHeaderUploadFile(),
//       data: data
//     })
//       .then(res => {
//         return res.data;
//       })
//       .catch(error => {
//         handleError(error);
//         throw error;
//       });
//   }

//   static async delete(url, data) {
//     return instance({
//       method: "DELETE",
//       url: baseApiUrl + url,
//       headers: await this.getHeader(),
//       data: data
//     })
//       .then(data => {
//         return data.data;
//       })
//       .catch(e => {
//         handleError(e);
//         throw e;
//       });
//   }
// }
