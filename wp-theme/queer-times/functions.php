<?php
/**
 * Queer Times — Theme Functions
 */

declare( strict_types = 1 );

/**
 * Google OAuth Client ID.
 * Set QUEER_TIMES_GOOGLE_CLIENT_ID in wp-config.php or replace the placeholder below.
 */
if ( ! defined( 'QUEER_TIMES_GOOGLE_CLIENT_ID' ) ) {
    define( 'QUEER_TIMES_GOOGLE_CLIENT_ID', '888592715201-sf8kiqp6ojh5ia5ktr37hdpj4hunp2be.apps.googleusercontent.com' );
}

/* ─── Theme Setup ───────────────────────────────────────── */
function queer_times_setup(): void {
    load_theme_textdomain( 'queer-times', get_template_directory() . '/languages' );

    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ] );
    add_theme_support( 'custom-logo', [
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ] );

    register_nav_menus( [
        'primary' => __( 'Primary Navigation', 'queer-times' ),
        'footer'  => __( 'Footer Navigation',  'queer-times' ),
    ] );
}
add_action( 'after_setup_theme', 'queer_times_setup' );

/* ─── Enqueue Assets ────────────────────────────────────── */
function queer_times_enqueue_assets(): void {
    // Google Fonts: UnifrakturMaguntia + IM Fell English
    wp_enqueue_style(
        'queer-times-google-fonts',
        'https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=IM+Fell+English:ital@0;1&display=swap',
        [],
        null
    );

    // Tailwind CSS (CDN — swap for local build in production)
    wp_enqueue_script(
        'tailwindcss',
        'https://cdn.tailwindcss.com',
        [],
        null,
        false
    );

    // Theme stylesheet
    wp_enqueue_style(
        'queer-times-style',
        get_stylesheet_uri(),
        [ 'queer-times-google-fonts' ],
        wp_get_theme()->get( 'Version' )
    );

    // Google Identity Services (Sign In With Google)
    wp_enqueue_script(
        'google-gsi',
        'https://accounts.google.com/gsi/client',
        [],
        null,
        false
    );

    // Theme script
    wp_enqueue_script(
        'queer-times-script',
        get_template_directory_uri() . '/assets/js/theme.js',
        [ 'google-gsi' ],
        wp_get_theme()->get( 'Version' ),
        true
    );

    // Pass config to JS
    wp_localize_script( 'queer-times-script', 'QueerTimesConfig', [
        'googleClientId' => QUEER_TIMES_GOOGLE_CLIENT_ID,
        'restUrl'        => esc_url_raw( rest_url( 'queer-times/v1/subscriber' ) ),
        'nonce'          => wp_create_nonce( 'wp_rest' ),
        'is_staff'       => current_user_can( 'edit_posts' ),
    ] );
}
add_action( 'wp_enqueue_scripts', 'queer_times_enqueue_assets' );

/* ─── Custom Taxonomy: Pathways ─────────────────────────── */
function queer_times_register_taxonomy_pathways(): void {
    $labels = [
        'name'              => _x( 'Pathways', 'taxonomy general name', 'queer-times' ),
        'singular_name'     => _x( 'Pathway',  'taxonomy singular name', 'queer-times' ),
        'search_items'      => __( 'Search Pathways', 'queer-times' ),
        'all_items'         => __( 'All Pathways',    'queer-times' ),
        'edit_item'         => __( 'Edit Pathway',    'queer-times' ),
        'update_item'       => __( 'Update Pathway',  'queer-times' ),
        'add_new_item'      => __( 'Add New Pathway', 'queer-times' ),
        'new_item_name'     => __( 'New Pathway Name','queer-times' ),
        'menu_name'         => __( 'Pathways',        'queer-times' ),
    ];

    register_taxonomy( 'pathway', [ 'post', 'page' ], [
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => [ 'slug' => 'pathway' ],
        'show_in_rest'      => true,
    ] );

    // Seed terms (only inserts if they don't already exist)
    $pathway_terms = [
        'I Am Not Okay',
        '24 Frames',
        'Record Year',
        'The Power of Presence',
        'F-150',
    ];

    foreach ( $pathway_terms as $term ) {
        if ( ! term_exists( $term, 'pathway' ) ) {
            wp_insert_term( $term, 'pathway' );
        }
    }
}
add_action( 'init', 'queer_times_register_taxonomy_pathways' );

