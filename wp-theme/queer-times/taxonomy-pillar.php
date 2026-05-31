<?php
/**
 * Queer Times — Pillar Taxonomy Archive
 *
 * Template for individual Pillar term archives:
 * /pillar/somatic-sovereignty/
 * /pillar/relational-architecture/
 * /pillar/clinical-advocacy/
 */

get_header();

$term = get_queried_object();

// Pillar-specific descriptions (fallback if none set in WP admin)
$pillar_descriptions = [
    'somatic-sovereignty'    => 'The radical practice of reclaiming the body as home — using somatic approaches to help queer people reconnect with themselves on their own terms.',
    'relational-architecture' => 'Intentional frameworks for building chosen family, community, and the bonds that hold. How we design relationships that last.',
    'clinical-advocacy'      => 'Advocacy as clinical practice — centering the rights, voices, and dignity of 2SLGBTQI+ clients within therapeutic and systemic spaces.',
];

$description = $term->description ?: ( $pillar_descriptions[ $term->slug ] ?? '' );
?>

<main id="main-content" class="min-h-screen bg-[#f4f1ea] text-[#1a1a1a]">

    <!-- Dateline -->
    <div class="border-b-2 border-[#1a1a1a] py-1 px-4 flex justify-between items-center text-xs tracking-widest uppercase font-serif">
        <span><?php echo esc_html( date_i18n( 'l, F j, Y' ) ); ?></span>
        <span><?php _e( 'Pillars', 'queer-times' ); ?></span>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:underline">
            <?php _e( '&larr; Front Page', 'queer-times' ); ?>
        </a>
    </div>

    <!-- Section header -->
    <header class="py-8 px-4 text-center border-b-4 border-double border-[#1a1a1a]">
        <p class="text-xs tracking-widest uppercase text-[#8b7355] mb-2 font-serif">
            <?php _e( 'Pillar', 'queer-times' ); ?>
        </p>
        <h1 class="text-5xl md:text-7xl leading-tight"
            data-fraktur="true">
            <?php echo esc_html( $term->name ); ?>
        </h1>
        <div class="flex items-center justify-center gap-3 my-3">
            <span class="block h-px flex-1 max-w-sm bg-[#8b7355]"></span>
            <span class="text-[#8b7355]">✦</span>
            <span class="block h-px flex-1 max-w-sm bg-[#8b7355]"></span>
        </div>
        <?php if ( $description ) : ?>
            <p class="text-sm font-serif italic max-w-2xl mx-auto leading-relaxed">
                <?php echo esc_html( $description ); ?>
            </p>
        <?php endif; ?>

        <!-- All Pillars nav -->
        <?php
        $all_pillars = get_terms( [ 'taxonomy' => 'pillar', 'hide_empty' => false ] );
        if ( ! is_wp_error( $all_pillars ) && count( $all_pillars ) > 1 ) : ?>
            <nav class="mt-4 flex flex-wrap justify-center gap-2 text-xs font-serif tracking-widest uppercase"
                 aria-label="<?php esc_attr_e( 'All Pillars', 'queer-times' ); ?>">
                <?php foreach ( $all_pillars as $p ) : ?>
                    <a href="<?php echo esc_url( get_term_link( $p ) ); ?>"
                       class="px-3 py-1 border border-[#8b7355] hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors
                              <?php echo ( $p->term_id === $term->term_id ) ? 'bg-[#1a1a1a] text-[#f4f1ea]' : ''; ?>">
                        <?php echo esc_html( $p->name ); ?>
                    </a>
                <?php endforeach; ?>
            </nav>
        <?php endif; ?>
    </header>

    <!-- Article loop -->
    <div class="max-w-4xl mx-auto px-4 py-10">

        <?php if ( have_posts() ) : ?>
            <div class="space-y-10 divide-y divide-[#8b7355]">
                <?php while ( have_posts() ) : the_post(); ?>

                    <article <?php post_class( 'pt-8 first:pt-0' ); ?>>
                        <h2 class="text-3xl leading-snug mb-1"
                            data-fraktur="true">
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
                            <div class="mb-4 border border-[#8b7355]">
                                <?php the_post_thumbnail( 'medium_large', [ 'class' => 'w-full object-cover' ] ); ?>
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

            <div class="mt-10 font-serif text-xs tracking-widest uppercase">
                <?php the_posts_pagination( [
                    'prev_text' => __( '&larr; Earlier', 'queer-times' ),
                    'next_text' => __( 'Later &rarr;',  'queer-times' ),
                ] ); ?>
            </div>

        <?php else : ?>
            <p class="font-serif text-sm italic">
                <?php
                printf(
                    esc_html__( 'No stories filed under "%s" yet. The presses are warming up.', 'queer-times' ),
                    esc_html( $term->name )
                );
                ?>
            </p>
        <?php endif; ?>

    </div>

</main>

<?php get_footer(); ?>
