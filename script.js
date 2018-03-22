

var queryData = '';
var searchQuery = '';


function wikiSearch() {


var input = document.getElementById("searchQuery").value;
var remoteUrlWithOrigin = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + input + '&srwhat=text&srprop=snippet&format=json';
var queryData = '';
var searchQuery = '';


if(input != '') {
$(".results-container").html('');
$.ajax({
    url: remoteUrlWithOrigin,
    data: queryData,
    dataType: 'jsonp',
    type: 'POST',
    headers: { 'Api-User-Agent': 'MyCodingProject.com' },
    success: function(data) {
       console.log(data);
       $(".random-container").css("margin-top", "0");
       $.each(data.query.search, function(i){
        $(".results-container").append(
            "<li class='item["+i+"]'><a href='https://en.wikipedia.org/?curid='"+data.query.search[i].pageid+"><h1 class='dataTitle'>" + data.query.search[i].title + "</h1><p class='dataSnippet'" + data.query.search[i].snippet + "..." + "</p></li></a>"



            ).hide().fadeIn(500);
       })
    }
});

} else {
    return false;
}

return false;
}



$(document).ready(function() {





});