/* ─── Custom Taxonomy: Pillars ──────────────────────────── */
function queer_times_register_taxonomy_pillars(): void {
    $labels = [
        'name'              => _x( 'Pillars', 'taxonomy general name', 'queer-times' ),
        'singular_name'     => _x( 'Pillar',  'taxonomy singular name', 'queer-times' ),
        'search_items'      => __( 'Search Pillars', 'queer-times' ),
        'all_items'         => __( 'All Pillars',    'queer-times' ),
        'edit_item'         => __( 'Edit Pillar',    'queer-times' ),
        'update_item'       => __( 'Update Pillar',  'queer-times' ),
        'add_new_item'      => __( 'Add New Pillar', 'queer-times' ),
        'new_item_name'     => __( 'New Pillar Name','queer-times' ),
        'menu_name'         => __( 'Pillars',        'queer-times' ),
    ];

    register_taxonomy( 'pillar', [ 'post', 'page' ], [
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => [ 'slug' => 'pillar' ],
        'show_in_rest'      => true,
    ] );

    // Seed terms
    $pillar_terms = [
        'Somatic Sovereignty',
        'Relational Architecture',
        'Clinical Advocacy',
    ];

    foreach ( $pillar_terms as $term ) {
        if ( ! term_exists( $term, 'pillar' ) ) {
            wp_insert_term( $term, 'pillar' );
        }
    }
}
add_action( 'init', 'queer_times_register_taxonomy_pillars' );

