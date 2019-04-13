import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper ">
            <ul>
              <li>
                <Link
                  to="/HomePage"
                  className="btn-flat waves-effect justify-content-left"
                >
                  <i className="material-icons left">keyboard_backspace</i> Back
                  to home
                </Link>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: "monospace"
                  }}
                  className="col s5 brand-logo center black-text"
                >
                 <em className="subNewzy">your</em> Newzy <em className="subNewzy">articles</em>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
