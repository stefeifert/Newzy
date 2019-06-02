import React, { Component } from "react";

class ScrollToTop extends Component {
  scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  //SCROLLING functions

  scrollFunction = () => {
    window.pageYOffset < 500 ?
    document.getElementById('scrollBtn').style.display="none" :
    document.getElementById('scrollBtn').style.display="inline";  }

 componentDidMount() {
   window.pageYOffset === 0 ?
   document.getElementById('scrollBtn').style.display="none" :
   document.getElementById('scrollBtn').style.display="inline";

   window.addEventListener('scroll', this.scrollFunction);
};


  render(props) {
    return (
      <button
        onClick={this.scrollUp}
        id="scrollBtn"
        className="btn btn-md waves-effect waves-light hoverable blue accent-3"
        title="Go to top"
      >
        Top
      </button>
    );
  }
}

export default ScrollToTop;
