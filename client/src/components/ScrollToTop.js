import React, { Component } from "react";

class ScrollToTop extends Component {
    scrollUp = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

  render() {
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
