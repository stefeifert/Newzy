import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class AutoInput extends Component {
  state = {
    sourceList: [
       ]
  };
  createSourceList = () => {
    let sourceArray = [];
      axios.get('https://newsapi.org/v2/sources?apiKey=4a91afd2bdda4b18be76a2f996628566'
      ).then(result => {
          sourceArray = result.data.sources;
          const sources = sourceArray.map((source) => source.name);
          this.setState({ sourceList: sources});
      });
  };


  componentDidMount() {
      this.createSourceList();
  };

  render(props) {
    return (
      <span>
          <input 
            type="text" 
            list="sources" 
            id="inputSource"
            onChange={this.props.sourcesChangeHandler}
            value={this.props.value}
            />
          <datalist id="sources">
            {this.state.sourceList.map(source => (
              <option 
                key={source} 
                value={source} 
              />
            ))}
          </datalist>
      </span>
    );
  }
}

export default AutoInput;
