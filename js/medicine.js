(function ($, window) {

	var medicine_skrollr;
	var seats_scroll_point;
	var states_scroll_point;

	/**
	 * Setup our page view to look for either of our animated graphs and
	 * attach scroll handlers to them if found.
	 */
	function setup_graph_on_scroll() {
		var seats_comparison_container = jQuery('#seats_comparison_container');
		var states_comparison_container = jQuery('#mi_wa_graph_container' );

		if ( seats_comparison_container.length > 0 ) {
			seats_scroll_point = ( seats_comparison_container.offset().top - jQuery(window).height() + 100 );
			$(window).on('scroll', medicine_seats_scroll_handler);
		}

		if ( states_comparison_container.length > 0 ) {
			states_scroll_point = ( states_comparison_container.offset().top - jQuery(window ).height() + 100 );
			$(window).on('scroll', medicine_states_scroll_handler);
		}
	}

	/**
	 * Handle the scroll action for the medicine seats shortcode. Remove the scroll
	 * handler as soon as it is fired.
	 */
	function medicine_seats_scroll_handler() {
		var current_position = jQuery(window ).scrollTop();
		if ( seats_scroll_point < current_position ) {
			window.AdobeEdge.launchComposition('EDGE-21518124');
			$(window).off('scroll', medicine_seats_scroll_handler);
		}
	}

	/**
	 * Handle the scroll action for the medicine states shortcode. Remove the scroll
	 * handler as soon as it is fired.
	 */
	function medicine_states_scroll_handler() {
		var current_position = jQuery(window).scrollTop();
		if ( states_scroll_point < current_position ) {
			window.AdobeEdge.launchComposition('wa_mi_comparison');
			$(window).off('scroll', medicine_states_scroll_handler);
		}

	}

	/**
	 * Determine if the page view is occurring on a mobile device, as the skrollr functionality
	 * cannot be relied on at that point.
	 *
	 * @returns {*|boolean}
	 */
	function is_mobile() {
		return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
	}

	$(document).ready(function(){
		var featured_image = $('.featured-image');
		var h1_header = $('.h1-header');
		var home_page_pic = $('.pic1');
		var home_page_pic_title = $('.pic1 .center');

		if ( false === is_mobile() ) {
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
		} else {
			// Remove classes used to set margins when Skrollr is active.
			$('.skrollr-margin-section' ).removeClass('skrollr-margin-section');
			$('.home-next-section' ).removeClass('home-next-section');
		}

		setup_graph_on_scroll();

	});

}(jQuery, window));