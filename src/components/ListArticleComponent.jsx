import React, { Component } from 'react';
import ArticleService from '../services/ArticleService';

class ListArticleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles : []
        }
    }

    componentDidMount(){
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
                            <div key={article.publishedAt} className='card' style={{marginTop:'10px'}} >
                                <div><img className='card-img-top' src={article.urlToImage} /></div>
                                <div class="card-body">
                                    <h5 class="card-title">{article.title}</h5>
                                    <p class="card-text"><small class="text-muted">Author : {article.author}</small></p>
                                    <p class="card-text">{article.content}</p>
                                    <a href="#" class="btn btn-primary">more</a>
                                </div>
                            </div>
                        )
                    }
            </div>
        );
    }
}

export default ListArticleComponent;