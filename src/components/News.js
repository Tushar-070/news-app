import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false,
            totalResults: 0
        }
    }
    // async updateNews() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
    //     this.setState({ loading: true })
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     this.setState({ loading: false })
    //     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
        


    // }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
        this.props.setProgress(0)
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(30)
        let parsedData = await data.json()
        this.props.setProgress(70)
        this.setState({ loading: false })
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
        this.props.setProgress(100)
        // this.updateNews()

    }
    // handleNextClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`
        // this.setState({ loading: true })
        // let data = await fetch(url)
        // let parsedData = await data.json()
        // this.setState({ loading: false })
        // this.setState({ articles: parsedData.articles, page: this.state.page + 1 })
    //     this.setState({ page: this.state.page + 1 })
    //     this.updateNews()

    // }
    // handlePreviousClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`
        // this.setState({ loading: true })
        // let data = await fetch(url)
        // let parsedData = await data.json()
        // this.setState({ loading: false })
        // this.setState({ articles: parsedData.articles, page: this.state.page - 1 })
        // this.setState({ page: this.state.page - 1 })
        // this.updateNews()
// }

        fetchMoreData = async() => {
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
          this.setState({ loading: true })
          let data = await fetch(url)
          let parsedData = await data.json()
          this.setState({ loading: false })
          this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults,page:this.state.page+1 })
  
          };
    
    render() {
        return (
            < >
                <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll 
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.loading && <Spinner />}>
                <div className="container">
                    <div className="row">
                        {this.state.articles.map((element,Index) => {
                             return<div className="col-md-4" key={Index}>
                                <NewsItem title={element.title} discription={element.description} img={element.urlToImage} newsurl={element.url}  author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}

                    </div>
                    </div>
                    </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Previous</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults / 6)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News
