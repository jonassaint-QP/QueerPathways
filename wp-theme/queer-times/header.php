<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class( 'bg-[#f4f1ea] text-[#1a1a1a]' ); ?>>
<?php wp_body_open(); ?>

<!-- Skip link for accessibility -->
<a class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[#1a1a1a] text-[#f4f1ea] px-4 py-2 text-sm font-serif"
   href="#main-content">
    <?php _e( 'Skip to content', 'queer-times' ); ?>
</a>
