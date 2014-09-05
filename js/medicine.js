(function ($, window) {
	var next_page_id;
	var next_menu_id;
	var seats_scroll_point;
	var states_scroll_point;
	var current_window_width;
	var current_scroll_position;
	var featured_height;
	var view_is_home = 0;
	var window_width;
	var footer_temp_header;
	var replace_header;
	var replace_title;
	var replace_url;
	var replace_slug;

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
	function watch_background( force ) {
		window_width = Math.round( $(window ).width() );
		var window_left;

		// If the width is not changing, we should stop.
		if ( window_width === current_window_width && undefined === force ) {
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
			featured_height = Math.round( window_right / 3.15581854 );
		}

		$('.featured-image').each(function() {
			$(this).css('width', window_right + 'px' );
			$(this).css('height', featured_height + 'px' );
		});

		if ( is_home() ) {
			watch_headline();
		}
	}

	function handle_background_scroll() {
		var pos = $(window ).scrollTop();
		jQuery('#med-primary-content .featured-image:first' ).css('background-position', '0 ' + pos + 'px');
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

	/**
	 * Using the data available in temporary content areas, navigate via content scroll to
	 * the next page of content without causing a full reload of the page.
	 */
	function navigate_next_page() {
		/**
		 * Cache our replacement main and replacement content for use.
		 */
		var main_replacement = jQuery('#main-replacement-' + next_page_id );
		var main_replacement_content = jQuery('#main-replacement-content-' + next_page_id);
		var replacement_content = main_replacement_content.html();

		main_replacement.off('click', navigate_next_page );
		main_replacement_content.remove();

		/**
		 * We'll initially want to scroll to the top of the main replacement before
		 * the previous page's content is removed from the page.
		 */
		var scroll_to = main_replacement.offset().top;

		// If the WordPress admin bar is visible, don't scroll under it.
		if ( $('body' ).hasClass('admin-bar') ) {
			scroll_to = scroll_to - 32;
		}

		$('#med-primary-content' ).addClass('med-to-replace');

		main_replacement.append(replacement_content);

		footer_temp_header.replaceWith(replace_header);

		// Change the active menu item.
		jQuery('#spine-sitenav').find('.current').removeClass();
		jQuery('#menu-item-' + next_menu_id ).addClass('current active dogeared');

		document.title = replace_title + document.title.substr(document.title.indexOf(' |'));

		var stateObj = { slug: replace_slug };
		history.pushState(stateObj, '', replace_url);

		jQuery('html body').animate({ scrollTop: scroll_to }, 800, 'easeOutCubic', function(){
			/**
			 * Use our replacement HTML to create a new MAIN element that is now the primary
			 * content container for this page view.
			 */
			main_replacement.replaceWith( '<main id="med-primary-content" class="spine-blank-template">' + main_replacement.html() + '</main>');

			/**
			 * Scroll to the top as we remove the original main.
			 */
			$('.med-to-replace' ).remove();
			$(document ).scrollTop(0);

			jQuery('.featured-image:first' ).removeClass('replacement-featured-image');

			// Set things up for another round.
			stage_content_area();
			load_next_page_content();

			// Process a forced calculation for window size for background images.
			watch_background( true );
		});
	}

	/**
	 * Upon receiving the data from a JSON request, populate the various areas that
	 * are expecting data.
	 *
	 * @param data Response data from the JSON request to WordPress.
	 */
	function process_next_page_content( data ) {
		/**
		 * The main_replacement container begins as an area to store the featured image
		 * and the headline. It transitions to the actual main container once the area
		 * has been clicked on.
		 */
		var main_replacement = jQuery('#main-replacement-' + next_page_id);

		/**
		 * The main_replacement_content container is a temporary storage container for HTML
		 * that will be moved to the main_replacement container when it is ready for display
		 * at some point. If we didn't need to parse some of this for HTML, it would probably
		 * be easier to just store it in an object.
		 */
		var main_replacement_content = jQuery('#main-replacement-content-' + next_page_id);

		/**
		 * Fill the temporary content area with the content received from the API request.
		 */
		main_replacement_content.append(data.content);

		/**
		 * The replacement content now has an H1 element in an h1-header section that will
		 * first be used absolutely at the bottom of the page before transitioning to the
		 * primary headline.
		 */
		var replacement_content_header = main_replacement_content.find('.h1-header');

		/**
		 * Make a copy of the header section so that we can re-purpose it later after
		 * the page has scrolled up. This is stored in the wider namespace for reuse.
		 */
		replace_header = replacement_content_header.clone();

		/**
		 * Retrieve the title of the next page so that we can change the browser window's
		 * title on navigation later.
		 */
		replace_title = data.title;

		replace_url = data.link;

		replace_slug = data.slug;

		/**
		 * We capture a temporary version of the new header so that we can position it
		 * via CSS when it needs to be absolutely positioned. This is also stored in the
		 * wider namespace for reuse.
		 */
		footer_temp_header = replacement_content_header.find('.column h1');
		footer_temp_header.addClass('med-footer-temp-header');
		main_replacement.append(footer_temp_header);

		/**
		 * We now no longer have need for this.
		 */
		replacement_content_header.remove();

		/**
		 * And finally, we're setup to handle a click for navigation to the next page.
		 */
		main_replacement.on('click', navigate_next_page );
	}

	/**
	 * If our next_page_id variable is defined, we can assume that a page is available
	 * for navigation and its JSON data should be loaded in for processing. If the next
	 * page is not defined, we fail silently.
	 */
	function load_next_page_content() {
		if ( undefined === next_page_id ) {
			return;
		}
		// @todo This URL should be dynamic and provided by the page
		$.getJSON( 'http://wp.wsu.dev/medicine/wp-json/pages/' + next_page_id + '/', process_next_page_content );
	}

	/**
	 * Stage the next page's content area by grabbing the hidden elements from the main
	 * content area and moving them further down the DOM so they can be treated as a
	 * unique entity. This is necessary because we are always becoming aware of the next
	 * page's data via content in a JSON request.
	 */
	function stage_content_area() {
		/**
		 * The main content area that is displayed on the page.
		 */
		var main_primary_content = $('#med-primary-content');

		/**
		 * The data is initially passed as a hidden element in part of the page content
		 * so that we are able to easily retrieve this with the other page data. We need
		 * to capture this and move it to another area once the page has loaded.
		 */
		var replacement_container = main_primary_content.find('.med-replacement-container');

		/**
		 * Capture the next page ID that will be loaded. This is stored in a wider
		 * namespace so that we can reuse it across functions. If a page ID is not
		 * available, there is no use in continuing.
		 */
		next_page_id = replacement_container.data('next-id');

		if ( undefined === next_page_id ) {
			return;
		}

		/**
		 * Retrieve the next page's menu ID so that we can alter the active item in
		 * the navigation menu.
		 */
		next_menu_id = replacement_container.data('next-menu-id');

		/**
		 * Grab a copy of the HTML inside the temporary container so that we can just
		 * remove it from the page.
		 */
		var next_page_html = replacement_container.html();

		/**
		 * Remove that temporary container from the page.
		 */
		replacement_container.remove();

		/**
		 * Reposition the next page's HTML after the primary MAIN element from the original
		 * page load.
		 */
		main_primary_content.after(next_page_html);

		/**
		 * We can now display this replacement area in an element keyed to the next page's ID.
		 */
		jQuery('#main-replacement-' + next_page_id ).css('display','');
	}

	$(document).ready(function(){

		// On the homepage, setup the resize and scroll behavior for the featured image and its headline.
		if ( $('.home' ).length > 0 ) {
			watch_background();
			$(window).on( 'resize', watch_background);
			$(window ).on('scroll',watch_headline);
		} else if ( $('.featured-image' ).length > 0 ) {
			watch_background();
			$(window ).on('resize',watch_background);
			$(window ).on('scroll',handle_background_scroll);
		}

		setup_graph_on_scroll();

		// Stage an initial next page content area from hidden elements in main page content.
		stage_content_area();

		// Fire the JSON request to load the next page's data if we're expecting.
		load_next_page_content();
	});

	window.onpopstate = function(event) {
			location.reload();
	}

}(jQuery, window));