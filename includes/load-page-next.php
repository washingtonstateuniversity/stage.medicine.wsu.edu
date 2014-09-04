<?php

class WSU_Med_Load_Page_Next {
	/**
	 * Setup hooks and filters.
	 */
	public function __construct() {
		add_action( 'get_footer', array( $this, 'add_next_main_section' ) );
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
	 * Add meta boxes used for Load Page Next functionality.
	 *
	 * @param string $post_type Current post type being edited.
	 */
	public function add_meta_boxes( $post_type ) {
		if ( 'page' === $post_type ) {
			add_meta_box( 'wsu_med_load_page_next', 'Page to load next', array( $this, 'load_page_next_meta' ), $post_type, 'side' );
		}
	}

	/**
	 * Show an input field for the page ID associated with a post.
	 */
	public function load_page_next_meta() {
		$page_id = get_post_meta( get_the_ID(), '_med_page_load_next_id', true );

		if ( 0 === absint( $page_id ) ) {
			$page_id = '';
		}

		?><label for="wsu_med_page_id_next">Page ID</label>
		<input type="text" name="wsu_med_page_id_next" id="wsu_med_page_id_next" value="<?php echo esc_attr( $page_id ); ?>" /><?php
	}

	/**
	 * Save the page ID associated with the next page load.
	 *
	 * @param int     $post_id Current post ID.
	 * @param WP_Post $post    Current post object.
	 */
	public function save_post( $post_id, $post ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}

		if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
			return;
		}

		if ( false !== wp_is_post_revision( $post_id ) ) {
			return;
		}

		if ( 'page' === $post->post_type && isset( $_POST['wsu_med_page_id_next'] ) && current_user_can( 'edit_post', $post_id ) ) {
			$page_id = absint( $_POST['wsu_med_page_id_next'] );

			if ( $page_id === 0 ) {
				return;
			}

			update_post_meta( $post_id, '_med_page_load_next_id', $page_id );
		}
	}

	/**
	 * Display the area of content that will contain the next page's featured
	 * image and title at first, but will then become the container of all
	 * content from the page as it slides up the screen.
	 */
	public function add_next_main_section() {
		?>
		<div id="main-replacement" class="spine-blank-template" style="margin-left: 198px; position:relative;">
			<figure class="featured-image" style="width: 1295px; height: 410px; background-image: url(http://wp.wsu.dev/medicine/wp-content/uploads/sites/59/2014/08/spokane-campus1-1600x507.jpg); background-attachment:scroll; background-position: 0 0;">
				<img width="1600" height="507" src="http://wp.wsu.dev/medicine/wp-content/uploads/sites/59/2014/08/spokane-campus1-1600x507.jpg" class="attachment-medicine-featured-image wp-post-image" alt="WSU Spokane Campus">
			</figure>
		</div>
		<div id="main-replacement-content" style="display: none;"></div>
		<script>
			var load_page_next_url = 'http://wp.wsu.dev/medicine/wp-json/pages/why-wsu/';
		</script>
		<?php
	}
}
new WSU_Med_Load_Page_Next();
