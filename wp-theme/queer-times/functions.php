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
    define( 'QUEER_TIMES_GOOGLE_CLIENT_ID', '' ); // ← paste your Client ID here
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
