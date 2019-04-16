import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import "../../App.css";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return ( 
      <nav className="navbar navbar-expand-lg">
      <div className="container" id="navbar">
            <div className="row">
              <div className="col-sm-2">
              <h6 
                className="text-sm-left" 
                id="helloUser">
                <b> Hey there,</b> {user.name.split(" ")[0]}!
              </h6>
              <h6 
                className="text-sm-left"
                id="myArticles" 
                >
                <Link 
                  to="/SavedArticles"
                  >
                  My Articles
                  </Link>
              </h6>
              </div>
              <div className="col-sm-8">
              <h3
                style={{ fontFamily: 'Bitter' }}
                className="text-sm-center"
                id="newzy"
              ><em>
                Newzy
                </em>
              </h3>
              </div>
              <div className="col-sm-2">
                <button
                  onClick={this.onLogoutClick}
                  className="btn btn-md waves-effect waves-light hoverable blue accent-3"
                  id="loginBtn"
                >
                  Logout
                </button>
                </div>
            </div>
      </div>
      </nav>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
