import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span style={{ display: this.props.ForHomePage }}>
          <Link to="/HomePage">Back to home</Link>
        </span>
        <span style={{ display: this.props.ForSavedArticles }}>
          <Link id="myArticles" to="/SavedArticles">
            My Articles
          </Link>
        </span>
      </footer>
    );
  }
}

export default Footer;
