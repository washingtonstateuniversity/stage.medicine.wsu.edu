(function ($, window) {
	var seats_scroll_point;
	var states_scroll_point;
	var current_window_width;
	var current_scroll_position;
	var featured_height;
	var view_is_home = 0;
	var window_width;

	/**
	 * Determine if this page view has the `home` class assigned to body.
	 *
	 * @returns bool True if home page, false if not.
	 */
	function is_home() {
		if ( 0 === view_is_home ) {
			view_is_home = ( $('.home' ).length > 0 );
		}

		return view_is_home;
	}

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
	 * Watch the size of the featured image's background area so that it
	 * is always centered in the container at the top of the page.
	 */
	function watch_background() {
		window_width = Math.round( $(window ).width() );
		var window_left;

		// If the width is not changing, we should stop.
		if ( window_width === current_window_width ) {
			return;
		} else {
			current_window_width = window_width;
		}

		if ( 791 < window_width ) {
			window_left = jQuery('#spine').offset().left + 198;
		} else {
			window_left = 0;
		}

		var window_right = Math.round( window_width - window_left );

		if ( is_home() ) {
			featured_height = Math.round( window_right / 1.77 );
		} else {
			featured_height = Math.round( window_right / 3.15581854 ) + 30;
		}

		var image = $('.featured-image');

		image.css('width', window_right + 'px' );
		image.css('height', featured_height + 'px' );

		if ( is_home() ) {
			watch_headline();
		}
	}

	/**
	 * Watch the headline area's position when scrolling so that it always moves
	 * with the position of the viewport.
	 */
	function watch_headline() {
		var pos = $(window ).scrollTop();

		if ( pos < 700 ) {
			var headline = $('.pic1');
			var headline_height = headline.height();
			var current_height = featured_height - pos - 35;
			var new_top = ( ( current_height / 2 ) - ( headline_height / 2 ) ) + pos;

			if ( 20 > ( current_height - headline_height ) ) {
				return;
			}

			headline.css('top', new_top + 'px' );
		}

		current_scroll_position = pos;
	}

	$(document).ready(function(){

		// On the homepage, setup the resize and scroll behavior for the featured image and its headline.
		if ( $('.home' ).length > 0 ) {
			watch_background();
			$(window).resize(watch_background);
			$(window ).scroll(watch_headline);
		} else if ( $('.featured-image' ).length > 0 ) {
			watch_background();
			$(window ).resize(watch_background);
		}

		setup_graph_on_scroll();

	});

}(jQuery, window));