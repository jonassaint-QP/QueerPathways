<?php
/**
 * Template Name: Privacy
 * Queer Times — Privacy Page
 *
 * PHIPA compliance and data governance disclosure for Ontario clients.
 */

get_header();
?>

<main id="main-content" class="min-h-screen bg-[#f4f1ea] text-[#1a1a1a]">

    <div class="border-b-2 border-[#1a1a1a] py-1 px-4 flex justify-between items-center text-xs tracking-widest uppercase font-serif">
        <span><?php echo esc_html( date_i18n( 'l, F j, Y' ) ); ?></span>
        <span><?php bloginfo( 'name' ); ?></span>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:underline">
            <?php _e( '&larr; Front Page', 'queer-times' ); ?>
        </a>
    </div>

    <header class="py-8 px-4 text-center border-b-4 border-double border-[#1a1a1a]">
        <p class="text-xs tracking-widest uppercase text-[#8b7355] mb-2 font-serif">
            <?php _e( 'Queer Pathways', 'queer-times' ); ?>
        </p>
        <h1 class="text-5xl md:text-7xl leading-none" data-fraktur="true">
            <?php _e( 'Privacy and Data Governance', 'queer-times' ); ?>
        </h1>
        <div class="flex items-center justify-center gap-3 my-3">
            <span class="block h-px flex-1 max-w-sm bg-[#8b7355]"></span>
            <span class="text-[#8b7355] text-lg">✦</span>
            <span class="block h-px flex-1 max-w-sm bg-[#8b7355]"></span>
        </div>
        <p class="text-sm font-serif italic max-w-2xl mx-auto leading-relaxed">
            <?php _e( 'PHIPA Compliance and cross-border privacy standards for Ontario clients.', 'queer-times' ); ?>
        </p>
    </header>

    <section class="max-w-4xl mx-auto px-4 py-10">
        <div class="border border-[#8b7355] bg-[#f7f3eb] p-6 md:p-8">
            <p class="text-xs tracking-widest uppercase text-[#8b7355] font-serif mb-1">
                <?php _e( 'Effective Date: May 26, 2026', 'queer-times' ); ?>
            </p>
            <p class="text-xs tracking-widest uppercase text-[#8b7355] font-serif mb-8">
                <?php _e( 'Last Updated: May 26, 2026', 'queer-times' ); ?>
            </p>

            <ol class="space-y-8 font-serif text-sm md:text-base leading-relaxed list-decimal pl-5 marker:text-[#8b7355]">
                <li>
                    <h2 class="text-lg md:text-xl leading-snug mb-2 font-semibold" data-fraktur="true">
                        <?php _e( 'Personal Health Information Protection Act (PHIPA)', 'queer-times' ); ?>
                    </h2>
                    <p>
                        <?php _e( 'In accordance with the Personal Health Information Protection Act, 2004 (PHIPA), Queer Pathways (the Practice) is committed to protecting the privacy and security of personal health information for all clients located within the jurisdiction of Ontario.', 'queer-times' ); ?>
                    </p>
                </li>

                <li>
                    <h2 class="text-lg md:text-xl leading-snug mb-2 font-semibold" data-fraktur="true">
                        <?php _e( 'Health Information Custodian (HIC) Status', 'queer-times' ); ?>
                    </h2>
                    <p>
                        <?php _e( 'The Practice operates as a Health Information Custodian under PHIPA. As a HIC, the Practice is responsible for the collection, use, disclosure, and safeguarding of personal health information, ensuring that all handling aligns with provincial privacy standards and clinical best practices.', 'queer-times' ); ?>
                    </p>
                </li>

                <li>
                    <h2 class="text-lg md:text-xl leading-snug mb-2 font-semibold" data-fraktur="true">
                        <?php _e( 'Cross-Border Data Governance (US-Canada)', 'queer-times' ); ?>
                    </h2>
                    <p>
                        <?php _e( 'To facilitate the dual-specialist telehealth model, personal health information may be stored on servers located in the United States. The Practice uses United States-based Electronic Health Record vendors, which are classified as Electronic Service Providers under PHIPA.', 'queer-times' ); ?>
                    </p>
                </li>

                <li>
                    <h2 class="text-lg md:text-xl leading-snug mb-2 font-semibold" data-fraktur="true">
                        <?php _e( 'Collection, Use, and Disclosure of Personal Health Information', 'queer-times' ); ?>
                    </h2>
                    <p class="mb-3">
                        <?php _e( 'We collect personal health information, including name, contact details, clinical history, and session notes, solely for the purpose of providing affirming mental health therapy.', 'queer-times' ); ?>
                    </p>
                    <p class="mb-2"><strong><?php _e( 'Consent:', 'queer-times' ); ?></strong> <?php _e( 'We rely on express or implied consent to provide care. You may withdraw or limit your consent at any time, subject to legal or contractual restrictions.', 'queer-times' ); ?></p>
                    <p class="mb-2"><strong><?php _e( 'Purpose Limitation:', 'queer-times' ); ?></strong> <?php _e( 'Personal health information is used only for clinical treatment, healthcare administration, and billing Canadian insurers, including Sun Life, Manulife, and Canada Life.', 'queer-times' ); ?></p>
                    <p><strong><?php _e( 'Disclosure:', 'queer-times' ); ?></strong> <?php _e( 'We do not disclose personal health information to third parties without your express consent, except where required by law, including imminent risk of harm or court order.', 'queer-times' ); ?></p>
                </li>

                <li>
                    <h2 class="text-lg md:text-xl leading-snug mb-2 font-semibold" data-fraktur="true">
                        <?php _e( 'Client Rights', 'queer-times' ); ?>
                    </h2>
                    <p>
                        <?php _e( 'Ontario clients may request access to their personal health information, request corrections, and receive notification in the event of a privacy breach that exceeds the low-risk threshold. For PHIPA compliance and data governance inquiries, clients may contact the Practice Privacy Officer.', 'queer-times' ); ?>
                    </p>
                </li>

                <li>
                    <h2 class="text-lg md:text-xl leading-snug mb-2 font-semibold" data-fraktur="true">
                        <?php _e( 'Technical and Administrative Safeguards', 'queer-times' ); ?>
                    </h2>
                    <p class="mb-2"><strong><?php _e( 'Encryption:', 'queer-times' ); ?></strong> <?php _e( 'Personal health information is protected via field-level AES-GCM encryption during transit and at rest.', 'queer-times' ); ?></p>
                    <p class="mb-2"><strong><?php _e( 'Auditability:', 'queer-times' ); ?></strong> <?php _e( 'The electronic health record platform maintains tamper-evident audit logs documenting access, modification, and disclosure events.', 'queer-times' ); ?></p>
                    <p><strong><?php _e( 'Compliance Documentation:', 'queer-times' ); ?></strong> <?php _e( 'The Practice maintains a formal Privacy Impact Assessment and Participation Agreements with Electronic Service Providers to support PHIPA-equivalent protections across jurisdictions.', 'queer-times' ); ?></p>
                </li>

                <li>
                    <h2 class="text-lg md:text-xl leading-snug mb-2 font-semibold" data-fraktur="true">
                        <?php _e( 'Breach Notification', 'queer-times' ); ?>
                    </h2>
                    <p class="mb-2">
                        <?php _e( 'In the event of unauthorized use, loss, or disclosure of personal health information, Queer Pathways will notify the affected individual at the first reasonable opportunity.', 'queer-times' ); ?>
                    </p>
                    <p>
                        <?php _e( 'The Practice will also report breaches to the Information and Privacy Commissioner of Ontario and to the Ontario College of Social Workers and Social Service Workers, where required by law.', 'queer-times' ); ?>
                    </p>
                </li>

                <li>
                    <h2 class="text-lg md:text-xl leading-snug mb-2 font-semibold" data-fraktur="true">
                        <?php _e( 'Contact Information', 'queer-times' ); ?>
                    </h2>

                    <div class="space-y-1 mb-4">
                        <p><strong><?php _e( 'Joshua Jonassaint', 'queer-times' ); ?></strong></p>
                        <p><?php _e( 'Owner and Privacy Officer, Queer Pathways', 'queer-times' ); ?></p>
                        <p>
                            <strong><?php _e( 'Website:', 'queer-times' ); ?></strong>
                            <a href="https://queerpathways.org" class="underline hover:no-underline" target="_blank" rel="noopener noreferrer">queerpathways.org</a>
                        </p>
                        <p>
                            <strong><?php _e( 'Email:', 'queer-times' ); ?></strong>
                            <a href="mailto:joshua@queerpathways.org" class="underline hover:no-underline">joshua@queerpathways.org</a>
                        </p>
                    </div>

                    <p class="mb-2">
                        <?php _e( 'If you believe your privacy rights have been violated, you may file a complaint with the Information and Privacy Commissioner of Ontario.', 'queer-times' ); ?>
                    </p>
                    <div class="space-y-1">
                        <p>2 Bloor Street East, Suite 1400</p>
                        <p>Toronto, ON M4W 1A8</p>
                        <p><strong><?php _e( 'Phone:', 'queer-times' ); ?></strong> 416-326-3333</p>
                    </div>
                </li>
            </ol>
        </div>
    </section>

</main>

<?php get_footer(); ?>
