<?php
/**
 * Queer Times — Footer Template
 */
?>

    <footer class="bg-[#1a1a1a] text-[#f4f1ea] py-10 mt-12" role="contentinfo">

        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

            <!-- Masthead signature -->
            <div class="text-center md:text-left">
                <p class="text-4xl leading-none" data-fraktur="true">
                    <?php bloginfo( 'name' ); ?>
                </p>
                <p class="text-xs tracking-widest uppercase mt-2 text-[#8b7355]">
                    <?php bloginfo( 'description' ); ?>
                </p>
            </div>

            <!-- Footer navigation -->
            <nav aria-label="<?php esc_attr_e( 'Footer Navigation', 'queer-times' ); ?>">
                <?php
                wp_nav_menu( [
                    'theme_location' => 'footer',
                    'menu_class'     => 'space-y-1 text-sm font-serif list-none p-0',
                    'container'      => false,
                    'fallback_cb'    => false,
                ] );
                ?>
            </nav>

            <!-- Legal + colophon -->
            <div class="text-xs font-serif text-[#8b7355] space-y-1 text-center md:text-right">
                <p>
                    <?php _e( 'Ontario, Canada', 'queer-times' ); ?> | <a href="tel:+13655999002" class="underline hover:no-underline text-[#f4f1ea]">365-599-9002</a>
                </p>
                <p>
                    &copy; <?php echo esc_html( date_i18n( 'Y' ) ); ?>
                    <?php bloginfo( 'name' ); ?>.
                    <?php _e( 'All rights reserved.', 'queer-times' ); ?>
                </p>
                <p>
                    <?php
                    printf(
                        /* translators: %s: WordPress link */
                        esc_html__( 'Powered by %s', 'queer-times' ),
                        '<a href="https://wordpress.org" class="underline hover:no-underline text-[#f4f1ea]">WordPress</a>'
                    );
                    ?>
                </p>
                <?php
                // Privacy Policy link (WP 4.9.6+)
                if ( function_exists( 'get_privacy_policy_url' ) && get_privacy_policy_url() ) : ?>
                    <p>
                        <a href="<?php echo esc_url( get_privacy_policy_url() ); ?>"
                           class="underline hover:no-underline text-[#f4f1ea]">
                            <?php _e( 'Privacy Policy', 'queer-times' ); ?>
                        </a>
                    </p>
                <?php endif; ?>
            </div>

        </div>

        <!-- Bottom rule -->
        <div class="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-[#8b7355] text-center text-xs text-[#8b7355] tracking-widest uppercase font-serif">
            <?php _e( 'Queer Times — Published in solidarity &amp; care', 'queer-times' ); ?>
        </div>

    </footer>

    <?php wp_footer(); ?>
</body>
</html>
