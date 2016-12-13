$(document).ready(function () {
    //based on the submit button do the following:
    $("#search-items").submit(function (e) {
        //for refreshing the page you can prevent by using javascript
        e.preventDefault();
        //make a searchitem to get input from user in the search box
        var searchItem = $("#search-section").val();
        //call the function display using this variable
        display(searchItem);
    });

    //get the api call with this function using search item variable
    function display(searchItem) {
        //use the getJSon method
        $.getJSON("https://www.googleapis.com/youtube/v3/search", {
                //put the parameters that are necessary in the variable params for youtube
                part: 'snippet',
                key: 'AIzaSyDEZV-YqmCwSXXrRVvDLzn2maxBj4dDfrk',
                type: "video",
                q: searchItem
            },

            function (resultsection) {
                //call the function below
                showResults(searchItem.items);

            });
    }

    function showResults(resultArray) {
        //populate the html with the .each array and get the right responses and display them

        var storeLi = "";

        $.each(resultArray, function (resultArrayKey, resultArrayValue) {

            storeLi += "<li>";
            storeLi += "<p>" + resultArrayValue.snippet.title + "</p>"; //output vide title
            storeLi += "<a href='https://www.youtube.com/watch?v=" + resultArrayValue.id.videoId + "' target='_blank'>";
            storeLi += "<img src='" + resultArrayValue.snippet.thumbnails.high.url + "'/>";
            storeLi += "</a>";
            storeLi += "</li>";
        });
        $("#results-section ul").html(storeLi);
    }
});
