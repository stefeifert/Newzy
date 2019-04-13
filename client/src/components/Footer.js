import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


const Footer = (props) => (
     <div>
        <footer className="footer">
          <span><Link id="myArticles" to="/SavedArticles">My Articles</Link></span>
        </footer>
      </div>
    );



export default Footer;
