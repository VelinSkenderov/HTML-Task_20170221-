$(document).ready(function(){
	$('.navbar-collapse').css('height' , '1px');


	var sliderButtons = $('.slider-buttons .buttons .button-effect a');
	$('.slider-buttons .buttons .button-effect a[data-id=0]').addClass('active-button');

	/* Slider */

	$("#index-slider").owlCarousel({
		items: 1,
		loop: true,
		itemsCustom: [[0, 1], [400, 1], [700, 1], [1000, 1], [1200, 1], [1600, 1]],
		autoplay : true,
		pagination: false,
		navigation: false,
	});
	$('#index-slider').on('changed.owl.carousel', function (e) {
		sliderButtons.removeClass('active-button');
		var item = (e.item.count < e.item.index-1) ? 0 : e.item.index-2;
		$('.slider-buttons .buttons .button-effect a[data-id = ' + item + ']').addClass('active-button');
	});
	/* end */

	/* Footer Owl */

	$('#footer-owl').owlCarousel({
		items: 4,
		autoplay : true,
		pagination: false,
		navigation: false,
		responsive: {
	      0 : {
	        items: 2,
	        margin: 0,
	      },
	      768 : {
	        items: 2,
	      },
	      992 : {
	        items: 4,
	      },
	      1200 : {
	        items: 4,
	      }
	    },
	});

	/* Slider Buttons */
	var owl = $("#index-slider");

	sliderButtons.click(function(e){
		e.preventDefault();
		owl.trigger('to.owl.carousel', $(this).data("id"), 500);
		sliderButtons.removeClass('active-button');
		$(this).addClass('active-button');
	});
	/* end */

	/* Scroll to Top Btn */
	$toTop = $('#to-top');
	$toTop.click( function(e){
		e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
	});
	/* end */
	var itemHeight = ($('.container').width() / 2);
	$("#index-slider .item").css('height' , itemHeight);

	// $('.dropdown-toggle').on('click touchstart' , function(e){
	// 	e.preventDefault(e);
	// 	return true;
	// });

	$('navbar-nav li a').on('click touchstart' , function(e){
		var href = $(this).attr('href');
		window.location.href(href);
		return true;
	});

	$('.dropdown-menu').mouseover(function() {
		$(this).closest('li.dropdown').addClass('hover');
	});

	$('.dropdown-menu').mouseout(function() {
		$(this).closest('li.dropdown').removeClass('hover');
	});

	$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
	    input.val('');
	    input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
	    input.addClass('placeholder');
	    input.val(input.attr('placeholder'));
	  }
	}).blur();

	$('.dropdown-toggle').on('click', function(event) {
		event.preventDefault();
		if ($( window ).width() <= 767) {
		 	$('.dropdown-menu').removeClass('active');
		 	$(this).parent().children('.dropdown-menu').addClass('active');
		}
	});




});
