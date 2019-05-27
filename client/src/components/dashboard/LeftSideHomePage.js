import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class LeftSideHomePage extends Component {
    render() {
        const { user } = this.props.auth;
        return(
            <React.Fragment>
            <h6 className="text-sm-left" id="helloUser">
                <b> Hey there,</b> {user.name.split(" ")[0]}!
            </h6>
            <h6 className="text-sm-left" id="myArticles">
                <Link to="/SavedArticles">My Articles</Link>
            </h6>
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

