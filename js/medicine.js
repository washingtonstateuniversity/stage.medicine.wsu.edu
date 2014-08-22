(function ($, window) {

	var medicine_skrollr;

	$(document).ready(function(){
		var featured_image = $('.featured-image');
		var h1_header = $('.h1-header');
		var home_page_pic = $('.pic1');
		var home_page_pic_title = $('.pic1 .center');

		// The featured image area should start at 350px and shrink in height to 0 while the
		// background image appears that it remains in the same place.
		featured_image.attr( 'data-0', 'height: 350px; background-position-y:0;position: fixed; top:0;' );
		featured_image.attr( 'data-' + 350, 'height: 0; background-position-y:0;position: fixed; top: 0;');

		// The header for the page should track the moving section as it goes up the page
		// and over the featured image.
		h1_header.attr( 'data-' + 0, 'position: fixed; top: 349px;' );
		h1_header.attr( 'data-' + 350, 'position: fixed; top: 0px;' );

		// The home page image should start at 700px high and shrink in height to 0 while the
		// background image appears that it remains in the same place.
		home_page_pic.attr( 'data-0', 'height:700px; width: 1188px;background-position-y:0;position:fixed; top:0;');
		home_page_pic.attr( 'data-700', 'height:0px; width:1188px;background-position-y:0;position:fixed; top:0;');

		// The title inside the home page image should move to the top slightly slower than everything else.
		home_page_pic_title.attr( 'data-0', 'margin-top: 270px;' );
		home_page_pic_title.attr( 'data-700', 'margin-top: -100px;' );

		// Fire skrollr
		medicine_skrollr = skrollr.init({forceHeight: true, smoothScrolling: true});

	});

}(jQuery, window));