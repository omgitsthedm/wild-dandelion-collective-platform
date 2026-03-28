export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSection = {
  title: string;
  items: FAQItem[];
};

export const faqSections: FAQSection[] = [
  {
    title: 'Booking',
    items: [
      {
        question: 'How do I book an appointment?',
        answer:
          'You can book directly through our online scheduling system or reach out to us by phone or text. If you are a new client, we recommend booking a consultation first so Ashley can get to know your hair and your goals before your first service.',
      },
      {
        question: 'Is a deposit required when I book?',
        answer:
          'Yes, a card on file is required at the time of booking to secure your appointment. This helps us maintain availability for all of our clients and ensures your time slot is reserved just for you.',
      },
      {
        question: 'What is your cancellation policy?',
        answer:
          'We ask for at least 48 hours notice if you need to cancel or reschedule. Late cancellations or missed appointments may be subject to a fee. We understand that life happens — just communicate with us and we will always do our best to work with you.',
      },
      {
        question: 'What should I know as a new client?',
        answer:
          'Welcome! For your first visit, please arrive a few minutes early so we can go over your hair history and goals. If you have reference photos, bring them along. If you are booking a color or highlight service for the first time, extra time may be built into your appointment for the consultation portion.',
      },
    ],
  },
  {
    title: 'Policies',
    items: [
      {
        question: 'What happens if I arrive late?',
        answer:
          'We will do our best to accommodate you, but your appointment may need to be shortened or rescheduled depending on how much time remains. Out of respect for the next client, we cannot always extend past your scheduled window. Arriving on time helps us give you the full experience.',
      },
      {
        question: 'Can I bring my children to the salon?',
        answer:
          'We love kids, but for safety reasons and to maintain a relaxing environment for all guests, we are not able to accommodate children during appointments. We appreciate your understanding — this is your time to unwind.',
      },
      {
        question: 'What forms of payment do you accept?',
        answer:
          'We accept all major credit and debit cards as well as Apple Pay and Google Pay. Payment is collected at the end of your appointment.',
      },
      {
        question: 'How does tipping work?',
        answer:
          'Tipping is never expected but always appreciated. You can add a tip to your card payment at checkout or leave cash. There is no set percentage — whatever feels right to you is perfect.',
      },
    ],
  },
  {
    title: 'What to Expect',
    items: [
      {
        question: 'What does a first visit look like?',
        answer:
          'Your first appointment begins with a one-on-one conversation with Ashley about your hair history, current routine, and what you are hoping to achieve. She will assess your hair in person and walk you through her recommendations. This consultation is built into the appointment time so you never feel rushed.',
      },
      {
        question: 'How long should I expect to be in the chair?',
        answer:
          'It depends on the service. A haircut typically takes 30 to 45 minutes. Color services range from one to two hours. Blonde services — highlights, balayage — often run two and a half to four hours depending on your starting point. Ashley will give you a time estimate when you book.',
      },
      {
        question: 'Do I need a consultation before every service?',
        answer:
          'A formal consultation is required for extensions but not for most other services. That said, every appointment begins with a brief check-in at the chair to make sure Ashley and you are aligned on the plan. Communication is the most important part of the process.',
      },
      {
        question: 'What if I am not sure what I want?',
        answer:
          'That is completely okay — it is actually one of Ashley\'s favorite situations. Bring reference photos if you have them, or just come in with an open mind. She will help you figure out what will work best based on your features, lifestyle, and hair goals.',
      },
    ],
  },
  {
    title: 'Aftercare',
    items: [
      {
        question: 'How do I maintain my color between appointments?',
        answer:
          'Use a sulfate-free, color-safe shampoo and conditioner. Wash with lukewarm water rather than hot, and try to extend the time between washes when possible. Ashley will send you home with specific product recommendations tailored to your color and hair type.',
      },
      {
        question: 'How often should I come in for a toner refresh?',
        answer:
          'Most clients benefit from a toner refresh every four to six weeks, though it varies depending on your hair type and how quickly your color shifts. If you notice your blonde going brassy or your brunette pulling warm, it is probably time. Ashley will help you find the right cadence.',
      },
      {
        question: 'How do I care for my extensions?',
        answer:
          'Extension care depends on the method, and Ashley provides a full care guide at your installation appointment. In general, brush gently from the ends up using an extension-safe brush, avoid heavy conditioners near the bonds or wefts, and come in for maintenance on the recommended schedule.',
      },
      {
        question: 'Do you recommend specific products for at-home care?',
        answer:
          'Yes. Ashley recommends and carries Davines products, which are formulated with high-quality, sustainable ingredients. She will suggest specific products based on your hair type and services. You do not need a whole shelf — just the right two or three things.',
      },
    ],
  },
  {
    title: 'Products',
    items: [
      {
        question: 'What product lines does the salon carry?',
        answer:
          'The Wild Dandelion is a Davines salon. We carry a curated selection of their haircare, color care, and styling products. Davines is an Italian brand committed to sustainability and quality — every product is effective and beautifully made.',
      },
      {
        question: 'Can I buy products without booking an appointment?',
        answer:
          'Of course. You are welcome to stop by the salon during business hours to pick up products. If you are not sure what you need, Ashley is happy to make recommendations based on your hair type — just send us a message.',
      },
      {
        question: 'Can I order products for salon pickup?',
        answer:
          'Yes — reach out by phone or text to let us know what you need and we will have it ready for you. This is especially convenient for restocking your regular products between appointments.',
      },
    ],
  },
];
