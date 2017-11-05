$("#addAnimal").on("click", function() {

	var newAnimal = $(this).atrr("#animal-input");
	var queryURL ="https://api.giphy.com/v1/gifs/search?q=" +
        newAnimal + "&api_key=K6HGI5B0BNCfuNA1SXTywObv5kSs9n5k&limit=5";
        console.log(newAnimal);


	$.ajax({ 
		url: queryURL,
		method: "GET"
	})

	.done(function (response) {
	    var results = repsonse.data;
		var newButton = $("<button class='added'>");

		$(".added").on("click", function(){
		    for (var i = 0; i <results.length; i++) {
				var gifDiv = $("<div class='item'>");

				var animalGif = $("<img>");
				animalImage.attr("src", results[i].images.fixed_height.url);

				gifDiv.prepend(animalImage);

				$("#animals").prepend(givDiv);
		     };
	   });
	});







});