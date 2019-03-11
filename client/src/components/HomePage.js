import React, { Component } from "react";
import '../App.css';
import axios from 'axios'
import NewzyCalls from './NewzyCalls';
import KeywordSearch from './KeywordSearch';


//https://newsapi.org/v2/everything?q="hugo chavez"&apiKey=4a91afd2bdda4b18be76a2f996628566
// article_name: String,
// author_name: String,
// publication_source: String,
// article_url: String

class HomePage extends Component {
  state = {
    sources: [
      {
        id:"cnn", 
        name: "CNN"
      },
      {
        id: "bbc-news",
        name: "BBC News"
       },
       {
        id: "fox-news",
        name: "FOX News"
       } 
    ], //this array wil be used to compile buttons
    newSource: {id: '', name: ''},
    sourceList: [], //this will be populated with verified news sources
    sourceIds: [],
    isValidSource: false,
    keywordSearch: '',
    searchResults: ''
}

createSourceList = () => {
  axios.get('https://newsapi.org/v2/sources?language=en&apiKey=4a91afd2bdda4b18be76a2f996628566')
  .then((result) => {
    this.setState({sourceList: result.data});
    console.log(this.state.sourceList);
  })
}
searchResults = (event) => {
  axios.get(`https://newsapi.org/v2/everything?q="${this.state.keywordSearch}"&apiKey=4a91afd2bdda4b18be76a2f996628566`)
  .then((result) => {
    this.setState({searchResults: result.data});
    console.log(this.state.searchResults)
  })
}
searchChangeHandler = (event) => {
  event.preventDefault();
  const keywordSearch = event.target.value;
  this.setState({keywordSearch: keywordSearch});
}

searchClickHandler = (event) => {
  event.preventDefault();
  this.searchResults();
}

sourcesChangeHandler = (event) => {
  event.preventDefault();
  const inputSource = {
    id: event.target.value.replace(/\s+/g, "-").toLowerCase(),//changes "Al Jazeera" to "al-jazeera"
    name: event.target.value
  }
  this.setState({newSource: inputSource});
}

sourcesClickHandler = (event) => {
      event.preventDefault();
      this.setState({sources:[...this.state.sources, this.state.newSource]});
      this.setState({newSource: ''});
      console.log("sources: " + this.state.sources);
  }

  componentDidMount(){
    this.createSourceList();
  }

  render() {
    const currentSources = this.state.sources;
    const sourcesBtn = currentSources.map(
      source => {
        return(
          <button key={source.id}>{source.name}</button>
        )
      }
    )
    return (
      <div className="App">
        <NewzyCalls 

        sourcesChangeHandler={this.sourcesChangeHandler}
        btnRow={this.state.createButtons}
        sourcesClickHandler={this.sourcesClickHandler}
        />
        <span>{sourcesBtn}</span>
        <KeywordSearch
        searchChangeHandler={this.searchChangeHandler}
        searchClickHandler={this.searchClickHandler}
        searchResults={this.state.searchResults}
        />
      </div>
    );
  }
}


export default HomePage;
