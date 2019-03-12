import React, { Component } from "react";
import {Link} from "react-router-dom";
import background from './newsBackground.jpg'

class Landing extends Component {
  render() {
    return (
<<<<<<< HEAD
      console.log(background),
      <img src={background} alt="newsBackground"></img>
        <div style={{ height: "75vh" }} className="container valign-wrapper">
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
=======
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              Welcome to <b>Newzy!</b>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              A News Search Engine that lets you access all of your trending News
              articles in one app, simultaniously!
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
>>>>>>> d23d5395d914e04761d8c374ba9007799af58286
          </div>
        </div>
      );
    }
}
 
export default Landing;