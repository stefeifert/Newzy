const sourceArray = []; //a list of verified sources to be used for creating custom buttons
const articleList = [];
const keyword = '"' + $('.searchBtn').val().trim() + '"';
const sortByPopularity = 'sortBy=popularity';
const  apiKey = 'apiKey=4a91afd2bdda4b18be76a2f996628566';
const URL = `https://newsapi.org/v2/everything?`; 


//compile an array of valid news sources (engligh)
let sourceList = [];     
let sourceCheck = '';                                         const sourcesURL = `https://newsapi.org/v2/sources?language=en&${apiKey}`; 

$.ajax({j
    url: sourcesURL,      
    method: 'Get'
}).then(function (resSources) { 
    for(i=0; i<resSources.length; i++){
        sourceCheck = resSources[i].id;
        sourceList.push(sourceCheck);
    }                                  
    return sourceList;
});
//-------Receiving Input to make New Buttons----------------//
const addButton = function(event){
    event.preventDefault();
    const sourceInput = $('#sourceInput').val().trim();
    if(sourceList.includes(sourceInput)){//NEED A WAY OF GIVING OPTION BETWEEN SIMILAR i.e. abc / abc australia
        
        sourceArray.push(sourceInput);
        render();
    }
    else{
        alert(`${sourceInput} is not a valid news source`);
    }
    $('#sourceInput').val('');
    } 
//////////////////////////////////////////
//keyword search with default 20 results//
/////////////////////////////////////////
const genericKeyword = function(){
    $.ajax({
        url: `${URL}q=${keyword}&${apiKey}`,
        method: 'Get'                                            
    }).then(function (results) {
        for(i=0; i<results.length; i++){
            articleList.push(results[i]);
        }                         
        return articleList;
    });
    console.log(articleList);  
}
////////////////////////////////////////////////////////////
//keyword search, get 3 separate sources from most-popular//
////////////////////////////////////////////////////////////
const threeSources = function(keyword){
    $.ajax({
        url: `${URL}q=${keyword}&language=en&${sortByPopularity}&${apiKey}`,
        method: 'Get'                                            
    }).then(function (results) {
        articleList.push(results[0]); //accepts first article
        sourceA = articleList[0].name;//assigns first article's name 
        sourceB = 'applesandoranges';
        for(i=1; i<results.length; i++){
            if(articleList.length > 2){ //break loop when articleList has 3 articles
                break;
            }
            if(results[i].name !== sourceA && results[i].name !== sourceB){
            articleList.push(results[i]);
            }
            if(sourceB = 'applesandoranges'){
                sourceB=results[i].name
            }
        }                         
        return articleList;
    });
    console.log(articleList);  
}