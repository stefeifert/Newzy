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
                <p>{article.article_id}</p>
                <button 
                onClick={props.deleteArticle} 
                id={article.article_id}
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
      // , this.RenderArticles());
    });
  };
  deleteArticle = (event) => {
    let articleToDelete = event.target.getAttribute("id");
    console.log("this should be an id: " + articleToDelete);
      // $.delete(`/api/article/${articleToDelete}`).then(res => {
      //   console.log("the following article was deleted: " + res.data);
      // });
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
