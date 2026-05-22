<?php
/**
 * Queer Times — About Category Archive
 */

get_header();
?>

<main id="main-content" class="min-h-screen bg-[#f4f1ea] text-[#1a1a1a]">

    <!-- Dateline -->
    <div class="border-b-2 border-[#1a1a1a] py-1 px-4 flex justify-between items-center text-xs tracking-widest uppercase font-serif">
        <span><?php echo esc_html( date_i18n( 'l, F j, Y' ) ); ?></span>
        <span><?php bloginfo( 'name' ); ?></span>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:underline">
            <?php _e( '&larr; Front Page', 'queer-times' ); ?>
        </a>
    </div>

    <header class="py-8 px-4 text-center border-b-4 border-double border-[#1a1a1a]">
        <p class="text-xs tracking-widest uppercase text-[#8b7355] mb-2 font-serif">
            <?php bloginfo( 'name' ); ?>
        </p>
        <h1 class="text-6xl md:text-8xl leading-none"
            style="font-family:'UnifrakturMaguntia',serif;">
            <?php _e( 'About', 'queer-times' ); ?>
        </h1>
        <div class="flex items-center justify-center gap-3 my-3">
            <span class="block h-px flex-1 max-w-sm bg-[#8b7355]"></span>
            <span class="text-[#8b7355]">✦</span>
            <span class="block h-px flex-1 max-w-sm bg-[#8b7355]"></span>
        </div>
        <?php
        $term = get_queried_object();
        if ( $term && $term->description ) : ?>
            <p class="text-sm font-serif italic max-w-2xl mx-auto leading-relaxed">
                <?php echo esc_html( $term->description ); ?>
            </p>
        <?php else : ?>
            <p class="text-sm font-serif italic max-w-2xl mx-auto leading-relaxed">
                <?php _e( 'The story behind QueerPathways — our mission, our values, and the people who show up to do this work.', 'queer-times' ); ?>
            </p>
        <?php endif; ?>
    </header>

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
                            <?php echo esc_html( get_the_date() ); ?>
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
                            <?php _e( 'Read More &rarr;', 'queer-times' ); ?>
                        </a>
                    </article>

                <?php endwhile; ?>
            </div>

            <div class="mt-10 font-serif text-xs tracking-widest uppercase">
                <?php the_posts_pagination( [
                    'prev_text' => __( '&larr; Earlier', 'queer-times' ),
                    'next_text' => __( 'Later &rarr;',  'queer-times' ),
                ] ); ?>
            </div>

        <?php else : ?>
            <p class="font-serif text-sm italic">
                <?php _e( 'Our story is being written. Check back soon.', 'queer-times' ); ?>
            </p>
        <?php endif; ?>

    </div>

</main>

<?php get_footer(); ?>
