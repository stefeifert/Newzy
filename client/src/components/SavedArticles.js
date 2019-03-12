import React, { Component } from "react";
import axios from "axios";
import $ from "axios";
import {Link} from 'react-router-dom';

const RenderArticles = (articleList) => {
    $(".myArticles").empty();
    console.log('this is working');
    for (let i = 0; i < articleList.length; i++) {
        $('.myArticles').append(`<tr id="product-${articleList[i].id}">
            <td><class="articleTitle">${articleList[i].article_name}</td>
            <td class="articleAuthor">${articleList[i].author_name}</td>
            <td class="articlePub">${articleList[i].publication_source}</td>
            <td class="articleUrl">${articleList[i].article_url}</td> 
            <td class="photoUrl">${articleList[i].photo_url}</td>
            <td><button data-prodId="${articleList[i].id}" class="addButton btn btn-warning">Add to Cart</button></td>
        </tr>`);
    }
};



class SavedArticles extends Component {
    state = {

    }

    componentDidMount() {
        const userId = localStorage.getItem("jwtToken");
        $.get(`/api/user/${userId}`)
            .then(function (data) {
                RenderArticles(data.article[0])
            })
    }




    render() {
        return (
            <div>
                <Link to="/HomePage" className="btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i> Back to
                    home
                </Link>
                <div className="myArticles">
                </div>
            </div>
        );
    }
}

export default SavedArticles;