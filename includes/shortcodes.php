<?php

class WSU_Medicine_Shortcodes {

	/**
	 * @var string Script version of the theme.
	 */
	var $theme_version = '0.1.1';

	/**
	 * Setup hooks and shortcodes.
	 */
	public function __construct() {
		add_shortcode( 'wsu_medicine_seats_comparison', array( $this, 'display_wsu_medicine_seats_comparison' ) );
		add_shortcode( 'wsu_medicine_mi_wa_graph', array( $this, 'display_wsu_medicine_mi_wa_graph' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'wp_head', array( $this, 'head_style' ) );
	}

	public function head_style() {
		?>
		<style> .edgeLoad-EDGE-21518124 { visibility:hidden; } .edgeLoad-wa_mi_comparison { visibility:hidden; } </style>
		<script> var wsu_theme_dir = '<?php echo esc_url( get_stylesheet_directory_uri() . '/' ); ?>';</script>
		<?php
	}

	/**
	 * Enqueue scripts necessary for proper display of our animated charts.
	 */
	public function enqueue_scripts() {
		global $post;

		if ( ! $post->post_content ) {
			return;
		}

		$medicine_seats = has_shortcode( $post->post_content, 'wsu_medicine_seats_comparison' );
		$mi_wa_graph = has_shortcode( $post->post_content, 'wsu_medicine_mi_wa_graph' );

		if ( $medicine_seats || $mi_wa_graph ) {
			wp_enqueue_style( 'wsu-spine-opensans', 'https://repo.wsu.edu/spine/1/styles/opensans.css', array(), spine_get_script_version() );
			wp_enqueue_script( 'adobe-edge', 'https://animate.adobe.com/runtime/4.0.1/edge.4.0.1.min.js', array( 'jquery' ), false, true );
		}

		if ( $medicine_seats ) {
			wp_enqueue_script( 'wsu-medicine-seat-js', get_stylesheet_directory_uri() . '/js/wa_seats_comparison_edge.min.js', array( 'adobe-edge' ), spine_get_script_version() . $this->theme_version, true );
			wp_enqueue_script( 'wsu-medicine-seats', get_stylesheet_directory_uri() . '/js/wa_seats_comparison_edge_preload.min.js', array( 'adobe-edge' ), spine_get_script_version() . $this->theme_version, true );
		}

		if ( $mi_wa_graph ) {
			wp_enqueue_script( 'wsu-medicine-graph-js', get_stylesheet_directory_uri() . '/js/mi_wa_graph_edge.min.js', array( 'adobe-edge' ), spine_get_script_version() . $this->theme_version, true );
			wp_enqueue_script( 'wsu-medicine-graph', get_stylesheet_directory_uri() . '/js/mi_wa_graph_edgePreload.min.js', array( 'adobe-edge' ), spine_get_script_version() . $this->theme_version, true );
		}
	}

	/**
	 * Output the DIV used to display the medicine seats comparison.
	 *
	 * @return string HTML output
	 */
	public function display_wsu_medicine_seats_comparison() {
		// Output the DIV element expected by the Edge script
		$output = '<div id="seats_comparison_container" style="height: 300px;">
				<div id="Stage_comparison" class="EDGE-21518124" style="height: 250px;"></div>
			</div>';

		return $output;
	}

	public function display_wsu_medicine_mi_wa_graph() {
		$output = '<div id="mi_wa_graph_comtainer" style="height: 909px;"><div id="Stage_graph" class="wa_mi_comparison"></div></div>';

		return $output;
	}
}
new WSU_Medicine_Shortcodes();