<?php
/**
 * Queer Times — Substack Category Archive
 *
 * Displays all articles tagged 'substack' in a vintage newspaper layout.
 * These articles live on the website first and are cross-posted to
 * Substack 48 hours after publication.
 */

get_header();
?>

<main id="main-content" class="min-h-screen bg-[#f4f1ea] text-[#1a1a1a]">

    <!-- ── Section masthead ──────────────────────────────── -->
    <div class="border-b-2 border-[#1a1a1a] py-1 px-4 flex justify-between items-center text-xs tracking-widest uppercase font-serif">
        <span><?php echo esc_html( date_i18n( 'l, F j, Y' ) ); ?></span>
        <span><?php _e( 'Dispatches from the Desk', 'queer-times' ); ?></span>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:underline">
            <?php _e( '&larr; Back to Front Page', 'queer-times' ); ?>
        </a>
    </div>

    <header class="py-8 px-4 text-center border-b-4 border-double border-[#1a1a1a]">
        <p class="text-xs tracking-widest uppercase text-[#8b7355] mb-2 font-serif">
            <?php _e( 'The Queer Times', 'queer-times' ); ?>
        </p>
        <h1 class="text-6xl md:text-8xl leading-none" style="font-family:'UnifrakturMaguntia',serif;">
            <?php _e( 'Substack', 'queer-times' ); ?>
        </h1>
        <div class="flex items-center justify-center gap-3 my-3">
            <span class="block h-px flex-1 max-w-xs bg-[#8b7355]"></span>
            <svg class="w-5 h-5 text-[#8b7355] fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
            <span class="block h-px flex-1 max-w-xs bg-[#8b7355]"></span>
        </div>
        <?php
        $term = get_queried_object();
        if ( $term && $term->description ) : ?>
            <p class="text-sm font-serif italic max-w-xl mx-auto leading-relaxed">
                <?php echo esc_html( $term->description ); ?>
            </p>
        <?php endif; ?>
    </header>

    <!-- ── Article archive ───────────────────────────────── -->
    <div class="max-w-4xl mx-auto px-4 py-10">

        <?php if ( have_posts() ) : ?>
            <div class="space-y-10 divide-y divide-[#8b7355]">
                <?php while ( have_posts() ) : the_post(); ?>

                    <article <?php post_class( 'pt-8 first:pt-0' ); ?>>

                        <h2 class="text-3xl leading-snug mb-1"
                            style="font-family:'UnifrakturMaguntia',serif;">
                            <a href="<?php the_permalink(); ?>" class="hover:underline">
                                <?php the_title(); ?>
                            </a>
                        </h2>

                        <p class="text-xs tracking-widest uppercase text-[#8b7355] mb-3 font-serif">
                            <?php
                            printf(
                                esc_html__( 'By %1$s — %2$s', 'queer-times' ),
                                esc_html( get_the_author() ),
                                esc_html( get_the_date() )
                            );
                            // Show "Also on Substack" badge once 48hrs have passed
                            $pub_ts = get_the_date( 'U' );
                            if ( $pub_ts && ( time() - (int) $pub_ts ) >= ( 48 * HOUR_IN_SECONDS ) && defined( 'QUEER_TIMES_SUBSTACK_URL' ) && QUEER_TIMES_SUBSTACK_URL ) :
                            ?>
                                <span class="ml-3 inline-flex items-center gap-1 text-[#8b7355]">
                                    <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
                                    <?php _e( 'Also on Substack', 'queer-times' ); ?>
                                </span>
                            <?php endif; ?>
                        </p>

                        <?php if ( has_post_thumbnail() ) : ?>
                            <div class="mb-4 border border-[#8b7355]">
                                <?php the_post_thumbnail( 'medium_large', [ 'class' => 'w-full object-cover grayscale' ] ); ?>
                            </div>
                        <?php endif; ?>

                        <div class="font-serif text-sm leading-relaxed">
                            <?php the_excerpt(); ?>
                        </div>

                        <a href="<?php the_permalink(); ?>"
                           class="inline-block mt-3 text-xs tracking-widest uppercase underline font-serif hover:no-underline">
                            <?php _e( 'Continue Reading &rarr;', 'queer-times' ); ?>
                        </a>

                    </article>

                <?php endwhile; ?>
            </div>

            <!-- Pagination -->
            <div class="mt-10 font-serif text-xs tracking-widest uppercase">
                <?php the_posts_pagination( [
                    'prev_text' => __( '&larr; Earlier', 'queer-times' ),
                    'next_text' => __( 'Later &rarr;',  'queer-times' ),
                ] ); ?>
            </div>

        <?php else : ?>
            <p class="font-serif text-sm italic">
                <?php _e( 'No Substack articles yet. The first dispatch is being written.', 'queer-times' ); ?>
            </p>
        <?php endif; ?>

    </div>

</main>

<?php get_footer(); ?>
