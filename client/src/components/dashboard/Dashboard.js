import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LeftSideHomePage from './LeftSideHomePage';
import NewzyLogo from "./NewzyLogo";
import { logoutUser } from "../../actions/authActions";
import "../../App.css";
import LeftSideSavedArticles from "./LeftSideSavedArticles";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container" id="navbar">
          <div className="row">
            <div style={{ width: "30%", float: "left", textAlign: "left" }}>
              <span style={{ display: this.props.ForHomePage }}>
              <LeftSideHomePage />
              </span>
              <span style={{ display: this.props.ForSavedArticles }}>
              <LeftSideSavedArticles/>
              </span>
            </div>

            <div style={{ width: "40%", textAlign: "center", clear: "both" }}>
              <NewzyLogo />
            </div>

            <div style={{ width: "30%", margin: "0" }}>
            <button
              style={{ float: "right", margin: "0" }}
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
