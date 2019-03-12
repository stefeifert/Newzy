import $ from 'axios';

const renderArticles = (props) => {
    $(".myArticles").empty();
    console.log('this is working');
    for (let i = 0; i < props.length; i++) {
        $('.myArticles').append(`<p>${props[i].body}<p>"`)
        //     <td><class="articleTitle">${articleList[i].article_name}</td>
        //     <td class="articleAuthor">${articleList[i].author_name}</td>
        //     <td class="articlePub">${articleList[i].publication_source}</td>
        //     <td class="articleUrl">${articleList[i].article_url}</td>
        //     <td><button data-prodId="${articleList[i].id}" class="addButton btn btn-warning">Add to Cart</button></td>
        // </tr>`);
    }
};

export default renderArticles;