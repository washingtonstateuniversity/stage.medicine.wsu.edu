<?php

class WSU_Med_Load_Page_Next {
	/**
	 * Setup hooks and filters.
	 */
	public function __construct() {
		add_action( 'get_footer', array( $this, 'add_next_main_section' ) );
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
