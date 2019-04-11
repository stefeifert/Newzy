import React, { Component } from "react";
import $ from "axios";
import Navbar from "./layout/Navbar";

const RenderArticles = props => {

  if (props.articleList) {
    return (
      <div>
        {props.articleList.map(article => (
            <div className="card" key={article.article_id}>
              <img className="card-img-top" src={article.photo_url} alt="Newzy"/>
              <div className="card-body">
                <h5 className="card-title">{article.article_name}</h5>
                <h6 className="articlePub">{article.publication_source}</h6>
                <p className="card-text">{article.article_description}</p>
                <a href={article.article_url} class="btn btn-primary">Go To Article</a>
                <button 
                onClick={props.deleteArticle} 
                value={article.article_name}
                class="btn btn-primary">
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
    articleList: []
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    $.get(`/api/article`).then(res => {
      this.setState({ articleList: res.data });
    });
  };
  deleteArticle = (event) => {
    event.preventDefault();
    let articleToDelete = event.target.value;
      $.delete(`/api/article/${articleToDelete}`).then(res => {
      });
      this.getArticle();
  }
  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"> View your saved articles!</th>
              </tr>
            </thead>
            <tbody className="myArticles">
              <RenderArticles articleList={this.state.articleList} deleteArticle={this.deleteArticle}/>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SavedArticles;
