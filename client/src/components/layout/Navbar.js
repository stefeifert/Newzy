import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewzyLogo from '../dashboard/NewzyLogo'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper ">
          <div className="row">
              <div className="col-sm-3" id="homeLink"
                >
                <Link
                  to="/HomePage"
                  className="btn-flat waves-effect justify-content-left"
                  style={{ height: "auto", color: "white"}}
                  >
                  <i 
                    class="fas fa-long-arrow-alt-left"
                  >
                    <span 
                      style={{ fontFamily: "monospace", textTransform: "none", fontSize: "2vw" }}
                      >&nbsp;
                      Back to Home
                    </span>
                  </i>
                </Link>
              </div>
              <div className="col-sm-6">
                <NewzyLogo />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
