import { Component } from "react";
import axios from "axios";

export default class NewsApiClass extends Component {    
    constructor() {
        super()
        this.state = {
            news : '',
            dataApi : []
        }
    }

    changeNews = (e) => {
        this.setState({[e.target.name] : e.target.value})
        
    }
    
    getNews = async () => {
        try {
            let response = await axios.get(`https://newsapi.org/v2/top-headlines?q=${this.state.news}&country=us&category=business&apiKey=10b07017fe314da1ba834e02b205b90c`)
            console.log(response.data.articles)
            this.setState({dataApi : response.data.articles})
        } catch(e) {
            console.log(e.message)
        }
    }
    
    searchNews = (e) => {
        e.preventDefault();
        
        this.getNews();
    }

    render() {
        const { dataApi } = this.state;

        return(
            <div>
            <form onSubmit={this.searchNews}>
                <label className='label'>Searching News with NewsAPI</label>
                <input type="text" name="news" value={this.state.news} className='form-control my-1' onChange={this.changeNews} placeholder='input your search in here' />
                <input type="submit" value="Submit" className='btn btn-primary' />
            </form>
            <div className="row">
                {   
                    dataApi.map( (news) => {
                        return (
                            <div key={news?.url} className='col col-lg-4'>
                                <div className="card p-3 my-3">
                                    <h4 className='card-title'>{news?.title.substring(0, 50)} . . .</h4>
                                    <img width='100%' height='200' alt='' src={news?.urlToImage}></img>
                                    <p className='card-text'>{news?.description?.substring(0, 100)}</p>
                                    <p>{news?.content?.substring(0, 120)}</p>
                                    <p>Published on : {new Date(news?.publishedAt).toLocaleString()}</p>
                                    <a href={news?.url} className='btn btn-primary'>Read more</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        )
    }
}