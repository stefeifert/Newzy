$(function () {

    const searchNewzy = function (event) {
        // event.preventDefault();
        const userInput = $(".searchBtn").val().trim();
        newsSearch(userInput);
        $(".searchBtn").val();
    };
    
    
    const newsSearch = function () {
        const queryURL = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=4a91afd2bdda4b18be76a2f996628566';
    
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            console.log(response.json());
    
        })
    };
    
    const parseAccessToken = function () {
        const index1 = window.location.hash.indexOf("=") + 1;
        const index2 = window.location.hash.indexOf("&");
        const accessToken = window.location.hash.substring(index1, index2);
        return accessToken;
    }
    
    searchNewzy();
    // $(".searchBtn").on('click', searchNewzy);
    
});

