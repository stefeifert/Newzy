import React, { Component } from "react";
import AutoInput from "./AutoInput";

class NewsSources extends Component {
  render() {
    const currentSources = this.props.sources; //button array of news sources
    const sourcesBtn = currentSources.map(source => {
      return (
        <button
          className="btn"
          onClick={this.props.singleSourceClick}
          key={source.id}
          value={source.id}
        >
          {source.name.replace(/-/g, " ")}
        </button>
      );
    });
    return (
      <div>
        <p className="words" id="sourceWords">
          see headlines from your favorite news sources
        </p>
        <p id="sourceBtns">{sourcesBtn}</p>
        <form id="sourceDiv">
          {this.props.btnRow}
          <AutoInput
            sourcesChangeHandler={this.props.sourcesChangeHandler}
            value={this.props.value}
            name={this.props.name}
          />
          <button
            className="btn btn-secondary"
            id="sourceBtn"
            onClick={this.props.sourcesClickHandler}
          >
            Add News Source
          </button>
        </form>
      </div>
    );
  }
}

export default NewsSources;
