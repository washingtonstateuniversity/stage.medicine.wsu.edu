<?php

include_once( __DIR__ . '/includes/medicine-county-data.php' );
include_once( __DIR__ . '/includes/shortcodes.php' );
include_once( __DIR__ . '/includes/load-page-next.php' );

/**
 * Provide a cache breaking script version for the theme.
 *
 * @return string Current script version
 */
function wsu_medicine_script_version() {
	return spine_get_script_version() . '0.10.0';
}

add_action( 'wp_footer', 'wsu_medicine_sharing_footer' );
/**
 * Output a short script to adjust the sharing text on the tweet icon.
 */
function wsu_medicine_sharing_footer() {
	$share_text = esc_js( urlencode( html_entity_decode( get_the_title() . ' | Washington State University' ) ) );
	$share_url = urlencode( get_home_url() );

	?><script>
		jQuery(document ).ready(function() {
			var wsu_twitter_share_text = '<?php echo 'https://twitter.com/intent/tweet?text=' . $share_text . '&url=' . $share_url . '&via=wsupullman'; ?>';
			jQuery( '#wsu-share .by-twitter a' ).attr( 'href', wsu_twitter_share_text );
		});
	</script><?php
}

add_action( 'after_setup_theme', 'wsu_medicine_setup_image_sizes', 10 );
/**
 * Add an image size for a width of 1600 for larger featured images.
 */
function wsu_medicine_setup_image_sizes() {
	add_image_size( 'medicine-featured-image', 1600, 99164 );
}

add_action( 'wp_enqueue_scripts', 'wsu_medicine_enqueue_scripts', 11 );
function wsu_medicine_enqueue_scripts() {
	wp_enqueue_script( 'skrollr', get_stylesheet_directory_uri() . '/js/skrollr.min.js', array( 'jquery' ), wsu_medicine_script_version(), false );
	wp_register_script( 'wsu-medicine', get_stylesheet_directory_uri() . '/js/medicine.min.js', array( 'skrollr' ), wsu_medicine_script_version(), true );
	wp_localize_script( 'wsu-medicine', 'wsu_medicine', array( 'json_url' => esc_url( home_url( 'wp-json/' ) ) ) );
	wp_enqueue_script( 'wsu-medicine' );
}

add_action( 'spine_enqueue_styles', 'wsu_medicine_enqueue_styles', 10 );
function wsu_medicine_enqueue_styles() {
	wp_dequeue_style( 'wsu-spine-opensans' );
	wp_enqueue_style( 'med-open-sans', 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400,300,700', array(), false );
}