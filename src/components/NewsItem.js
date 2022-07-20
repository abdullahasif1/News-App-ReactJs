import React from 'react'


const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date} = props

    return (
      <div className="my-3">
        <div className="card">
            <img src={!imageUrl?"https://35pfzo1jo07k4cnenf2lnoax-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/news.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <div className="card-footer text-muted">By {!author? "Unknown" : author} on {new Date(date).toGMTString()}</div>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  
}

export default NewsItem
