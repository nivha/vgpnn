window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

		
		// <-- I'm Vegeterian button-->
		$('button#button').click(function() {
			// toggle style (color)
			$(this).toggleClass("is-primary");

			// change image
			var img = document.getElementById("eww");
			var isMeat = img.src.indexOf('eww.jpg') != -1;
			img.src = isMeat ? img.src.replace('eww.jpg', 'drake.png') : img.src.replace('drake.png', 'eww.jpg');
			
			// change videos
			const meats = ["waterfall2meat", "lava2meat", "meat", "sheep2meat", "meat2waterfall", "meat2lava", "meat2sheep"]
			const slims = ["waterfall2slime", "lava2slime", "slime", "sheep2slime", "slime2waterfall", "slime2lava", "slime2sheep"]
			meats.forEach(function (mn, index) {
				sn = slims[index];
				var vid = document.getElementById(mn);
				var src = vid.getElementsByTagName('source')[0].src
				var isMeat = src.indexOf(mn) != -1;
				vid.getElementsByTagName('source')[0].src = isMeat ? src.replace(mn, sn) : src.replace(sn, mn);
				vid.load()				
		});
		// <--/ I'm Vegeterian button-->
			
			
		});

		// <--generation-carousel-->
    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.results-carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }
		// </--generation-carousel-->
		
		// <--spatret-carousel-->
		var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

	  // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.spatret-carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }
		// </--spatret-carousel-->


		// <--comparison-carousel-->
		var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

	  // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.comparison-carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }
		// </--comparison-carousel-->

		
		// <--tempret-carousel-->
		var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

	  // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.tempret-carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }
		// </--tempret-carousel-->


		// <--sumret-carousel-->
		var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

	  // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.sumret-carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }
		// </--sumret-carousel-->


		// <--cinp-carousel-->
		var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

	  // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.cinp-carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }
		// </--cinp-carousel-->

		// <--analogies-carousel-->
		var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

	  // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.analogies-carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }
		// </--analogies-carousel-->



    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }
		
		
		// fix analogies sheep width
		w_height = $(".analogies_vid, .analogies_w")[0].getBoundingClientRect().height;
		$(".analogies_vid, .analogies_h").css("width", w_height);
		$(".analogies_vid, .analogies_w").css("height", w_height);
		
		// add Next-Prev to sliders
		
		nexts = $(".slider-navigation-next");
		for(var i=0;i<nexts.length;i++){
				nexts[i].innerHTML += "<b>Next</b>";
		}
		prevs = $(".slider-navigation-previous");
		for(var i=0;i<prevs.length;i++){
				prevs[i].innerHTML += "<b>Prev</b>";
		}

		// $(".slider-navigation-next")[0].innerHTML += "Next";
		// $(".slider-navigation-previous")[0].innerHTML += "Prev";


})
