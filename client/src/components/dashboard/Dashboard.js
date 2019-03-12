import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from 'react-router-dom';


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
        <div className="navbar-fixed">
          <nav className="">
            <ul>
              <li>
                <b>Hey there,</b> {user.name.split(" ")[0]}
              </li>
              <li>
                <button

                  onClick={this.onLogoutClick}
                  className="m-5 btn btn-md waves-effect waves-light hoverable blue accent-3"
                >
                  Logout
            </button>
              </li>
              <li>
                <Link to="/SavedArticles">
                <button>
                    My Articles
                </button>
                </Link>
              </li>
            </ul>
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