(function ($, window) {

	var medicine_skrollr;

	$(document).ready(function(){
		var featured_image = $('.featured-image');

		featured_image.attr( 'data-0', 'transform: translate3d(0px,0px,0px);' );
		featured_image.attr( 'data-' + 275, 'transform: translate3d(0px, 70px, 0px);');

		medicine_skrollr = skrollr.init({forceHeight: false, smoothScrolling: true});

	});

}(jQuery, window));