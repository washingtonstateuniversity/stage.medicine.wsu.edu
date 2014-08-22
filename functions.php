<?php

include_once( __DIR__ . '/includes/medicine-county-data.php' );
include_once( __DIR__ . '/includes/shortcodes.php' );

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