/* ─── Widget Areas ──────────────────────────────────────── */
function queer_times_register_sidebars(): void {
    register_sidebar( [
        'name'          => __( 'Sidebar', 'queer-times' ),
        'id'            => 'sidebar-1',
        'description'   => __( 'Main sidebar widget area.', 'queer-times' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s mb-6">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title font-serif text-lg border-b border-[#8b7355] mb-2 pb-1">',
        'after_title'   => '</h3>',
    ] );
}
add_action( 'widgets_init', 'queer_times_register_sidebars' );

/* ─── REST API: Subscriber Endpoint ────────────────────── */
function queer_times_register_subscriber_endpoint(): void {
    register_rest_route( 'queer-times/v1', '/subscriber', [
        'methods'             => 'POST',
        'callback'            => 'queer_times_save_subscriber',
        'permission_callback' => '__return_true',
        'args'                => [
            'name'  => [
                'required'          => true,
                'sanitize_callback' => 'sanitize_text_field',
                'validate_callback' => fn( $v ) => ! empty( trim( $v ) ),
            ],
            'email' => [
                'required'          => true,
                'sanitize_callback' => 'sanitize_email',
                'validate_callback' => 'is_email',
            ],
        ],
    ] );
}
add_action( 'rest_api_init', 'queer_times_register_subscriber_endpoint' );

function queer_times_save_subscriber( WP_REST_Request $request ): WP_REST_Response {
    $name  = $request->get_param( 'name' );
    $email = $request->get_param( 'email' );

    // Store as a WordPress user meta-free subscriber using options (simple store).
    // For production, swap this for your CRM / email platform (Mailchimp, ConvertKit, etc.).
    $subscribers = get_option( 'queer_times_subscribers', [] );

    // Deduplicate by email
    $emails = array_column( $subscribers, 'email' );
    if ( ! in_array( $email, $emails, true ) ) {
        $subscribers[] = [
            'name'       => $name,
            'email'      => $email,
            'subscribed' => current_time( 'mysql' ),
        ];
        update_option( 'queer_times_subscribers', $subscribers );
    }

    return new WP_REST_Response( [ 'success' => true ], 200 );
}

/* ─── Seed Distribution Categories ─────────────────────── */
/**
 * Create the 'substack' and 'linkedin' categories on theme activation
 * so editors can immediately tag articles for cross-posting.
 */
function queer_times_seed_distribution_categories(): void {
    $categories = [
        'substack' => [
            'name'        => 'Substack',
            'description' => 'Articles written for QueerPathways and cross-posted to Substack 48 hours after site publication.',
        ],
        'linkedin' => [
            'name'        => 'LinkedIn',
            'description' => 'Articles written for QueerPathways and cross-posted to LinkedIn 48 hours after site publication.',
        ],
    ];

    foreach ( $categories as $slug => $data ) {
        if ( ! term_exists( $slug, 'category' ) ) {
            wp_insert_term( $data['name'], 'category', [
                'slug'        => $slug,
                'description' => $data['description'],
            ] );
        }
    }
}
add_action( 'after_switch_theme', 'queer_times_seed_distribution_categories' );

/* ─── Distribution Article Helpers ─────────────────────── */
/**
 * Get WordPress posts in a distribution category, filtered to those
 * published at least 48 hours ago (already live on the platform).
 *
 * @param string $category_slug 'substack' or 'linkedin'.
 * @param int    $limit         Number of posts to return.
 * @return WP_Post[]
 */
function queer_times_get_distribution_posts( string $category_slug, int $limit = 3 ): array {
    $cutoff = gmdate( 'Y-m-d H:i:s', time() - ( 48 * HOUR_IN_SECONDS ) );

    return get_posts( [
        'post_type'      => 'post',
        'post_status'    => 'publish',
        'posts_per_page' => $limit,
        'category_name'  => $category_slug,
        'date_query'     => [
            [ 'column' => 'post_date_gmt', 'before' => $cutoff ],
        ],
        'orderby'        => 'date',
        'order'          => 'DESC',
    ] );
}

function queer_times_get_substack_posts( int $limit = 3 ): array {
    return queer_times_get_distribution_posts( 'substack', $limit );
}

function queer_times_get_linkedin_posts( int $limit = 3 ): array {
    return queer_times_get_distribution_posts( 'linkedin', $limit );
}

/* ─── External Feed Helpers (optional RSS import) ───────── */
if ( ! defined( 'QUEER_TIMES_SUBSTACK_URL' ) ) {
    define( 'QUEER_TIMES_SUBSTACK_URL', '' );
}
if ( ! defined( 'QUEER_TIMES_LINKEDIN_RSS' ) ) {
    define( 'QUEER_TIMES_LINKEDIN_RSS', '' );
}

/**
 * Fetch and cache an external RSS feed.
 *
 * @param string $feed_url  Full RSS feed URL.
 * @param int    $limit     Number of items to return.
 * @param string $cache_key Transient key.
 * @return array<int, array{title: string, url: string, date: string, excerpt: string}> Items or empty array.
 */
function queer_times_fetch_feed( string $feed_url, int $limit = 3, string $cache_key = '' ): array {
    if ( empty( $feed_url ) ) {
        return [];
    }

    $cache_key = $cache_key ?: 'qt_feed_' . md5( $feed_url );
    $cached    = get_transient( $cache_key );

    if ( is_array( $cached ) ) {
        return $cached;
    }

    // WordPress built-in RSS parser (SimplePie)
    if ( ! function_exists( 'fetch_feed' ) ) {
        require_once ABSPATH . WPINC . '/feed.php';
    }

    $feed = fetch_feed( $feed_url );

    if ( is_wp_error( $feed ) ) {
        return [];
    }

    // Fetch extra items so we still hit $limit after filtering
    $raw_items = $feed->get_items( 0, $limit + 10 );
    $result    = [];

    // Articles go live on LinkedIn/Substack 48 hours after the website publish.
    // Only surface items whose feed date is at least 48 hours old so we never
    // link to a platform post before it exists.
    $cutoff = time() - ( 48 * HOUR_IN_SECONDS );

    foreach ( $raw_items as $item ) {
        if ( count( $result ) >= $limit ) {
            break;
        }

        $pub_timestamp = $item->get_date( 'U' ); // Unix timestamp

        // If the feed item has no date, include it (can't know, so be permissive)
        if ( $pub_timestamp && (int) $pub_timestamp > $cutoff ) {
            continue; // Too recent — not yet on the platform
        }

        $description = $item->get_description();
        $result[]    = [
            'title'   => wp_strip_all_tags( $item->get_title() ),
            'url'     => esc_url( $item->get_permalink() ),
            'date'    => $item->get_date( 'M j, Y' ),
            'excerpt' => wp_trim_words( wp_strip_all_tags( $description ), 20 ),
        ];
    }

    // Cache for 2 hours
    set_transient( $cache_key, $result, 2 * HOUR_IN_SECONDS );

    return $result;
}

/**
 * Fetch Substack articles.
 */
function queer_times_get_substack_articles( int $limit = 3 ): array {
    $url = QUEER_TIMES_SUBSTACK_URL;
    if ( empty( $url ) ) return [];

    // Substack RSS feed is at /feed
    $feed_url = rtrim( $url, '/' ) . '/feed';
    return queer_times_fetch_feed( $feed_url, $limit, 'qt_substack_feed' );
}

/**
 * Fetch LinkedIn articles via RSS bridge.
 */
function queer_times_get_linkedin_articles( int $limit = 3 ): array {
    return queer_times_fetch_feed( QUEER_TIMES_LINKEDIN_RSS, $limit, 'qt_linkedin_feed' );
}
