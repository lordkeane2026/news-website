import React, {Component} from 'react'
import ArticleService from '../services/ArticleService';

class ListArticleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        ArticleService.getArticles().then((res) => {
            this.setState({articles: res.data.articles})
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.articles.map(
                        article =>
                            <div key={article.publishedAt} className='card' style={{marginTop: '10px'}}>
                                <div><img className='card-img-top' src={article.urlToImage}/></div>
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text"><small className="text-muted">Author : {article.author}</small></p>
                                    <p className="card-text">{article.content}</p>
                                    <a href={article.url} target="_blank" className="btn btn-primary">more</a>
                                </div>
                            </div>
                    )
                }
            </div>
        );
    }
}

export default ListArticleComponent;