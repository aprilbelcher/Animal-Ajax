$("#addAnimal").on("click", function(event) {
	event.preventDefault();
	console.log(this)
	var newAnimal = $("#animal-input").val();
	console.log(newAnimal,"textbox")
	var queryURL ="https://api.giphy.com/v1/gifs/search?q=" +
        newAnimal + "&api_key=K6HGI5B0BNCfuNA1SXTywObv5kSs9n5k&limit=5";
        // console.log(queryURL);


	$.ajax({ 
		url: queryURL,
		method: "GET"
	})

	.done(function (response) {
		
		// Clear form text area for each successul search
		$("#animal-form")[0].reset();

		var results = response.data;

		var newButton = $("<button>").attr("class", "added").text(newAnimal);
		
		$("#animal-buttons").prepend(newButton);

		$(".added").on("click", function(event){
			event.preventDefault();

		    for (var i = 0; i <results.length; i++) {
				var gifDiv = $("<div class='item'>");

				var rating = results[i].rating;

				var p = $("<p>").text("Rating:" + rating);

				var animalGif = $("<img>");
				animalGif.attr("src", results[i].images.fixed_height_still.url)
					.attr("data-still", results[i].images.fixed_height_still.url)
					.attr("data-animate", results[i].images.fixed_height.url)
					.attr("data-state", "still") // still / animate
					.attr("class","gif");


				gifDiv.prepend(animalGif);
				$("#animals").prepend(gifDiv);
				$("#animals").prepend(p);
			}

			// Resets value of newAnimal to be used for next search
			newAnimal.reset();

			$(".gif").click(function(){
				// console.log(this);
				// console.log($(this).attr("data-state"))

				if ($(this).attr("data-state") === "still"){
					$(this).attr("src", $(this).attr("data-animate"))
					$(this).attr("data-state", "animate")
				} else {
					$(this).attr("src", $(this).attr("data-still"))
					$(this).attr("data-state", "still")
				}
			})


		});
				 
			

	});
});