<?php
/**
 * Queer Times - Single Template
 *
 * Displays full article content for singular views.
 */

get_header();
?>

<main id="main-content" class="max-w-4xl mx-auto px-4 py-10 bg-[#f4f1ea] text-[#1a1a1a]">
    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
            <article <?php post_class(); ?>>
                <header class="mb-8 border-b-2 border-[#1a1a1a] pb-5">
                    <p class="text-xs tracking-widest uppercase text-[#8b7355] mb-3 font-serif">
                        <?php
                        printf(
                            esc_html__( 'By %1$s - %2$s', 'queer-times' ),
                            esc_html( get_the_author() ),
                            esc_html( get_the_date() )
                        );
                        ?>
                    </p>

                    <h1 class="text-4xl md:text-5xl leading-tight"
                        style="font-family: 'UnifrakturMaguntia', serif;">
                        <?php the_title(); ?>
                    </h1>
                </header>

                <?php if ( has_post_thumbnail() ) : ?>
                    <figure class="mb-8 border border-[#8b7355]">
                        <?php the_post_thumbnail( 'large', [ 'class' => 'w-full object-cover' ] ); ?>
                    </figure>
                <?php endif; ?>

                <div class="prose prose-sm md:prose-base max-w-none font-serif leading-relaxed">
                    <?php the_content(); ?>
                </div>

                <?php
                wp_link_pages( [
                    'before' => '<nav class="mt-8 text-xs tracking-widest uppercase font-serif">' . esc_html__( 'Pages:', 'queer-times' ) . ' ',
                    'after'  => '</nav>',
                ] );
                ?>

                <?php $posts_page_id = (int) get_option( 'page_for_posts' ); ?>
                <footer class="mt-10 pt-4 border-t border-[#8b7355] text-xs tracking-widest uppercase font-serif">
                    <a href="<?php echo esc_url( $posts_page_id ? get_permalink( $posts_page_id ) : home_url( '/' ) ); ?>"
                       class="underline hover:no-underline">
                        <?php esc_html_e( '<- Back to Dispatches', 'queer-times' ); ?>
                    </a>
                </footer>
            </article>
        <?php endwhile; ?>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
