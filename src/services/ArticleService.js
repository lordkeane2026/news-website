import axios from "axios";

const ARTICLE_API_BASE_URL = "http://localhost:8080/article/headline"

class ArticleService{

    getArticles(){
        // return axios.get(ARTICLE_API_BASE_URL, {
        //     headers: {
        //       'authorization': 'Basic YWRtaW46YWRtaW4='
        //     }
        //   });
        return axios.get(ARTICLE_API_BASE_URL);
    }
}

export default new ArticleService()