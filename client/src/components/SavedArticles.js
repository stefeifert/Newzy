import React, { Component } from "react";
import axios from "axios";
import $ from "axios";
import { Link } from "react-router-dom";

const RenderArticles = props => {
  console.log("this is working");
  if (props.articleList) {
    return (
      <div>
        {props.articleList.map(article => (
          <div key={article._id}>
            <p className="articleTitle">{article.article_name}</p>
            <p className="articleAuthor">{article.author_name}</p>
            <p className="articlePub">{article.publication_source}</p>
            <p className="articleUrl">{article.article_url}</p>
            <p className="photoUrl">{article.photo_url}</p>
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
      console.log(res);
      this.setState({ articleList: res.data });
      // , this.RenderArticles());
    });
  };

  render() {
    return (
      <div>
        <Link to="/HomePage" className="btn-flat waves-effect">
          <i className="material-icons left">keyboard_backspace</i> Back to home
        </Link>
        <div className="myArticles" />
        <RenderArticles articleList={this.state.articleList} />
      </div>
    );
  }
}

export default SavedArticles;
