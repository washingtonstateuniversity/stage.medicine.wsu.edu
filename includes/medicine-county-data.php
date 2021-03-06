<?php

class WSU_Medicine_County_Data {
	/**
	 * Setup hooks.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'setup' ) );
		add_action( 'save_post', array( $this, 'save_post' ), 10, 2 );
	}

	/**
	 * Begin the meta box adding process.
	 */
	public function setup() {
		add_action( 'add_meta_boxes', array( $this, 'add_meta_boxes' ), 10, 2 );
	}

	/**
	 * Add the meta box used to capture county data for the SVG map.
	 *
	 * @param string $post_type Current post type being edited.
	 */
	public function add_meta_boxes( $post_type ) {
		global $post;

		if ( $post->post_content && has_shortcode( $post->post_content, 'wsu_medicine_county_map' ) ) {
			add_meta_box( 'wsu_svg_county_data', 'County Data JSON', array( $this, 'county_data_json' ), $post_type );
		}
	}

	/**
	 * Display a meta box to capture county data in JSON format.
	 */
	public function county_data_json() {
		$current_json = get_post_meta( get_the_ID(), '_county_json_data', true );

		// Remove most of the JSON stuff from the actual data to avoid malformity.
		$current_json = wp_unslash( json_encode( $current_json->counties ) );
		$current_json = trim( $current_json, '{' );
		$current_json = trim( $current_json, '}' );

		// Make the data easier to view in a textarea element.
		$current_json = str_replace( '","', "\",\n\"", $current_json );

		if ( empty( $current_json ) ) {
			$current_json = '';
		}

		?><textarea name="county_json" style="width:100%; height:100%;min-height: 300px;"><?php echo $current_json; ?></textarea><?php
	}

	/**
	 * Save county data from the meta box into a JSON object for use with the SVG map.
	 *
	 * @param int     $post_id Current post ID.
	 * @param WP_Post $post    Current post object.
	 */
	public function save_post( $post_id, $post ) {
		if ( 'page' === $post->post_type && isset( $_POST['county_json'] ) && has_shortcode( $post->post_content, 'wsu_medicine_county_map' ) ) {
			// Reform the JSON object that is expected.
			$json_object = '{ "counties": { ' . wp_unslash( $_POST['county_json'] ) . '} }';

			// Move the JSON data into an object that we can play with.
			$county_data = json_decode( $json_object );

			if ( null === $county_data ) {
				wp_die( 'Invalid JSON data entered. Hit back and correct data accordingly.' );
			}

			// Ensure each tooltip contains only allowed HTML
			foreach( $county_data->counties as $county => $tooltip ) {
				$tooltip = wp_kses_post( $tooltip );
				$county_data->counties->$county = $tooltip;
			}

			update_post_meta( $post_id, '_county_json_data', $county_data );
		}
	}
}
new WSU_Medicine_County_Data();