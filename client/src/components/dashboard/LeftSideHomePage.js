import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class LeftSideHomePage extends Component {
    render() {
        const { user } = this.props.auth;
        return(
            <React.Fragment>
            <span  style={{ fontFamily: "monospace", fontSize: "2vw" }}>
            <h6 id="helloUser">
                <b> Hey there,</b> {user.name.split(" ")[0]}!
            </h6>
            <h6 id="myArticles">
                <Link to="/SavedArticles">My Articles</Link>
            </h6>
            </span>
            </React.Fragment>
        );
    }
}

  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    // { logoutUser }
  )(LeftSideHomePage);

