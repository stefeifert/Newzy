import React, { Component } from "react";
import {Link} from "react-router-dom";
import './style.css'

class Landing extends Component {
  render() {
    return (
        <div style={{ height: "93.2vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <span style={{ fontFamily: "Arial Helvetica", fontSize: 50 }}>The one place you need to go for all your news needs!</span>
              </h4>
              <p className="flow-text grey-text text-darken-1">

              </p>
            <br />
              <Link
                to="/register"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
              <Link
              to="/login"
                style={{
                  marginLeft: "2rem",
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect white hoverable black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
 
export default Landing;