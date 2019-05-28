import React, { Component } from "react";
import $ from "axios";
import Dashboard from "./dashboard/Dashboard";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const RenderArticles = props => {
  
  if (props.articleList) {
    return (
      <div className="resultsDiv">
        {props.articleList.map(article => (
          <div className="card" key={article.identifier}>
            <img className="card-img-top" src={article.photo_url} alt="Newzy" />
            <div className="card-body">
              <h5 className="card-title">{article.article_name}</h5>
              <h6 className="card-source">{article.publication_source}</h6>
              <a href={article.article_url} className="btn btn-primary" target="blank">
                Go To Article
              </a>
              <button
                onClick={props.deleteArticle}
                value={article.identifier}
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
    $.delete(`/api/article/${articleToDelete}`).then(res => {});
    this.getArticle();
  };

  render() {
    return (
      <div>
        <Dashboard 
          ForHomePage = "none"
          ForSavedArticles = "inherit"
        />
        <RenderArticles
          className="resultsDiv"
          articleList={this.state.articleList}
          deleteArticle={this.deleteArticle}
          topScroll={this.scrollUp}
        />
        <ScrollToTop />
        <Footer 
          ForHomePage = "inherit"
          ForSavedArticles = "none"
        />
      </div>
    );
  }
}

export default SavedArticles;
