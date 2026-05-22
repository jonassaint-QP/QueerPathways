<?php
/**
 * Queer Times — Front Page Template
 *
 * Vintage newspaper layout powered by Tailwind CSS.
 */

get_header();
?>

<main id="main-content" class="min-h-screen bg-[#f4f1ea] text-[#1a1a1a]">

    <!-- ── Dateline bar ──────────────────────────────────── -->
    <div class="border-b-2 border-[#1a1a1a] py-1 px-4 flex justify-between items-center text-xs tracking-widest uppercase font-serif">
        <span><?php echo esc_html( date_i18n( 'l, F j, Y' ) ); ?></span>
        <span><?php bloginfo( 'description' ); ?></span>
        <span><?php _e( 'Vol. I &mdash; No. 1', 'queer-times' ); ?></span>
    </div>

    <!-- ── Masthead ──────────────────────────────────────── -->
    <header class="py-8 px-4 text-center border-b-4 border-double border-[#1a1a1a]">
        <h1 class="text-7xl md:text-9xl leading-none tracking-tight"
            style="font-family: 'UnifrakturMaguntia', serif;">
            <?php bloginfo( 'name' ); ?>
        </h1>

        <!-- Ornamental rule -->
        <div class="flex items-center justify-center gap-3 my-3">
            <span class="block h-px flex-1 bg-[#8b7355]"></span>
            <span class="text-[#8b7355] text-xl">✦</span>
            <span class="block h-px flex-1 bg-[#8b7355]"></span>
        </div>

        <!-- Sovereign Pause button -->
        <button id="sovereign-pause-btn"
                class="mt-2 px-8 py-3 border-2 border-[#1a1a1a] text-sm tracking-[0.25em] uppercase
                       font-serif hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-[#8b7355] focus:ring-offset-2
                       focus:ring-offset-[#f4f1ea]"
                aria-label="<?php esc_attr_e( 'Activate Sovereign Pause', 'queer-times' ); ?>">
            <?php _e( 'Sovereign Pause', 'queer-times' ); ?>
        </button>
    </header>

    <!-- ── Sovereign Pause overlay ───────────────────────── -->
    <div id="sovereign-pause-overlay"
         class="fixed inset-0 bg-[#f4f1ea]/95 backdrop-blur-sm z-50 flex flex-col items-center
                justify-center text-center px-6 hidden"
         role="dialog" aria-modal="true" aria-labelledby="pause-title">
        <p id="pause-title"
           class="text-4xl md:text-5xl mb-6"
           style="font-family: 'UnifrakturMaguntia', serif;">
            <?php _e( 'Pause. Breathe. Return.', 'queer-times' ); ?>
        </p>
        <p class="max-w-md text-base leading-relaxed mb-8 font-serif">
            <?php _e( 'You are allowed to take up space, to rest, and to exist fully — exactly as you are.', 'queer-times' ); ?>
        </p>
        <button id="sovereign-pause-close"
                class="px-8 py-3 border-2 border-[#1a1a1a] text-sm tracking-[0.25em] uppercase font-serif
                       hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-[#8b7355]">
            <?php _e( 'Continue', 'queer-times' ); ?>
        </button>
    </div>

    <!-- ── Reader Gate Modal ─────────────────────────────── -->
    <div id="reader-gate-overlay"
         class="fixed inset-0 bg-[#1a1a1a]/80 backdrop-blur-sm z-50 flex items-center justify-center px-4 hidden"
         role="dialog" aria-modal="true" aria-labelledby="gate-title">

        <div class="bg-[#f4f1ea] border-2 border-[#1a1a1a] max-w-md w-full p-8 text-center relative">

            <!-- Ornamental top rule -->
            <div class="flex items-center gap-3 mb-5">
                <span class="block h-px flex-1 bg-[#8b7355]"></span>
                <span class="text-[#8b7355]">✦</span>
                <span class="block h-px flex-1 bg-[#8b7355]"></span>
            </div>

            <p class="text-xs tracking-widest uppercase text-[#8b7355] mb-1 font-serif">
                <?php _e( 'Join the Queer Times', 'queer-times' ); ?>
            </p>
            <h2 id="gate-title"
                class="text-3xl mb-2"
                style="font-family:'UnifrakturMaguntia',serif;">
                <?php _e( 'Read More. Stay Connected.', 'queer-times' ); ?>
            </h2>
            <p class="text-sm font-serif italic mb-6 leading-relaxed">
                <?php _e( 'Enter your name and email — or sign in with Google — to access the full archive.', 'queer-times' ); ?>
            </p>

            <!-- Manual form -->
            <form id="reader-gate-form" novalidate class="space-y-3 mb-4">
                <input id="gate-name"
                       type="text"
                       name="name"
                       placeholder="<?php esc_attr_e( 'Your Name', 'queer-times' ); ?>"
                       required
                       class="w-full border border-[#8b7355] bg-transparent px-4 py-2 text-sm font-serif
                              placeholder:text-[#8b7355] focus:outline-none focus:ring-1 focus:ring-[#1a1a1a]" />
                <input id="gate-email"
                       type="email"
                       name="email"
                       placeholder="<?php esc_attr_e( 'Your Email Address', 'queer-times' ); ?>"
                       required
                       class="w-full border border-[#8b7355] bg-transparent px-4 py-2 text-sm font-serif
                              placeholder:text-[#8b7355] focus:outline-none focus:ring-1 focus:ring-[#1a1a1a]" />
                <p id="gate-error" role="alert"
                   class="text-xs text-red-700 font-serif hidden"></p>
                <button type="submit"
                        class="w-full py-3 border-2 border-[#1a1a1a] text-sm tracking-[0.25em] uppercase
                               font-serif hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors duration-300
                               focus:outline-none focus:ring-2 focus:ring-[#8b7355]">
                    <?php _e( 'Continue Reading', 'queer-times' ); ?>
                </button>
            </form>

            <!-- Divider -->
            <div class="flex items-center gap-3 my-4">
                <span class="block h-px flex-1 bg-[#8b7355]"></span>
                <span class="text-xs tracking-widest uppercase font-serif text-[#8b7355]"><?php _e( 'or', 'queer-times' ); ?></span>
                <span class="block h-px flex-1 bg-[#8b7355]"></span>
            </div>

            <!-- Google Sign-In button (rendered by GIS) -->
            <div id="gate-google-btn" class="flex justify-center"></div>

            <p class="text-xs font-serif text-[#8b7355] mt-5 leading-relaxed">
                <?php _e( 'We respect your privacy. No spam, ever.', 'queer-times' ); ?>
            </p>

            <!-- Ornamental bottom rule -->
            <div class="flex items-center gap-3 mt-5">
                <span class="block h-px flex-1 bg-[#8b7355]"></span>
                <span class="text-[#8b7355]">✦</span>
                <span class="block h-px flex-1 bg-[#8b7355]"></span>
            </div>
        </div>
    </div>

    <!-- ── Newspaper Grid ────────────────────────────────── -->
    <div class="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-0 divide-x divide-[#8b7355]">

        <!-- Left column: Pathways index + About -->
        <aside class="md:col-span-3 pr-4 pb-8 md:pb-0">
            <h2 class="text-xs tracking-widest uppercase border-b border-[#1a1a1a] pb-1 mb-3 font-serif">
                <?php _e( 'Pathways', 'queer-times' ); ?>
            </h2>
            <?php
            $pathway_terms = get_terms( [ 'taxonomy' => 'pathway', 'hide_empty' => false ] );
            if ( ! is_wp_error( $pathway_terms ) && ! empty( $pathway_terms ) ) : ?>
                <ul class="space-y-2 text-sm font-serif list-none p-0">
                    <?php foreach ( $pathway_terms as $term ) : ?>
                        <li class="border-b border-dotted border-[#8b7355] pb-1">
                            <a href="<?php echo esc_url( get_term_link( $term ) ); ?>"
                               class="hover:underline">
                                <?php echo esc_html( $term->name ); ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>

            <!-- About -->
            <div class="mt-8 border-t border-[#8b7355] pt-4">
                <h3 class="text-xs tracking-widest uppercase mb-3 font-serif">
                    <?php _e( 'About', 'queer-times' ); ?>
                </h3>
                <?php
                // Primary: query the 'queerpathways' custom post type
                $about_posts = get_posts( [
                    'post_type'      => 'queerpathways',
                    'posts_per_page' => 3,
                    'post_status'    => 'publish',
                ] );

                // Fallback: posts in the standard 'about' category
                if ( empty( $about_posts ) ) {
                    $about_posts = get_posts( [
                        'post_type'      => 'post',
                        'posts_per_page' => 3,
                        'category_name'  => 'about',
                        'post_status'    => 'publish',
                    ] );
                }
                ?>

                <?php if ( ! empty( $about_posts ) ) : ?>
                    <ul class="space-y-4 text-sm font-serif list-none p-0">
                        <?php foreach ( $about_posts as $about_post ) : ?>
                            <li class="border-b border-dotted border-[#8b7355] pb-3 last:border-b-0 last:pb-0">
                                <a href="<?php echo esc_url( get_permalink( $about_post ) ); ?>"
                                   class="hover:underline font-semibold leading-snug">
                                    <?php echo esc_html( get_the_title( $about_post ) ); ?>
                                </a>
                                <?php
                                $excerpt = get_the_excerpt( $about_post );
                                if ( $excerpt ) : ?>
                                    <p class="text-xs italic mt-0.5 leading-relaxed">
                                        <?php echo esc_html( wp_trim_words( $excerpt, 15 ) ); ?>
                                    </p>
                                <?php endif; ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                    <a href="<?php echo esc_url( get_post_type_archive_link( 'queerpathways' ) ?: home_url( '/about' ) ); ?>"
                       class="inline-block mt-4 text-xs tracking-widest uppercase underline font-serif hover:no-underline">
                        <?php _e( 'Learn More &rarr;', 'queer-times' ); ?>
                    </a>
                <?php else : ?>
                    <p class="text-sm font-serif italic leading-relaxed">
                        <?php _e( 'Queer Times is the editorial voice of QueerPathways — a space for stories of sovereignty, healing, and collective care.', 'queer-times' ); ?>
                    </p>
                    <a href="<?php echo esc_url( home_url( '/about' ) ); ?>"
                       class="inline-block mt-3 text-xs tracking-widest uppercase underline font-serif hover:no-underline">
                        <?php _e( 'Learn More &rarr;', 'queer-times' ); ?>
                    </a>
                <?php endif; ?>
            </div>

        </aside>

        <!-- Centre column: Main content -->
        <section class="md:col-span-6 px-4 pb-8 md:pb-0">
            <?php if ( have_posts() ) : ?>
                <?php while ( have_posts() ) : the_post(); ?>

                    <article <?php post_class( 'mb-8' ); ?>>
                        <h2 class="text-3xl leading-tight mb-2"
                            style="font-family: 'UnifrakturMaguntia', serif;">
                            <a href="<?php the_permalink(); ?>" class="hover:underline">
                                <?php the_title(); ?>
                            </a>
                        </h2>

                        <!-- Byline -->
                        <p class="text-xs tracking-widest uppercase text-[#8b7355] mb-3 font-serif">
                            <?php
                            printf(
                                /* translators: 1: author, 2: date */
                                esc_html__( 'By %1$s — %2$s', 'queer-times' ),
                                esc_html( get_the_author() ),
                                esc_html( get_the_date() )
                            );
                            ?>
                        </p>

                        <?php if ( has_post_thumbnail() ) : ?>
                            <div class="mb-4 border border-[#8b7355]">
                                <?php the_post_thumbnail( 'large', [ 'class' => 'w-full object-cover grayscale' ] ); ?>
                            </div>
                        <?php endif; ?>

                        <div class="font-serif text-sm leading-relaxed columns-1 md:columns-2 gap-6">
                            <?php the_excerpt(); ?>
                        </div>

                        <a href="<?php the_permalink(); ?>"
                           class="inline-block mt-3 text-xs tracking-widest uppercase underline font-serif hover:no-underline">
                            <?php _e( 'Continue Reading &rarr;', 'queer-times' ); ?>
                        </a>
                    </article>

                    <?php if ( ! $wp_query->is_last_post() ) : ?>
                        <hr class="border-t border-double border-[#8b7355] my-6" />
                    <?php endif; ?>

                <?php endwhile; ?>

                <!-- Pagination -->
                <div class="mt-6 text-xs font-serif tracking-widest uppercase">
                    <?php the_posts_pagination( [
                        'prev_text' => __( '&larr; Earlier', 'queer-times' ),
                        'next_text' => __( 'Later &rarr;',  'queer-times' ),
                    ] ); ?>
                </div>

            <?php else : ?>
                <p class="font-serif text-sm italic">
                    <?php _e( 'No stories found. The presses are warming up.', 'queer-times' ); ?>
                </p>
            <?php endif; ?>
        </section>

        <!-- Right column: Pillars index + Events -->
        <aside class="md:col-span-3 pl-4">
            <h2 class="text-xs tracking-widest uppercase border-b border-[#1a1a1a] pb-1 mb-3 font-serif">
                <?php _e( 'Pillars', 'queer-times' ); ?>
            </h2>
            <?php
            $pillar_terms = get_terms( [ 'taxonomy' => 'pillar', 'hide_empty' => false ] );
            if ( ! is_wp_error( $pillar_terms ) && ! empty( $pillar_terms ) ) : ?>
                <ul class="space-y-2 text-sm font-serif list-none p-0">
                    <?php foreach ( $pillar_terms as $term ) : ?>
                        <li class="border-b border-dotted border-[#8b7355] pb-1">
                            <a href="<?php echo esc_url( get_term_link( $term ) ); ?>"
                               class="hover:underline">
                                <?php echo esc_html( $term->name ); ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>

            <!-- Events -->
            <div class="mt-8 border-t border-[#8b7355] pt-4">
                <h3 class="text-xs tracking-widest uppercase mb-3 font-serif">
                    <?php _e( 'Events', 'queer-times' ); ?>
                </h3>
                <?php
                $events = get_posts( [
                    'post_type'      => 'tribe_events',
                    'posts_per_page' => 3,
                    'post_status'    => 'publish',
                ] );

                // Fallback: query regular posts tagged with an 'event' category
                if ( empty( $events ) ) {
                    $events = get_posts( [
                        'post_type'      => 'post',
                        'posts_per_page' => 3,
                        'category_name'  => 'events',
                        'post_status'    => 'publish',
                    ] );
                }
                ?>

                <?php if ( ! empty( $events ) ) : ?>
                    <ul class="space-y-4 text-sm font-serif list-none p-0">
                        <?php foreach ( $events as $event ) : ?>
                            <li class="border-b border-dotted border-[#8b7355] pb-3 last:border-b-0 last:pb-0">
                                <p class="text-xs tracking-widest uppercase text-[#8b7355]">
                                    <?php echo esc_html( get_the_date( 'M j, Y', $event ) ); ?>
                                </p>
                                <a href="<?php echo esc_url( get_permalink( $event ) ); ?>"
                                   class="hover:underline font-semibold">
                                    <?php echo esc_html( get_the_title( $event ) ); ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php else : ?>
                    <p class="text-sm font-serif italic">
                        <?php _e( 'No upcoming events. Check back soon.', 'queer-times' ); ?>
                    </p>
                <?php endif; ?>

                <a href="<?php echo esc_url( home_url( '/events' ) ); ?>"
                   class="inline-block mt-4 text-xs tracking-widest uppercase underline font-serif hover:no-underline">
                    <?php _e( 'All Events &rarr;', 'queer-times' ); ?>
                </a>
            </div>

            <!-- Sidebar widgets -->
            <?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
                <div class="mt-8">
                    <?php dynamic_sidebar( 'sidebar-1' ); ?>
                </div>
            <?php endif; ?>
        </aside>

    </div><!-- /.grid -->

    <!-- ── From the Desk: LinkedIn & Substack ────────────── -->
    <?php
    $substack_posts = queer_times_get_substack_posts( 3 );
    $linkedin_posts = queer_times_get_linkedin_posts( 3 );
    $has_desk       = ! empty( $substack_posts ) || ! empty( $linkedin_posts );
    ?>

    <?php if ( $has_desk ) : ?>
    <section class="max-w-7xl mx-auto px-4 py-8 border-t-4 border-double border-[#1a1a1a] mt-4">

        <h2 class="text-center text-xs tracking-widest uppercase mb-6 font-serif border-b border-[#8b7355] pb-2">
            <?php _e( 'From the Desk', 'queer-times' ); ?>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-0 divide-x divide-[#8b7355]">

            <!-- Substack -->
            <?php if ( ! empty( $substack_posts ) ) : ?>
            <div class="pr-0 md:pr-6 pb-8 md:pb-0">
                <div class="flex items-center gap-2 mb-4">
                    <svg class="w-4 h-4 text-[#8b7355] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                    </svg>
                    <h3 class="text-xs tracking-widest uppercase font-serif"><?php _e( 'On Substack', 'queer-times' ); ?></h3>
                </div>
                <ul class="space-y-5 list-none p-0">
                    <?php foreach ( $substack_posts as $post ) : setup_postdata( $post ); ?>
                        <li class="border-b border-dotted border-[#8b7355] pb-4 last:border-b-0 last:pb-0">
                            <p class="text-xs tracking-widest uppercase text-[#8b7355] mb-1 font-serif">
                                <?php echo esc_html( get_the_date( 'M j, Y', $post ) ); ?>
                            </p>
                            <a href="<?php echo esc_url( get_permalink( $post ) ); ?>"
                               class="font-semibold text-sm leading-snug hover:underline font-serif">
                                <?php echo esc_html( get_the_title( $post ) ); ?>
                            </a>
                            <p class="text-xs italic mt-1 leading-relaxed font-serif">
                                <?php echo esc_html( wp_trim_words( get_the_excerpt( $post ), 20 ) ); ?>
                            </p>
                        </li>
                    <?php endforeach; wp_reset_postdata(); ?>
                </ul>
                <?php
                $substack_cat = get_category_by_slug( 'substack' );
                if ( $substack_cat ) : ?>
                <a href="<?php echo esc_url( get_category_link( $substack_cat ) ); ?>"
                   class="inline-block mt-4 text-xs tracking-widest uppercase underline font-serif hover:no-underline">
                    <?php _e( 'All Substack Articles &rarr;', 'queer-times' ); ?>
                </a>
                <?php endif; ?>
            </div>
            <?php endif; ?>

            <!-- LinkedIn -->
            <?php if ( ! empty( $linkedin_posts ) ) : ?>
            <div class="pl-0 md:pl-6 pt-8 md:pt-0">
                <div class="flex items-center gap-2 mb-4">
                    <svg class="w-4 h-4 text-[#8b7355] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <h3 class="text-xs tracking-widest uppercase font-serif"><?php _e( 'On LinkedIn', 'queer-times' ); ?></h3>
                </div>
                <ul class="space-y-5 list-none p-0">
                    <?php foreach ( $linkedin_posts as $post ) : setup_postdata( $post ); ?>
                        <li class="border-b border-dotted border-[#8b7355] pb-4 last:border-b-0 last:pb-0">
                            <p class="text-xs tracking-widest uppercase text-[#8b7355] mb-1 font-serif">
                                <?php echo esc_html( get_the_date( 'M j, Y', $post ) ); ?>
                            </p>
                            <a href="<?php echo esc_url( get_permalink( $post ) ); ?>"
                               class="font-semibold text-sm leading-snug hover:underline font-serif">
                                <?php echo esc_html( get_the_title( $post ) ); ?>
                            </a>
                            <p class="text-xs italic mt-1 leading-relaxed font-serif">
                                <?php echo esc_html( wp_trim_words( get_the_excerpt( $post ), 20 ) ); ?>
                            </p>
                        </li>
                    <?php endforeach; wp_reset_postdata(); ?>
                </ul>
                <?php
                $linkedin_cat = get_category_by_slug( 'linkedin' );
                if ( $linkedin_cat ) : ?>
                <a href="<?php echo esc_url( get_category_link( $linkedin_cat ) ); ?>"
                   class="inline-block mt-4 text-xs tracking-widest uppercase underline font-serif hover:no-underline">
                    <?php _e( 'All LinkedIn Articles &rarr;', 'queer-times' ); ?>
                </a>
                <?php endif; ?>
            </div>
            <?php endif; ?>

        </div>
    </section>
    <?php endif; ?>

</main>

<script>
(function () {
    const btn     = document.getElementById('sovereign-pause-btn');
    const overlay = document.getElementById('sovereign-pause-overlay');
    const close   = document.getElementById('sovereign-pause-close');

    if ( btn && overlay && close ) {
        btn.addEventListener('click', () => {
            overlay.classList.remove('hidden');
            close.focus();
        });
        close.addEventListener('click', () => {
            overlay.classList.add('hidden');
            btn.focus();
        });
        overlay.addEventListener('keydown', (e) => {
            if ( e.key === 'Escape' ) {
                overlay.classList.add('hidden');
                btn.focus();
            }
        });
    }
})();
</script>

<?php get_footer(); ?>
