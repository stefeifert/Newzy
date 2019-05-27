import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LeftSideHomePage from './LeftSideHomePage';
import NewzyLogo from "./NewzyLogo";
import { logoutUser } from "../../actions/authActions";
import "../../App.css";

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
            <div className="col-sm-2">

              <LeftSideHomePage />
            </div>
            <div className="col-sm-8">
              <NewzyLogo />
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
