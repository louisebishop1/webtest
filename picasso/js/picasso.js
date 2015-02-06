//Aim: Fade in our lightbox on click, displaying the correct
//image

//Step 1: Attach a click event listener to our section
//images

$('section img').on('click', function () {

//Step 2: Fade in our lightbox over 250ms
	$('.lightbox').fadeIn(250);

//Step 4: Find the src attribute of the image we've clicked on and store 
//it in a variable
	var imageSrc = $(this).attr('src');
	console.log(imageSrc);

//Step 5: Replace the img src inside of lightbox, with the image src stored
//inside our variable

	$('.lightbox img').attr('src', imageSrc);
});


//Step 3: Fade out our lightbox
$('.lightbox').on('click', function() {

	$('.lightbox').fadeOut(250);
});

//Aim: to get our pixel counter to display the number of pixels we are
//from the top. We will then use this to set our background colour
//changes, as we scroll.

//Step 1: Create a scroll event listener
//We use the document key word, which applies this event listener
//to our entire webpage
$(document).on('scroll', function() {

	//Step 2: Test the distance box by adding some html
	//$('.distance').html("100 pixels down");

	//Step 3: Store the current distance from the top our
	//vertical scroll bar is in pixels
	var pixelsFromTop = $(document).scrollTop();
	console.log(pixelsFromTop);

	//Step 4: Add the stored pixel distance to our distance box
	$('.distance').html(pixelsFromTop + ' pixels down');

	//Step 5: Change our background colour according to height of
	//our scroll bar
	if (pixelsFromTop > 45) {
		//change background colour to blue
		//$('body').css('background', '#b8d7e8');
		$('body').addClass('blue');
	} else {
		//change background colour to white
		$('body').removeClass('blue');
	}

	//Step 6: Toggle class instead of using an if statement
	$('body').toggleClass('rose', pixelsFromTop > 1200);
	$('body').toggleClass('cubism', pixelsFromTop > 2540);



});


















