
// Master JS for State: RO - Persona: Amazon Frontier Pioneer
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 768;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const ro_index_section_immigrate_to_rondnia = document.getElementById('ro-index-section-immigrate-to-rondnia');
  if (ro_index_section_immigrate_to_rondnia) {
    gsap.fromTo('#ro-index-section-immigrate-to-rondnia', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_form_immigrate_to_rondnia = document.getElementById('ro-index-form-immigrate-to-rondnia');
  if (ro_index_form_immigrate_to_rondnia) {
    gsap.from('#ro-index-form-immigrate-to-rondnia input, #ro-index-form-immigrate-to-rondnia textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_state_vibe = document.getElementById('ro-index-section-state-vibe');
  if (ro_index_section_state_vibe) {
    gsap.fromTo('#ro-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_quick_facts_snapshot = document.getElementById('ro-index-section-quick-facts-snapshot');
  if (ro_index_section_quick_facts_snapshot) {
    gsap.fromTo('#ro-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_rondnia_map = document.getElementById('ro-index-section-rondnia-map');
  if (ro_index_section_rondnia_map) {
    gsap.fromTo('#ro-index-section-rondnia-map', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_cost_of_living_rondnia = document.getElementById('ro-index-section-cost-of-living-rondnia');
  if (ro_index_section_cost_of_living_rondnia) {
    gsap.fromTo('#ro-index-section-cost-of-living-rondnia', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_government_context = document.getElementById('ro-index-section-government-context');
  if (ro_index_section_government_context) {
    gsap.fromTo('#ro-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_hero_immigration_notes = document.getElementById('ro-index-hero-immigration-notes');
  if (ro_index_hero_immigration_notes) {
    gsap.fromTo('#ro-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_common_applicant_profiles = document.getElementById('ro-index-list-common-applicant-profiles');
  if (ro_index_list_common_applicant_profiles) {
    gsap.from('#ro-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_economic_drivers = document.getElementById('ro-index-list-economic-drivers');
  if (ro_index_list_economic_drivers) {
    gsap.from('#ro-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_demographics = document.getElementById('ro-index-section-demographics');
  if (ro_index_section_demographics) {
    gsap.fromTo('#ro-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_regional_challenges = document.getElementById('ro-index-section-regional-challenges');
  if (ro_index_section_regional_challenges) {
    gsap.fromTo('#ro-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_regional_opportunities = document.getElementById('ro-index-section-regional-opportunities');
  if (ro_index_section_regional_opportunities) {
    gsap.fromTo('#ro-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_culture_daily_life = document.getElementById('ro-index-section-culture-daily-life');
  if (ro_index_section_culture_daily_life) {
    gsap.fromTo('#ro-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_local_language_expressions = document.getElementById('ro-index-list-local-language-expressions');
  if (ro_index_list_local_language_expressions) {
    gsap.from('#ro-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_food_cuisine = document.getElementById('ro-index-list-food-cuisine');
  if (ro_index_list_food_cuisine) {
    gsap.from('#ro-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_festivals_traditions = document.getElementById('ro-index-list-festivals-traditions');
  if (ro_index_list_festivals_traditions) {
    gsap.from('#ro-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_music_artistic_expression = document.getElementById('ro-index-list-music-artistic-expression');
  if (ro_index_list_music_artistic_expression) {
    gsap.from('#ro-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_sports_recreation = document.getElementById('ro-index-list-sports-recreation');
  if (ro_index_list_sports_recreation) {
    gsap.from('#ro-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_landmarks_historical_sites = document.getElementById('ro-index-list-landmarks-historical-sites');
  if (ro_index_list_landmarks_historical_sites) {
    gsap.from('#ro-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_natural_features = document.getElementById('ro-index-list-natural-features');
  if (ro_index_list_natural_features) {
    gsap.from('#ro-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_parks_protected_areas = document.getElementById('ro-index-list-parks-protected-areas');
  if (ro_index_list_parks_protected_areas) {
    gsap.from('#ro-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_museums_cultural_institutions = document.getElementById('ro-index-list-museums-cultural-institutions');
  if (ro_index_list_museums_cultural_institutions) {
    gsap.from('#ro-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_image_gallery = document.getElementById('ro-index-section-image-gallery');
  if (ro_index_section_image_gallery) {
    gsap.fromTo('#ro-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_useful_government_links = document.getElementById('ro-index-section-useful-government-links');
  if (ro_index_section_useful_government_links) {
    gsap.fromTo('#ro-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_hero_federal_police_immigration_links = document.getElementById('ro-index-hero-federal-police-immigration-links');
  if (ro_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#ro-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_external_references = document.getElementById('ro-index-section-external-references');
  if (ro_index_section_external_references) {
    gsap.fromTo('#ro-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_immigration_services_overview = document.getElementById('ro-index-list-immigration-services-overview');
  if (ro_index_list_immigration_services_overview) {
    gsap.from('#ro-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_why_immigrate_here = document.getElementById('ro-index-section-why-immigrate-here');
  if (ro_index_section_why_immigrate_here) {
    gsap.fromTo('#ro-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section_legal_guidance_disclaimers = document.getElementById('ro-index-section-legal-guidance-disclaimers');
  if (ro_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#ro-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_travel_services = document.getElementById('ro-index-list-travel-services');
  if (ro_index_list_travel_services) {
    gsap.from('#ro-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_list_how_the_process_works = document.getElementById('ro-index-list-how-the-process-works');
  if (ro_index_list_how_the_process_works) {
    gsap.from('#ro-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_index_section__frequently_asked_questions_about_living_in_rondnia_ = document.getElementById('ro-index-section--frequently-asked-questions-about-living-in-rondnia-');
  if (ro_index_section__frequently_asked_questions_about_living_in_rondnia_) {
    gsap.fromTo('#ro-index-section--frequently-asked-questions-about-living-in-rondnia-', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_contactcta_section_get_started_in_rondnia = document.getElementById('ro-contactcta-section-get-started-in-rondnia');
  if (ro_contactcta_section_get_started_in_rondnia) {
    gsap.fromTo('#ro-contactcta-section-get-started-in-rondnia', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('ro-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (ro_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#ro-renouncingcitizenship-form-renounce-brazilian-citizenship input, #ro-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_list_quick_facts = document.getElementById('ro-renouncingcitizenship-list-quick-facts');
  if (ro_renouncingcitizenship_list_quick_facts) {
    gsap.from('#ro-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('ro-renouncingcitizenship-list-common-challenges-applicants-face');
  if (ro_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ro-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('ro-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (ro_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ro-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_section_renunciation_overview = document.getElementById('ro-renouncingcitizenship-section-renunciation-overview');
  if (ro_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#ro-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_form_who_is_this_for = document.getElementById('ro-renouncingcitizenship-form-who-is-this-for');
  if (ro_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#ro-renouncingcitizenship-form-who-is-this-for input, #ro-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_list_required_documents = document.getElementById('ro-renouncingcitizenship-list-required-documents');
  if (ro_renouncingcitizenship_list_required_documents) {
    gsap.from('#ro-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_list_process = document.getElementById('ro-renouncingcitizenship-list-process');
  if (ro_renouncingcitizenship_list_process) {
    gsap.from('#ro-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_section_timelines_deadlines = document.getElementById('ro-renouncingcitizenship-section-timelines-deadlines');
  if (ro_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ro-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_section_fees_costs = document.getElementById('ro-renouncingcitizenship-section-fees-costs');
  if (ro_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#ro-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('ro-renouncingcitizenship-list-risks-common-mistakes');
  if (ro_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#ro-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('ro-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (ro_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_section_rondnia_specific_context = document.getElementById('ro-renouncingcitizenship-section-rondnia-specific-context');
  if (ro_renouncingcitizenship_section_rondnia_specific_context) {
    gsap.fromTo('#ro-renouncingcitizenship-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_section_what_our_clients_say = document.getElementById('ro-renouncingcitizenship-section-what-our-clients-say');
  if (ro_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ro-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('ro-renouncingcitizenship-section-frequently-asked-questions');
  if (ro_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ro-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_section_international_support = document.getElementById('ro-renouncingcitizenship-section-international-support');
  if (ro_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#ro-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_list_our_credentials = document.getElementById('ro-renouncingcitizenship-list-our-credentials');
  if (ro_renouncingcitizenship_list_our_credentials) {
    gsap.from('#ro-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_list_related_services = document.getElementById('ro-renouncingcitizenship-list-related-services');
  if (ro_renouncingcitizenship_list_related_services) {
    gsap.from('#ro-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('ro-renouncingcitizenship-section-youre-in-good-hands');
  if (ro_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ro-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_renouncingcitizenship_section_21 = document.getElementById('ro-renouncingcitizenship-section-21');
  if (ro_renouncingcitizenship_section_21) {
    gsap.fromTo('#ro-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('ro-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (ro_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#ro-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #ro-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_list_quick_facts = document.getElementById('ro-provisional-list-quick-facts');
  if (ro_provisional_list_quick_facts) {
    gsap.from('#ro-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_list_common_challenges_applicants_face = document.getElementById('ro-provisional-list-common-challenges-applicants-face');
  if (ro_provisional_list_common_challenges_applicants_face) {
    gsap.from('#ro-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_list_how_we_solve_these_challenges = document.getElementById('ro-provisional-list-how-we-solve-these-challenges');
  if (ro_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#ro-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_section_naturalisation_overview = document.getElementById('ro-provisional-section-naturalisation-overview');
  if (ro_provisional_section_naturalisation_overview) {
    gsap.fromTo('#ro-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_form_who_is_this_naturalisation_for = document.getElementById('ro-provisional-form-who-is-this-naturalisation-for');
  if (ro_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#ro-provisional-form-who-is-this-naturalisation-for input, #ro-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_list_required_documents = document.getElementById('ro-provisional-list-required-documents');
  if (ro_provisional_list_required_documents) {
    gsap.from('#ro-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_list_application_process = document.getElementById('ro-provisional-list-application-process');
  if (ro_provisional_list_application_process) {
    gsap.from('#ro-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_section_timelines_deadlines = document.getElementById('ro-provisional-section-timelines-deadlines');
  if (ro_provisional_section_timelines_deadlines) {
    gsap.fromTo('#ro-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_section_fees_costs = document.getElementById('ro-provisional-section-fees-costs');
  if (ro_provisional_section_fees_costs) {
    gsap.fromTo('#ro-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_list_risks_common_mistakes = document.getElementById('ro-provisional-list-risks-common-mistakes');
  if (ro_provisional_list_risks_common_mistakes) {
    gsap.from('#ro-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_section_diy_vs_professional_assistance = document.getElementById('ro-provisional-section-diy-vs-professional-assistance');
  if (ro_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_section_rondnia_specific_context = document.getElementById('ro-provisional-section-rondnia-specific-context');
  if (ro_provisional_section_rondnia_specific_context) {
    gsap.fromTo('#ro-provisional-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_section_what_our_clients_say = document.getElementById('ro-provisional-section-what-our-clients-say');
  if (ro_provisional_section_what_our_clients_say) {
    gsap.fromTo('#ro-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_section_frequently_asked_questions = document.getElementById('ro-provisional-section-frequently-asked-questions');
  if (ro_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#ro-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_section_international_support = document.getElementById('ro-provisional-section-international-support');
  if (ro_provisional_section_international_support) {
    gsap.fromTo('#ro-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_list_our_credentials = document.getElementById('ro-provisional-list-our-credentials');
  if (ro_provisional_list_our_credentials) {
    gsap.from('#ro-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_list_related_services = document.getElementById('ro-provisional-list-related-services');
  if (ro_provisional_list_related_services) {
    gsap.from('#ro-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_section_youre_in_good_hands = document.getElementById('ro-provisional-section-youre-in-good-hands');
  if (ro_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#ro-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_provisional_section_21 = document.getElementById('ro-provisional-section-21');
  if (ro_provisional_section_21) {
    gsap.fromTo('#ro-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('ro-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (ro_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#ro-special-form-special-naturalisation-in-brazil-for-particular-cases input, #ro-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_list_quick_facts = document.getElementById('ro-special-list-quick-facts');
  if (ro_special_list_quick_facts) {
    gsap.from('#ro-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_list_common_challenges_applicants_face = document.getElementById('ro-special-list-common-challenges-applicants-face');
  if (ro_special_list_common_challenges_applicants_face) {
    gsap.from('#ro-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_list_how_we_solve_these_challenges = document.getElementById('ro-special-list-how-we-solve-these-challenges');
  if (ro_special_list_how_we_solve_these_challenges) {
    gsap.from('#ro-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_section_naturalisation_overview = document.getElementById('ro-special-section-naturalisation-overview');
  if (ro_special_section_naturalisation_overview) {
    gsap.fromTo('#ro-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_form_who_is_this_naturalisation_for = document.getElementById('ro-special-form-who-is-this-naturalisation-for');
  if (ro_special_form_who_is_this_naturalisation_for) {
    gsap.from('#ro-special-form-who-is-this-naturalisation-for input, #ro-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_list_required_documents = document.getElementById('ro-special-list-required-documents');
  if (ro_special_list_required_documents) {
    gsap.from('#ro-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_list_application_process = document.getElementById('ro-special-list-application-process');
  if (ro_special_list_application_process) {
    gsap.from('#ro-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_section_timelines_deadlines = document.getElementById('ro-special-section-timelines-deadlines');
  if (ro_special_section_timelines_deadlines) {
    gsap.fromTo('#ro-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_section_fees_costs = document.getElementById('ro-special-section-fees-costs');
  if (ro_special_section_fees_costs) {
    gsap.fromTo('#ro-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_list_risks_common_mistakes = document.getElementById('ro-special-list-risks-common-mistakes');
  if (ro_special_list_risks_common_mistakes) {
    gsap.from('#ro-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_section_diy_vs_professional_assistance = document.getElementById('ro-special-section-diy-vs-professional-assistance');
  if (ro_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_section_rondnia_specific_context = document.getElementById('ro-special-section-rondnia-specific-context');
  if (ro_special_section_rondnia_specific_context) {
    gsap.fromTo('#ro-special-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_section_what_our_clients_say = document.getElementById('ro-special-section-what-our-clients-say');
  if (ro_special_section_what_our_clients_say) {
    gsap.fromTo('#ro-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_section_frequently_asked_questions = document.getElementById('ro-special-section-frequently-asked-questions');
  if (ro_special_section_frequently_asked_questions) {
    gsap.fromTo('#ro-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_section_international_support = document.getElementById('ro-special-section-international-support');
  if (ro_special_section_international_support) {
    gsap.fromTo('#ro-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_list_our_credentials = document.getElementById('ro-special-list-our-credentials');
  if (ro_special_list_our_credentials) {
    gsap.from('#ro-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_list_related_services = document.getElementById('ro-special-list-related-services');
  if (ro_special_list_related_services) {
    gsap.from('#ro-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_section_youre_in_good_hands = document.getElementById('ro-special-section-youre-in-good-hands');
  if (ro_special_section_youre_in_good_hands) {
    gsap.fromTo('#ro-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_special_section_21 = document.getElementById('ro-special-section-21');
  if (ro_special_section_21) {
    gsap.fromTo('#ro-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('ro-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (ro_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#ro-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #ro-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_list_quick_facts = document.getElementById('ro-ordinary-list-quick-facts');
  if (ro_ordinary_list_quick_facts) {
    gsap.from('#ro-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_list_common_challenges_applicants_face = document.getElementById('ro-ordinary-list-common-challenges-applicants-face');
  if (ro_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#ro-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_list_how_we_solve_these_challenges = document.getElementById('ro-ordinary-list-how-we-solve-these-challenges');
  if (ro_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ro-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_section_naturalisation_overview = document.getElementById('ro-ordinary-section-naturalisation-overview');
  if (ro_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#ro-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_form_who_is_this_naturalisation_for = document.getElementById('ro-ordinary-form-who-is-this-naturalisation-for');
  if (ro_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ro-ordinary-form-who-is-this-naturalisation-for input, #ro-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_list_required_documents = document.getElementById('ro-ordinary-list-required-documents');
  if (ro_ordinary_list_required_documents) {
    gsap.from('#ro-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_list_application_process = document.getElementById('ro-ordinary-list-application-process');
  if (ro_ordinary_list_application_process) {
    gsap.from('#ro-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_section_timelines_deadlines = document.getElementById('ro-ordinary-section-timelines-deadlines');
  if (ro_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#ro-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_section_fees_costs = document.getElementById('ro-ordinary-section-fees-costs');
  if (ro_ordinary_section_fees_costs) {
    gsap.fromTo('#ro-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_list_risks_common_mistakes = document.getElementById('ro-ordinary-list-risks-common-mistakes');
  if (ro_ordinary_list_risks_common_mistakes) {
    gsap.from('#ro-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_section_diy_vs_professional_assistance = document.getElementById('ro-ordinary-section-diy-vs-professional-assistance');
  if (ro_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_section_rondnia_specific_context = document.getElementById('ro-ordinary-section-rondnia-specific-context');
  if (ro_ordinary_section_rondnia_specific_context) {
    gsap.fromTo('#ro-ordinary-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_section_what_our_clients_say = document.getElementById('ro-ordinary-section-what-our-clients-say');
  if (ro_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#ro-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_section_frequently_asked_questions = document.getElementById('ro-ordinary-section-frequently-asked-questions');
  if (ro_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ro-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_section_international_support = document.getElementById('ro-ordinary-section-international-support');
  if (ro_ordinary_section_international_support) {
    gsap.fromTo('#ro-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_list_our_credentials = document.getElementById('ro-ordinary-list-our-credentials');
  if (ro_ordinary_list_our_credentials) {
    gsap.from('#ro-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_list_related_services = document.getElementById('ro-ordinary-list-related-services');
  if (ro_ordinary_list_related_services) {
    gsap.from('#ro-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_section_youre_in_good_hands = document.getElementById('ro-ordinary-section-youre-in-good-hands');
  if (ro_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ro-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_ordinary_section_21 = document.getElementById('ro-ordinary-section-21');
  if (ro_ordinary_section_21) {
    gsap.fromTo('#ro-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('ro-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (ro_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#ro-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #ro-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_list_quick_facts = document.getElementById('ro-extraordinary-list-quick-facts');
  if (ro_extraordinary_list_quick_facts) {
    gsap.from('#ro-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_list_common_challenges_applicants_face = document.getElementById('ro-extraordinary-list-common-challenges-applicants-face');
  if (ro_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#ro-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_list_how_we_solve_these_challenges = document.getElementById('ro-extraordinary-list-how-we-solve-these-challenges');
  if (ro_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ro-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_section_naturalisation_overview = document.getElementById('ro-extraordinary-section-naturalisation-overview');
  if (ro_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#ro-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('ro-extraordinary-form-who-is-this-naturalisation-for');
  if (ro_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ro-extraordinary-form-who-is-this-naturalisation-for input, #ro-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_list_required_documents = document.getElementById('ro-extraordinary-list-required-documents');
  if (ro_extraordinary_list_required_documents) {
    gsap.from('#ro-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_list_application_process = document.getElementById('ro-extraordinary-list-application-process');
  if (ro_extraordinary_list_application_process) {
    gsap.from('#ro-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_section_timelines_deadlines = document.getElementById('ro-extraordinary-section-timelines-deadlines');
  if (ro_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#ro-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_section_fees_costs = document.getElementById('ro-extraordinary-section-fees-costs');
  if (ro_extraordinary_section_fees_costs) {
    gsap.fromTo('#ro-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_list_risks_common_mistakes = document.getElementById('ro-extraordinary-list-risks-common-mistakes');
  if (ro_extraordinary_list_risks_common_mistakes) {
    gsap.from('#ro-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_section_diy_vs_professional_assistance = document.getElementById('ro-extraordinary-section-diy-vs-professional-assistance');
  if (ro_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_section_rondnia_specific_context = document.getElementById('ro-extraordinary-section-rondnia-specific-context');
  if (ro_extraordinary_section_rondnia_specific_context) {
    gsap.fromTo('#ro-extraordinary-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_section_what_our_clients_say = document.getElementById('ro-extraordinary-section-what-our-clients-say');
  if (ro_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#ro-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_section_frequently_asked_questions = document.getElementById('ro-extraordinary-section-frequently-asked-questions');
  if (ro_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ro-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_section_international_support = document.getElementById('ro-extraordinary-section-international-support');
  if (ro_extraordinary_section_international_support) {
    gsap.fromTo('#ro-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_list_our_credentials = document.getElementById('ro-extraordinary-list-our-credentials');
  if (ro_extraordinary_list_our_credentials) {
    gsap.from('#ro-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_list_related_services = document.getElementById('ro-extraordinary-list-related-services');
  if (ro_extraordinary_list_related_services) {
    gsap.from('#ro-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_section_youre_in_good_hands = document.getElementById('ro-extraordinary-section-youre-in-good-hands');
  if (ro_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ro-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extraordinary_section_21 = document.getElementById('ro-extraordinary-section-21');
  if (ro_extraordinary_section_21) {
    gsap.fromTo('#ro-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('ro-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (ro_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#ro-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #ro-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_list_quick_facts = document.getElementById('ro-reacquisitioncitizenship-list-quick-facts');
  if (ro_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#ro-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('ro-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (ro_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ro-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('ro-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (ro_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ro-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('ro-reacquisitioncitizenship-section-reacquisition-overview');
  if (ro_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#ro-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('ro-reacquisitioncitizenship-form-who-is-this-for');
  if (ro_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#ro-reacquisitioncitizenship-form-who-is-this-for input, #ro-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_list_required_documents = document.getElementById('ro-reacquisitioncitizenship-list-required-documents');
  if (ro_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#ro-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_list_process = document.getElementById('ro-reacquisitioncitizenship-list-process');
  if (ro_reacquisitioncitizenship_list_process) {
    gsap.from('#ro-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('ro-reacquisitioncitizenship-section-timelines-deadlines');
  if (ro_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ro-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_section_fees_costs = document.getElementById('ro-reacquisitioncitizenship-section-fees-costs');
  if (ro_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#ro-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('ro-reacquisitioncitizenship-list-risks-common-mistakes');
  if (ro_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#ro-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('ro-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (ro_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_section_rondnia_specific_context = document.getElementById('ro-reacquisitioncitizenship-section-rondnia-specific-context');
  if (ro_reacquisitioncitizenship_section_rondnia_specific_context) {
    gsap.fromTo('#ro-reacquisitioncitizenship-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('ro-reacquisitioncitizenship-section-what-our-clients-say');
  if (ro_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ro-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('ro-reacquisitioncitizenship-section-frequently-asked-questions');
  if (ro_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ro-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_section_international_support = document.getElementById('ro-reacquisitioncitizenship-section-international-support');
  if (ro_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#ro-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_list_our_credentials = document.getElementById('ro-reacquisitioncitizenship-list-our-credentials');
  if (ro_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#ro-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_list_related_services = document.getElementById('ro-reacquisitioncitizenship-list-related-services');
  if (ro_reacquisitioncitizenship_list_related_services) {
    gsap.from('#ro-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('ro-reacquisitioncitizenship-section-youre-in-good-hands');
  if (ro_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ro-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_reacquisitioncitizenship_section_21 = document.getElementById('ro-reacquisitioncitizenship-section-21');
  if (ro_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#ro-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('ro-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (ro_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#ro-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #ro-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_list_quick_facts = document.getElementById('ro-scientificresearch-list-quick-facts');
  if (ro_scientificresearch_list_quick_facts) {
    gsap.from('#ro-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_list_common_challenges_applicants_face = document.getElementById('ro-scientificresearch-list-common-challenges-applicants-face');
  if (ro_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#ro-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('ro-scientificresearch-list-how-we-solve-these-challenges');
  if (ro_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#ro-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_section_residency_overview = document.getElementById('ro-scientificresearch-section-residency-overview');
  if (ro_scientificresearch_section_residency_overview) {
    gsap.fromTo('#ro-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_form_who_is_this_residency_for = document.getElementById('ro-scientificresearch-form-who-is-this-residency-for');
  if (ro_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#ro-scientificresearch-form-who-is-this-residency-for input, #ro-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_list_required_documents = document.getElementById('ro-scientificresearch-list-required-documents');
  if (ro_scientificresearch_list_required_documents) {
    gsap.from('#ro-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_list_application_process = document.getElementById('ro-scientificresearch-list-application-process');
  if (ro_scientificresearch_list_application_process) {
    gsap.from('#ro-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_section_timelines_deadlines = document.getElementById('ro-scientificresearch-section-timelines-deadlines');
  if (ro_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#ro-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_section_fees_costs = document.getElementById('ro-scientificresearch-section-fees-costs');
  if (ro_scientificresearch_section_fees_costs) {
    gsap.fromTo('#ro-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_list_risks_common_mistakes = document.getElementById('ro-scientificresearch-list-risks-common-mistakes');
  if (ro_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#ro-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('ro-scientificresearch-section-diy-vs-professional-assistance');
  if (ro_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_section_rondnia_specific_context = document.getElementById('ro-scientificresearch-section-rondnia-specific-context');
  if (ro_scientificresearch_section_rondnia_specific_context) {
    gsap.fromTo('#ro-scientificresearch-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_section_what_our_clients_say = document.getElementById('ro-scientificresearch-section-what-our-clients-say');
  if (ro_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#ro-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_section_frequently_asked_questions = document.getElementById('ro-scientificresearch-section-frequently-asked-questions');
  if (ro_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#ro-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_section_international_support = document.getElementById('ro-scientificresearch-section-international-support');
  if (ro_scientificresearch_section_international_support) {
    gsap.fromTo('#ro-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_list_our_credentials = document.getElementById('ro-scientificresearch-list-our-credentials');
  if (ro_scientificresearch_list_our_credentials) {
    gsap.from('#ro-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_list_related_services = document.getElementById('ro-scientificresearch-list-related-services');
  if (ro_scientificresearch_list_related_services) {
    gsap.from('#ro-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_section_youre_in_good_hands = document.getElementById('ro-scientificresearch-section-youre-in-good-hands');
  if (ro_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#ro-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_scientificresearch_section_21 = document.getElementById('ro-scientificresearch-section-21');
  if (ro_scientificresearch_section_21) {
    gsap.fromTo('#ro-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_form_study_in_brazil_with_study_residency = document.getElementById('ro-study-form-study-in-brazil-with-study-residency');
  if (ro_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#ro-study-form-study-in-brazil-with-study-residency input, #ro-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_list_quick_facts = document.getElementById('ro-study-list-quick-facts');
  if (ro_study_list_quick_facts) {
    gsap.from('#ro-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_list_common_challenges_applicants_face = document.getElementById('ro-study-list-common-challenges-applicants-face');
  if (ro_study_list_common_challenges_applicants_face) {
    gsap.from('#ro-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_list_how_we_solve_these_challenges = document.getElementById('ro-study-list-how-we-solve-these-challenges');
  if (ro_study_list_how_we_solve_these_challenges) {
    gsap.from('#ro-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_section_residency_overview = document.getElementById('ro-study-section-residency-overview');
  if (ro_study_section_residency_overview) {
    gsap.fromTo('#ro-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_form_who_is_this_residency_for = document.getElementById('ro-study-form-who-is-this-residency-for');
  if (ro_study_form_who_is_this_residency_for) {
    gsap.from('#ro-study-form-who-is-this-residency-for input, #ro-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_list_required_documents = document.getElementById('ro-study-list-required-documents');
  if (ro_study_list_required_documents) {
    gsap.from('#ro-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_list_application_process = document.getElementById('ro-study-list-application-process');
  if (ro_study_list_application_process) {
    gsap.from('#ro-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_section_timelines_deadlines = document.getElementById('ro-study-section-timelines-deadlines');
  if (ro_study_section_timelines_deadlines) {
    gsap.fromTo('#ro-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_section_fees_costs = document.getElementById('ro-study-section-fees-costs');
  if (ro_study_section_fees_costs) {
    gsap.fromTo('#ro-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_list_risks_common_mistakes = document.getElementById('ro-study-list-risks-common-mistakes');
  if (ro_study_list_risks_common_mistakes) {
    gsap.from('#ro-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_section_diy_vs_professional_assistance = document.getElementById('ro-study-section-diy-vs-professional-assistance');
  if (ro_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_section_rondnia_specific_context = document.getElementById('ro-study-section-rondnia-specific-context');
  if (ro_study_section_rondnia_specific_context) {
    gsap.fromTo('#ro-study-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_section_what_our_clients_say = document.getElementById('ro-study-section-what-our-clients-say');
  if (ro_study_section_what_our_clients_say) {
    gsap.fromTo('#ro-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_section_frequently_asked_questions = document.getElementById('ro-study-section-frequently-asked-questions');
  if (ro_study_section_frequently_asked_questions) {
    gsap.fromTo('#ro-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_section_international_support = document.getElementById('ro-study-section-international-support');
  if (ro_study_section_international_support) {
    gsap.fromTo('#ro-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_list_our_credentials = document.getElementById('ro-study-list-our-credentials');
  if (ro_study_list_our_credentials) {
    gsap.from('#ro-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_list_related_services = document.getElementById('ro-study-list-related-services');
  if (ro_study_list_related_services) {
    gsap.from('#ro-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_section_youre_in_good_hands = document.getElementById('ro-study-section-youre-in-good-hands');
  if (ro_study_section_youre_in_good_hands) {
    gsap.fromTo('#ro-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_study_section_21 = document.getElementById('ro-study-section-21');
  if (ro_study_section_21) {
    gsap.fromTo('#ro-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('ro-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (ro_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#ro-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #ro-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_list_quick_facts = document.getElementById('ro-educationalexchange-list-quick-facts');
  if (ro_educationalexchange_list_quick_facts) {
    gsap.from('#ro-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_list_common_challenges_applicants_face = document.getElementById('ro-educationalexchange-list-common-challenges-applicants-face');
  if (ro_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#ro-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('ro-educationalexchange-list-how-we-solve-these-challenges');
  if (ro_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ro-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_section_residency_overview = document.getElementById('ro-educationalexchange-section-residency-overview');
  if (ro_educationalexchange_section_residency_overview) {
    gsap.fromTo('#ro-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_form_who_is_this_residency_for = document.getElementById('ro-educationalexchange-form-who-is-this-residency-for');
  if (ro_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#ro-educationalexchange-form-who-is-this-residency-for input, #ro-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_list_required_documents = document.getElementById('ro-educationalexchange-list-required-documents');
  if (ro_educationalexchange_list_required_documents) {
    gsap.from('#ro-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_list_application_process = document.getElementById('ro-educationalexchange-list-application-process');
  if (ro_educationalexchange_list_application_process) {
    gsap.from('#ro-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_section_timelines_deadlines = document.getElementById('ro-educationalexchange-section-timelines-deadlines');
  if (ro_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#ro-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_section_fees_costs = document.getElementById('ro-educationalexchange-section-fees-costs');
  if (ro_educationalexchange_section_fees_costs) {
    gsap.fromTo('#ro-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_list_risks_common_mistakes = document.getElementById('ro-educationalexchange-list-risks-common-mistakes');
  if (ro_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#ro-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('ro-educationalexchange-section-diy-vs-professional-assistance');
  if (ro_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_section_rondnia_specific_context = document.getElementById('ro-educationalexchange-section-rondnia-specific-context');
  if (ro_educationalexchange_section_rondnia_specific_context) {
    gsap.fromTo('#ro-educationalexchange-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_section_what_our_clients_say = document.getElementById('ro-educationalexchange-section-what-our-clients-say');
  if (ro_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#ro-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_section_frequently_asked_questions = document.getElementById('ro-educationalexchange-section-frequently-asked-questions');
  if (ro_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ro-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_section_international_support = document.getElementById('ro-educationalexchange-section-international-support');
  if (ro_educationalexchange_section_international_support) {
    gsap.fromTo('#ro-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_list_our_credentials = document.getElementById('ro-educationalexchange-list-our-credentials');
  if (ro_educationalexchange_list_our_credentials) {
    gsap.from('#ro-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_list_related_services = document.getElementById('ro-educationalexchange-list-related-services');
  if (ro_educationalexchange_list_related_services) {
    gsap.from('#ro-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_section_youre_in_good_hands = document.getElementById('ro-educationalexchange-section-youre-in-good-hands');
  if (ro_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ro-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_educationalexchange_section_21 = document.getElementById('ro-educationalexchange-section-21');
  if (ro_educationalexchange_section_21) {
    gsap.fromTo('#ro-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('ro-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (ro_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#ro-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #ro-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_list_quick_facts = document.getElementById('ro-humanitarian-list-quick-facts');
  if (ro_humanitarian_list_quick_facts) {
    gsap.from('#ro-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_list_common_challenges_applicants_face = document.getElementById('ro-humanitarian-list-common-challenges-applicants-face');
  if (ro_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#ro-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_list_how_we_solve_these_challenges = document.getElementById('ro-humanitarian-list-how-we-solve-these-challenges');
  if (ro_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#ro-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_section_residency_overview = document.getElementById('ro-humanitarian-section-residency-overview');
  if (ro_humanitarian_section_residency_overview) {
    gsap.fromTo('#ro-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_form_who_is_this_residency_for = document.getElementById('ro-humanitarian-form-who-is-this-residency-for');
  if (ro_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#ro-humanitarian-form-who-is-this-residency-for input, #ro-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_list_required_documents = document.getElementById('ro-humanitarian-list-required-documents');
  if (ro_humanitarian_list_required_documents) {
    gsap.from('#ro-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_list_application_process = document.getElementById('ro-humanitarian-list-application-process');
  if (ro_humanitarian_list_application_process) {
    gsap.from('#ro-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_section_timelines_deadlines = document.getElementById('ro-humanitarian-section-timelines-deadlines');
  if (ro_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#ro-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_section_fees_costs = document.getElementById('ro-humanitarian-section-fees-costs');
  if (ro_humanitarian_section_fees_costs) {
    gsap.fromTo('#ro-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_list_risks_common_mistakes = document.getElementById('ro-humanitarian-list-risks-common-mistakes');
  if (ro_humanitarian_list_risks_common_mistakes) {
    gsap.from('#ro-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_section_diy_vs_professional_assistance = document.getElementById('ro-humanitarian-section-diy-vs-professional-assistance');
  if (ro_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_section_rondnia_specific_context = document.getElementById('ro-humanitarian-section-rondnia-specific-context');
  if (ro_humanitarian_section_rondnia_specific_context) {
    gsap.fromTo('#ro-humanitarian-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_section_what_our_clients_say = document.getElementById('ro-humanitarian-section-what-our-clients-say');
  if (ro_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#ro-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_section_frequently_asked_questions = document.getElementById('ro-humanitarian-section-frequently-asked-questions');
  if (ro_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#ro-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_section_international_support = document.getElementById('ro-humanitarian-section-international-support');
  if (ro_humanitarian_section_international_support) {
    gsap.fromTo('#ro-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_list_our_credentials = document.getElementById('ro-humanitarian-list-our-credentials');
  if (ro_humanitarian_list_our_credentials) {
    gsap.from('#ro-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_list_related_services = document.getElementById('ro-humanitarian-list-related-services');
  if (ro_humanitarian_list_related_services) {
    gsap.from('#ro-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_section_youre_in_good_hands = document.getElementById('ro-humanitarian-section-youre-in-good-hands');
  if (ro_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#ro-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_humanitarian_section_21 = document.getElementById('ro-humanitarian-section-21');
  if (ro_humanitarian_section_21) {
    gsap.fromTo('#ro-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('ro-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (ro_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#ro-digitalnomad-form-digital-nomad-residency-in-brazil input, #ro-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_list_quick_facts = document.getElementById('ro-digitalnomad-list-quick-facts');
  if (ro_digitalnomad_list_quick_facts) {
    gsap.from('#ro-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_list_common_challenges_applicants_face = document.getElementById('ro-digitalnomad-list-common-challenges-applicants-face');
  if (ro_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#ro-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('ro-digitalnomad-list-how-we-solve-these-challenges');
  if (ro_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#ro-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_section_residency_overview = document.getElementById('ro-digitalnomad-section-residency-overview');
  if (ro_digitalnomad_section_residency_overview) {
    gsap.fromTo('#ro-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_form_who_is_this_residency_for = document.getElementById('ro-digitalnomad-form-who-is-this-residency-for');
  if (ro_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#ro-digitalnomad-form-who-is-this-residency-for input, #ro-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_list_required_documents = document.getElementById('ro-digitalnomad-list-required-documents');
  if (ro_digitalnomad_list_required_documents) {
    gsap.from('#ro-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_list_application_process = document.getElementById('ro-digitalnomad-list-application-process');
  if (ro_digitalnomad_list_application_process) {
    gsap.from('#ro-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_section_timelines_deadlines = document.getElementById('ro-digitalnomad-section-timelines-deadlines');
  if (ro_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#ro-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_section_fees_costs = document.getElementById('ro-digitalnomad-section-fees-costs');
  if (ro_digitalnomad_section_fees_costs) {
    gsap.fromTo('#ro-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_list_risks_common_mistakes = document.getElementById('ro-digitalnomad-list-risks-common-mistakes');
  if (ro_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#ro-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('ro-digitalnomad-section-diy-vs-professional-assistance');
  if (ro_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_section_rondnia_specific_context = document.getElementById('ro-digitalnomad-section-rondnia-specific-context');
  if (ro_digitalnomad_section_rondnia_specific_context) {
    gsap.fromTo('#ro-digitalnomad-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_section_what_our_clients_say = document.getElementById('ro-digitalnomad-section-what-our-clients-say');
  if (ro_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#ro-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_section_frequently_asked_questions = document.getElementById('ro-digitalnomad-section-frequently-asked-questions');
  if (ro_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#ro-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_section_international_support = document.getElementById('ro-digitalnomad-section-international-support');
  if (ro_digitalnomad_section_international_support) {
    gsap.fromTo('#ro-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_list_our_credentials = document.getElementById('ro-digitalnomad-list-our-credentials');
  if (ro_digitalnomad_list_our_credentials) {
    gsap.from('#ro-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_list_related_services = document.getElementById('ro-digitalnomad-list-related-services');
  if (ro_digitalnomad_list_related_services) {
    gsap.from('#ro-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_section_youre_in_good_hands = document.getElementById('ro-digitalnomad-section-youre-in-good-hands');
  if (ro_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#ro-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_digitalnomad_section_21 = document.getElementById('ro-digitalnomad-section-21');
  if (ro_digitalnomad_section_21) {
    gsap.fromTo('#ro-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('ro-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (ro_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#ro-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #ro-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_list_quick_facts = document.getElementById('ro-familyreunion-list-quick-facts');
  if (ro_familyreunion_list_quick_facts) {
    gsap.from('#ro-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_list_common_challenges_applicants_face = document.getElementById('ro-familyreunion-list-common-challenges-applicants-face');
  if (ro_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#ro-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_list_how_we_solve_these_challenges = document.getElementById('ro-familyreunion-list-how-we-solve-these-challenges');
  if (ro_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#ro-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_section_residency_overview = document.getElementById('ro-familyreunion-section-residency-overview');
  if (ro_familyreunion_section_residency_overview) {
    gsap.fromTo('#ro-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_form_who_is_this_residency_for = document.getElementById('ro-familyreunion-form-who-is-this-residency-for');
  if (ro_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#ro-familyreunion-form-who-is-this-residency-for input, #ro-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_list_required_documents = document.getElementById('ro-familyreunion-list-required-documents');
  if (ro_familyreunion_list_required_documents) {
    gsap.from('#ro-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_list_application_process = document.getElementById('ro-familyreunion-list-application-process');
  if (ro_familyreunion_list_application_process) {
    gsap.from('#ro-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_section_timelines_deadlines = document.getElementById('ro-familyreunion-section-timelines-deadlines');
  if (ro_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#ro-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_section_fees_costs = document.getElementById('ro-familyreunion-section-fees-costs');
  if (ro_familyreunion_section_fees_costs) {
    gsap.fromTo('#ro-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_list_risks_common_mistakes = document.getElementById('ro-familyreunion-list-risks-common-mistakes');
  if (ro_familyreunion_list_risks_common_mistakes) {
    gsap.from('#ro-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_section_diy_vs_professional_assistance = document.getElementById('ro-familyreunion-section-diy-vs-professional-assistance');
  if (ro_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_section_rondnia_specific_context = document.getElementById('ro-familyreunion-section-rondnia-specific-context');
  if (ro_familyreunion_section_rondnia_specific_context) {
    gsap.fromTo('#ro-familyreunion-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_section_what_our_clients_say = document.getElementById('ro-familyreunion-section-what-our-clients-say');
  if (ro_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#ro-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_section_frequently_asked_questions = document.getElementById('ro-familyreunion-section-frequently-asked-questions');
  if (ro_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#ro-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_section_international_support = document.getElementById('ro-familyreunion-section-international-support');
  if (ro_familyreunion_section_international_support) {
    gsap.fromTo('#ro-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_list_our_credentials = document.getElementById('ro-familyreunion-list-our-credentials');
  if (ro_familyreunion_list_our_credentials) {
    gsap.from('#ro-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_list_related_services = document.getElementById('ro-familyreunion-list-related-services');
  if (ro_familyreunion_list_related_services) {
    gsap.from('#ro-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_section_youre_in_good_hands = document.getElementById('ro-familyreunion-section-youre-in-good-hands');
  if (ro_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#ro-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_familyreunion_section_21 = document.getElementById('ro-familyreunion-section-21');
  if (ro_familyreunion_section_21) {
    gsap.fromTo('#ro-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('ro-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (ro_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#ro-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #ro-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_list_quick_facts = document.getElementById('ro-mercosul-list-quick-facts');
  if (ro_mercosul_list_quick_facts) {
    gsap.from('#ro-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_list_common_challenges_applicants_face = document.getElementById('ro-mercosul-list-common-challenges-applicants-face');
  if (ro_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#ro-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_list_how_we_solve_these_challenges = document.getElementById('ro-mercosul-list-how-we-solve-these-challenges');
  if (ro_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#ro-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_section_residency_overview = document.getElementById('ro-mercosul-section-residency-overview');
  if (ro_mercosul_section_residency_overview) {
    gsap.fromTo('#ro-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_form_who_is_this_residency_for = document.getElementById('ro-mercosul-form-who-is-this-residency-for');
  if (ro_mercosul_form_who_is_this_residency_for) {
    gsap.from('#ro-mercosul-form-who-is-this-residency-for input, #ro-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_list_required_documents = document.getElementById('ro-mercosul-list-required-documents');
  if (ro_mercosul_list_required_documents) {
    gsap.from('#ro-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_list_application_process = document.getElementById('ro-mercosul-list-application-process');
  if (ro_mercosul_list_application_process) {
    gsap.from('#ro-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_section_timelines_deadlines = document.getElementById('ro-mercosul-section-timelines-deadlines');
  if (ro_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#ro-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_section_fees_costs = document.getElementById('ro-mercosul-section-fees-costs');
  if (ro_mercosul_section_fees_costs) {
    gsap.fromTo('#ro-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_list_risks_common_mistakes = document.getElementById('ro-mercosul-list-risks-common-mistakes');
  if (ro_mercosul_list_risks_common_mistakes) {
    gsap.from('#ro-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_section_diy_vs_professional_assistance = document.getElementById('ro-mercosul-section-diy-vs-professional-assistance');
  if (ro_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_section_rondnia_specific_context = document.getElementById('ro-mercosul-section-rondnia-specific-context');
  if (ro_mercosul_section_rondnia_specific_context) {
    gsap.fromTo('#ro-mercosul-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_section_what_our_clients_say = document.getElementById('ro-mercosul-section-what-our-clients-say');
  if (ro_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#ro-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_section_frequently_asked_questions = document.getElementById('ro-mercosul-section-frequently-asked-questions');
  if (ro_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#ro-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_section_international_support = document.getElementById('ro-mercosul-section-international-support');
  if (ro_mercosul_section_international_support) {
    gsap.fromTo('#ro-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_list_our_credentials = document.getElementById('ro-mercosul-list-our-credentials');
  if (ro_mercosul_list_our_credentials) {
    gsap.from('#ro-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_list_related_services = document.getElementById('ro-mercosul-list-related-services');
  if (ro_mercosul_list_related_services) {
    gsap.from('#ro-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_section_youre_in_good_hands = document.getElementById('ro-mercosul-section-youre-in-good-hands');
  if (ro_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#ro-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_mercosul_section_21 = document.getElementById('ro-mercosul-section-21');
  if (ro_mercosul_section_21) {
    gsap.fromTo('#ro-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('ro-retiree-form-retire-in-brazil-with-retiree-residency');
  if (ro_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#ro-retiree-form-retire-in-brazil-with-retiree-residency input, #ro-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_list_quick_facts = document.getElementById('ro-retiree-list-quick-facts');
  if (ro_retiree_list_quick_facts) {
    gsap.from('#ro-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_list_common_challenges_applicants_face = document.getElementById('ro-retiree-list-common-challenges-applicants-face');
  if (ro_retiree_list_common_challenges_applicants_face) {
    gsap.from('#ro-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_list_how_we_solve_these_challenges = document.getElementById('ro-retiree-list-how-we-solve-these-challenges');
  if (ro_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#ro-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_section_residency_overview = document.getElementById('ro-retiree-section-residency-overview');
  if (ro_retiree_section_residency_overview) {
    gsap.fromTo('#ro-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_form_who_is_this_residency_for = document.getElementById('ro-retiree-form-who-is-this-residency-for');
  if (ro_retiree_form_who_is_this_residency_for) {
    gsap.from('#ro-retiree-form-who-is-this-residency-for input, #ro-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_list_required_documents = document.getElementById('ro-retiree-list-required-documents');
  if (ro_retiree_list_required_documents) {
    gsap.from('#ro-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_list_application_process = document.getElementById('ro-retiree-list-application-process');
  if (ro_retiree_list_application_process) {
    gsap.from('#ro-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_section_timelines_deadlines = document.getElementById('ro-retiree-section-timelines-deadlines');
  if (ro_retiree_section_timelines_deadlines) {
    gsap.fromTo('#ro-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_section_fees_costs = document.getElementById('ro-retiree-section-fees-costs');
  if (ro_retiree_section_fees_costs) {
    gsap.fromTo('#ro-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_list_risks_common_mistakes = document.getElementById('ro-retiree-list-risks-common-mistakes');
  if (ro_retiree_list_risks_common_mistakes) {
    gsap.from('#ro-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_section_diy_vs_professional_assistance = document.getElementById('ro-retiree-section-diy-vs-professional-assistance');
  if (ro_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_section_rondnia_specific_context = document.getElementById('ro-retiree-section-rondnia-specific-context');
  if (ro_retiree_section_rondnia_specific_context) {
    gsap.fromTo('#ro-retiree-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_section_what_our_clients_say = document.getElementById('ro-retiree-section-what-our-clients-say');
  if (ro_retiree_section_what_our_clients_say) {
    gsap.fromTo('#ro-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_section_frequently_asked_questions = document.getElementById('ro-retiree-section-frequently-asked-questions');
  if (ro_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#ro-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_section_international_support = document.getElementById('ro-retiree-section-international-support');
  if (ro_retiree_section_international_support) {
    gsap.fromTo('#ro-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_list_our_credentials = document.getElementById('ro-retiree-list-our-credentials');
  if (ro_retiree_list_our_credentials) {
    gsap.from('#ro-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_list_related_services = document.getElementById('ro-retiree-list-related-services');
  if (ro_retiree_list_related_services) {
    gsap.from('#ro-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_section_youre_in_good_hands = document.getElementById('ro-retiree-section-youre-in-good-hands');
  if (ro_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#ro-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_retiree_section_21 = document.getElementById('ro-retiree-section-21');
  if (ro_retiree_section_21) {
    gsap.fromTo('#ro-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('ro-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (ro_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#ro-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #ro-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_list_quick_facts = document.getElementById('ro-volunteer-list-quick-facts');
  if (ro_volunteer_list_quick_facts) {
    gsap.from('#ro-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_list_common_challenges_applicants_face = document.getElementById('ro-volunteer-list-common-challenges-applicants-face');
  if (ro_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#ro-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_list_how_we_solve_these_challenges = document.getElementById('ro-volunteer-list-how-we-solve-these-challenges');
  if (ro_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#ro-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_section_residency_overview = document.getElementById('ro-volunteer-section-residency-overview');
  if (ro_volunteer_section_residency_overview) {
    gsap.fromTo('#ro-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_form_who_is_this_residency_for = document.getElementById('ro-volunteer-form-who-is-this-residency-for');
  if (ro_volunteer_form_who_is_this_residency_for) {
    gsap.from('#ro-volunteer-form-who-is-this-residency-for input, #ro-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_list_required_documents = document.getElementById('ro-volunteer-list-required-documents');
  if (ro_volunteer_list_required_documents) {
    gsap.from('#ro-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_list_application_process = document.getElementById('ro-volunteer-list-application-process');
  if (ro_volunteer_list_application_process) {
    gsap.from('#ro-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_section_timelines_deadlines = document.getElementById('ro-volunteer-section-timelines-deadlines');
  if (ro_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#ro-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_section_fees_costs = document.getElementById('ro-volunteer-section-fees-costs');
  if (ro_volunteer_section_fees_costs) {
    gsap.fromTo('#ro-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_list_risks_common_mistakes = document.getElementById('ro-volunteer-list-risks-common-mistakes');
  if (ro_volunteer_list_risks_common_mistakes) {
    gsap.from('#ro-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_section_diy_vs_professional_assistance = document.getElementById('ro-volunteer-section-diy-vs-professional-assistance');
  if (ro_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_section_rondnia_specific_context = document.getElementById('ro-volunteer-section-rondnia-specific-context');
  if (ro_volunteer_section_rondnia_specific_context) {
    gsap.fromTo('#ro-volunteer-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_section_what_our_clients_say = document.getElementById('ro-volunteer-section-what-our-clients-say');
  if (ro_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#ro-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_section_frequently_asked_questions = document.getElementById('ro-volunteer-section-frequently-asked-questions');
  if (ro_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#ro-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_section_international_support = document.getElementById('ro-volunteer-section-international-support');
  if (ro_volunteer_section_international_support) {
    gsap.fromTo('#ro-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_list_our_credentials = document.getElementById('ro-volunteer-list-our-credentials');
  if (ro_volunteer_list_our_credentials) {
    gsap.from('#ro-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_list_related_services = document.getElementById('ro-volunteer-list-related-services');
  if (ro_volunteer_list_related_services) {
    gsap.from('#ro-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_section_youre_in_good_hands = document.getElementById('ro-volunteer-section-youre-in-good-hands');
  if (ro_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#ro-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_volunteer_section_21 = document.getElementById('ro-volunteer-section-21');
  if (ro_volunteer_section_21) {
    gsap.fromTo('#ro-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('ro-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (ro_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#ro-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #ro-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_list_quick_facts = document.getElementById('ro-skilledworker-list-quick-facts');
  if (ro_skilledworker_list_quick_facts) {
    gsap.from('#ro-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_list_common_challenges_applicants_face = document.getElementById('ro-skilledworker-list-common-challenges-applicants-face');
  if (ro_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#ro-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_list_how_we_solve_these_challenges = document.getElementById('ro-skilledworker-list-how-we-solve-these-challenges');
  if (ro_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#ro-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_section_residency_overview = document.getElementById('ro-skilledworker-section-residency-overview');
  if (ro_skilledworker_section_residency_overview) {
    gsap.fromTo('#ro-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_form_who_is_this_residency_for = document.getElementById('ro-skilledworker-form-who-is-this-residency-for');
  if (ro_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#ro-skilledworker-form-who-is-this-residency-for input, #ro-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_list_required_documents = document.getElementById('ro-skilledworker-list-required-documents');
  if (ro_skilledworker_list_required_documents) {
    gsap.from('#ro-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_list_application_process = document.getElementById('ro-skilledworker-list-application-process');
  if (ro_skilledworker_list_application_process) {
    gsap.from('#ro-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_section_timelines_deadlines = document.getElementById('ro-skilledworker-section-timelines-deadlines');
  if (ro_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#ro-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_section_fees_costs = document.getElementById('ro-skilledworker-section-fees-costs');
  if (ro_skilledworker_section_fees_costs) {
    gsap.fromTo('#ro-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_list_risks_common_mistakes = document.getElementById('ro-skilledworker-list-risks-common-mistakes');
  if (ro_skilledworker_list_risks_common_mistakes) {
    gsap.from('#ro-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_section_diy_vs_professional_assistance = document.getElementById('ro-skilledworker-section-diy-vs-professional-assistance');
  if (ro_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_section_rondnia_specific_context = document.getElementById('ro-skilledworker-section-rondnia-specific-context');
  if (ro_skilledworker_section_rondnia_specific_context) {
    gsap.fromTo('#ro-skilledworker-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_section_what_our_clients_say = document.getElementById('ro-skilledworker-section-what-our-clients-say');
  if (ro_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#ro-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_section_frequently_asked_questions = document.getElementById('ro-skilledworker-section-frequently-asked-questions');
  if (ro_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#ro-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_section_international_support = document.getElementById('ro-skilledworker-section-international-support');
  if (ro_skilledworker_section_international_support) {
    gsap.fromTo('#ro-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_list_our_credentials = document.getElementById('ro-skilledworker-list-our-credentials');
  if (ro_skilledworker_list_our_credentials) {
    gsap.from('#ro-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_list_related_services = document.getElementById('ro-skilledworker-list-related-services');
  if (ro_skilledworker_list_related_services) {
    gsap.from('#ro-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_section_youre_in_good_hands = document.getElementById('ro-skilledworker-section-youre-in-good-hands');
  if (ro_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#ro-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_skilledworker_section_21 = document.getElementById('ro-skilledworker-section-21');
  if (ro_skilledworker_section_21) {
    gsap.fromTo('#ro-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('ro-religious-form-religious-residency-in-brazil-for-missions');
  if (ro_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#ro-religious-form-religious-residency-in-brazil-for-missions input, #ro-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_list_quick_facts = document.getElementById('ro-religious-list-quick-facts');
  if (ro_religious_list_quick_facts) {
    gsap.from('#ro-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_list_common_challenges_applicants_face = document.getElementById('ro-religious-list-common-challenges-applicants-face');
  if (ro_religious_list_common_challenges_applicants_face) {
    gsap.from('#ro-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_list_how_we_solve_these_challenges = document.getElementById('ro-religious-list-how-we-solve-these-challenges');
  if (ro_religious_list_how_we_solve_these_challenges) {
    gsap.from('#ro-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_section_residency_overview = document.getElementById('ro-religious-section-residency-overview');
  if (ro_religious_section_residency_overview) {
    gsap.fromTo('#ro-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_form_who_is_this_residency_for = document.getElementById('ro-religious-form-who-is-this-residency-for');
  if (ro_religious_form_who_is_this_residency_for) {
    gsap.from('#ro-religious-form-who-is-this-residency-for input, #ro-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_list_required_documents = document.getElementById('ro-religious-list-required-documents');
  if (ro_religious_list_required_documents) {
    gsap.from('#ro-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_list_application_process = document.getElementById('ro-religious-list-application-process');
  if (ro_religious_list_application_process) {
    gsap.from('#ro-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_section_timelines_deadlines = document.getElementById('ro-religious-section-timelines-deadlines');
  if (ro_religious_section_timelines_deadlines) {
    gsap.fromTo('#ro-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_section_fees_costs = document.getElementById('ro-religious-section-fees-costs');
  if (ro_religious_section_fees_costs) {
    gsap.fromTo('#ro-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_list_risks_common_mistakes = document.getElementById('ro-religious-list-risks-common-mistakes');
  if (ro_religious_list_risks_common_mistakes) {
    gsap.from('#ro-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_section_diy_vs_professional_assistance = document.getElementById('ro-religious-section-diy-vs-professional-assistance');
  if (ro_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_section_rondnia_specific_context = document.getElementById('ro-religious-section-rondnia-specific-context');
  if (ro_religious_section_rondnia_specific_context) {
    gsap.fromTo('#ro-religious-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_section_what_our_clients_say = document.getElementById('ro-religious-section-what-our-clients-say');
  if (ro_religious_section_what_our_clients_say) {
    gsap.fromTo('#ro-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_section_frequently_asked_questions = document.getElementById('ro-religious-section-frequently-asked-questions');
  if (ro_religious_section_frequently_asked_questions) {
    gsap.fromTo('#ro-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_section_international_support = document.getElementById('ro-religious-section-international-support');
  if (ro_religious_section_international_support) {
    gsap.fromTo('#ro-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_list_our_credentials = document.getElementById('ro-religious-list-our-credentials');
  if (ro_religious_list_our_credentials) {
    gsap.from('#ro-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_list_related_services = document.getElementById('ro-religious-list-related-services');
  if (ro_religious_list_related_services) {
    gsap.from('#ro-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_section_youre_in_good_hands = document.getElementById('ro-religious-section-youre-in-good-hands');
  if (ro_religious_section_youre_in_good_hands) {
    gsap.fromTo('#ro-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_religious_section_21 = document.getElementById('ro-religious-section-21');
  if (ro_religious_section_21) {
    gsap.fromTo('#ro-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('ro-investor-form-gain-residency-in-brazil-through-investment');
  if (ro_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#ro-investor-form-gain-residency-in-brazil-through-investment input, #ro-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_list_quick_facts = document.getElementById('ro-investor-list-quick-facts');
  if (ro_investor_list_quick_facts) {
    gsap.from('#ro-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_list_common_challenges_applicants_face = document.getElementById('ro-investor-list-common-challenges-applicants-face');
  if (ro_investor_list_common_challenges_applicants_face) {
    gsap.from('#ro-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_list_how_we_solve_these_challenges = document.getElementById('ro-investor-list-how-we-solve-these-challenges');
  if (ro_investor_list_how_we_solve_these_challenges) {
    gsap.from('#ro-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_section_residency_overview = document.getElementById('ro-investor-section-residency-overview');
  if (ro_investor_section_residency_overview) {
    gsap.fromTo('#ro-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_form_who_is_this_residency_for = document.getElementById('ro-investor-form-who-is-this-residency-for');
  if (ro_investor_form_who_is_this_residency_for) {
    gsap.from('#ro-investor-form-who-is-this-residency-for input, #ro-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_list_required_documents = document.getElementById('ro-investor-list-required-documents');
  if (ro_investor_list_required_documents) {
    gsap.from('#ro-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_list_application_process = document.getElementById('ro-investor-list-application-process');
  if (ro_investor_list_application_process) {
    gsap.from('#ro-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_section_timelines_deadlines = document.getElementById('ro-investor-section-timelines-deadlines');
  if (ro_investor_section_timelines_deadlines) {
    gsap.fromTo('#ro-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_section_fees_costs = document.getElementById('ro-investor-section-fees-costs');
  if (ro_investor_section_fees_costs) {
    gsap.fromTo('#ro-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_list_risks_common_mistakes = document.getElementById('ro-investor-list-risks-common-mistakes');
  if (ro_investor_list_risks_common_mistakes) {
    gsap.from('#ro-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_section_diy_vs_professional_assistance = document.getElementById('ro-investor-section-diy-vs-professional-assistance');
  if (ro_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_section_rondnia_specific_context = document.getElementById('ro-investor-section-rondnia-specific-context');
  if (ro_investor_section_rondnia_specific_context) {
    gsap.fromTo('#ro-investor-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_section_what_our_clients_say = document.getElementById('ro-investor-section-what-our-clients-say');
  if (ro_investor_section_what_our_clients_say) {
    gsap.fromTo('#ro-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_section_frequently_asked_questions = document.getElementById('ro-investor-section-frequently-asked-questions');
  if (ro_investor_section_frequently_asked_questions) {
    gsap.fromTo('#ro-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_section_international_support = document.getElementById('ro-investor-section-international-support');
  if (ro_investor_section_international_support) {
    gsap.fromTo('#ro-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_list_our_credentials = document.getElementById('ro-investor-list-our-credentials');
  if (ro_investor_list_our_credentials) {
    gsap.from('#ro-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_list_related_services = document.getElementById('ro-investor-list-related-services');
  if (ro_investor_list_related_services) {
    gsap.from('#ro-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_section_youre_in_good_hands = document.getElementById('ro-investor-section-youre-in-good-hands');
  if (ro_investor_section_youre_in_good_hands) {
    gsap.fromTo('#ro-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_investor_section_21 = document.getElementById('ro-investor-section-21');
  if (ro_investor_section_21) {
    gsap.fromTo('#ro-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('ro-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (ro_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#ro-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #ro-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_list_quick_facts = document.getElementById('ro-healthtreatment-list-quick-facts');
  if (ro_healthtreatment_list_quick_facts) {
    gsap.from('#ro-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_list_common_challenges_applicants_face = document.getElementById('ro-healthtreatment-list-common-challenges-applicants-face');
  if (ro_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#ro-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('ro-healthtreatment-list-how-we-solve-these-challenges');
  if (ro_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#ro-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_section_residency_overview = document.getElementById('ro-healthtreatment-section-residency-overview');
  if (ro_healthtreatment_section_residency_overview) {
    gsap.fromTo('#ro-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_form_who_is_this_residency_for = document.getElementById('ro-healthtreatment-form-who-is-this-residency-for');
  if (ro_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#ro-healthtreatment-form-who-is-this-residency-for input, #ro-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_list_required_documents = document.getElementById('ro-healthtreatment-list-required-documents');
  if (ro_healthtreatment_list_required_documents) {
    gsap.from('#ro-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_list_application_process = document.getElementById('ro-healthtreatment-list-application-process');
  if (ro_healthtreatment_list_application_process) {
    gsap.from('#ro-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_section_timelines_deadlines = document.getElementById('ro-healthtreatment-section-timelines-deadlines');
  if (ro_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#ro-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_section_fees_costs = document.getElementById('ro-healthtreatment-section-fees-costs');
  if (ro_healthtreatment_section_fees_costs) {
    gsap.fromTo('#ro-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_list_risks_common_mistakes = document.getElementById('ro-healthtreatment-list-risks-common-mistakes');
  if (ro_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#ro-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('ro-healthtreatment-section-diy-vs-professional-assistance');
  if (ro_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_section_rondnia_specific_context = document.getElementById('ro-healthtreatment-section-rondnia-specific-context');
  if (ro_healthtreatment_section_rondnia_specific_context) {
    gsap.fromTo('#ro-healthtreatment-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_section_what_our_clients_say = document.getElementById('ro-healthtreatment-section-what-our-clients-say');
  if (ro_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#ro-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_section_frequently_asked_questions = document.getElementById('ro-healthtreatment-section-frequently-asked-questions');
  if (ro_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#ro-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_section_international_support = document.getElementById('ro-healthtreatment-section-international-support');
  if (ro_healthtreatment_section_international_support) {
    gsap.fromTo('#ro-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_list_our_credentials = document.getElementById('ro-healthtreatment-list-our-credentials');
  if (ro_healthtreatment_list_our_credentials) {
    gsap.from('#ro-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_list_related_services = document.getElementById('ro-healthtreatment-list-related-services');
  if (ro_healthtreatment_list_related_services) {
    gsap.from('#ro-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_section_youre_in_good_hands = document.getElementById('ro-healthtreatment-section-youre-in-good-hands');
  if (ro_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#ro-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_healthtreatment_section_21 = document.getElementById('ro-healthtreatment-section-21');
  if (ro_healthtreatment_section_21) {
    gsap.fromTo('#ro-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('ro-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (ro_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#ro-cplp-form-residency-for-cplp-citizens-in-brazil input, #ro-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_list_quick_facts = document.getElementById('ro-cplp-list-quick-facts');
  if (ro_cplp_list_quick_facts) {
    gsap.from('#ro-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_list_common_challenges_applicants_face = document.getElementById('ro-cplp-list-common-challenges-applicants-face');
  if (ro_cplp_list_common_challenges_applicants_face) {
    gsap.from('#ro-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_list_how_we_solve_these_challenges = document.getElementById('ro-cplp-list-how-we-solve-these-challenges');
  if (ro_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#ro-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_section_residency_overview = document.getElementById('ro-cplp-section-residency-overview');
  if (ro_cplp_section_residency_overview) {
    gsap.fromTo('#ro-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_form_who_is_this_residency_for = document.getElementById('ro-cplp-form-who-is-this-residency-for');
  if (ro_cplp_form_who_is_this_residency_for) {
    gsap.from('#ro-cplp-form-who-is-this-residency-for input, #ro-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_list_required_documents = document.getElementById('ro-cplp-list-required-documents');
  if (ro_cplp_list_required_documents) {
    gsap.from('#ro-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_list_application_process = document.getElementById('ro-cplp-list-application-process');
  if (ro_cplp_list_application_process) {
    gsap.from('#ro-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_section_timelines_deadlines = document.getElementById('ro-cplp-section-timelines-deadlines');
  if (ro_cplp_section_timelines_deadlines) {
    gsap.fromTo('#ro-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_section_fees_costs = document.getElementById('ro-cplp-section-fees-costs');
  if (ro_cplp_section_fees_costs) {
    gsap.fromTo('#ro-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_list_risks_common_mistakes = document.getElementById('ro-cplp-list-risks-common-mistakes');
  if (ro_cplp_list_risks_common_mistakes) {
    gsap.from('#ro-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_section_diy_vs_professional_assistance = document.getElementById('ro-cplp-section-diy-vs-professional-assistance');
  if (ro_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_section_rondnia_specific_context = document.getElementById('ro-cplp-section-rondnia-specific-context');
  if (ro_cplp_section_rondnia_specific_context) {
    gsap.fromTo('#ro-cplp-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_section_what_our_clients_say = document.getElementById('ro-cplp-section-what-our-clients-say');
  if (ro_cplp_section_what_our_clients_say) {
    gsap.fromTo('#ro-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_section_frequently_asked_questions = document.getElementById('ro-cplp-section-frequently-asked-questions');
  if (ro_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#ro-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_section_international_support = document.getElementById('ro-cplp-section-international-support');
  if (ro_cplp_section_international_support) {
    gsap.fromTo('#ro-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_list_our_credentials = document.getElementById('ro-cplp-list-our-credentials');
  if (ro_cplp_list_our_credentials) {
    gsap.from('#ro-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_list_related_services = document.getElementById('ro-cplp-list-related-services');
  if (ro_cplp_list_related_services) {
    gsap.from('#ro-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_section_youre_in_good_hands = document.getElementById('ro-cplp-section-youre-in-good-hands');
  if (ro_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#ro-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_cplp_section_21 = document.getElementById('ro-cplp-section-21');
  if (ro_cplp_section_21) {
    gsap.fromTo('#ro-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('ro-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (ro_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#ro-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #ro-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_list_quick_facts = document.getElementById('ro-youthexchange-list-quick-facts');
  if (ro_youthexchange_list_quick_facts) {
    gsap.from('#ro-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_list_common_challenges_applicants_face = document.getElementById('ro-youthexchange-list-common-challenges-applicants-face');
  if (ro_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#ro-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_list_how_we_solve_these_challenges = document.getElementById('ro-youthexchange-list-how-we-solve-these-challenges');
  if (ro_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ro-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_section_residency_overview = document.getElementById('ro-youthexchange-section-residency-overview');
  if (ro_youthexchange_section_residency_overview) {
    gsap.fromTo('#ro-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_form_who_is_this_residency_for = document.getElementById('ro-youthexchange-form-who-is-this-residency-for');
  if (ro_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#ro-youthexchange-form-who-is-this-residency-for input, #ro-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_list_required_documents = document.getElementById('ro-youthexchange-list-required-documents');
  if (ro_youthexchange_list_required_documents) {
    gsap.from('#ro-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_list_application_process = document.getElementById('ro-youthexchange-list-application-process');
  if (ro_youthexchange_list_application_process) {
    gsap.from('#ro-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_section_timelines_deadlines = document.getElementById('ro-youthexchange-section-timelines-deadlines');
  if (ro_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#ro-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_section_fees_costs = document.getElementById('ro-youthexchange-section-fees-costs');
  if (ro_youthexchange_section_fees_costs) {
    gsap.fromTo('#ro-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_list_risks_common_mistakes = document.getElementById('ro-youthexchange-list-risks-common-mistakes');
  if (ro_youthexchange_list_risks_common_mistakes) {
    gsap.from('#ro-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_section_diy_vs_professional_assistance = document.getElementById('ro-youthexchange-section-diy-vs-professional-assistance');
  if (ro_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_section_rondnia_specific_context = document.getElementById('ro-youthexchange-section-rondnia-specific-context');
  if (ro_youthexchange_section_rondnia_specific_context) {
    gsap.fromTo('#ro-youthexchange-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_section_what_our_clients_say = document.getElementById('ro-youthexchange-section-what-our-clients-say');
  if (ro_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#ro-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_section_frequently_asked_questions = document.getElementById('ro-youthexchange-section-frequently-asked-questions');
  if (ro_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ro-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_section_international_support = document.getElementById('ro-youthexchange-section-international-support');
  if (ro_youthexchange_section_international_support) {
    gsap.fromTo('#ro-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_list_our_credentials = document.getElementById('ro-youthexchange-list-our-credentials');
  if (ro_youthexchange_list_our_credentials) {
    gsap.from('#ro-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_list_related_services = document.getElementById('ro-youthexchange-list-related-services');
  if (ro_youthexchange_list_related_services) {
    gsap.from('#ro-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_section_youre_in_good_hands = document.getElementById('ro-youthexchange-section-youre-in-good-hands');
  if (ro_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ro-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_youthexchange_section_21 = document.getElementById('ro-youthexchange-section-21');
  if (ro_youthexchange_section_21) {
    gsap.fromTo('#ro-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('ro-work-form-work-and-reside-in-brazil-with-work-residency');
  if (ro_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#ro-work-form-work-and-reside-in-brazil-with-work-residency input, #ro-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_list_quick_facts = document.getElementById('ro-work-list-quick-facts');
  if (ro_work_list_quick_facts) {
    gsap.from('#ro-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_list_common_challenges_applicants_face = document.getElementById('ro-work-list-common-challenges-applicants-face');
  if (ro_work_list_common_challenges_applicants_face) {
    gsap.from('#ro-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_list_how_we_solve_these_challenges = document.getElementById('ro-work-list-how-we-solve-these-challenges');
  if (ro_work_list_how_we_solve_these_challenges) {
    gsap.from('#ro-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_section_residency_overview = document.getElementById('ro-work-section-residency-overview');
  if (ro_work_section_residency_overview) {
    gsap.fromTo('#ro-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_form_who_is_this_residency_for = document.getElementById('ro-work-form-who-is-this-residency-for');
  if (ro_work_form_who_is_this_residency_for) {
    gsap.from('#ro-work-form-who-is-this-residency-for input, #ro-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_list_required_documents = document.getElementById('ro-work-list-required-documents');
  if (ro_work_list_required_documents) {
    gsap.from('#ro-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_list_application_process = document.getElementById('ro-work-list-application-process');
  if (ro_work_list_application_process) {
    gsap.from('#ro-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_section_timelines_deadlines = document.getElementById('ro-work-section-timelines-deadlines');
  if (ro_work_section_timelines_deadlines) {
    gsap.fromTo('#ro-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_section_fees_costs = document.getElementById('ro-work-section-fees-costs');
  if (ro_work_section_fees_costs) {
    gsap.fromTo('#ro-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_list_risks_common_mistakes = document.getElementById('ro-work-list-risks-common-mistakes');
  if (ro_work_list_risks_common_mistakes) {
    gsap.from('#ro-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_section_diy_vs_professional_assistance = document.getElementById('ro-work-section-diy-vs-professional-assistance');
  if (ro_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_section_rondnia_specific_context = document.getElementById('ro-work-section-rondnia-specific-context');
  if (ro_work_section_rondnia_specific_context) {
    gsap.fromTo('#ro-work-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_section_what_our_clients_say = document.getElementById('ro-work-section-what-our-clients-say');
  if (ro_work_section_what_our_clients_say) {
    gsap.fromTo('#ro-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_section_frequently_asked_questions = document.getElementById('ro-work-section-frequently-asked-questions');
  if (ro_work_section_frequently_asked_questions) {
    gsap.fromTo('#ro-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_section_international_support = document.getElementById('ro-work-section-international-support');
  if (ro_work_section_international_support) {
    gsap.fromTo('#ro-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_list_our_credentials = document.getElementById('ro-work-list-our-credentials');
  if (ro_work_list_our_credentials) {
    gsap.from('#ro-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_list_related_services = document.getElementById('ro-work-list-related-services');
  if (ro_work_list_related_services) {
    gsap.from('#ro-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_section_youre_in_good_hands = document.getElementById('ro-work-section-youre-in-good-hands');
  if (ro_work_section_youre_in_good_hands) {
    gsap.fromTo('#ro-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_work_section_21 = document.getElementById('ro-work-section-21');
  if (ro_work_section_21) {
    gsap.fromTo('#ro-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('ro-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (ro_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#ro-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #ro-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_list_quick_facts = document.getElementById('ro-startup-list-quick-facts');
  if (ro_startup_list_quick_facts) {
    gsap.from('#ro-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_list_common_challenges_applicants_face = document.getElementById('ro-startup-list-common-challenges-applicants-face');
  if (ro_startup_list_common_challenges_applicants_face) {
    gsap.from('#ro-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_list_how_we_solve_these_challenges = document.getElementById('ro-startup-list-how-we-solve-these-challenges');
  if (ro_startup_list_how_we_solve_these_challenges) {
    gsap.from('#ro-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_section_visa_overview = document.getElementById('ro-startup-section-visa-overview');
  if (ro_startup_section_visa_overview) {
    gsap.fromTo('#ro-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_form_who_is_this_visa_for = document.getElementById('ro-startup-form-who-is-this-visa-for');
  if (ro_startup_form_who_is_this_visa_for) {
    gsap.from('#ro-startup-form-who-is-this-visa-for input, #ro-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_list_required_documents = document.getElementById('ro-startup-list-required-documents');
  if (ro_startup_list_required_documents) {
    gsap.from('#ro-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_list_application_process = document.getElementById('ro-startup-list-application-process');
  if (ro_startup_list_application_process) {
    gsap.from('#ro-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_section_timelines_deadlines = document.getElementById('ro-startup-section-timelines-deadlines');
  if (ro_startup_section_timelines_deadlines) {
    gsap.fromTo('#ro-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_section_fees_costs = document.getElementById('ro-startup-section-fees-costs');
  if (ro_startup_section_fees_costs) {
    gsap.fromTo('#ro-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_list_risks_common_mistakes = document.getElementById('ro-startup-list-risks-common-mistakes');
  if (ro_startup_list_risks_common_mistakes) {
    gsap.from('#ro-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_section_diy_vs_professional_assistance = document.getElementById('ro-startup-section-diy-vs-professional-assistance');
  if (ro_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_section_rondnia_specific_context = document.getElementById('ro-startup-section-rondnia-specific-context');
  if (ro_startup_section_rondnia_specific_context) {
    gsap.fromTo('#ro-startup-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_section_what_our_clients_say = document.getElementById('ro-startup-section-what-our-clients-say');
  if (ro_startup_section_what_our_clients_say) {
    gsap.fromTo('#ro-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_section_frequently_asked_questions = document.getElementById('ro-startup-section-frequently-asked-questions');
  if (ro_startup_section_frequently_asked_questions) {
    gsap.fromTo('#ro-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_section_international_support = document.getElementById('ro-startup-section-international-support');
  if (ro_startup_section_international_support) {
    gsap.fromTo('#ro-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_list_our_credentials = document.getElementById('ro-startup-list-our-credentials');
  if (ro_startup_list_our_credentials) {
    gsap.from('#ro-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_list_related_services = document.getElementById('ro-startup-list-related-services');
  if (ro_startup_list_related_services) {
    gsap.from('#ro-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_section_youre_in_good_hands = document.getElementById('ro-startup-section-youre-in-good-hands');
  if (ro_startup_section_youre_in_good_hands) {
    gsap.fromTo('#ro-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_startup_section_21 = document.getElementById('ro-startup-section-21');
  if (ro_startup_section_21) {
    gsap.fromTo('#ro-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('ro-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (ro_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#ro-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #ro-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_list_quick_facts = document.getElementById('ro-family-list-quick-facts');
  if (ro_family_list_quick_facts) {
    gsap.from('#ro-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_list_common_challenges_applicants_face = document.getElementById('ro-family-list-common-challenges-applicants-face');
  if (ro_family_list_common_challenges_applicants_face) {
    gsap.from('#ro-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_list_how_we_solve_these_challenges = document.getElementById('ro-family-list-how-we-solve-these-challenges');
  if (ro_family_list_how_we_solve_these_challenges) {
    gsap.from('#ro-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_section_visa_overview = document.getElementById('ro-family-section-visa-overview');
  if (ro_family_section_visa_overview) {
    gsap.fromTo('#ro-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_form_who_is_this_visa_for = document.getElementById('ro-family-form-who-is-this-visa-for');
  if (ro_family_form_who_is_this_visa_for) {
    gsap.from('#ro-family-form-who-is-this-visa-for input, #ro-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_list_required_documents = document.getElementById('ro-family-list-required-documents');
  if (ro_family_list_required_documents) {
    gsap.from('#ro-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_list_application_process = document.getElementById('ro-family-list-application-process');
  if (ro_family_list_application_process) {
    gsap.from('#ro-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_section_timelines_deadlines = document.getElementById('ro-family-section-timelines-deadlines');
  if (ro_family_section_timelines_deadlines) {
    gsap.fromTo('#ro-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_section_fees_costs = document.getElementById('ro-family-section-fees-costs');
  if (ro_family_section_fees_costs) {
    gsap.fromTo('#ro-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_list_risks_common_mistakes = document.getElementById('ro-family-list-risks-common-mistakes');
  if (ro_family_list_risks_common_mistakes) {
    gsap.from('#ro-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_section_diy_vs_professional_assistance = document.getElementById('ro-family-section-diy-vs-professional-assistance');
  if (ro_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_section_rondnia_specific_context = document.getElementById('ro-family-section-rondnia-specific-context');
  if (ro_family_section_rondnia_specific_context) {
    gsap.fromTo('#ro-family-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_section_what_our_clients_say = document.getElementById('ro-family-section-what-our-clients-say');
  if (ro_family_section_what_our_clients_say) {
    gsap.fromTo('#ro-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_section_frequently_asked_questions = document.getElementById('ro-family-section-frequently-asked-questions');
  if (ro_family_section_frequently_asked_questions) {
    gsap.fromTo('#ro-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_section_international_support = document.getElementById('ro-family-section-international-support');
  if (ro_family_section_international_support) {
    gsap.fromTo('#ro-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_list_our_credentials = document.getElementById('ro-family-list-our-credentials');
  if (ro_family_list_our_credentials) {
    gsap.from('#ro-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_list_related_services = document.getElementById('ro-family-list-related-services');
  if (ro_family_list_related_services) {
    gsap.from('#ro-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_section_youre_in_good_hands = document.getElementById('ro-family-section-youre-in-good-hands');
  if (ro_family_section_youre_in_good_hands) {
    gsap.fromTo('#ro-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_family_section_21 = document.getElementById('ro-family-section-21');
  if (ro_family_section_21) {
    gsap.fromTo('#ro-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('ro-sports-form-compete-in-brazil-with-the-sports-visa');
  if (ro_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#ro-sports-form-compete-in-brazil-with-the-sports-visa input, #ro-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_list_quick_facts = document.getElementById('ro-sports-list-quick-facts');
  if (ro_sports_list_quick_facts) {
    gsap.from('#ro-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_list_common_challenges_applicants_face = document.getElementById('ro-sports-list-common-challenges-applicants-face');
  if (ro_sports_list_common_challenges_applicants_face) {
    gsap.from('#ro-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_list_how_we_solve_these_challenges = document.getElementById('ro-sports-list-how-we-solve-these-challenges');
  if (ro_sports_list_how_we_solve_these_challenges) {
    gsap.from('#ro-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_section_visa_overview = document.getElementById('ro-sports-section-visa-overview');
  if (ro_sports_section_visa_overview) {
    gsap.fromTo('#ro-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_form_who_is_this_visa_for = document.getElementById('ro-sports-form-who-is-this-visa-for');
  if (ro_sports_form_who_is_this_visa_for) {
    gsap.from('#ro-sports-form-who-is-this-visa-for input, #ro-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_list_required_documents = document.getElementById('ro-sports-list-required-documents');
  if (ro_sports_list_required_documents) {
    gsap.from('#ro-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_list_application_process = document.getElementById('ro-sports-list-application-process');
  if (ro_sports_list_application_process) {
    gsap.from('#ro-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_section_timelines_deadlines = document.getElementById('ro-sports-section-timelines-deadlines');
  if (ro_sports_section_timelines_deadlines) {
    gsap.fromTo('#ro-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_section_fees_costs = document.getElementById('ro-sports-section-fees-costs');
  if (ro_sports_section_fees_costs) {
    gsap.fromTo('#ro-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_list_risks_common_mistakes = document.getElementById('ro-sports-list-risks-common-mistakes');
  if (ro_sports_list_risks_common_mistakes) {
    gsap.from('#ro-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_section_diy_vs_professional_assistance = document.getElementById('ro-sports-section-diy-vs-professional-assistance');
  if (ro_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_section_rondnia_specific_context = document.getElementById('ro-sports-section-rondnia-specific-context');
  if (ro_sports_section_rondnia_specific_context) {
    gsap.fromTo('#ro-sports-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_section_what_our_clients_say = document.getElementById('ro-sports-section-what-our-clients-say');
  if (ro_sports_section_what_our_clients_say) {
    gsap.fromTo('#ro-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_section_frequently_asked_questions = document.getElementById('ro-sports-section-frequently-asked-questions');
  if (ro_sports_section_frequently_asked_questions) {
    gsap.fromTo('#ro-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_section_international_support = document.getElementById('ro-sports-section-international-support');
  if (ro_sports_section_international_support) {
    gsap.fromTo('#ro-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_list_our_credentials = document.getElementById('ro-sports-list-our-credentials');
  if (ro_sports_list_our_credentials) {
    gsap.from('#ro-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_list_related_services = document.getElementById('ro-sports-list-related-services');
  if (ro_sports_list_related_services) {
    gsap.from('#ro-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_section_youre_in_good_hands = document.getElementById('ro-sports-section-youre-in-good-hands');
  if (ro_sports_section_youre_in_good_hands) {
    gsap.fromTo('#ro-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_sports_section_21 = document.getElementById('ro-sports-section-21');
  if (ro_sports_section_21) {
    gsap.fromTo('#ro-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('ro-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (ro_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#ro-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #ro-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_list_quick_facts = document.getElementById('ro-medical-list-quick-facts');
  if (ro_medical_list_quick_facts) {
    gsap.from('#ro-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_list_common_challenges_applicants_face = document.getElementById('ro-medical-list-common-challenges-applicants-face');
  if (ro_medical_list_common_challenges_applicants_face) {
    gsap.from('#ro-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_list_how_we_solve_these_challenges = document.getElementById('ro-medical-list-how-we-solve-these-challenges');
  if (ro_medical_list_how_we_solve_these_challenges) {
    gsap.from('#ro-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_section_visa_overview = document.getElementById('ro-medical-section-visa-overview');
  if (ro_medical_section_visa_overview) {
    gsap.fromTo('#ro-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_form_who_is_this_visa_for = document.getElementById('ro-medical-form-who-is-this-visa-for');
  if (ro_medical_form_who_is_this_visa_for) {
    gsap.from('#ro-medical-form-who-is-this-visa-for input, #ro-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_list_required_documents = document.getElementById('ro-medical-list-required-documents');
  if (ro_medical_list_required_documents) {
    gsap.from('#ro-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_list_application_process = document.getElementById('ro-medical-list-application-process');
  if (ro_medical_list_application_process) {
    gsap.from('#ro-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_section_timelines_deadlines = document.getElementById('ro-medical-section-timelines-deadlines');
  if (ro_medical_section_timelines_deadlines) {
    gsap.fromTo('#ro-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_section_fees_costs = document.getElementById('ro-medical-section-fees-costs');
  if (ro_medical_section_fees_costs) {
    gsap.fromTo('#ro-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_list_risks_common_mistakes = document.getElementById('ro-medical-list-risks-common-mistakes');
  if (ro_medical_list_risks_common_mistakes) {
    gsap.from('#ro-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_section_diy_vs_professional_assistance = document.getElementById('ro-medical-section-diy-vs-professional-assistance');
  if (ro_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_section_rondnia_specific_context = document.getElementById('ro-medical-section-rondnia-specific-context');
  if (ro_medical_section_rondnia_specific_context) {
    gsap.fromTo('#ro-medical-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_section_what_our_clients_say = document.getElementById('ro-medical-section-what-our-clients-say');
  if (ro_medical_section_what_our_clients_say) {
    gsap.fromTo('#ro-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_section_frequently_asked_questions = document.getElementById('ro-medical-section-frequently-asked-questions');
  if (ro_medical_section_frequently_asked_questions) {
    gsap.fromTo('#ro-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_section_international_support = document.getElementById('ro-medical-section-international-support');
  if (ro_medical_section_international_support) {
    gsap.fromTo('#ro-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_list_our_credentials = document.getElementById('ro-medical-list-our-credentials');
  if (ro_medical_list_our_credentials) {
    gsap.from('#ro-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_list_related_services = document.getElementById('ro-medical-list-related-services');
  if (ro_medical_list_related_services) {
    gsap.from('#ro-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_section_youre_in_good_hands = document.getElementById('ro-medical-section-youre-in-good-hands');
  if (ro_medical_section_youre_in_good_hands) {
    gsap.fromTo('#ro-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_medical_section_21 = document.getElementById('ro-medical-section-21');
  if (ro_medical_section_21) {
    gsap.fromTo('#ro-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('ro-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (ro_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#ro-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #ro-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_list_quick_facts = document.getElementById('ro-tourist-list-quick-facts');
  if (ro_tourist_list_quick_facts) {
    gsap.from('#ro-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_list_common_challenges_applicants_face = document.getElementById('ro-tourist-list-common-challenges-applicants-face');
  if (ro_tourist_list_common_challenges_applicants_face) {
    gsap.from('#ro-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_list_how_we_solve_these_challenges = document.getElementById('ro-tourist-list-how-we-solve-these-challenges');
  if (ro_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#ro-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_section_visa_overview = document.getElementById('ro-tourist-section-visa-overview');
  if (ro_tourist_section_visa_overview) {
    gsap.fromTo('#ro-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_form_who_is_this_visa_for = document.getElementById('ro-tourist-form-who-is-this-visa-for');
  if (ro_tourist_form_who_is_this_visa_for) {
    gsap.from('#ro-tourist-form-who-is-this-visa-for input, #ro-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_list_required_documents = document.getElementById('ro-tourist-list-required-documents');
  if (ro_tourist_list_required_documents) {
    gsap.from('#ro-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_list_application_process = document.getElementById('ro-tourist-list-application-process');
  if (ro_tourist_list_application_process) {
    gsap.from('#ro-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_section_timelines_deadlines = document.getElementById('ro-tourist-section-timelines-deadlines');
  if (ro_tourist_section_timelines_deadlines) {
    gsap.fromTo('#ro-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_section_fees_costs = document.getElementById('ro-tourist-section-fees-costs');
  if (ro_tourist_section_fees_costs) {
    gsap.fromTo('#ro-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_list_risks_common_mistakes = document.getElementById('ro-tourist-list-risks-common-mistakes');
  if (ro_tourist_list_risks_common_mistakes) {
    gsap.from('#ro-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_section_diy_vs_professional_assistance = document.getElementById('ro-tourist-section-diy-vs-professional-assistance');
  if (ro_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_section_rondnia_specific_context = document.getElementById('ro-tourist-section-rondnia-specific-context');
  if (ro_tourist_section_rondnia_specific_context) {
    gsap.fromTo('#ro-tourist-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_section_what_our_clients_say = document.getElementById('ro-tourist-section-what-our-clients-say');
  if (ro_tourist_section_what_our_clients_say) {
    gsap.fromTo('#ro-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_section_frequently_asked_questions = document.getElementById('ro-tourist-section-frequently-asked-questions');
  if (ro_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#ro-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_section_international_support = document.getElementById('ro-tourist-section-international-support');
  if (ro_tourist_section_international_support) {
    gsap.fromTo('#ro-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_list_our_credentials = document.getElementById('ro-tourist-list-our-credentials');
  if (ro_tourist_list_our_credentials) {
    gsap.from('#ro-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_list_related_services = document.getElementById('ro-tourist-list-related-services');
  if (ro_tourist_list_related_services) {
    gsap.from('#ro-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_section_youre_in_good_hands = document.getElementById('ro-tourist-section-youre-in-good-hands');
  if (ro_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#ro-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_tourist_section_21 = document.getElementById('ro-tourist-section-21');
  if (ro_tourist_section_21) {
    gsap.fromTo('#ro-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('ro-transit-form-transit-through-brazil-with-the-transit-visa');
  if (ro_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#ro-transit-form-transit-through-brazil-with-the-transit-visa input, #ro-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_list_quick_facts = document.getElementById('ro-transit-list-quick-facts');
  if (ro_transit_list_quick_facts) {
    gsap.from('#ro-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_list_common_challenges_applicants_face = document.getElementById('ro-transit-list-common-challenges-applicants-face');
  if (ro_transit_list_common_challenges_applicants_face) {
    gsap.from('#ro-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_list_how_we_solve_these_challenges = document.getElementById('ro-transit-list-how-we-solve-these-challenges');
  if (ro_transit_list_how_we_solve_these_challenges) {
    gsap.from('#ro-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_section_visa_overview = document.getElementById('ro-transit-section-visa-overview');
  if (ro_transit_section_visa_overview) {
    gsap.fromTo('#ro-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_form_who_is_this_visa_for = document.getElementById('ro-transit-form-who-is-this-visa-for');
  if (ro_transit_form_who_is_this_visa_for) {
    gsap.from('#ro-transit-form-who-is-this-visa-for input, #ro-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_list_required_documents = document.getElementById('ro-transit-list-required-documents');
  if (ro_transit_list_required_documents) {
    gsap.from('#ro-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_list_application_process = document.getElementById('ro-transit-list-application-process');
  if (ro_transit_list_application_process) {
    gsap.from('#ro-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_section_timelines_deadlines = document.getElementById('ro-transit-section-timelines-deadlines');
  if (ro_transit_section_timelines_deadlines) {
    gsap.fromTo('#ro-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_section_fees_costs = document.getElementById('ro-transit-section-fees-costs');
  if (ro_transit_section_fees_costs) {
    gsap.fromTo('#ro-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_list_risks_common_mistakes = document.getElementById('ro-transit-list-risks-common-mistakes');
  if (ro_transit_list_risks_common_mistakes) {
    gsap.from('#ro-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_section_diy_vs_professional_assistance = document.getElementById('ro-transit-section-diy-vs-professional-assistance');
  if (ro_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_section_rondnia_specific_context = document.getElementById('ro-transit-section-rondnia-specific-context');
  if (ro_transit_section_rondnia_specific_context) {
    gsap.fromTo('#ro-transit-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_section_what_our_clients_say = document.getElementById('ro-transit-section-what-our-clients-say');
  if (ro_transit_section_what_our_clients_say) {
    gsap.fromTo('#ro-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_section_frequently_asked_questions = document.getElementById('ro-transit-section-frequently-asked-questions');
  if (ro_transit_section_frequently_asked_questions) {
    gsap.fromTo('#ro-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_section_international_support = document.getElementById('ro-transit-section-international-support');
  if (ro_transit_section_international_support) {
    gsap.fromTo('#ro-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_list_our_credentials = document.getElementById('ro-transit-list-our-credentials');
  if (ro_transit_list_our_credentials) {
    gsap.from('#ro-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_list_related_services = document.getElementById('ro-transit-list-related-services');
  if (ro_transit_list_related_services) {
    gsap.from('#ro-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_section_youre_in_good_hands = document.getElementById('ro-transit-section-youre-in-good-hands');
  if (ro_transit_section_youre_in_good_hands) {
    gsap.fromTo('#ro-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_transit_section_21 = document.getElementById('ro-transit-section-21');
  if (ro_transit_section_21) {
    gsap.fromTo('#ro-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_form_study_in_brazil_with_the_student_visa = document.getElementById('ro-student-form-study-in-brazil-with-the-student-visa');
  if (ro_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#ro-student-form-study-in-brazil-with-the-student-visa input, #ro-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_list_quick_facts = document.getElementById('ro-student-list-quick-facts');
  if (ro_student_list_quick_facts) {
    gsap.from('#ro-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_list_common_challenges_applicants_face = document.getElementById('ro-student-list-common-challenges-applicants-face');
  if (ro_student_list_common_challenges_applicants_face) {
    gsap.from('#ro-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_list_how_we_solve_these_challenges = document.getElementById('ro-student-list-how-we-solve-these-challenges');
  if (ro_student_list_how_we_solve_these_challenges) {
    gsap.from('#ro-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_section_visa_overview = document.getElementById('ro-student-section-visa-overview');
  if (ro_student_section_visa_overview) {
    gsap.fromTo('#ro-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_form_who_is_this_visa_for = document.getElementById('ro-student-form-who-is-this-visa-for');
  if (ro_student_form_who_is_this_visa_for) {
    gsap.from('#ro-student-form-who-is-this-visa-for input, #ro-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_list_required_documents = document.getElementById('ro-student-list-required-documents');
  if (ro_student_list_required_documents) {
    gsap.from('#ro-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_list_application_process = document.getElementById('ro-student-list-application-process');
  if (ro_student_list_application_process) {
    gsap.from('#ro-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_section_timelines_deadlines = document.getElementById('ro-student-section-timelines-deadlines');
  if (ro_student_section_timelines_deadlines) {
    gsap.fromTo('#ro-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_section_fees_costs = document.getElementById('ro-student-section-fees-costs');
  if (ro_student_section_fees_costs) {
    gsap.fromTo('#ro-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_list_risks_common_mistakes = document.getElementById('ro-student-list-risks-common-mistakes');
  if (ro_student_list_risks_common_mistakes) {
    gsap.from('#ro-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_section_diy_vs_professional_assistance = document.getElementById('ro-student-section-diy-vs-professional-assistance');
  if (ro_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_section_rondnia_specific_context = document.getElementById('ro-student-section-rondnia-specific-context');
  if (ro_student_section_rondnia_specific_context) {
    gsap.fromTo('#ro-student-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_section_what_our_clients_say = document.getElementById('ro-student-section-what-our-clients-say');
  if (ro_student_section_what_our_clients_say) {
    gsap.fromTo('#ro-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_section_frequently_asked_questions = document.getElementById('ro-student-section-frequently-asked-questions');
  if (ro_student_section_frequently_asked_questions) {
    gsap.fromTo('#ro-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_section_international_support = document.getElementById('ro-student-section-international-support');
  if (ro_student_section_international_support) {
    gsap.fromTo('#ro-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_list_our_credentials = document.getElementById('ro-student-list-our-credentials');
  if (ro_student_list_our_credentials) {
    gsap.from('#ro-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_list_related_services = document.getElementById('ro-student-list-related-services');
  if (ro_student_list_related_services) {
    gsap.from('#ro-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_section_youre_in_good_hands = document.getElementById('ro-student-section-youre-in-good-hands');
  if (ro_student_section_youre_in_good_hands) {
    gsap.fromTo('#ro-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_student_section_21 = document.getElementById('ro-student-section-21');
  if (ro_student_section_21) {
    gsap.fromTo('#ro-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('ro-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (ro_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#ro-business-form-conduct-business-in-brazil-with-the-business-visa input, #ro-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_list_quick_facts = document.getElementById('ro-business-list-quick-facts');
  if (ro_business_list_quick_facts) {
    gsap.from('#ro-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_list_common_challenges_applicants_face = document.getElementById('ro-business-list-common-challenges-applicants-face');
  if (ro_business_list_common_challenges_applicants_face) {
    gsap.from('#ro-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_list_how_we_solve_these_challenges = document.getElementById('ro-business-list-how-we-solve-these-challenges');
  if (ro_business_list_how_we_solve_these_challenges) {
    gsap.from('#ro-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_section_visa_overview = document.getElementById('ro-business-section-visa-overview');
  if (ro_business_section_visa_overview) {
    gsap.fromTo('#ro-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_form_who_is_this_visa_for = document.getElementById('ro-business-form-who-is-this-visa-for');
  if (ro_business_form_who_is_this_visa_for) {
    gsap.from('#ro-business-form-who-is-this-visa-for input, #ro-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_list_required_documents = document.getElementById('ro-business-list-required-documents');
  if (ro_business_list_required_documents) {
    gsap.from('#ro-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_list_application_process = document.getElementById('ro-business-list-application-process');
  if (ro_business_list_application_process) {
    gsap.from('#ro-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_section_timelines_deadlines = document.getElementById('ro-business-section-timelines-deadlines');
  if (ro_business_section_timelines_deadlines) {
    gsap.fromTo('#ro-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_section_fees_costs = document.getElementById('ro-business-section-fees-costs');
  if (ro_business_section_fees_costs) {
    gsap.fromTo('#ro-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_list_risks_common_mistakes = document.getElementById('ro-business-list-risks-common-mistakes');
  if (ro_business_list_risks_common_mistakes) {
    gsap.from('#ro-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_section_diy_vs_professional_assistance = document.getElementById('ro-business-section-diy-vs-professional-assistance');
  if (ro_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_section_rondnia_specific_context = document.getElementById('ro-business-section-rondnia-specific-context');
  if (ro_business_section_rondnia_specific_context) {
    gsap.fromTo('#ro-business-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_section_what_our_clients_say = document.getElementById('ro-business-section-what-our-clients-say');
  if (ro_business_section_what_our_clients_say) {
    gsap.fromTo('#ro-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_section_frequently_asked_questions = document.getElementById('ro-business-section-frequently-asked-questions');
  if (ro_business_section_frequently_asked_questions) {
    gsap.fromTo('#ro-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_section_international_support = document.getElementById('ro-business-section-international-support');
  if (ro_business_section_international_support) {
    gsap.fromTo('#ro-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_list_our_credentials = document.getElementById('ro-business-list-our-credentials');
  if (ro_business_list_our_credentials) {
    gsap.from('#ro-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_list_related_services = document.getElementById('ro-business-list-related-services');
  if (ro_business_list_related_services) {
    gsap.from('#ro-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_section_youre_in_good_hands = document.getElementById('ro-business-section-youre-in-good-hands');
  if (ro_business_section_youre_in_good_hands) {
    gsap.fromTo('#ro-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_business_section_21 = document.getElementById('ro-business-section-21');
  if (ro_business_section_21) {
    gsap.fromTo('#ro-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('ro-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (ro_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#ro-research-form-conduct-research-in-brazil-with-the-research-visa input, #ro-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_list_quick_facts = document.getElementById('ro-research-list-quick-facts');
  if (ro_research_list_quick_facts) {
    gsap.from('#ro-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_list_common_challenges_applicants_face = document.getElementById('ro-research-list-common-challenges-applicants-face');
  if (ro_research_list_common_challenges_applicants_face) {
    gsap.from('#ro-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_list_how_we_solve_these_challenges = document.getElementById('ro-research-list-how-we-solve-these-challenges');
  if (ro_research_list_how_we_solve_these_challenges) {
    gsap.from('#ro-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_section_visa_overview = document.getElementById('ro-research-section-visa-overview');
  if (ro_research_section_visa_overview) {
    gsap.fromTo('#ro-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_form_who_is_this_visa_for = document.getElementById('ro-research-form-who-is-this-visa-for');
  if (ro_research_form_who_is_this_visa_for) {
    gsap.from('#ro-research-form-who-is-this-visa-for input, #ro-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_list_required_documents = document.getElementById('ro-research-list-required-documents');
  if (ro_research_list_required_documents) {
    gsap.from('#ro-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_list_application_process = document.getElementById('ro-research-list-application-process');
  if (ro_research_list_application_process) {
    gsap.from('#ro-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_section_timelines_deadlines = document.getElementById('ro-research-section-timelines-deadlines');
  if (ro_research_section_timelines_deadlines) {
    gsap.fromTo('#ro-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_section_fees_costs = document.getElementById('ro-research-section-fees-costs');
  if (ro_research_section_fees_costs) {
    gsap.fromTo('#ro-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_list_risks_common_mistakes = document.getElementById('ro-research-list-risks-common-mistakes');
  if (ro_research_list_risks_common_mistakes) {
    gsap.from('#ro-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_section_diy_vs_professional_assistance = document.getElementById('ro-research-section-diy-vs-professional-assistance');
  if (ro_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_section_rondnia_specific_context = document.getElementById('ro-research-section-rondnia-specific-context');
  if (ro_research_section_rondnia_specific_context) {
    gsap.fromTo('#ro-research-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_section_what_our_clients_say = document.getElementById('ro-research-section-what-our-clients-say');
  if (ro_research_section_what_our_clients_say) {
    gsap.fromTo('#ro-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_section_frequently_asked_questions = document.getElementById('ro-research-section-frequently-asked-questions');
  if (ro_research_section_frequently_asked_questions) {
    gsap.fromTo('#ro-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_section_international_support = document.getElementById('ro-research-section-international-support');
  if (ro_research_section_international_support) {
    gsap.fromTo('#ro-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_list_our_credentials = document.getElementById('ro-research-list-our-credentials');
  if (ro_research_list_our_credentials) {
    gsap.from('#ro-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_list_related_services = document.getElementById('ro-research-list-related-services');
  if (ro_research_list_related_services) {
    gsap.from('#ro-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_section_youre_in_good_hands = document.getElementById('ro-research-section-youre-in-good-hands');
  if (ro_research_section_youre_in_good_hands) {
    gsap.fromTo('#ro-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_research_section_21 = document.getElementById('ro-research-section-21');
  if (ro_research_section_21) {
    gsap.fromTo('#ro-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('ro-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (ro_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#ro-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #ro-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_list_quick_facts = document.getElementById('ro-diplomatic-list-quick-facts');
  if (ro_diplomatic_list_quick_facts) {
    gsap.from('#ro-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_list_common_challenges_applicants_face = document.getElementById('ro-diplomatic-list-common-challenges-applicants-face');
  if (ro_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#ro-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_list_how_we_solve_these_challenges = document.getElementById('ro-diplomatic-list-how-we-solve-these-challenges');
  if (ro_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#ro-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_section_visa_overview = document.getElementById('ro-diplomatic-section-visa-overview');
  if (ro_diplomatic_section_visa_overview) {
    gsap.fromTo('#ro-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_form_who_is_this_visa_for = document.getElementById('ro-diplomatic-form-who-is-this-visa-for');
  if (ro_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#ro-diplomatic-form-who-is-this-visa-for input, #ro-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_list_required_documents = document.getElementById('ro-diplomatic-list-required-documents');
  if (ro_diplomatic_list_required_documents) {
    gsap.from('#ro-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_list_application_process = document.getElementById('ro-diplomatic-list-application-process');
  if (ro_diplomatic_list_application_process) {
    gsap.from('#ro-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_section_timelines_deadlines = document.getElementById('ro-diplomatic-section-timelines-deadlines');
  if (ro_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#ro-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_section_fees_costs = document.getElementById('ro-diplomatic-section-fees-costs');
  if (ro_diplomatic_section_fees_costs) {
    gsap.fromTo('#ro-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_list_risks_common_mistakes = document.getElementById('ro-diplomatic-list-risks-common-mistakes');
  if (ro_diplomatic_list_risks_common_mistakes) {
    gsap.from('#ro-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_section_diy_vs_professional_assistance = document.getElementById('ro-diplomatic-section-diy-vs-professional-assistance');
  if (ro_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_section_rondnia_specific_context = document.getElementById('ro-diplomatic-section-rondnia-specific-context');
  if (ro_diplomatic_section_rondnia_specific_context) {
    gsap.fromTo('#ro-diplomatic-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_section_what_our_clients_say = document.getElementById('ro-diplomatic-section-what-our-clients-say');
  if (ro_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#ro-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_section_frequently_asked_questions = document.getElementById('ro-diplomatic-section-frequently-asked-questions');
  if (ro_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#ro-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_section_international_support = document.getElementById('ro-diplomatic-section-international-support');
  if (ro_diplomatic_section_international_support) {
    gsap.fromTo('#ro-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_list_our_credentials = document.getElementById('ro-diplomatic-list-our-credentials');
  if (ro_diplomatic_list_our_credentials) {
    gsap.from('#ro-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_list_related_services = document.getElementById('ro-diplomatic-list-related-services');
  if (ro_diplomatic_list_related_services) {
    gsap.from('#ro-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_section_youre_in_good_hands = document.getElementById('ro-diplomatic-section-youre-in-good-hands');
  if (ro_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#ro-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_diplomatic_section_21 = document.getElementById('ro-diplomatic-section-21');
  if (ro_diplomatic_section_21) {
    gsap.fromTo('#ro-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('ro-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (ro_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#ro-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #ro-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_list_quick_facts = document.getElementById('ro-journalist-list-quick-facts');
  if (ro_journalist_list_quick_facts) {
    gsap.from('#ro-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_list_common_challenges_applicants_face = document.getElementById('ro-journalist-list-common-challenges-applicants-face');
  if (ro_journalist_list_common_challenges_applicants_face) {
    gsap.from('#ro-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_list_how_we_solve_these_challenges = document.getElementById('ro-journalist-list-how-we-solve-these-challenges');
  if (ro_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#ro-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_section_visa_overview = document.getElementById('ro-journalist-section-visa-overview');
  if (ro_journalist_section_visa_overview) {
    gsap.fromTo('#ro-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_form_who_is_this_visa_for = document.getElementById('ro-journalist-form-who-is-this-visa-for');
  if (ro_journalist_form_who_is_this_visa_for) {
    gsap.from('#ro-journalist-form-who-is-this-visa-for input, #ro-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_list_required_documents = document.getElementById('ro-journalist-list-required-documents');
  if (ro_journalist_list_required_documents) {
    gsap.from('#ro-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_list_application_process = document.getElementById('ro-journalist-list-application-process');
  if (ro_journalist_list_application_process) {
    gsap.from('#ro-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_section_timelines_deadlines = document.getElementById('ro-journalist-section-timelines-deadlines');
  if (ro_journalist_section_timelines_deadlines) {
    gsap.fromTo('#ro-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_section_fees_costs = document.getElementById('ro-journalist-section-fees-costs');
  if (ro_journalist_section_fees_costs) {
    gsap.fromTo('#ro-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_list_risks_common_mistakes = document.getElementById('ro-journalist-list-risks-common-mistakes');
  if (ro_journalist_list_risks_common_mistakes) {
    gsap.from('#ro-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_section_diy_vs_professional_assistance = document.getElementById('ro-journalist-section-diy-vs-professional-assistance');
  if (ro_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_section_rondnia_specific_context = document.getElementById('ro-journalist-section-rondnia-specific-context');
  if (ro_journalist_section_rondnia_specific_context) {
    gsap.fromTo('#ro-journalist-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_section_what_our_clients_say = document.getElementById('ro-journalist-section-what-our-clients-say');
  if (ro_journalist_section_what_our_clients_say) {
    gsap.fromTo('#ro-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_section_frequently_asked_questions = document.getElementById('ro-journalist-section-frequently-asked-questions');
  if (ro_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#ro-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_section_international_support = document.getElementById('ro-journalist-section-international-support');
  if (ro_journalist_section_international_support) {
    gsap.fromTo('#ro-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_list_our_credentials = document.getElementById('ro-journalist-list-our-credentials');
  if (ro_journalist_list_our_credentials) {
    gsap.from('#ro-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_list_related_services = document.getElementById('ro-journalist-list-related-services');
  if (ro_journalist_list_related_services) {
    gsap.from('#ro-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_section_youre_in_good_hands = document.getElementById('ro-journalist-section-youre-in-good-hands');
  if (ro_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#ro-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_journalist_section_21 = document.getElementById('ro-journalist-section-21');
  if (ro_journalist_section_21) {
    gsap.fromTo('#ro-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('ro-fines-form-resolve-immigration-fines-in-brazil');
  if (ro_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#ro-fines-form-resolve-immigration-fines-in-brazil input, #ro-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_list_quick_facts = document.getElementById('ro-fines-list-quick-facts');
  if (ro_fines_list_quick_facts) {
    gsap.from('#ro-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_list_common_challenges_applicants_face = document.getElementById('ro-fines-list-common-challenges-applicants-face');
  if (ro_fines_list_common_challenges_applicants_face) {
    gsap.from('#ro-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_list_how_we_solve_these_challenges = document.getElementById('ro-fines-list-how-we-solve-these-challenges');
  if (ro_fines_list_how_we_solve_these_challenges) {
    gsap.from('#ro-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_section_service_overview = document.getElementById('ro-fines-section-service-overview');
  if (ro_fines_section_service_overview) {
    gsap.fromTo('#ro-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_form_who_is_this_service_for = document.getElementById('ro-fines-form-who-is-this-service-for');
  if (ro_fines_form_who_is_this_service_for) {
    gsap.from('#ro-fines-form-who-is-this-service-for input, #ro-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_list_required_documents = document.getElementById('ro-fines-list-required-documents');
  if (ro_fines_list_required_documents) {
    gsap.from('#ro-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_list_process = document.getElementById('ro-fines-list-process');
  if (ro_fines_list_process) {
    gsap.from('#ro-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_section_timelines_deadlines = document.getElementById('ro-fines-section-timelines-deadlines');
  if (ro_fines_section_timelines_deadlines) {
    gsap.fromTo('#ro-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_section_fees_costs = document.getElementById('ro-fines-section-fees-costs');
  if (ro_fines_section_fees_costs) {
    gsap.fromTo('#ro-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_list_risks_common_mistakes = document.getElementById('ro-fines-list-risks-common-mistakes');
  if (ro_fines_list_risks_common_mistakes) {
    gsap.from('#ro-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_section_diy_vs_professional_assistance = document.getElementById('ro-fines-section-diy-vs-professional-assistance');
  if (ro_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_section_rondnia_specific_context = document.getElementById('ro-fines-section-rondnia-specific-context');
  if (ro_fines_section_rondnia_specific_context) {
    gsap.fromTo('#ro-fines-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_section_what_our_clients_say = document.getElementById('ro-fines-section-what-our-clients-say');
  if (ro_fines_section_what_our_clients_say) {
    gsap.fromTo('#ro-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_section_frequently_asked_questions = document.getElementById('ro-fines-section-frequently-asked-questions');
  if (ro_fines_section_frequently_asked_questions) {
    gsap.fromTo('#ro-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_section_international_support = document.getElementById('ro-fines-section-international-support');
  if (ro_fines_section_international_support) {
    gsap.fromTo('#ro-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_list_our_credentials = document.getElementById('ro-fines-list-our-credentials');
  if (ro_fines_list_our_credentials) {
    gsap.from('#ro-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_list_related_services = document.getElementById('ro-fines-list-related-services');
  if (ro_fines_list_related_services) {
    gsap.from('#ro-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_section_youre_in_good_hands = document.getElementById('ro-fines-section-youre-in-good-hands');
  if (ro_fines_section_youre_in_good_hands) {
    gsap.fromTo('#ro-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_fines_section_21 = document.getElementById('ro-fines-section-21');
  if (ro_fines_section_21) {
    gsap.fromTo('#ro-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_form_deportation_assistance_in_brazil = document.getElementById('ro-deportation-form-deportation-assistance-in-brazil');
  if (ro_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#ro-deportation-form-deportation-assistance-in-brazil input, #ro-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_list_quick_facts = document.getElementById('ro-deportation-list-quick-facts');
  if (ro_deportation_list_quick_facts) {
    gsap.from('#ro-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_list_common_challenges_applicants_face = document.getElementById('ro-deportation-list-common-challenges-applicants-face');
  if (ro_deportation_list_common_challenges_applicants_face) {
    gsap.from('#ro-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_list_how_we_solve_these_challenges = document.getElementById('ro-deportation-list-how-we-solve-these-challenges');
  if (ro_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#ro-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_section_service_overview = document.getElementById('ro-deportation-section-service-overview');
  if (ro_deportation_section_service_overview) {
    gsap.fromTo('#ro-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_form_who_is_this_service_for = document.getElementById('ro-deportation-form-who-is-this-service-for');
  if (ro_deportation_form_who_is_this_service_for) {
    gsap.from('#ro-deportation-form-who-is-this-service-for input, #ro-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_list_required_documents = document.getElementById('ro-deportation-list-required-documents');
  if (ro_deportation_list_required_documents) {
    gsap.from('#ro-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_list_process = document.getElementById('ro-deportation-list-process');
  if (ro_deportation_list_process) {
    gsap.from('#ro-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_section_timelines_deadlines = document.getElementById('ro-deportation-section-timelines-deadlines');
  if (ro_deportation_section_timelines_deadlines) {
    gsap.fromTo('#ro-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_section_fees_costs = document.getElementById('ro-deportation-section-fees-costs');
  if (ro_deportation_section_fees_costs) {
    gsap.fromTo('#ro-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_list_risks_common_mistakes = document.getElementById('ro-deportation-list-risks-common-mistakes');
  if (ro_deportation_list_risks_common_mistakes) {
    gsap.from('#ro-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_section_diy_vs_professional_assistance = document.getElementById('ro-deportation-section-diy-vs-professional-assistance');
  if (ro_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_section_rondnia_specific_context = document.getElementById('ro-deportation-section-rondnia-specific-context');
  if (ro_deportation_section_rondnia_specific_context) {
    gsap.fromTo('#ro-deportation-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_section_what_our_clients_say = document.getElementById('ro-deportation-section-what-our-clients-say');
  if (ro_deportation_section_what_our_clients_say) {
    gsap.fromTo('#ro-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_section_frequently_asked_questions = document.getElementById('ro-deportation-section-frequently-asked-questions');
  if (ro_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#ro-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_section_international_support = document.getElementById('ro-deportation-section-international-support');
  if (ro_deportation_section_international_support) {
    gsap.fromTo('#ro-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_list_our_credentials = document.getElementById('ro-deportation-list-our-credentials');
  if (ro_deportation_list_our_credentials) {
    gsap.from('#ro-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_list_related_services = document.getElementById('ro-deportation-list-related-services');
  if (ro_deportation_list_related_services) {
    gsap.from('#ro-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_section_youre_in_good_hands = document.getElementById('ro-deportation-section-youre-in-good-hands');
  if (ro_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#ro-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_deportation_section_21 = document.getElementById('ro-deportation-section-21');
  if (ro_deportation_section_21) {
    gsap.fromTo('#ro-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('ro-translation-form-sworn-document-translation-services-in-brazil');
  if (ro_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#ro-translation-form-sworn-document-translation-services-in-brazil input, #ro-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_list_quick_facts = document.getElementById('ro-translation-list-quick-facts');
  if (ro_translation_list_quick_facts) {
    gsap.from('#ro-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_list_common_challenges_applicants_face = document.getElementById('ro-translation-list-common-challenges-applicants-face');
  if (ro_translation_list_common_challenges_applicants_face) {
    gsap.from('#ro-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_list_how_we_solve_these_challenges = document.getElementById('ro-translation-list-how-we-solve-these-challenges');
  if (ro_translation_list_how_we_solve_these_challenges) {
    gsap.from('#ro-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_section_service_overview = document.getElementById('ro-translation-section-service-overview');
  if (ro_translation_section_service_overview) {
    gsap.fromTo('#ro-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_form_who_is_this_service_for = document.getElementById('ro-translation-form-who-is-this-service-for');
  if (ro_translation_form_who_is_this_service_for) {
    gsap.from('#ro-translation-form-who-is-this-service-for input, #ro-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_list_required_documents = document.getElementById('ro-translation-list-required-documents');
  if (ro_translation_list_required_documents) {
    gsap.from('#ro-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_list_process = document.getElementById('ro-translation-list-process');
  if (ro_translation_list_process) {
    gsap.from('#ro-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_section_timelines_deadlines = document.getElementById('ro-translation-section-timelines-deadlines');
  if (ro_translation_section_timelines_deadlines) {
    gsap.fromTo('#ro-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_section_fees_costs = document.getElementById('ro-translation-section-fees-costs');
  if (ro_translation_section_fees_costs) {
    gsap.fromTo('#ro-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_list_risks_common_mistakes = document.getElementById('ro-translation-list-risks-common-mistakes');
  if (ro_translation_list_risks_common_mistakes) {
    gsap.from('#ro-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_section_diy_vs_professional_assistance = document.getElementById('ro-translation-section-diy-vs-professional-assistance');
  if (ro_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_section_rondnia_specific_context = document.getElementById('ro-translation-section-rondnia-specific-context');
  if (ro_translation_section_rondnia_specific_context) {
    gsap.fromTo('#ro-translation-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_section_what_our_clients_say = document.getElementById('ro-translation-section-what-our-clients-say');
  if (ro_translation_section_what_our_clients_say) {
    gsap.fromTo('#ro-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_section_frequently_asked_questions = document.getElementById('ro-translation-section-frequently-asked-questions');
  if (ro_translation_section_frequently_asked_questions) {
    gsap.fromTo('#ro-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_section_international_support = document.getElementById('ro-translation-section-international-support');
  if (ro_translation_section_international_support) {
    gsap.fromTo('#ro-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_list_our_credentials = document.getElementById('ro-translation-list-our-credentials');
  if (ro_translation_list_our_credentials) {
    gsap.from('#ro-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_list_related_services = document.getElementById('ro-translation-list-related-services');
  if (ro_translation_list_related_services) {
    gsap.from('#ro-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_section_youre_in_good_hands = document.getElementById('ro-translation-section-youre-in-good-hands');
  if (ro_translation_section_youre_in_good_hands) {
    gsap.fromTo('#ro-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_translation_section_21 = document.getElementById('ro-translation-section-21');
  if (ro_translation_section_21) {
    gsap.fromTo('#ro-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('ro-expulsion-form-expulsion-assistance-in-brazil');
  if (ro_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#ro-expulsion-form-expulsion-assistance-in-brazil input, #ro-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_list_quick_facts = document.getElementById('ro-expulsion-list-quick-facts');
  if (ro_expulsion_list_quick_facts) {
    gsap.from('#ro-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_list_common_challenges_applicants_face = document.getElementById('ro-expulsion-list-common-challenges-applicants-face');
  if (ro_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#ro-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_list_how_we_solve_these_challenges = document.getElementById('ro-expulsion-list-how-we-solve-these-challenges');
  if (ro_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#ro-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_section_service_overview = document.getElementById('ro-expulsion-section-service-overview');
  if (ro_expulsion_section_service_overview) {
    gsap.fromTo('#ro-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_form_who_is_this_service_for = document.getElementById('ro-expulsion-form-who-is-this-service-for');
  if (ro_expulsion_form_who_is_this_service_for) {
    gsap.from('#ro-expulsion-form-who-is-this-service-for input, #ro-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_list_required_documents = document.getElementById('ro-expulsion-list-required-documents');
  if (ro_expulsion_list_required_documents) {
    gsap.from('#ro-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_list_process = document.getElementById('ro-expulsion-list-process');
  if (ro_expulsion_list_process) {
    gsap.from('#ro-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_section_timelines_deadlines = document.getElementById('ro-expulsion-section-timelines-deadlines');
  if (ro_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#ro-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_section_fees_costs = document.getElementById('ro-expulsion-section-fees-costs');
  if (ro_expulsion_section_fees_costs) {
    gsap.fromTo('#ro-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_list_risks_common_mistakes = document.getElementById('ro-expulsion-list-risks-common-mistakes');
  if (ro_expulsion_list_risks_common_mistakes) {
    gsap.from('#ro-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_section_diy_vs_professional_assistance = document.getElementById('ro-expulsion-section-diy-vs-professional-assistance');
  if (ro_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_section_rondnia_specific_context = document.getElementById('ro-expulsion-section-rondnia-specific-context');
  if (ro_expulsion_section_rondnia_specific_context) {
    gsap.fromTo('#ro-expulsion-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_section_what_our_clients_say = document.getElementById('ro-expulsion-section-what-our-clients-say');
  if (ro_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#ro-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_section_frequently_asked_questions = document.getElementById('ro-expulsion-section-frequently-asked-questions');
  if (ro_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#ro-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_section_international_support = document.getElementById('ro-expulsion-section-international-support');
  if (ro_expulsion_section_international_support) {
    gsap.fromTo('#ro-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_list_our_credentials = document.getElementById('ro-expulsion-list-our-credentials');
  if (ro_expulsion_list_our_credentials) {
    gsap.from('#ro-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_list_related_services = document.getElementById('ro-expulsion-list-related-services');
  if (ro_expulsion_list_related_services) {
    gsap.from('#ro-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_section_youre_in_good_hands = document.getElementById('ro-expulsion-section-youre-in-good-hands');
  if (ro_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#ro-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_expulsion_section_21 = document.getElementById('ro-expulsion-section-21');
  if (ro_expulsion_section_21) {
    gsap.fromTo('#ro-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('ro-appeals-form-appeal-immigration-denials-in-brazil');
  if (ro_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#ro-appeals-form-appeal-immigration-denials-in-brazil input, #ro-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_list_quick_facts = document.getElementById('ro-appeals-list-quick-facts');
  if (ro_appeals_list_quick_facts) {
    gsap.from('#ro-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_list_common_challenges_applicants_face = document.getElementById('ro-appeals-list-common-challenges-applicants-face');
  if (ro_appeals_list_common_challenges_applicants_face) {
    gsap.from('#ro-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_list_how_we_solve_these_challenges = document.getElementById('ro-appeals-list-how-we-solve-these-challenges');
  if (ro_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#ro-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_section_service_overview = document.getElementById('ro-appeals-section-service-overview');
  if (ro_appeals_section_service_overview) {
    gsap.fromTo('#ro-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_form_who_is_this_service_for = document.getElementById('ro-appeals-form-who-is-this-service-for');
  if (ro_appeals_form_who_is_this_service_for) {
    gsap.from('#ro-appeals-form-who-is-this-service-for input, #ro-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_list_required_documents = document.getElementById('ro-appeals-list-required-documents');
  if (ro_appeals_list_required_documents) {
    gsap.from('#ro-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_list_appeal_process = document.getElementById('ro-appeals-list-appeal-process');
  if (ro_appeals_list_appeal_process) {
    gsap.from('#ro-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_section_timelines_deadlines = document.getElementById('ro-appeals-section-timelines-deadlines');
  if (ro_appeals_section_timelines_deadlines) {
    gsap.fromTo('#ro-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_section_fees_costs = document.getElementById('ro-appeals-section-fees-costs');
  if (ro_appeals_section_fees_costs) {
    gsap.fromTo('#ro-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_list_risks_common_mistakes = document.getElementById('ro-appeals-list-risks-common-mistakes');
  if (ro_appeals_list_risks_common_mistakes) {
    gsap.from('#ro-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_section_diy_vs_professional_assistance = document.getElementById('ro-appeals-section-diy-vs-professional-assistance');
  if (ro_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_section_rondnia_specific_context = document.getElementById('ro-appeals-section-rondnia-specific-context');
  if (ro_appeals_section_rondnia_specific_context) {
    gsap.fromTo('#ro-appeals-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_section_what_our_clients_say = document.getElementById('ro-appeals-section-what-our-clients-say');
  if (ro_appeals_section_what_our_clients_say) {
    gsap.fromTo('#ro-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_section_frequently_asked_questions = document.getElementById('ro-appeals-section-frequently-asked-questions');
  if (ro_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#ro-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_section_international_support = document.getElementById('ro-appeals-section-international-support');
  if (ro_appeals_section_international_support) {
    gsap.fromTo('#ro-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_list_our_credentials = document.getElementById('ro-appeals-list-our-credentials');
  if (ro_appeals_list_our_credentials) {
    gsap.from('#ro-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_list_related_services = document.getElementById('ro-appeals-list-related-services');
  if (ro_appeals_list_related_services) {
    gsap.from('#ro-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_section_youre_in_good_hands = document.getElementById('ro-appeals-section-youre-in-good-hands');
  if (ro_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#ro-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_appeals_section_21 = document.getElementById('ro-appeals-section-21');
  if (ro_appeals_section_21) {
    gsap.fromTo('#ro-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('ro-consular-form-consular-services-in-brazil-for-citizens');
  if (ro_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#ro-consular-form-consular-services-in-brazil-for-citizens input, #ro-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_list_quick_facts = document.getElementById('ro-consular-list-quick-facts');
  if (ro_consular_list_quick_facts) {
    gsap.from('#ro-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_list_common_challenges_applicants_face = document.getElementById('ro-consular-list-common-challenges-applicants-face');
  if (ro_consular_list_common_challenges_applicants_face) {
    gsap.from('#ro-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_list_how_we_solve_these_challenges = document.getElementById('ro-consular-list-how-we-solve-these-challenges');
  if (ro_consular_list_how_we_solve_these_challenges) {
    gsap.from('#ro-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_section_service_overview = document.getElementById('ro-consular-section-service-overview');
  if (ro_consular_section_service_overview) {
    gsap.fromTo('#ro-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_form_who_is_this_service_for = document.getElementById('ro-consular-form-who-is-this-service-for');
  if (ro_consular_form_who_is_this_service_for) {
    gsap.from('#ro-consular-form-who-is-this-service-for input, #ro-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_list_required_documents = document.getElementById('ro-consular-list-required-documents');
  if (ro_consular_list_required_documents) {
    gsap.from('#ro-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_list_process = document.getElementById('ro-consular-list-process');
  if (ro_consular_list_process) {
    gsap.from('#ro-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_section_timelines_deadlines = document.getElementById('ro-consular-section-timelines-deadlines');
  if (ro_consular_section_timelines_deadlines) {
    gsap.fromTo('#ro-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_section_fees_costs = document.getElementById('ro-consular-section-fees-costs');
  if (ro_consular_section_fees_costs) {
    gsap.fromTo('#ro-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_list_risks_common_mistakes = document.getElementById('ro-consular-list-risks-common-mistakes');
  if (ro_consular_list_risks_common_mistakes) {
    gsap.from('#ro-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_section_diy_vs_professional_assistance = document.getElementById('ro-consular-section-diy-vs-professional-assistance');
  if (ro_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_section_rondnia_specific_context = document.getElementById('ro-consular-section-rondnia-specific-context');
  if (ro_consular_section_rondnia_specific_context) {
    gsap.fromTo('#ro-consular-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_section_what_our_clients_say = document.getElementById('ro-consular-section-what-our-clients-say');
  if (ro_consular_section_what_our_clients_say) {
    gsap.fromTo('#ro-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_section_frequently_asked_questions = document.getElementById('ro-consular-section-frequently-asked-questions');
  if (ro_consular_section_frequently_asked_questions) {
    gsap.fromTo('#ro-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_section_international_support = document.getElementById('ro-consular-section-international-support');
  if (ro_consular_section_international_support) {
    gsap.fromTo('#ro-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_list_our_credentials = document.getElementById('ro-consular-list-our-credentials');
  if (ro_consular_list_our_credentials) {
    gsap.from('#ro-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_list_related_services = document.getElementById('ro-consular-list-related-services');
  if (ro_consular_list_related_services) {
    gsap.from('#ro-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_section_youre_in_good_hands = document.getElementById('ro-consular-section-youre-in-good-hands');
  if (ro_consular_section_youre_in_good_hands) {
    gsap.fromTo('#ro-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_consular_section_21 = document.getElementById('ro-consular-section-21');
  if (ro_consular_section_21) {
    gsap.fromTo('#ro-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('ro-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (ro_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#ro-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #ro-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_list_quick_facts = document.getElementById('ro-criminalrecords-list-quick-facts');
  if (ro_criminalrecords_list_quick_facts) {
    gsap.from('#ro-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_list_common_challenges_applicants_face = document.getElementById('ro-criminalrecords-list-common-challenges-applicants-face');
  if (ro_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#ro-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('ro-criminalrecords-list-how-we-solve-these-challenges');
  if (ro_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#ro-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_section_service_overview = document.getElementById('ro-criminalrecords-section-service-overview');
  if (ro_criminalrecords_section_service_overview) {
    gsap.fromTo('#ro-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_form_who_is_this_service_for = document.getElementById('ro-criminalrecords-form-who-is-this-service-for');
  if (ro_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#ro-criminalrecords-form-who-is-this-service-for input, #ro-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_list_required_documents = document.getElementById('ro-criminalrecords-list-required-documents');
  if (ro_criminalrecords_list_required_documents) {
    gsap.from('#ro-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_list_process = document.getElementById('ro-criminalrecords-list-process');
  if (ro_criminalrecords_list_process) {
    gsap.from('#ro-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_section_timelines_deadlines = document.getElementById('ro-criminalrecords-section-timelines-deadlines');
  if (ro_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#ro-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_section_fees_costs = document.getElementById('ro-criminalrecords-section-fees-costs');
  if (ro_criminalrecords_section_fees_costs) {
    gsap.fromTo('#ro-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_list_risks_common_mistakes = document.getElementById('ro-criminalrecords-list-risks-common-mistakes');
  if (ro_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#ro-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('ro-criminalrecords-section-diy-vs-professional-assistance');
  if (ro_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_section_rondnia_specific_context = document.getElementById('ro-criminalrecords-section-rondnia-specific-context');
  if (ro_criminalrecords_section_rondnia_specific_context) {
    gsap.fromTo('#ro-criminalrecords-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_section_what_our_clients_say = document.getElementById('ro-criminalrecords-section-what-our-clients-say');
  if (ro_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#ro-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_section_frequently_asked_questions = document.getElementById('ro-criminalrecords-section-frequently-asked-questions');
  if (ro_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#ro-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_section_international_support = document.getElementById('ro-criminalrecords-section-international-support');
  if (ro_criminalrecords_section_international_support) {
    gsap.fromTo('#ro-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_list_our_credentials = document.getElementById('ro-criminalrecords-list-our-credentials');
  if (ro_criminalrecords_list_our_credentials) {
    gsap.from('#ro-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_list_related_services = document.getElementById('ro-criminalrecords-list-related-services');
  if (ro_criminalrecords_list_related_services) {
    gsap.from('#ro-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_section_youre_in_good_hands = document.getElementById('ro-criminalrecords-section-youre-in-good-hands');
  if (ro_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#ro-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_criminalrecords_section_21 = document.getElementById('ro-criminalrecords-section-21');
  if (ro_criminalrecords_section_21) {
    gsap.fromTo('#ro-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_form_extradition_assistance_in_brazil = document.getElementById('ro-extradition-form-extradition-assistance-in-brazil');
  if (ro_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#ro-extradition-form-extradition-assistance-in-brazil input, #ro-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_list_quick_facts = document.getElementById('ro-extradition-list-quick-facts');
  if (ro_extradition_list_quick_facts) {
    gsap.from('#ro-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_list_common_challenges_applicants_face = document.getElementById('ro-extradition-list-common-challenges-applicants-face');
  if (ro_extradition_list_common_challenges_applicants_face) {
    gsap.from('#ro-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_list_how_we_solve_these_challenges = document.getElementById('ro-extradition-list-how-we-solve-these-challenges');
  if (ro_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#ro-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_section_service_overview = document.getElementById('ro-extradition-section-service-overview');
  if (ro_extradition_section_service_overview) {
    gsap.fromTo('#ro-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_form_who_is_this_service_for = document.getElementById('ro-extradition-form-who-is-this-service-for');
  if (ro_extradition_form_who_is_this_service_for) {
    gsap.from('#ro-extradition-form-who-is-this-service-for input, #ro-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_list_required_documents = document.getElementById('ro-extradition-list-required-documents');
  if (ro_extradition_list_required_documents) {
    gsap.from('#ro-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_list_process = document.getElementById('ro-extradition-list-process');
  if (ro_extradition_list_process) {
    gsap.from('#ro-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_section_timelines_deadlines = document.getElementById('ro-extradition-section-timelines-deadlines');
  if (ro_extradition_section_timelines_deadlines) {
    gsap.fromTo('#ro-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_section_fees_costs = document.getElementById('ro-extradition-section-fees-costs');
  if (ro_extradition_section_fees_costs) {
    gsap.fromTo('#ro-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_list_risks_common_mistakes = document.getElementById('ro-extradition-list-risks-common-mistakes');
  if (ro_extradition_list_risks_common_mistakes) {
    gsap.from('#ro-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_section_diy_vs_professional_assistance = document.getElementById('ro-extradition-section-diy-vs-professional-assistance');
  if (ro_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_section_rondnia_specific_context = document.getElementById('ro-extradition-section-rondnia-specific-context');
  if (ro_extradition_section_rondnia_specific_context) {
    gsap.fromTo('#ro-extradition-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_section_what_our_clients_say = document.getElementById('ro-extradition-section-what-our-clients-say');
  if (ro_extradition_section_what_our_clients_say) {
    gsap.fromTo('#ro-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_section_frequently_asked_questions = document.getElementById('ro-extradition-section-frequently-asked-questions');
  if (ro_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#ro-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_section_international_support = document.getElementById('ro-extradition-section-international-support');
  if (ro_extradition_section_international_support) {
    gsap.fromTo('#ro-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_list_our_credentials = document.getElementById('ro-extradition-list-our-credentials');
  if (ro_extradition_list_our_credentials) {
    gsap.from('#ro-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_list_related_services = document.getElementById('ro-extradition-list-related-services');
  if (ro_extradition_list_related_services) {
    gsap.from('#ro-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_section_youre_in_good_hands = document.getElementById('ro-extradition-section-youre-in-good-hands');
  if (ro_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#ro-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_extradition_section_21 = document.getElementById('ro-extradition-section-21');
  if (ro_extradition_section_21) {
    gsap.fromTo('#ro-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_form_discover_the_north_amazon_and_beyond = document.getElementById('ro-north-form-discover-the-north-amazon-and-beyond');
  if (ro_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#ro-north-form-discover-the-north-amazon-and-beyond input, #ro-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_list_quick_facts = document.getElementById('ro-north-list-quick-facts');
  if (ro_north_list_quick_facts) {
    gsap.from('#ro-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_list_common_challenges_applicants_face = document.getElementById('ro-north-list-common-challenges-applicants-face');
  if (ro_north_list_common_challenges_applicants_face) {
    gsap.from('#ro-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_list_how_we_solve_these_challenges = document.getElementById('ro-north-list-how-we-solve-these-challenges');
  if (ro_north_list_how_we_solve_these_challenges) {
    gsap.from('#ro-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_section_trip_overview = document.getElementById('ro-north-section-trip-overview');
  if (ro_north_section_trip_overview) {
    gsap.fromTo('#ro-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_form_who_is_this_trip_for = document.getElementById('ro-north-form-who-is-this-trip-for');
  if (ro_north_form_who_is_this_trip_for) {
    gsap.from('#ro-north-form-who-is-this-trip-for input, #ro-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_list_required_documents = document.getElementById('ro-north-list-required-documents');
  if (ro_north_list_required_documents) {
    gsap.from('#ro-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_list_booking_process = document.getElementById('ro-north-list-booking-process');
  if (ro_north_list_booking_process) {
    gsap.from('#ro-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_section_timelines_deadlines = document.getElementById('ro-north-section-timelines-deadlines');
  if (ro_north_section_timelines_deadlines) {
    gsap.fromTo('#ro-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_section_fees_costs = document.getElementById('ro-north-section-fees-costs');
  if (ro_north_section_fees_costs) {
    gsap.fromTo('#ro-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_list_risks_common_mistakes = document.getElementById('ro-north-list-risks-common-mistakes');
  if (ro_north_list_risks_common_mistakes) {
    gsap.from('#ro-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_section_diy_vs_professional_assistance = document.getElementById('ro-north-section-diy-vs-professional-assistance');
  if (ro_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_section_rondnia_specific_context = document.getElementById('ro-north-section-rondnia-specific-context');
  if (ro_north_section_rondnia_specific_context) {
    gsap.fromTo('#ro-north-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_section_what_our_clients_say = document.getElementById('ro-north-section-what-our-clients-say');
  if (ro_north_section_what_our_clients_say) {
    gsap.fromTo('#ro-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_section_frequently_asked_questions = document.getElementById('ro-north-section-frequently-asked-questions');
  if (ro_north_section_frequently_asked_questions) {
    gsap.fromTo('#ro-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_section_international_support = document.getElementById('ro-north-section-international-support');
  if (ro_north_section_international_support) {
    gsap.fromTo('#ro-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_list_our_credentials = document.getElementById('ro-north-list-our-credentials');
  if (ro_north_list_our_credentials) {
    gsap.from('#ro-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_list_related_services = document.getElementById('ro-north-list-related-services');
  if (ro_north_list_related_services) {
    gsap.from('#ro-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_section_youre_in_good_hands = document.getElementById('ro-north-section-youre-in-good-hands');
  if (ro_north_section_youre_in_good_hands) {
    gsap.fromTo('#ro-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_north_section_21 = document.getElementById('ro-north-section-21');
  if (ro_north_section_21) {
    gsap.fromTo('#ro-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('ro-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (ro_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#ro-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #ro-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_list_quick_facts = document.getElementById('ro-centralwest-list-quick-facts');
  if (ro_centralwest_list_quick_facts) {
    gsap.from('#ro-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_list_common_challenges_applicants_face = document.getElementById('ro-centralwest-list-common-challenges-applicants-face');
  if (ro_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#ro-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_list_how_we_solve_these_challenges = document.getElementById('ro-centralwest-list-how-we-solve-these-challenges');
  if (ro_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#ro-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_section_trip_overview = document.getElementById('ro-centralwest-section-trip-overview');
  if (ro_centralwest_section_trip_overview) {
    gsap.fromTo('#ro-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_form_who_is_this_trip_for = document.getElementById('ro-centralwest-form-who-is-this-trip-for');
  if (ro_centralwest_form_who_is_this_trip_for) {
    gsap.from('#ro-centralwest-form-who-is-this-trip-for input, #ro-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_list_required_documents = document.getElementById('ro-centralwest-list-required-documents');
  if (ro_centralwest_list_required_documents) {
    gsap.from('#ro-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_list_booking_process = document.getElementById('ro-centralwest-list-booking-process');
  if (ro_centralwest_list_booking_process) {
    gsap.from('#ro-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_section_timelines_deadlines = document.getElementById('ro-centralwest-section-timelines-deadlines');
  if (ro_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#ro-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_section_fees_costs = document.getElementById('ro-centralwest-section-fees-costs');
  if (ro_centralwest_section_fees_costs) {
    gsap.fromTo('#ro-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_list_risks_common_mistakes = document.getElementById('ro-centralwest-list-risks-common-mistakes');
  if (ro_centralwest_list_risks_common_mistakes) {
    gsap.from('#ro-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_section_diy_vs_professional_assistance = document.getElementById('ro-centralwest-section-diy-vs-professional-assistance');
  if (ro_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_section_rondnia_specific_context = document.getElementById('ro-centralwest-section-rondnia-specific-context');
  if (ro_centralwest_section_rondnia_specific_context) {
    gsap.fromTo('#ro-centralwest-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_section_what_our_clients_say = document.getElementById('ro-centralwest-section-what-our-clients-say');
  if (ro_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#ro-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_section_frequently_asked_questions = document.getElementById('ro-centralwest-section-frequently-asked-questions');
  if (ro_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#ro-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_section_international_support = document.getElementById('ro-centralwest-section-international-support');
  if (ro_centralwest_section_international_support) {
    gsap.fromTo('#ro-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_list_our_credentials = document.getElementById('ro-centralwest-list-our-credentials');
  if (ro_centralwest_list_our_credentials) {
    gsap.from('#ro-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_list_related_services = document.getElementById('ro-centralwest-list-related-services');
  if (ro_centralwest_list_related_services) {
    gsap.from('#ro-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_section_youre_in_good_hands = document.getElementById('ro-centralwest-section-youre-in-good-hands');
  if (ro_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#ro-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_centralwest_section_21 = document.getElementById('ro-centralwest-section-21');
  if (ro_centralwest_section_21) {
    gsap.fromTo('#ro-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('ro-southeast-form-dynamic-southeast-cities-and-history');
  if (ro_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#ro-southeast-form-dynamic-southeast-cities-and-history input, #ro-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_list_quick_facts = document.getElementById('ro-southeast-list-quick-facts');
  if (ro_southeast_list_quick_facts) {
    gsap.from('#ro-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_list_common_challenges_applicants_face = document.getElementById('ro-southeast-list-common-challenges-applicants-face');
  if (ro_southeast_list_common_challenges_applicants_face) {
    gsap.from('#ro-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_list_how_we_solve_these_challenges = document.getElementById('ro-southeast-list-how-we-solve-these-challenges');
  if (ro_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#ro-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_section_trip_overview = document.getElementById('ro-southeast-section-trip-overview');
  if (ro_southeast_section_trip_overview) {
    gsap.fromTo('#ro-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_form_who_is_this_trip_for = document.getElementById('ro-southeast-form-who-is-this-trip-for');
  if (ro_southeast_form_who_is_this_trip_for) {
    gsap.from('#ro-southeast-form-who-is-this-trip-for input, #ro-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_list_required_documents = document.getElementById('ro-southeast-list-required-documents');
  if (ro_southeast_list_required_documents) {
    gsap.from('#ro-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_list_booking_process = document.getElementById('ro-southeast-list-booking-process');
  if (ro_southeast_list_booking_process) {
    gsap.from('#ro-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_section_timelines_deadlines = document.getElementById('ro-southeast-section-timelines-deadlines');
  if (ro_southeast_section_timelines_deadlines) {
    gsap.fromTo('#ro-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_section_fees_costs = document.getElementById('ro-southeast-section-fees-costs');
  if (ro_southeast_section_fees_costs) {
    gsap.fromTo('#ro-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_list_risks_common_mistakes = document.getElementById('ro-southeast-list-risks-common-mistakes');
  if (ro_southeast_list_risks_common_mistakes) {
    gsap.from('#ro-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_section_diy_vs_professional_assistance = document.getElementById('ro-southeast-section-diy-vs-professional-assistance');
  if (ro_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_section_rondnia_specific_context = document.getElementById('ro-southeast-section-rondnia-specific-context');
  if (ro_southeast_section_rondnia_specific_context) {
    gsap.fromTo('#ro-southeast-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_section_what_our_clients_say = document.getElementById('ro-southeast-section-what-our-clients-say');
  if (ro_southeast_section_what_our_clients_say) {
    gsap.fromTo('#ro-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_section_frequently_asked_questions = document.getElementById('ro-southeast-section-frequently-asked-questions');
  if (ro_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#ro-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_section_international_support = document.getElementById('ro-southeast-section-international-support');
  if (ro_southeast_section_international_support) {
    gsap.fromTo('#ro-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_list_our_credentials = document.getElementById('ro-southeast-list-our-credentials');
  if (ro_southeast_list_our_credentials) {
    gsap.from('#ro-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_list_related_services = document.getElementById('ro-southeast-list-related-services');
  if (ro_southeast_list_related_services) {
    gsap.from('#ro-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_section_youre_in_good_hands = document.getElementById('ro-southeast-section-youre-in-good-hands');
  if (ro_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#ro-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_southeast_section_21 = document.getElementById('ro-southeast-section-21');
  if (ro_southeast_section_21) {
    gsap.fromTo('#ro-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('ro-northeast-form-vibrant-northeast-beaches-and-culture');
  if (ro_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#ro-northeast-form-vibrant-northeast-beaches-and-culture input, #ro-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_list_quick_facts = document.getElementById('ro-northeast-list-quick-facts');
  if (ro_northeast_list_quick_facts) {
    gsap.from('#ro-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_list_common_challenges_applicants_face = document.getElementById('ro-northeast-list-common-challenges-applicants-face');
  if (ro_northeast_list_common_challenges_applicants_face) {
    gsap.from('#ro-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_list_how_we_solve_these_challenges = document.getElementById('ro-northeast-list-how-we-solve-these-challenges');
  if (ro_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#ro-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_section_trip_overview = document.getElementById('ro-northeast-section-trip-overview');
  if (ro_northeast_section_trip_overview) {
    gsap.fromTo('#ro-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_form_who_is_this_trip_for = document.getElementById('ro-northeast-form-who-is-this-trip-for');
  if (ro_northeast_form_who_is_this_trip_for) {
    gsap.from('#ro-northeast-form-who-is-this-trip-for input, #ro-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_list_required_documents = document.getElementById('ro-northeast-list-required-documents');
  if (ro_northeast_list_required_documents) {
    gsap.from('#ro-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_list_booking_process = document.getElementById('ro-northeast-list-booking-process');
  if (ro_northeast_list_booking_process) {
    gsap.from('#ro-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_section_timelines_deadlines = document.getElementById('ro-northeast-section-timelines-deadlines');
  if (ro_northeast_section_timelines_deadlines) {
    gsap.fromTo('#ro-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_section_fees_costs = document.getElementById('ro-northeast-section-fees-costs');
  if (ro_northeast_section_fees_costs) {
    gsap.fromTo('#ro-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_list_risks_common_mistakes = document.getElementById('ro-northeast-list-risks-common-mistakes');
  if (ro_northeast_list_risks_common_mistakes) {
    gsap.from('#ro-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_section_diy_vs_professional_assistance = document.getElementById('ro-northeast-section-diy-vs-professional-assistance');
  if (ro_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_section_rondnia_specific_context = document.getElementById('ro-northeast-section-rondnia-specific-context');
  if (ro_northeast_section_rondnia_specific_context) {
    gsap.fromTo('#ro-northeast-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_section_what_our_clients_say = document.getElementById('ro-northeast-section-what-our-clients-say');
  if (ro_northeast_section_what_our_clients_say) {
    gsap.fromTo('#ro-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_section_frequently_asked_questions = document.getElementById('ro-northeast-section-frequently-asked-questions');
  if (ro_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#ro-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_section_international_support = document.getElementById('ro-northeast-section-international-support');
  if (ro_northeast_section_international_support) {
    gsap.fromTo('#ro-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_list_our_credentials = document.getElementById('ro-northeast-list-our-credentials');
  if (ro_northeast_list_our_credentials) {
    gsap.from('#ro-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_list_related_services = document.getElementById('ro-northeast-list-related-services');
  if (ro_northeast_list_related_services) {
    gsap.from('#ro-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_section_youre_in_good_hands = document.getElementById('ro-northeast-section-youre-in-good-hands');
  if (ro_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#ro-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_northeast_section_21 = document.getElementById('ro-northeast-section-21');
  if (ro_northeast_section_21) {
    gsap.fromTo('#ro-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_form_charming_south_wine_and_gauchos = document.getElementById('ro-south-form-charming-south-wine-and-gauchos');
  if (ro_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#ro-south-form-charming-south-wine-and-gauchos input, #ro-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_list_quick_facts = document.getElementById('ro-south-list-quick-facts');
  if (ro_south_list_quick_facts) {
    gsap.from('#ro-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_list_common_challenges_applicants_face = document.getElementById('ro-south-list-common-challenges-applicants-face');
  if (ro_south_list_common_challenges_applicants_face) {
    gsap.from('#ro-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_list_how_we_solve_these_challenges = document.getElementById('ro-south-list-how-we-solve-these-challenges');
  if (ro_south_list_how_we_solve_these_challenges) {
    gsap.from('#ro-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_section_trip_overview = document.getElementById('ro-south-section-trip-overview');
  if (ro_south_section_trip_overview) {
    gsap.fromTo('#ro-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_form_who_is_this_trip_for = document.getElementById('ro-south-form-who-is-this-trip-for');
  if (ro_south_form_who_is_this_trip_for) {
    gsap.from('#ro-south-form-who-is-this-trip-for input, #ro-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_list_required_documents = document.getElementById('ro-south-list-required-documents');
  if (ro_south_list_required_documents) {
    gsap.from('#ro-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_list_booking_process = document.getElementById('ro-south-list-booking-process');
  if (ro_south_list_booking_process) {
    gsap.from('#ro-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_section_timelines_deadlines = document.getElementById('ro-south-section-timelines-deadlines');
  if (ro_south_section_timelines_deadlines) {
    gsap.fromTo('#ro-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_section_fees_costs = document.getElementById('ro-south-section-fees-costs');
  if (ro_south_section_fees_costs) {
    gsap.fromTo('#ro-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_list_risks_common_mistakes = document.getElementById('ro-south-list-risks-common-mistakes');
  if (ro_south_list_risks_common_mistakes) {
    gsap.from('#ro-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_section_diy_vs_professional_assistance = document.getElementById('ro-south-section-diy-vs-professional-assistance');
  if (ro_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ro-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_section_rondnia_specific_context = document.getElementById('ro-south-section-rondnia-specific-context');
  if (ro_south_section_rondnia_specific_context) {
    gsap.fromTo('#ro-south-section-rondnia-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_section_what_our_clients_say = document.getElementById('ro-south-section-what-our-clients-say');
  if (ro_south_section_what_our_clients_say) {
    gsap.fromTo('#ro-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_section_frequently_asked_questions = document.getElementById('ro-south-section-frequently-asked-questions');
  if (ro_south_section_frequently_asked_questions) {
    gsap.fromTo('#ro-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_section_international_support = document.getElementById('ro-south-section-international-support');
  if (ro_south_section_international_support) {
    gsap.fromTo('#ro-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_list_our_credentials = document.getElementById('ro-south-list-our-credentials');
  if (ro_south_list_our_credentials) {
    gsap.from('#ro-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_list_related_services = document.getElementById('ro-south-list-related-services');
  if (ro_south_list_related_services) {
    gsap.from('#ro-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_section_youre_in_good_hands = document.getElementById('ro-south-section-youre-in-good-hands');
  if (ro_south_section_youre_in_good_hands) {
    gsap.fromTo('#ro-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

  const ro_south_section_21 = document.getElementById('ro-south-section-21');
  if (ro_south_section_21) {
    gsap.fromTo('#ro-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.inOut'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
