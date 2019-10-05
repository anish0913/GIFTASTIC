// DOM to execute javascript
$(document).ready(function () 
{
// Array of movies	
var moviesList = ["Harry Potter", "Avengers", "Hulk", "Karate Kid", "Avatar", "Mission Impossible", "Spiderman", "Conjuring"];

// Buttons for array of movies
function renderButtons() 
{
$("#movieList-buttons").empty();
    for (i = 0; i < moviesList.length; i++) 
    {
	$("#movie-buttons").append("<button class='btn btn-primary' data-movie='" + moviesList[i] + "'>" + moviesList[i] + "</button>");
	}
}
	renderButtons();

// Button for movies entered
$("#add-movie").on("click", function () 
{
	event.preventDefault();
	var movieButton = $("#movieButton-input").val().trim();
	movieButton.push(movieButton);
	renderButtons();
	return;
});


// Gif API
$("button").on("click", function () 
{
	var movie = $(this).attr("data-movie");
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ds6DyfMaOz1WRfxGhI3MQlLgJVWh5XDZ&q=movie&limit=10&offset=0&rating=G&lang=en" 
	movie + "ds6DyfMaOz1WRfxGhI3MQlLgJVWh5XDZ"

// Taken from ajax activity(Calling on AJAX)
	$.ajax(
			
{
	url: queryURL,
	method: "GET"
}).done(function (response) 

{
	var results = response.data;
	$("#movies").empty();
    for (var i = 0; i < results.length; i++) 
        {
			var gifDiv = $("<div>");
			var p = $("<p>").text("Rating: " + results[i].rating);
			var gifimage= $("<img>");
			gifimage.attr("src", results[i].images.original_still.url);
			gifimage.attr("data-still", results[i].images.original_still.url);
			gifimage.attr("data-animate", results[i].images.original.url);
			gifimage.attr("data-state", "still");
			gifimage.attr("class", "gif");
			gifDiv.append(gifimage);
			$("#movies").append(gifDiv);
		}
});
});
});