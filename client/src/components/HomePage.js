import React, { Component } from "react";
import '../App.css';
import axios from 'axios'
import SourceButtons from './SourceButtons';
import KeywordSearch from './KeywordSearch';
import Dashboard from "./dashboard/Dashboard";
import Result from './Result';


//https://newsapi.org/v2/everything?q="hugo chavez"&apiKey=4a91afd2bdda4b18be76a2f996628566
// article_name: String,
// author_name: String,
// publication_source: String,
// article_url: String

class HomePage extends Component {
  state = {
    sources: [
      {
        id: "cnn",
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
    newSource: { id: '', name: '' },
    sourceList: [], //this will be populated with verified news sources
    sourceIds: [],
    isValidSource: false,
    keywordSearch: '',
    searchResults: [],
    singleSource: '',
    newArticle: {
      article_name: '',
      author_name: '',
      publication_source: '',
      article_url: '',
      photo_url: ''
    }
  }

  createSourceList = () => {
    axios.get('https://newsapi.org/v2/sources?language=en&apiKey=4a91afd2bdda4b18be76a2f996628566')
      .then((result) => {
        this.setState({ sourceList: result.data });
        console.log(this.state.sourceList);
      })
  }

  searchResults = (event) => {
    axios.get(`https://newsapi.org/v2/everything?q="${this.state.keywordSearch}"&apiKey=4a91afd2bdda4b18be76a2f996628566`)
      .then((result) => {
        this.setState({ searchResults: result.data.articles });
        console.log(this.state.searchResults);
      })
  }
  
  searchChangeHandler = (event) => {
    event.preventDefault();
    const keywordSearch = event.target.value;
    this.setState({ keywordSearch: keywordSearch });
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
    this.setState({ newSource: inputSource });
  }

  sourcesClickHandler = (event) => {
    event.preventDefault();
    this.setState({ sources: [...this.state.sources, this.state.newSource] });
    this.setState({ newSource: '' });
    console.log("sources: " + this.state.sources);
  }

  singleSourceClick = (event) => {
    // event.preventDefault();
    const whichSource = event.target.value;
    this.setState({singleSource: whichSource}, this.createSourceNews);

  }
  
  createSourceNews = () => {
    console.log(this.state.singleSource);
    axios.get(`https://newsapi.org/v2/top-headlines?sources=${this.state.singleSource}&apiKey=4a91afd2bdda4b18be76a2f996628566`)
    .then((result) => {
      this.setState({ searchResults: result.data.articles });
      console.log(this.state.searchResults);
    })
  }

  articleSaver = (event) => {
    const clickedArticle = {
      article_name: event.target.title,
      author_name: event.target.getAttribute('author'),
      publication_source: event.target.getAttribute('publication'),
      article_url: event.target.getAttribute('url'),
      photo_url: event.target.getAttribute('pic')
    }
    console.log(clickedArticle);
    this.setState({newArticle: clickedArticle})
  }

  componentDidMount() {
    this.createSourceList();
  }

  render() {
    const currentSources = this.state.sources;  //button array of news sources
    const sourcesBtn = currentSources.map(
      source => {
        return (
          <button onClick={this.singleSourceClick}  key={source.id} value={source.id}>{source.name}</button>
        )
      }
    )
    return (
      <div className="HomePage">
        <Dashboard />
        <SourceButtons
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
        <div>
          {/* {this.state.searchResults.map(d =>
            <Result key={d.publishedAt}
              article_title={d.title}
              source_name={d.source_name}
              author_name={d.author}
              articleUrl={d.url}
            />)} */}
        {this.state.searchResults.map(d => <div key={d.publishedAt}>
        <p>{d.title}</p> 
        <p>{d.source.name}</p>
        <p>{d.author}</p> 
        <p><a href={d.url}>{d.url} </a></p>
        <button onClick={this.articleSaver} title={d.title} author={d.author} publication={d.source.name} url={d.url} pic={d.urlToImage}>Save to My Articles</button>
        <hr></hr>
        </div>)}
        </div>

      </div>
    );
  }
}


export default HomePage;
