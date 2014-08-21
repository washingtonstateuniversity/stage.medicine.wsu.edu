<?php

class WSU_Medicine_Shortcodes {
	/**
	 * Setup hooks and shortcodes.
	 */
	public function __construct() {
		add_shortcode( 'wsu_medicine_seats_comparison', array( $this, 'display_wsu_medicine_seats_comparison' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
	}

	public function enqueue_scripts() {
		global $post;

		if ( $post->post_content && has_shortcode( $post->post_content, 'wsu_medicine_seats_comparison' ) ) {
			wp_enqueue_script( 'adobe-edge', 'https://animate.adobe.com/runtime/4.0.1/edge.4.0.1.min.js', array( 'jquery' ), false, true );
			wp_enqueue_script( 'wsu-medicine-seat-js', get_stylesheet_directory_uri() . '/js/wa_seats_comparison_edge.js', array( 'adobe-edge' ), spine_get_script_version(), true );
			wp_enqueue_script( 'wsu-medicine-seats', get_stylesheet_directory_uri() . '/js/wa_seats_comparison_edge_preload.js', array( 'adobe-edge' ), spine_get_script_version(), true );
		}

	}
	public function display_wsu_medicine_seats_comparison() {
		// Output the DIV element expected by the Edge script
		$output = '<div id="Stage" class="EDGE-21518124"></div>';

		return $output;
	}
}
new WSU_Medicine_Shortcodes();