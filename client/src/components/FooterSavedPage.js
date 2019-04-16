import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const FooterSavedPage = props => (
  <footer className="footer">
    <span>
      <Link
        to="/HomePage"
      >
        Back to home
      </Link>
    </span>
  </footer>
);

export default FooterSavedPage;
