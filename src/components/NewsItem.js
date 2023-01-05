import React, { Component } from "react";
// import { Link } from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, url, source, publishedAt, author } =
      this.props.item;

    return (
      <div className="col-md-4 col-sm-6 col-xxl-3 mb-4">
        <div className="card " style={{ position: "relative" }}>
          <img
            src={
              urlToImage
                ? urlToImage
                : "https://www.caspianpolicy.org/no-image.png"
            }
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover" }}
            alt="..."
          />

          <div className="card-body">
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(publishedAt).toDateString()}
              </small>
            </p>

            <span
              className="badge bg-danger"
              style={{
                position: "absolute",
                left: "5px",
                top: "5px",
              }}
            >
              {source.name && source.name}
            </span>

            <h5 className="card-title">{title?.slice(0, 50)}...</h5>
            <p className="card-text">{description?.slice(0, 80)}...</p>
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
