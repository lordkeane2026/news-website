import axios from "axios";

const LOGIN_API_BASE_URL = "http://localhost:8080/auth/login"

class LoginService{

    getLogin(param){
        // return axios.get(ARTICLE_API_BASE_URL, {
        //     headers: {
        //       'authorization': 'Basic YWRtaW46YWRtaW4='
        //     }
        //   });
        return axios.post(LOGIN_API_BASE_URL,param);
    }
}

export default new LoginService()