<?php

class WSU_Med_Load_Page_Next {
	/**
	 * Setup hooks and filters.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'setup' ) );
		add_action( 'save_post', array( $this, 'save_post' ), 10, 2 );
		add_filter( 'the_content', array( $this, 'add_next_page_content' ) );
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

	public function add_next_page_content( $content ) {
		global $wpdb;
		$page_id = get_post_meta( get_the_ID(), '_med_page_load_next_id', true );

		if ( 0 === absint( $page_id ) ) {
			return $content;
		}

		// Retrieve the menu ID of this page from the current nav menu if it exists
		$menu_id = $wpdb->get_var( $wpdb->prepare( "SELECT post_id FROM {$wpdb->postmeta}  WHERE meta_key='_menu_item_object_id' AND meta_value = %d", $page_id ) );

		if ( $menu_id && 0 !== absint( $menu_id ) ) {
			$menu_id = absint( $menu_id );
		} else {
			$menu_id = '';
		}

		$featured_image_src = wp_get_attachment_image_src( get_post_thumbnail_id( $page_id ), 'medicine-featured-image' );

		$content .= '
		<div class="med-replacement-container" data-next-id="' . $page_id . '" data-next-menu-id="' . $menu_id . '">
			<div id="main-replacement-' . $page_id . '" class="spine-blank-template" style="margin-left: 198px; position: relative; display: none;">
				<figure class="featured-image replacement-featured-image" style="background-image: url(\'' . $featured_image_src[0] . '\');">
					<img src="' . $featured_image_src[0] . '" \>
				</figure>
			</div>
			<div id="main-replacement-content-' . $page_id . '" style="display:none;"></div>
		</div>';

		return $content;
	}
}
new WSU_Med_Load_Page_Next();
