import React, { Component } from "react";
import $ from "axios";
import Navbar from "./layout/Navbar";

const RenderArticles = props => {
  if (props.articleList) {
    return (
      <div>
        {props.articleList.map(article => (
          <div className="card" key={article.article_url}>
            <img className="card-img-top" src={article.photo_url} alt="Newzy" />
            <div className="card-body">
              <h5 className="card-title">{article.article_name}</h5>
              <h6 className="card-source">{article.publication_source}</h6>
              <a href={article.article_url} className="btn btn-primary">
                Go To Article
              </a>
              <button
                onClick={props.deleteArticle}
                value={article.article_name}
                className="btn btn-primary"
              >
                Delete Article
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

class SavedArticles extends Component {
  state = {
    articleList: [],
    articleId: ""
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    $.get(`/api/article`).then(res => {
      this.setState({ articleList: res.data });
    });
  };
  deleteArticle = event => {
    event.preventDefault();
    let articleToDelete = event.target.value;
    $.get(`/api/article/byname/${articleToDelete}`).then(res => {
      this.setState({ articleId: res.data._id });
      this.finishDelete();
    });
  };
  finishDelete = () => {
    $.delete(`/api/article/${this.state.articleId}`).then(res => {});
    this.getArticle();
  };
  render() {
    return (
      <div>
        <Navbar />

          <RenderArticles
            articleList={this.state.articleList}
            deleteArticle={this.deleteArticle}
          />
      </div>
    );
  }
}

export default SavedArticles;
