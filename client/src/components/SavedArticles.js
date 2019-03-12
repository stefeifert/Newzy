import React, { Component } from "react";
import axios from "axios";
import $ from "axios";

const renderArticles = (articleList) => {
    $(".myArticles").empty();
    console.log('this is working');
    for (let i = 0; i < articleList.length; i++) {
        $('.myArticles').append(`<tr id="product-${articleList[i].id}">
            <td><class="articleTitle">${articleList[i].article_name}</td>
            <td class="articleAuthor">${articleList[i].author_name}</td>
            <td class="articlePub">${articleList[i].publication_source}</td>
            <td class="articleUrl">${articleList[i].article_url}</td>
            <td><button data-prodId="${articleList[i].id}" class="addButton btn btn-warning">Add to Cart</button></td>
        </tr>`);
    }
};



class SavedArticles extends Component {
    getArticles = () => {
        axios
            .get("/api/articles")
            .then(function (data) {
                renderArticles(data)
            })
    }

    render() {
        return (
            <div className="SavedArticles container">
                <table className="myArticles">
                <getArticles /> 
                </table>
            </div>
        );
    }
}

export default SavedArticles;