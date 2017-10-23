(function( $ ) {
	$( function(){

		// Let’s make a carousel!
		// First, we’ll check to see if the viewport is wider than 500px.
		if ( document.documentElement.clientWidth >= 500 ) {

			// Now, let’s use $.get() to remotely fetch our slides.
			// (Normally, I’d use a `data-` attribute on the `.slides` element to reference this HTML stub, but this simplifies the example a bit.)
			$.get( "-/ajax/slides.html", function( data ) {
				$( ".welcome .slides" )
					.append( data )
					.carousel();
			});
		}

	} );
}( jQuery ));