import React from "react";
import "../App.css";

const ScrollToTop = props => (
    <button 
        onClick={props.scrollUp} 
        id="scrollBtn" 
        className="btn btn-md waves-effect waves-light hoverable blue accent-3" 
        title="Go to top"
    >
        Top
    </button>
);

export default ScrollToTop;