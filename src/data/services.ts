export type Service = {
  slug: string;
  name: string;
  category: 'blonde' | 'color' | 'cutting' | 'extensions' | 'treatments' | 'events';
  humanLabel: string;
  description: string;
  whatItIs: string;
  whoItsFor: string;
  whatToExpect: string;
  pricingRange: string;
  duration: string;
  consultationRequired: boolean;
  ashleyNote: string;
  heroImage: string;
};

export const services: Service[] = [
  // ── Cutting & Shape ──────────────────────────────────────────────
  {
    slug: 'precision-cutting',
    name: 'Precision Cutting',
    category: 'cutting',
    humanLabel: 'My hair needs a reset',
    description:
      'A tailored haircut built on Sassoon-trained technique, shaped to your texture, lifestyle, and face.',
    whatItIs:
      'Every cut starts with a conversation. Ashley studies your bone structure, hair density, growth patterns, and how you actually style your hair day to day. From there she builds a shape using dry and wet cutting techniques rooted in her Vidal Sassoon training. The goal is never a trendy cut that falls apart in a week — it is a structure that moves well, grows out gracefully, and feels like you.',
    whoItsFor:
      'Anyone ready for a cut that actually works with their hair instead of against it. Whether you are growing out a previous style, starting fresh, or just need your shape cleaned up, this service is the foundation everything else is built on.',
    whatToExpect:
      'You will start with a consultation at the chair where Ashley assesses your hair and talks through what you are looking for. The cut itself is precise and unhurried. She will finish with styling so you can see the shape in motion. Expect to leave with tips on how to maintain it at home.',
    pricingRange: 'Starting at $85',
    duration: '30 min+',
    consultationRequired: false,
    ashleyNote:
      'A great cut is the foundation of everything. I trained at Sassoon because I believe in structure — when the bones are right, everything else falls into place. I will never rush this.',
    heroImage: '/images/hair-work-3.webp',
  },

  // ── Color ────────────────────────────────────────────────────────
  {
    slug: 'signature-color',
    name: 'Signature Color',
    category: 'color',
    humanLabel: 'I want to refresh my color',
    description:
      'Full, all-over color crafted with Davines formulations for rich, dimensional results that feel natural.',
    whatItIs:
      'This is a complete color service — roots to ends — using Davines professional color systems. Ashley custom-mixes every formula based on your skin tone, natural base, and the result you are after. Whether you are going darker, covering grey, or refreshing a shade that has gone flat, this service delivers full, even, lasting color with serious shine.',
    whoItsFor:
      'Anyone who wants a single, cohesive color from root to tip. This is ideal if you are maintaining an existing shade, making a color change, or looking for grey coverage that does not look like grey coverage.',
    whatToExpect:
      'After a color consultation, Ashley mixes your formula and applies it section by section. Processing time varies depending on your hair, but you will be comfortable throughout. The service finishes with a rinse, conditioning treatment, and a blow-dry so you see the true color in natural light.',
    pricingRange: 'Starting at $150',
    duration: '2 hr+',
    consultationRequired: false,
    ashleyNote:
      'Color should look like it grew out of your head. I spend a lot of time on formulation because the mix is everything — the right tone, the right depth, the right amount of warmth or cool. That is where twenty years of experience really shows.',
    heroImage: '/images/hair-work-1.webp',
  },
  {
    slug: 'base-retouch',
    name: 'Base Retouch',
    category: 'color',
    humanLabel: 'My roots need attention',
    description:
      'Targeted root color application to keep your base seamless between full color appointments.',
    whatItIs:
      'A root-only color application that matches your existing formula and extends the life of your color. Ashley applies color precisely to new growth, blending it into your existing shade so there is no visible line of demarcation. This is maintenance work done with the same care as a full color service.',
    whoItsFor:
      'Clients who already have a color they love and just need to keep their roots in check. Ideal for anyone on a regular color schedule who wants to stay polished between full services.',
    whatToExpect:
      'This is a focused appointment. Ashley applies your formula to the regrowth area, processes, rinses, and finishes. It is efficient but never rushed — every section gets attention. You will leave with seamless, refreshed color.',
    pricingRange: 'Starting at $120',
    duration: '1 hr 30 min',
    consultationRequired: false,
    ashleyNote:
      'I keep detailed notes on every formula I mix for you, so your retouch is always a perfect match. Consistency matters — your color should look intentional every single time.',
    heroImage: '/images/hair-work-2.webp',
  },
  {
    slug: 'toner-refresh',
    name: 'Toner Refresh',
    category: 'color',
    humanLabel: 'My color is looking brassy',
    description:
      'A toning service that corrects unwanted warmth or brassiness and restores your color between appointments.',
    whatItIs:
      'Toner is the finishing layer of color — it controls tone, cancels brassiness, and adds that glassy, polished quality. This standalone toning service refreshes your shade without a full color or highlight appointment. Ashley uses Davines toning systems to neutralize unwanted warmth and bring your color back to where it should be.',
    whoItsFor:
      'Blondes dealing with brassiness, brunettes whose color has shifted warm, or anyone whose tone has drifted between appointments. Also great as a standalone refresh if your color is still strong but the tone needs correcting.',
    whatToExpect:
      'A quick consultation to assess your current tone, followed by a custom toner application. Processing is typically 15 to 20 minutes. The result is immediate — you will see a visible shift in tone and a noticeable boost in shine.',
    pricingRange: 'Starting at $75',
    duration: '1 hr',
    consultationRequired: false,
    ashleyNote:
      'Toner is one of the most underrated services. It is the difference between good color and color that makes people stop you on the street. I always encourage my clients to come in for a refresh when they feel their tone shifting.',
    heroImage: '/images/hair-work-4.webp',
  },

  // ── Blonde ───────────────────────────────────────────────────────
  {
    slug: 'lived-in-blonde',
    name: 'Lived-In Blonde',
    category: 'blonde',
    humanLabel: 'I want to brighten my look',
    description:
      'Partial highlights placed to create natural dimension and brightness without a heavy grow-out line.',
    whatItIs:
      'This is Ashley\'s signature approach to blonde — highlights placed strategically around the face, crown, and part line to create the effect of sun-kissed, dimensional brightness. Rather than foiling your entire head, she focuses on the areas that catch light naturally. The result grows out softly with no harsh root line, which means less maintenance and more time between appointments.',
    whoItsFor:
      'Anyone who wants to be brighter without the commitment of full highlights. This works beautifully on natural brunettes and blondes alike. It is especially good if you want a low-maintenance approach to lighter hair.',
    whatToExpect:
      'Ashley will map out placement during a consultation, then foil the selected sections. Processing time depends on your starting point and desired lift. The appointment finishes with a custom toner, conditioning treatment, and style. Plan for a longer appointment — beautiful blonde takes patience.',
    pricingRange: 'Starting at $200',
    duration: '2 hr 30 min+',
    consultationRequired: false,
    ashleyNote:
      'I am very protective of my blondes. Lived-in placement is about restraint — knowing where not to put highlights is just as important as knowing where to put them. I want your blonde to look effortless, not overdone.',
    heroImage: '/images/hair-work-5.webp',
  },
  {
    slug: 'full-highlight',
    name: 'Full Highlight',
    category: 'blonde',
    humanLabel: 'I want all-over brightness',
    description:
      'Comprehensive highlights from root to ends for maximum brightness and dimension throughout.',
    whatItIs:
      'A full highlight means foils placed throughout your entire head — top, sides, underneath, and nape. This gives you the most thorough lightening and the most even brightness. Ashley uses a combination of techniques to ensure lift is even and the result is dimensional, not flat. Every full highlight finishes with a custom toner to refine the tone.',
    whoItsFor:
      'Clients who want significant overall brightness, those transitioning to a lighter shade, or anyone who likes a more uniform blonde. This is also the right service if you have a lot of grey and want to blend it with highlights rather than cover it with color.',
    whatToExpect:
      'This is a full-length appointment. Ashley works methodically through each section, placing foils for maximum lift and dimension. After processing, she rinses, tones, and finishes with a treatment and style. The result is polished, bright, and multi-tonal.',
    pricingRange: 'Starting at $250',
    duration: '3 hr+',
    consultationRequired: false,
    ashleyNote:
      'Full highlights are a craft. I take my time because even saturation and clean placement are what separate salon blonde from beautiful blonde. Bring a book — we will be here a while, and it will be worth it.',
    heroImage: '/images/hair-work-6.webp',
  },
  {
    slug: 'balayage',
    name: 'Balayage / Ombre',
    category: 'blonde',
    humanLabel: 'I want a hand-painted, natural look',
    description:
      'Freehand color painting for a soft, graduated effect that transitions naturally from root to ends.',
    whatItIs:
      'Balayage is a hand-painting technique where color is swept onto the hair surface rather than saturated through foils. This creates a softer, more gradual transition from your natural root to lighter ends. Ombre is a similar concept with a more defined contrast between dark and light. Ashley uses both approaches — and often combines them — depending on the effect you are after.',
    whoItsFor:
      'Anyone who loves the look of naturally sun-lightened hair with soft, blended transitions. Balayage is ideal if you want brightness without a visible grow-out line. It is also a great option if you are new to lightening and want to start gradually.',
    whatToExpect:
      'Ashley paints your hair freehand, which requires a different kind of precision than foils. She works section by section, building up brightness where the light would naturally hit. Processing times vary. The appointment finishes with toning, a treatment, and styling.',
    pricingRange: 'Starting at $225',
    duration: '2 hr 30 min+',
    consultationRequired: false,
    ashleyNote:
      'Balayage is where artistry really comes in. There is no foil guiding the placement — it is all in the hand. I love this technique because every result is completely unique to the person in my chair.',
    heroImage: '/images/hair-work-1.webp',
  },

  // ── Extensions ───────────────────────────────────────────────────
  {
    slug: 'extensions',
    name: 'Extensions',
    category: 'extensions',
    humanLabel: 'I want more fullness or length',
    description:
      'Custom extension services including consultation, fitting, and maintenance for natural-looking length and volume.',
    whatItIs:
      'Extension services at The Wild Dandelion start with a dedicated consultation where Ashley evaluates your hair health, discusses your goals, and recommends the best method for your lifestyle and hair type. She works with premium extension systems to add length, volume, or both — always prioritizing the health of your natural hair. Installation, color-matching, cutting, and blending are all part of the process.',
    whoItsFor:
      'Anyone who wants more length, more volume, or both. Extensions are also a beautiful option for clients dealing with thinning hair or anyone who wants to try a dramatic change without the commitment of growing it out. A consultation is required before any extension service.',
    whatToExpect:
      'Your journey starts with a consultation appointment where Ashley assesses your hair, discusses options, and takes measurements. If you move forward, a separate installation appointment is scheduled. Installation times vary by method and volume. Ashley also provides guidance on maintenance, care, and move-up scheduling to keep your extensions looking natural.',
    pricingRange: 'Consultation required for pricing',
    duration: 'Varies by method',
    consultationRequired: true,
    ashleyNote:
      'Extensions are deeply personal — they can be genuinely life-changing for the right person. I require a consultation because I need to see your hair, understand your lifestyle, and make sure we choose the right method. I will never install extensions that would compromise your natural hair.',
    heroImage: '/images/hair-work-4.webp',
  },

  // ── Treatments ───────────────────────────────────────────────────
  {
    slug: 'treatments',
    name: 'Treatments',
    category: 'treatments',
    humanLabel: 'My hair needs repair or hydration',
    description:
      'Professional conditioning and repair treatments including Liquid Luster gloss and Kera/RX Keraplasty restoration.',
    whatItIs:
      'The Wild Dandelion offers two signature treatment services. Liquid Luster is a gloss treatment that adds intense shine, smooths the cuticle, and refreshes tone — think of it as a facial for your hair. Kera/RX Keraplasty is a deeper restorative treatment that repairs damage from chemical services, heat styling, and environmental stress by rebuilding the hair from the inside out. Both use professional-grade formulations and can be added to any service or booked standalone.',
    whoItsFor:
      'Liquid Luster is for anyone who wants a visible boost in shine and softness — it is especially good between color appointments. Keraplasty is for hair that feels dry, damaged, or compromised from repeated processing. If your hair has lost its elasticity or feels brittle, this treatment can make a dramatic difference.',
    whatToExpect:
      'Both treatments are applied at the shampoo bowl after your hair has been cleansed. Liquid Luster processes quickly and delivers immediate shine. Keraplasty requires a longer processing time and may involve heat to help the formula penetrate. You will feel the difference the moment your hair is rinsed — smoother, stronger, and noticeably healthier.',
    pricingRange: 'Starting at $45',
    duration: '30 min - 1 hr',
    consultationRequired: false,
    ashleyNote:
      'I am a big believer in treating your hair like you treat your skin — it needs regular care, not just color. These treatments are the kind of thing you will not realize you needed until you feel the difference. I recommend them to almost everyone.',
    heroImage: '/images/hair-work-2.webp',
  },

  // ── Events ───────────────────────────────────────────────────────
  {
    slug: 'bridal',
    name: 'Bridal & Formal Styling',
    category: 'events',
    humanLabel: 'I need hair for an event',
    description:
      'Special occasion styling for weddings, galas, and events — from elegant updos to polished, lived-in waves.',
    whatItIs:
      'Event styling at The Wild Dandelion covers everything from bridal updos and wedding party hair to formal styles for galas, dinners, and special occasions. Ashley creates styles that photograph beautifully, last through the event, and feel secure without looking stiff. Bridal services include a trial run before the wedding day to finalize the look. She also offers on-location styling for wedding parties.',
    whoItsFor:
      'Brides, wedding party members, and anyone attending a special occasion who wants their hair to look and feel exceptional. Whether you need an intricate updo, soft romantic waves, or a sleek, polished finish, this service is designed for the moments that matter.',
    whatToExpect:
      'For bridal clients, the process starts with a trial appointment — typically 4 to 6 weeks before the wedding — where Ashley works through the look, tests hold and movement, and makes adjustments. On the day, she arrives with everything needed to recreate the style. For other events, a single appointment is all you need. Bring photos of styles you love and the outfit you will be wearing.',
    pricingRange: 'Starting at $125',
    duration: '1 - 2 hr+',
    consultationRequired: false,
    ashleyNote:
      'I have done hundreds of weddings and the thing I have learned is that the best bridal hair does not look like bridal hair — it looks like the most beautiful version of you. I always want my brides to feel like themselves, just elevated.',
    heroImage: '/images/bridal-wedding.webp',
  },
];

/**
 * Find a single service by its URL slug.
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/**
 * Return all services within a given category.
 */
export function getServicesByCategory(category: Service['category']): Service[] {
  return services.filter((s) => s.category === category);
}
