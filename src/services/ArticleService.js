import axios from "axios";

const ARTICLE_API_BASE_URL = "http://localhost:8080/api/v1/headline"
const EVERYTHING_API_BASE_URL = "http://localhost:8080/api/v1/everything/q=fajar"

class ArticleService{

    getArticles(){
        return axios.get(EVERYTHING_API_BASE_URL);
    }
}

export default new ArticleService()