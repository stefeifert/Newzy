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
      <div>
        <nav className="m-auto navbar navbar-expand-lg navbar-dark">
          <div className="">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li
                style={{ fontFamily: "monospace" }}
                className="s5 brand-logo center black-text"
              >
               Newzy
              </li>
              <li className="nav-item" id="helloUser">
                <b> Hey there,</b> {user.name.split(" ")[0]}!
              </li>
              <li className="nav-item">
                <p><Link id="myArticles" to="/SavedArticles">My Articles</Link></p>
              </li>
              <li id="emptyLI" className="nav-item" />
              <li>
                <button
                  onClick={this.onLogoutClick}
                  className="btn btn-md waves-effect waves-light hoverable blue accent-3"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
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
