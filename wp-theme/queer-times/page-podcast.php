<?php
/**
 * Template Name: Podcast
 * Queer Times — Podcast Page
 *
 * Renders episodes on-site from the syndicated podcast feed.
 * Swap in QUEER_TIMES_APPLE_PODCASTS_URL / QUEER_TIMES_SPOTIFY_URL in
 * wp-config.php once you're approved on those platforms.
 */

get_header();

$episodes      = queer_times_get_podcast_episodes( 20 );
$apple_url     = defined( 'QUEER_TIMES_APPLE_PODCASTS_URL' ) ? QUEER_TIMES_APPLE_PODCASTS_URL : '';
$spotify_url   = defined( 'QUEER_TIMES_SPOTIFY_URL' )        ? QUEER_TIMES_SPOTIFY_URL        : '';
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
            <?php _e( 'The Podcast', 'queer-times' ); ?>
        </h1>
        <div class="flex items-center justify-center gap-3 my-3">
            <span class="block h-px flex-1 max-w-sm bg-[#8b7355]"></span>
            <!-- Mic icon -->
            <svg class="w-5 h-5 text-[#8b7355] fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v7a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2zm-7 8a1 1 0 0 1 1 1 6 6 0 0 0 12 0 1 1 0 1 1 2 0 8 8 0 0 1-7 7.938V22h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2.062A8 8 0 0 1 4 12a1 1 0 0 1 1-1z"/>
            </svg>
            <span class="block h-px flex-1 max-w-sm bg-[#8b7355]"></span>
        </div>
        <p class="text-sm font-serif italic max-w-2xl mx-auto leading-relaxed mb-5">
            <?php _e( 'Honest conversations on queer healing, somatic sovereignty, and the radical act of taking up space.', 'queer-times' ); ?>
        </p>

        <!-- Platform CTAs -->
        <div class="flex flex-wrap justify-center gap-3 mt-2">

            <?php if ( $apple_url ) : ?>
            <a href="<?php echo esc_url( $apple_url ); ?>"
               target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-5 py-2 border border-[#1a1a1a] text-xs tracking-widest uppercase font-serif hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <?php _e( 'Apple Podcasts', 'queer-times' ); ?>
            </a>
            <?php endif; ?>

            <?php if ( $spotify_url ) : ?>
            <a href="<?php echo esc_url( $spotify_url ); ?>"
               target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-5 py-2 border border-[#1a1a1a] text-xs tracking-widest uppercase font-serif hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <?php _e( 'Spotify', 'queer-times' ); ?>
            </a>
            <?php endif; ?>

        </div>

        <p class="text-xs font-serif italic text-[#8b7355] mt-4">
            <?php _e( 'All episodes are playable directly on this page.', 'queer-times' ); ?>
        </p>
    </header>

    <!-- Episode listing -->
    <div class="max-w-4xl mx-auto px-4 py-10">

        <?php if ( ! empty( $episodes ) ) : ?>

            <h2 class="text-xs tracking-widest uppercase font-serif text-[#8b7355] mb-6 pb-2 border-b border-[#8b7355]">
                <?php _e( 'Latest Episodes', 'queer-times' ); ?>
            </h2>

            <div class="space-y-0 divide-y divide-[#8b7355]">
                <?php foreach ( $episodes as $i => $ep ) : ?>

                    <article class="py-8 flex gap-5 items-start">

                        <!-- Episode number -->
                        <div class="shrink-0 w-10 text-right">
                            <span class="text-2xl font-serif text-[#8b7355] leading-none">
                                <?php echo esc_html( $i + 1 ); ?>
                            </span>
                        </div>

                        <!-- Details -->
                        <div class="flex-1 min-w-0">
                            <h3 class="text-2xl md:text-3xl leading-snug mb-1"
                                data-fraktur="true">
                                <?php echo esc_html( $ep['title'] ); ?>
                            </h3>

                            <p class="text-xs tracking-widest uppercase text-[#8b7355] font-serif mb-2">
                                <?php echo esc_html( $ep['date'] ); ?>
                                <?php if ( $ep['duration'] ) : ?>
                                    <span class="mx-2">·</span>
                                    <?php echo esc_html( $ep['duration'] ); ?>
                                <?php endif; ?>
                            </p>

                            <?php if ( $ep['excerpt'] ) : ?>
                                <p class="font-serif text-sm leading-relaxed text-[#1a1a1a] mb-3">
                                    <?php echo esc_html( $ep['excerpt'] ); ?>
                                </p>
                            <?php endif; ?>

                            <?php if ( ! empty( $ep['audio_url'] ) ) : ?>
                                <div class="mt-4">
                                    <audio controls preload="none" class="w-full" src="<?php echo esc_url( $ep['audio_url'] ); ?>">
                                        <?php _e( 'Your browser does not support audio playback.', 'queer-times' ); ?>
                                    </audio>
                                </div>
                            <?php elseif ( ! empty( $ep['url'] ) ) : ?>
                                <a href="<?php echo esc_url( $ep['url'] ); ?>"
                                   target="_blank" rel="noopener noreferrer"
                                   class="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-serif underline hover:no-underline mt-2">
                                    <?php _e( 'Episode details &rarr;', 'queer-times' ); ?>
                                </a>
                            <?php endif; ?>
                        </div>

                    </article>

                <?php endforeach; ?>
            </div>

        <?php else : ?>

            <div class="text-center py-16">
                <p class="font-serif text-sm italic mb-4">
                    <?php _e( 'Episodes are temporarily unavailable. Please check back shortly.', 'queer-times' ); ?>
                </p>
            </div>

        <?php endif; ?>

    </div>

</main>

<?php get_footer(); ?>
