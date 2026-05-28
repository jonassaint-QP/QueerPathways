<?php
/**
 * Queer Times — Events Page (powered by Lu.ma)
 *
 * Fetches upcoming events from the Lu.ma iCal feed defined by
 * QUEER_TIMES_LUMA_CALENDAR_URL in functions.php (or wp-config.php).
 */

get_header();

$luma_events = queer_times_get_luma_events( 20 );
$luma_url    = 'https://lu.ma/queerpathways';
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

    <!-- Masthead -->
    <header class="py-8 px-4 text-center border-b-4 border-double border-[#1a1a1a]">
        <p class="text-xs tracking-widest uppercase text-[#8b7355] mb-2 font-serif">
            <?php bloginfo( 'name' ); ?>
        </p>
        <h1 class="text-6xl md:text-8xl leading-none"
            data-fraktur="true">
            <?php _e( 'Events', 'queer-times' ); ?>
        </h1>
        <div class="flex items-center justify-center gap-3 my-3">
            <span class="block h-px flex-1 max-w-sm bg-[#8b7355]"></span>
            <span class="text-[#8b7355] text-xl">✦</span>
            <span class="block h-px flex-1 max-w-sm bg-[#8b7355]"></span>
        </div>
        <p class="text-sm font-serif italic max-w-2xl mx-auto leading-relaxed">
            <?php _e( 'Gatherings, workshops, and circles hosted by QueerPathways — spaces where sovereignty is practiced in community.', 'queer-times' ); ?>
        </p>
        <a href="<?php echo esc_url( $luma_url ); ?>"
           target="_blank" rel="noopener noreferrer"
           class="inline-block mt-4 px-5 py-2 border border-[#1a1a1a] text-xs tracking-widest uppercase font-serif hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors">
            <?php _e( 'View All on Lu.ma &rarr;', 'queer-times' ); ?>
        </a>
    </header>

    <!-- Event listing -->
    <div class="max-w-4xl mx-auto px-4 py-10">

        <?php if ( ! empty( $luma_events ) ) : ?>

            <div class="space-y-0 divide-y divide-[#8b7355]">
                <?php foreach ( $luma_events as $event ) : ?>

                    <article class="py-8 flex gap-6 items-start">

                        <!-- Date badge -->
                        <div class="shrink-0 border border-[#8b7355] px-3 py-2 text-center min-w-[4.5rem]">
                            <p class="text-xs tracking-widest uppercase text-[#8b7355] font-serif leading-tight">
                                <?php echo esc_html( $event['start_month'] ); ?>
                            </p>
                            <p class="text-3xl font-serif leading-none text-[#1a1a1a]">
                                <?php echo esc_html( $event['start_day'] ); ?>
                            </p>
                            <p class="text-xs tracking-widest text-[#8b7355] font-serif leading-tight">
                                <?php echo esc_html( $event['start_year'] ); ?>
                            </p>
                        </div>

                        <!-- Details -->
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl md:text-3xl leading-snug mb-1"
                                data-fraktur="true">
                                <?php if ( $event['url'] ) : ?>
                                    <a href="<?php echo esc_url( $event['url'] ); ?>"
                                       target="_blank" rel="noopener noreferrer"
                                       class="hover:underline">
                                        <?php echo esc_html( $event['title'] ); ?>
                                    </a>
                                <?php else : ?>
                                    <?php echo esc_html( $event['title'] ); ?>
                                <?php endif; ?>
                            </h2>

                            <p class="text-xs tracking-widest uppercase text-[#8b7355] font-serif mb-2 space-x-3">
                                <span><?php echo esc_html( $event['start_fmt'] ); ?></span>
                                <?php if ( $event['start_time'] ) : ?>
                                    <span>·</span>
                                    <span><?php echo esc_html( $event['start_time'] ); ?></span>
                                <?php endif; ?>
                                <?php if ( $event['location'] ) : ?>
                                    <span>·</span>
                                    <span><?php echo esc_html( $event['location'] ); ?></span>
                                <?php endif; ?>
                            </p>

                            <?php if ( $event['description'] ) : ?>
                                <p class="font-serif text-sm leading-relaxed text-[#1a1a1a] line-clamp-3">
                                    <?php echo nl2br( esc_html( wp_trim_words( $event['description'], 30 ) ) ); ?>
                                </p>
                            <?php endif; ?>

                            <?php if ( $event['url'] ) : ?>
                                <a href="<?php echo esc_url( $event['url'] ); ?>"
                                   target="_blank" rel="noopener noreferrer"
                                   class="inline-block mt-3 px-4 py-1 border border-[#1a1a1a] text-xs tracking-widest uppercase font-serif hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors">
                                    <?php _e( 'Register on Lu.ma &rarr;', 'queer-times' ); ?>
                                </a>
                            <?php endif; ?>
                        </div>

                    </article>

                <?php endforeach; ?>
            </div>

        <?php else : ?>

            <div class="text-center py-16">
                <p class="font-serif text-sm italic mb-4">
                    <?php _e( 'No upcoming events at the moment. New gatherings are being planned.', 'queer-times' ); ?>
                </p>
                <a href="<?php echo esc_url( $luma_url ); ?>"
                   target="_blank" rel="noopener noreferrer"
                   class="inline-block px-5 py-2 border border-[#1a1a1a] text-xs tracking-widest uppercase font-serif hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors">
                    <?php _e( 'Follow us on Lu.ma &rarr;', 'queer-times' ); ?>
                </a>
            </div>

        <?php endif; ?>

    </div>

</main>

<?php get_footer(); ?>
