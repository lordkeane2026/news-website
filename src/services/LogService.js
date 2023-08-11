import axios from "axios";

const LOG_API_BASE_URL = "http://localhost:8080/admin/get-log"

class LogService {

    getLogs(token) {
        const axiosInstance = axios.create({
            url: LOG_API_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
                'Authorization': 'Bearer ' + token
            }
        });
     return axiosInstance.get(LOG_API_BASE_URL);
    }
}

export default new LogService()