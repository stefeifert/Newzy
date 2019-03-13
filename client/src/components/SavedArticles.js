import React, { Component } from "react";
import $ from "axios";
import Navbar from "./layout/Navbar";

const RenderArticles = props => {
  console.log("this is working");
  if (props.articleList) {
    return (
      <div>
        {props.articleList.map(article => (
          <tr key={article._id}>
            <th className="articleOrder"></th>
            <td className="articleTitle">{article.article_name}</td>
            <td className="articleAuthor">{article.author_name}</td>
            <td className="articlePub">{article.publication_source}</td>
            <td className="articleUrl" type="url">{article.article_url}</td>
            <td className="photoUrl">{article.photo_url}</td>
          </tr>
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
        <Navbar />

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"> View your saved articles!</th>
              </tr>
            </thead>
            <tbody className="myArticles">
              <RenderArticles articleList={this.state.articleList} />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SavedArticles;
