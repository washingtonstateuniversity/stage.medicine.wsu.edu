(function ($, window) {

	var medicine_skrollr;

	$(document).ready(function(){
		var featured_image = $('.featured-image');
		var h1_header = $('.h1-header');

		// The featured image area should start at 350px and shrink in height to 0 while the
		// background image appears that it remains in the same place.
		featured_image.attr( 'data-0', 'height: 350px; background-position-y:0;position: fixed; top:0;' );
		featured_image.attr( 'data-' + 350, 'height: 0; background-position-y:0;position: fixed; top: 0;');

		// The header for the page should track the moving section as it goes up the page
		// and over the featured image.
		h1_header.attr( 'data-' + 0, 'position: fixed; top: 349px;' );
		h1_header.attr( 'data-' + 350, 'position: fixed; top: 0px;' );

		// Fire skrollr
		medicine_skrollr = skrollr.init({forceHeight: true, smoothScrolling: true});

	});

}(jQuery, window));