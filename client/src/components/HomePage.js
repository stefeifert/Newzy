import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import SourceButtons from "./SourceButtons";
import KeywordSearch from "./KeywordSearch";
import Dashboard from "./dashboard/Dashboard";


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
    newSource: { id: "", name: "" },
    sourceList: [], //this will be populated with verified news sources
    sourceIds: [],
    isValidSource: false,
    keywordSearch: "",
    searchResults: [],
    singleSource: "",
    newArticle: {
      article_name: "",
      article_description: "",
      author_name: "",
      publication_source: "",
      article_url: "",
      photo_url: ""
    }
  };

  createSourceList = () => {
    axios
      .get(
        "https://newsapi.org/v2/sources?language=en&apiKey=4a91afd2bdda4b18be76a2f996628566"
      )
      .then(result => {
        this.setState({ sourceList: result.data });
      });
  };

  searchResults = event => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q="${
          this.state.keywordSearch
        }"&apiKey=4a91afd2bdda4b18be76a2f996628566`
      )
      .then(result => {
        this.setState({ searchResults: result.data.articles });
      });
  };

  searchChangeHandler = event => {
    event.preventDefault();
    const keywordSearch = event.target.value;
    this.setState({ keywordSearch: keywordSearch });
  };
  searchClickHandler = event => {
    event.preventDefault();
    this.searchResults();
  };

  sourcesChangeHandler = event => {
    event.preventDefault();
    const inputSource = {
      id: event.target.value.replace(/\s+/g, "-").toLowerCase(), //changes "Al Jazeera" to "al-jazeera"
      name: event.target.value
    };
    this.setState({ newSource: inputSource });
  };

  sourcesClickHandler = event => {
    event.preventDefault();
    this.setState({ sources: [...this.state.sources, this.state.newSource] });
    this.setState({ newSource: "" });
  };

  singleSourceClick = event => {
    // event.preventDefault();
    const whichSource = event.target.value;
    this.setState({ singleSource: whichSource }, this.createSourceNews);
  };

  createSourceNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=${
          this.state.singleSource
        }&apiKey=4a91afd2bdda4b18be76a2f996628566`
      )
      .then(result => {
        this.setState({ searchResults: result.data.articles });
      });
  };

  articleSaver = event => {
    const clickedArticle = {
      article_name: event.target.title,
      article_description: event.target.getAttribute("description"),
      author_name: event.target.getAttribute("author"),
      publication_source: event.target.getAttribute("publication"),
      article_url: event.target.getAttribute("url"),
      photo_url: event.target.getAttribute("pic")
    };
    event.target.innerHTML = "Article Saved";
    event.target.setAttribute("disabled", "disabled");
    this.setState({ newArticle: clickedArticle }, this.createSave);
  };

  createSave = () => {
    axios.post(`api/article`, this.state.newArticle).then(res => {
    });
  };

  componentDidMount() {
    this.createSourceList();
  }

  render() {
    const currentSources = this.state.sources; //button array of news sources
    const sourcesBtn = currentSources.map(source => {
      return (
        <button
          className="btn"
          onClick={this.singleSourceClick}
          key={source.id}
          value={source.id}
        >
          {source.name}
        </button>
      );
    });
    return (
      <div className="HomePage">
        <div>
          <Dashboard />
        </div>
        <div className="mt-5">
          <p className="words" id="sourceWords">
            see headlines from your favorite news sources
          </p>
          <p id="sourceBtns">{sourcesBtn}</p>
          <SourceButtons
            sourcesChangeHandler={this.sourcesChangeHandler}
            btnRow={this.state.createButtons}
            sourcesClickHandler={this.sourcesClickHandler}
          />
          <p className="words" id="keywordWords">
            or just search by keyword
          </p>
          <KeywordSearch
            searchChangeHandler={this.searchChangeHandler}
            searchClickHandler={this.searchClickHandler}
            searchResults={this.state.searchResults}
          />
          <div className="resultsDiv">
            {this.state.searchResults.map(d => (
              <div className="card" key={d}>
                <div className="card-img-top">
                  <p>{d.description}</p>
                  <img src={d.urlToImage} alt="Newzy" ></img>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{d.title}</h5>
                  <h6 id="articleSource">{d.source.name}</h6>
                  <p style={{ fontSize: 15 }}>{d.publishedAt.toString().substr(5,5)}-{d.publishedAt.toString().substr(0,4)}</p>
                  <p style={{ fontSize: 25 }}>{d.author}</p>
                  <p style={{ fontSize: 20 }}>
                    <button className='btn btn-secondary'> <a href={d.url}>
                      go to story</a>
                    </button>
                  </p>
                  <button
                    className="btn saveBtn"
                    onClick={this.articleSaver}
                    id={d._id}
                    title={d.title}
                    description={d.description}
                    author={d.author}
                    publication={d.source.name}
                    url={d.url}
                    pic={d.urlToImage}
                  >
                    Save to My Articles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
