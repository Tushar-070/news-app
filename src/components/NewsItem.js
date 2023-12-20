import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {source, title, discription, img, newsurl, author, date } = this.props
        return (
            <div className='my-3'>
                <div className="card" >
                    <div>
                    <span className="badge rounded-pill bg-danger" style={{display:'flex',position:'absolute',right:'0%'}}>{source}</span>
                    </div>
                    <img src={img ? img : 'https://images.hindustantimes.com/tech/img/2023/07/28/960x540/Google_1690528081214_1690528081380.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{discription}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
