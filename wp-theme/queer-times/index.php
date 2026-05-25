<?php
/**
 * Queer Times — Main Index Template
 *
 * Fallback for all archive and singular views not covered
 * by a more specific template.
 */

get_header();
?>

<main id="main-content" class="max-w-4xl mx-auto px-4 py-10 bg-[#f4f1ea] text-[#1a1a1a]">

    <!-- Section header -->
    <header class="mb-8 border-b-2 border-[#1a1a1a] pb-4">
        <?php
        if ( is_home() && ! is_front_page() ) {
            echo '<h1 class="text-5xl font-serif">' . esc_html__( 'Latest Dispatches', 'queer-times' ) . '</h1>';
        } elseif ( is_archive() ) {
            the_archive_title( '<h1 class="text-5xl font-serif">', '</h1>' );
            the_archive_description( '<p class="mt-2 text-sm font-serif italic">', '</p>' );
        } elseif ( is_search() ) {
            printf(
                '<h1 class="text-5xl font-serif">%s <em>%s</em></h1>',
                esc_html__( 'Search Results for:', 'queer-times' ),
                get_search_query()
            );
        } elseif ( is_404() ) {
            echo '<h1 class="text-5xl font-serif">' . esc_html__( 'Page Not Found', 'queer-times' ) . '</h1>';
        }
        ?>
    </header>

    <!-- Post loop -->
    <?php if ( have_posts() ) : ?>
        <div class="space-y-10 divide-y divide-[#8b7355]">
            <?php while ( have_posts() ) : the_post(); ?>

                <article <?php post_class( 'pt-8 first:pt-0' ); ?>>
                    <h2 class="text-3xl leading-snug mb-1"
                        style="font-family: 'UnifrakturMaguntia', serif;">
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
                        ?>
                    </p>

                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="mb-4">
                            <?php the_post_thumbnail( 'medium_large', [ 'class' => 'w-full object-cover border border-[#8b7355]' ] ); ?>
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
            <?php
            if ( is_404() ) {
                _e( 'The page you are looking for has gone to press elsewhere.', 'queer-times' );
            } elseif ( is_search() ) {
                _e( 'No dispatches matched your search. Try different terms.', 'queer-times' );
            } else {
                _e( 'Nothing here yet. The presses are warming up.', 'queer-times' );
            }
            ?>
        </p>
    <?php endif; ?>

</main>

<?php get_footer(); ?>
