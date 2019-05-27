import React, { Component } from "react";
import { Link } from "react-router-dom";

class LeftSideSavedArticles extends Component {
  render() {
    return (
      <React.Fragment>
        <span  style={{ fontFamily: "monospace", fontSize: "2vw" }}>
          <Link
            to="/HomePage"
            className="btn-flat waves-effect justify-content-left"
            style={{ height: "auto", color: "white"}}
            >
              <h6 className="text-sm-left">
                Back to Home
              </h6>
          </Link>
        </span>
      </React.Fragment>
    );
  }
}
export default LeftSideSavedArticles;
