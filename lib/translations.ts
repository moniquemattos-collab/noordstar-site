export type Language = "en" | "nl";

export type HeroVariantKey =
  | "default"
  | "staff"
  | "admin"
  | "time"
  | "margin"
  | "leaks";

export const DEFAULT_HERO_VARIANT: HeroVariantKey = "default";

const en = {
  meta: {
    title:
      "Noordstar — What could AI actually fix in your business? | Practical, independent advice for small businesses",
    description:
      "Tell us what's slowing your business down. Get a free first check, a €49 Quick Fix, or a full independent plan — practical advice, no AI hype.",
  },
  nav: {
    whatYouGet: "What you get",
    method: "Proof",
    howItWorks: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
    cta: "Get your plan",
  },
  hero: {
    eyebrow: "AI for normal businesses. Explained normally.",
    primaryCta: "Tell us what's wasting your time →",
    secondaryCta: "How it works",
    reassurance:
      "You don't need to understand AI. That's our job. No sales calls, no agency pitch.",
    trust:
      "Reviewed by a named analyst · Delivered in 5 working days · 100% independent — we don't sell implementation",
    variants: {
      default: {
        h1: "Everyone keeps talking about AI. What could it actually fix in your business?",
        sub: "You don't need a big AI transformation. Sometimes one small change saves hours of frustrating work every week. Tell us what's getting in your way — we'll tell you whether there's a smarter way to do it.",
      },
      staff: {
        h1: "Short on staff? Some of that work doesn't need a person.",
        sub: "Answering routine emails, drafting quotes, chasing invoices, planning jobs — we'll show you which of these could run on their own, which shouldn't, and exactly where to start. You decide who helps you build it.",
      },
      admin: {
        h1: "Quotes, invoices, forms, follow-ups — how much of your week is admin?",
        sub: "We'll map how your business actually works and show you exactly which tasks could be automated — like turning a site visit into a written quote, or sending payment reminders automatically — and which honestly shouldn't be.",
      },
      time: {
        h1: "Still answering every customer email yourself?",
        sub: "Routine questions, appointment scheduling, order updates — we'll work out what could run without you, what shouldn't, and the exact steps to hand it over. So you get your week back.",
      },
      margin: {
        h1: "Can't raise your prices? Then stop paying for wasted hours.",
        sub: "Re-typing data between systems, manual planning, invoices that go out late — we'll find where your processes leak time and money, and rank the fixes by what they'll actually save you.",
      },
      leaks: {
        h1: "A quote sent three days late is a customer lost.",
        sub: "Slow quotes, forgotten follow-ups, late invoices — we'll show you which of these a simple automation could fix, which need a process change instead, and what to tackle first.",
      },
    },
  },
  recognition: {
    h2: "Does any of this sound familiar?",
    items: [
      "I get 100 emails a day and can't keep up.",
      "Every quotation takes 30 minutes — and it's almost the same text every time.",
      "Customers keep asking us the same five questions.",
      "We lose leads because nobody remembers to follow up.",
      "Someone copies information from emails into Excel every day.",
      "We waste hours chasing unpaid invoices.",
    ],
    closingText:
      "Sound familiar? Most of these have a simpler fix than you'd think — and it usually doesn't require an “AI transformation.”",
    closingLink: "Tell us yours, free →",
  },
  freeCheck: {
    h2: "Start free: tell us about ONE annoying problem",
    body: "Describe one thing in your business that takes too much time. Within one business day, you'll get a short first assessment from us: how we understand the problem, where we'd look first, and whether it's likely a simple do-it-yourself fix or something bigger. Free. No strings, no spam.",
    note: "One problem per check. Please don't include customer personal data or confidential documents — we don't need them.",
    placeholder:
      "Your form will appear here — connect TALLY_FORM_URL in components/FreeCheck.tsx.",
  },
  process: {
    h2: "Here's how it works — it's genuinely this simple.",
    steps: [
      {
        title: "You tell us about your business",
        text: "a structured questionnaire, ±35 minutes, in plain language. What you do, how work gets done, what frustrates you.",
      },
      {
        title: "We analyse it",
        text: "using a structured method and advanced AI tools. A named human specialist reviews every recommendation before it reaches you.",
      },
      {
        title: "You get a clear plan",
        text: "what's worth doing, what isn't, what to do first, and exactly how to get it done — yourself or with any provider you choose.",
      },
    ],
  },
  example: {
    h2: "What that looks like in practice",
    turns: [
      {
        label: "You tell us",
        text: "“I get 100+ emails a day. I can't keep up — I've started telling customers to just WhatsApp me.”",
      },
      {
        label: "We investigate",
        text: "what types of email actually arrive, which ones repeat, what your email program can already do, and where AI genuinely helps.",
      },
      {
        label: "You receive",
        text: "“Don't buy anything yet. Your inbox needs sorting rules, five template replies, and AI for drafting — not a chatbot. Here's the exact setup, what it costs (probably €0), and what NOT to do.”",
      },
    ],
    closing:
      "That's a Quick Fix. €49. Most problems are simpler than the people selling AI want you to believe.",
  },
  whatYouGet: {
    h2: "What you'll have in your hands after 5 days",
    cards: [
      {
        title: "Your results at a glance",
        line: "everything important on one page",
      },
      {
        title: "What to do first",
        line: "and what to skip entirely",
      },
      {
        title: "Where AI helps",
        line: "and where it honestly doesn't",
      },
      {
        title: "Your first 90 days",
        line: "in the right order, quick wins first",
      },
      {
        title: "Your step-by-step plan",
        line: "clear enough to hand to any provider",
      },
      {
        title: "The questions to ask",
        line: "so no vendor can oversell you",
      },
    ],
    slides: [
      { title: "Executive Dashboard", caption: "Opportunity score & top priority" },
      { title: "Impact × Effort Matrix", caption: "What to do first — and never" },
      { title: "90-Day Roadmap", caption: "Sequenced, starting with quick wins" },
    ],
  },
  independence: {
    h2: "We have nothing else to sell you. That's the point.",
    body: "Plenty of agencies offer free “AI scans” — and their conclusion is always that you need the agency. We don't implement, we don't sell software, we don't do retainers. We sell one thing: honest, independent advice. If the best answer for your business is “skip AI, fix your process” — that's what your plan will say.",
  },
  timeline: {
    h2: "From “no idea” to “crystal clear” in 5 working days",
    steps: [
      { title: "Order", line: "pay securely with iDEAL. Company name + KVK number, done." },
      { title: "Tell us about your business", line: "±35 min questionnaire, save anytime." },
      {
        title: "Day 1",
        line: "you get a first snapshot: how we understand your business + the biggest opportunity we see. (Not what you expected? Full refund, no questions.)",
      },
      { title: "Day 3–5", line: "your full plan arrives, reviewed and signed by your analyst." },
      { title: "It's yours", line: "do it yourself, or hand it to any provider. No strings." },
    ],
  },
  proof: {
    h2: "Why you can trust the answer",
    intro:
      "Every plan follows the same method — the Noordstar Method™: Understand → Diagnose → Prioritize → Design → Decide. The same structured, consistent process for every business. AI helps us work fast; a named specialist decides what reaches you.",
    steps: ["Understand", "Diagnose", "Prioritize", "Design", "Decide"],
    tableTitle: "Why this isn't just a ChatGPT answer",
    tableHead: { generic: "Generic AI chat", noordstar: "Noordstar" },
    rows: [
      { generic: "Generic answers", noordstar: "Analysis based on how your business actually works" },
      { generic: "No context", noordstar: "A structured intake — your operations, systems, people and goals" },
      { generic: "No priorities", noordstar: "Ranked by what's worth doing — with a clear “skip this” list" },
      { generic: "No plan", noordstar: "A step-by-step roadmap and implementation pack" },
      { generic: "No accountability", noordstar: "One consistent method, reviewed by a named human specialist" },
    ],
    closing: "AI helps us work fast. A specialist decides what reaches you.",
  },
  pricing: {
    h2: "Pricing",
    free: {
      title: "Free Check",
      price: "€0",
      body: "Tell us one problem. We tell you where we'd look and how complex it seems. Within one business day.",
      cta: "Start free →",
    },
    quickFix: {
      title: "Quick Fix",
      price: "€49",
      badge: "Start here",
      body: "One problem. One practical plan.",
      bullets: [
        "What's actually causing it",
        "The simplest solution that works",
        "Step-by-step setup you can do yourself",
        "Which tools (and which NOT to buy)",
        "Reviewed by a named specialist",
        "Delivered within 2 business days",
      ],
      note: "Upgrade to the full plan within 30 days and your €49 is fully credited.",
      cta: "Get my Quick Fix — €49",
    },
    fullPlan: {
      title: "Full Business Plan",
      price: "€295",
      body: "Got more than one problem? We look across your whole business.",
      bullets: [
        "Your 3–5 biggest opportunities, prioritised",
        "What to do first, what can wait, what to skip",
        "What's DIY and what needs a professional",
        "Tools, risks and a 90-day order of attack",
        "Day-1 snapshot + full refund guarantee",
        "Reviewed by a named specialist",
      ],
      cta: "Get the full plan — €295",
    },
    note: "All prices excl. VAT. B2B — company name and KVK number required.",
  },
  faq: {
    h2: "Frequently asked questions",
    items: [
      { q: "Do I need to understand AI?", a: "No. You explain your business; we do the rest." },
      {
        q: "What language is the report in?",
        a: "Reports, the briefing and all communication are in English. You're welcome to answer briefing questions in Dutch — we read Dutch fine. The report itself is delivered in clear, jargon-free English.",
      },
      { q: "Is this a sales funnel for consulting?", a: "No. There is nothing else to buy. That's the point." },
      { q: "What if AI isn't right for my business?", a: "Then the report says so, and shows what to do instead." },
      { q: "Who writes the report?", a: "Generated with AI support, reviewed and approved by a named specialist before delivery." },
      { q: "How is my data handled?", a: "Confidential, GDPR/AVG-compliant, never used for other clients." },
      { q: "What size company is this for?", a: "SMEs, roughly 5–100 employees." },
      { q: "Can I ask questions afterwards?", a: "Yes. If anything in your plan is unclear, send a short follow-up and we'll clarify it in writing." },
      {
        q: "What's the difference between the Quick Fix and the full plan?",
        a: "Quick Fix: you bring one specific problem, we send you one practical plan for it. Full plan: we look across your whole business and prioritise the 3–5 opportunities that matter most. Start small — your €49 is credited if you upgrade within 30 days.",
      },
      {
        q: "What about refunds?",
        a: "Quick Fix: if the plan isn't usable, we refund it. Full plan: our Day-1 Snapshot guarantee — if the Day-1 Snapshot misses the mark, full refund. This is a B2B product.",
      },
    ],
  },
  finalCta: {
    h2: "In 5 working days, you'll know what's worth doing — and what isn't.",
  },
  footer: {
    line1: "Noordstar is a product of Lumina Fortuna",
    kvk: "KVK [number]",
    btw: "BTW [number]",
    privacy: "Privacy Policy",
    terms: "Terms & Disclaimer",
    contactLabel: "Contact",
  },
  reserveModal: {
    quickFixTitle: "Reserve your Quick Fix",
    fullPlanTitle: "Reserve your Full Business Plan",
    intro:
      "Payment (iDEAL) is being finalized. Leave your details and we'll send you a secure checkout link.",
    nameLabel: "Full name",
    companyLabel: "Company",
    emailLabel: "Work email",
    submit: "Reserve my spot",
    success: "Thank you. We've received your details and will be in touch shortly with a secure checkout link.",
    close: "Close",
  },
  sampleModal: {
    title: "Inside the report",
    close: "Close",
  },
  langToggle: { en: "EN", nl: "NL" },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: [date] — draft, pending legal review",
    intro:
      "This Privacy Policy explains how Lumina Fortuna (“Noordstar”, “we”, “us”) collects, uses and protects information in connection with the Noordstar AI Opportunity Report.",
    sections: [
      {
        h: "1. Data we collect",
        p: "We collect information you provide directly, including contact details (name, company, email), business information submitted through our briefing questionnaire, and payment-related information processed by our payment provider. [Placeholder — specify exact data categories on legal review.]",
      },
      {
        h: "2. How we use your data",
        p: "We use your data solely to prepare and deliver your AI Opportunity Report, to communicate with you about your order, and to comply with legal and accounting obligations. Your business information is never shared with or used for the benefit of other clients. [Placeholder — confirm retention periods and legal basis under GDPR/AVG.]",
      },
      {
        h: "3. Data storage and security",
        p: "Data is stored using industry-standard security measures and is treated as confidential. [Placeholder — specify hosting location, sub-processors, and security measures on legal review.]",
      },
      {
        h: "4. Your rights",
        p: "Under the GDPR/AVG, you have the right to access, correct, or request deletion of your personal data, and to object to or restrict certain processing. [Placeholder — insert data protection contact and complaints procedure.]",
      },
      {
        h: "5. Contact",
        p: "For privacy-related questions, contact info@noordstar.nl. [Placeholder — this document is a template pending review by qualified legal counsel and does not yet constitute final, binding policy.]",
      },
    ],
  },
  terms: {
    title: "Terms & Disclaimer",
    updated: "Last updated: [date] — draft, pending legal review",
    intro:
      "These Terms govern the purchase and use of the Noordstar AI Opportunity Report, a product of Lumina Fortuna (“Noordstar”, “we”, “us”). By ordering a report, you agree to the terms below. [Placeholder — this document is a template pending review by qualified legal counsel.]",
    sections: [
      {
        h: "1. Nature of the service",
        p: "Noordstar provides strategic advisory services only. The AI Opportunity Report is an analytical and advisory document based on information you provide. We do not implement, build, install, or manage any software, system, or AI solution on your behalf.",
      },
      {
        h: "2. No guarantee of business results",
        p: "The report reflects our professional assessment based on the information provided during your briefing. We make no guarantee, warranty, or representation — express or implied — regarding any specific business outcome, financial result, cost saving, or return on investment arising from the report or from any action taken in reliance on it.",
      },
      {
        h: "3. Client responsibility for implementation",
        p: "Any decision to act on, implement, or disregard the recommendations in the report is solely the responsibility of the client. Noordstar is not liable for the outcome of implementation decisions made independently by the client or by any third-party vendor engaged by the client.",
      },
      {
        h: "4. Payment and refunds",
        p: "Reports are delivered against the pricing stated at checkout. Our Day-1 Snapshot guarantee is described on the Pricing section of this site. [Placeholder — insert full payment terms, invoicing and cancellation policy on legal review.]",
      },
      {
        h: "5. Confidentiality",
        p: "Information you provide is treated as confidential and is used exclusively to prepare your report. [Placeholder — insert full confidentiality and IP ownership terms on legal review.]",
      },
      {
        h: "6. Limitation of liability",
        p: "[Placeholder — insert jurisdiction-specific limitation of liability clause on legal review.]",
      },
      {
        h: "7. Governing law",
        p: "[Placeholder — insert governing law and dispute resolution clause on legal review.]",
      },
      {
        h: "8. Contact",
        p: "For questions about these terms, contact info@noordstar.nl.",
      },
    ],
  },
  common: {
    backHome: "Back to homepage",
  },
};

const nl: typeof en = {
  meta: {
    title:
      "Noordstar — Wat kan AI daadwerkelijk oplossen in uw bedrijf? | Praktisch, onafhankelijk advies voor kleine bedrijven",
    description:
      "Vertel ons wat uw bedrijf vertraagt. Ontvang een gratis eerste check, een Quick Fix van €49, of een volledig onafhankelijk plan — praktisch advies, geen AI-hype.",
  },
  nav: {
    whatYouGet: "Wat u krijgt",
    method: "Bewijs",
    howItWorks: "Hoe het werkt",
    pricing: "Prijzen",
    faq: "FAQ",
    cta: "Vraag uw plan aan",
  },
  hero: {
    eyebrow: "AI voor gewone bedrijven. Normaal uitgelegd.",
    primaryCta: "Vertel ons wat tijd kost →",
    secondaryCta: "Hoe het werkt",
    reassurance:
      "U hoeft AI niet te begrijpen. Dat is onze taak. Geen verkoopgesprekken, geen bureau-pitch.",
    trust:
      "Beoordeeld door een naamgetekende analist · Geleverd binnen 5 werkdagen · 100% onafhankelijk — wij verkopen geen implementatie",
    variants: {
      default: {
        h1: "Iedereen heeft het over AI. Wat zou het daadwerkelijk kunnen oplossen in uw bedrijf?",
        sub: "U heeft geen grote AI-transformatie nodig. Soms bespaart één kleine verandering elke week uren frustrerend werk. Vertel ons wat u in de weg zit — wij vertellen u of het slimmer kan.",
      },
      staff: {
        h1: "Personeelstekort? Een deel van dat werk heeft geen mens nodig.",
        sub: "Routinematige e-mails beantwoorden, offertes opstellen, facturen achterna bellen, planningen maken — wij laten zien welke van deze taken zelfstandig kunnen verlopen, welke niet, en precies waar u moet beginnen. U kiest zelf wie u helpt het te bouwen.",
      },
      admin: {
        h1: "Offertes, facturen, formulieren, follow-ups — hoeveel van uw week is administratie?",
        sub: "Wij brengen in kaart hoe uw bedrijf daadwerkelijk werkt en laten precies zien welke taken geautomatiseerd kunnen worden — zoals een locatiebezoek omzetten in een schriftelijke offerte, of automatisch betalingsherinneringen versturen — en welke dat eerlijk gezegd niet zouden moeten zijn.",
      },
      time: {
        h1: "Beantwoordt u nog steeds elke klant-e-mail zelf?",
        sub: "Routinevragen, afspraken inplannen, orderupdates — wij bepalen wat zonder u kan verlopen, wat niet, en de exacte stappen om het over te dragen. Zo krijgt u uw week terug.",
      },
      margin: {
        h1: "Kunt u de prijzen niet verhogen? Stop dan met betalen voor verspilde uren.",
        sub: "Gegevens overtypen tussen systemen, handmatige planning, facturen die te laat de deur uitgaan — wij sporen de lekken in uw processen op en rangschikken de oplossingen op wat ze u daadwerkelijk opleveren.",
      },
      leaks: {
        h1: "Een offerte die drie dagen te laat wordt verstuurd, is een verloren klant.",
        sub: "Trage offertes, vergeten follow-ups, late facturen — wij laten zien welke hiervan met eenvoudige automatisering op te lossen zijn, welke juist procesveranderingen nodig hebben, en wat u als eerste moet aanpakken.",
      },
    },
  },
  recognition: {
    h2: "Herkent u iets hiervan?",
    items: [
      "Ik krijg 100 e-mails per dag en kan het niet bijbenen.",
      "Elke offerte kost 30 minuten — en het is bijna elke keer dezelfde tekst.",
      "Klanten stellen ons steeds dezelfde vijf vragen.",
      "We verliezen leads omdat niemand eraan denkt om op te volgen.",
      "Iemand kopieert elke dag informatie van e-mails naar Excel.",
      "We verspillen uren aan het achterna zitten van onbetaalde facturen.",
    ],
    closingText:
      "Herkenbaar? De meeste hiervan hebben een eenvoudigere oplossing dan u zou denken — en meestal is daar geen “AI-transformatie” voor nodig.",
    closingLink: "Vertel ons de uwe, gratis →",
  },
  freeCheck: {
    h2: "Start gratis: vertel ons over ÉÉN vervelend probleem",
    body: "Beschrijf één ding in uw bedrijf dat te veel tijd kost. Binnen één werkdag ontvangt u een korte eerste inschatting van ons: hoe wij het probleem begrijpen, waar wij als eerste zouden kijken, en of het waarschijnlijk een eenvoudige zelf-oplossing is of iets groters. Gratis. Geen verplichtingen, geen spam.",
    note: "Eén probleem per check. Voeg geen persoonsgegevens van klanten of vertrouwelijke documenten toe — die hebben wij niet nodig.",
    placeholder:
      "Uw formulier verschijnt hier — koppel TALLY_FORM_URL in components/FreeCheck.tsx.",
  },
  process: {
    h2: "Zo werkt het — en dat is echt zo simpel.",
    steps: [
      {
        title: "U vertelt ons over uw bedrijf",
        text: "een gestructureerde vragenlijst, ±35 minuten, in gewone taal. Wat u doet, hoe het werk verloopt, wat u frustreert.",
      },
      {
        title: "Wij analyseren het",
        text: "met een gestructureerde methode en geavanceerde AI-tools. Een naamgetekende menselijke specialist beoordeelt elke aanbeveling voordat deze bij u terechtkomt.",
      },
      {
        title: "U krijgt een helder plan",
        text: "wat de moeite waard is, wat niet, wat u als eerste moet doen, en precies hoe u het voor elkaar krijgt — zelf of met een leverancier van uw keuze.",
      },
    ],
  },
  example: {
    h2: "Zo ziet dat er in de praktijk uit",
    turns: [
      {
        label: "U vertelt ons",
        text: "“Ik krijg meer dan 100 e-mails per dag. Ik kan het niet bijbenen — ik ben klanten al gaan vragen om me gewoon te WhatsAppen.”",
      },
      {
        label: "Wij onderzoeken",
        text: "welke soorten e-mails er daadwerkelijk binnenkomen, welke steeds terugkomen, wat uw e-mailprogramma al kan, en waar AI daadwerkelijk helpt.",
      },
      {
        label: "U ontvangt",
        text: "“Koop nog niets. Uw inbox heeft sorteerregels nodig, vijf standaardantwoorden, en AI om te concepteren — geen chatbot. Hier is de exacte opzet, wat het kost (waarschijnlijk €0), en wat u NIET moet doen.”",
      },
    ],
    closing:
      "Dat is een Quick Fix. €49. De meeste problemen zijn eenvoudiger dan de mensen die AI verkopen u willen laten geloven.",
  },
  whatYouGet: {
    h2: "Dit heeft u na 5 dagen in handen",
    cards: [
      {
        title: "Uw resultaten in één oogopslag",
        line: "alles belangrijks op één pagina",
      },
      {
        title: "Wat u als eerste moet doen",
        line: "en wat u volledig kunt overslaan",
      },
      {
        title: "Waar AI helpt",
        line: "en waar eerlijk gezegd niet",
      },
      {
        title: "Uw eerste 90 dagen",
        line: "in de juiste volgorde, snelle overwinningen eerst",
      },
      {
        title: "Uw stapsgewijze plan",
        line: "helder genoeg om aan elke leverancier te geven",
      },
      {
        title: "De vragen die u moet stellen",
        line: "zodat geen leverancier u kan overvragen",
      },
    ],
    slides: [
      { title: "Executive Dashboard", caption: "Kansenscore & topprioriteit" },
      { title: "Impact × Inspanning Matrix", caption: "Wat eerst — en wat nooit" },
      { title: "90-dagen Routekaart", caption: "In volgorde, met snelle overwinningen eerst" },
    ],
  },
  independence: {
    h2: "Wij hebben u daarna niets anders te verkopen. Dat is precies het punt.",
    body: "Genoeg bureaus bieden gratis “AI-scans” aan — en hun conclusie is altijd dat u het bureau nodig heeft. Wij implementeren niet, wij verkopen geen software, wij werken niet op basis van retainers. Wij verkopen één ding: eerlijk, onafhankelijk advies. Als het beste antwoord voor uw bedrijf is “sla AI over, verbeter uw proces” — dan is dat precies wat uw plan zal zeggen.",
  },
  timeline: {
    h2: "Van “geen idee” naar “volledig helder” in 5 werkdagen",
    steps: [
      { title: "Bestellen", line: "beveiligd betalen met iDEAL. Bedrijfsnaam + KVK-nummer, klaar." },
      { title: "Vertel ons over uw bedrijf", line: "±35 min vragenlijst, op elk moment op te slaan." },
      {
        title: "Dag 1",
        line: "u ontvangt een eerste snapshot: hoe wij uw bedrijf begrijpen + de grootste kans die wij zien. (Niet wat u verwachtte? Volledige terugbetaling, zonder vragen.)",
      },
      { title: "Dag 3–5", line: "uw volledige plan komt binnen, beoordeeld en ondertekend door uw analist." },
      { title: "Het is van u", line: "voer het zelf uit, of geef het aan een leverancier. Geen verplichtingen." },
    ],
  },
  proof: {
    h2: "Waarom u op het antwoord kunt vertrouwen",
    intro:
      "Elk plan volgt dezelfde methode — de Noordstar-methode™: Begrijpen → Diagnosticeren → Prioriteren → Ontwerpen → Beslissen. Hetzelfde gestructureerde, consistente proces voor elk bedrijf. AI helpt ons snel te werken; een naamgetekende specialist bepaalt wat u bereikt.",
    steps: ["Begrijpen", "Diagnosticeren", "Prioriteren", "Ontwerpen", "Beslissen"],
    tableTitle: "Waarom dit geen antwoord van ChatGPT is",
    tableHead: { generic: "Algemene AI-chat", noordstar: "Noordstar" },
    rows: [
      { generic: "Algemene antwoorden", noordstar: "Analyse op basis van hoe uw bedrijf daadwerkelijk werkt" },
      { generic: "Geen context", noordstar: "Een gestructureerde intake — uw processen, systemen, mensen en doelen" },
      { generic: "Geen prioriteiten", noordstar: "Gerangschikt op wat de moeite waard is — met een duidelijke “sla dit over”-lijst" },
      { generic: "Geen plan", noordstar: "Een stapsgewijze routekaart en implementatiepakket" },
      { generic: "Geen verantwoording", noordstar: "Eén consistente methode, beoordeeld door een naamgetekende menselijke specialist" },
    ],
    closing: "AI helpt ons snel te werken. Een specialist bepaalt wat u bereikt.",
  },
  pricing: {
    h2: "Prijzen",
    free: {
      title: "Gratis Check",
      price: "€0",
      body: "Vertel ons één probleem. Wij vertellen u waar wij zouden kijken en hoe complex het lijkt. Binnen één werkdag.",
      cta: "Start gratis →",
    },
    quickFix: {
      title: "Quick Fix",
      price: "€49",
      badge: "Begin hier",
      body: "Eén probleem. Eén praktisch plan.",
      bullets: [
        "Wat het daadwerkelijk veroorzaakt",
        "De eenvoudigste oplossing die werkt",
        "Stapsgewijze opzet die u zelf kunt uitvoeren",
        "Welke tools (en welke NIET te kopen)",
        "Beoordeeld door een naamgetekende specialist",
        "Geleverd binnen 2 werkdagen",
      ],
      note: "Upgrade binnen 30 dagen naar het volledige plan en uw €49 wordt volledig verrekend.",
      cta: "Vraag mijn Quick Fix aan — €49",
    },
    fullPlan: {
      title: "Volledig Bedrijfsplan",
      price: "€295",
      body: "Meer dan één probleem? Wij kijken naar uw hele bedrijf.",
      bullets: [
        "Uw 3–5 grootste kansen, geprioriteerd",
        "Wat u eerst moet doen, wat kan wachten, wat u kunt overslaan",
        "Wat u zelf kunt doen en waar een professional nodig is",
        "Tools, risico's en een 90-dagen aanvalsvolgorde",
        "Dag-1 snapshot + volledige refund-garantie",
        "Beoordeeld door een naamgetekende specialist",
      ],
      cta: "Vraag het volledige plan aan — €295",
    },
    note: "Alle prijzen excl. BTW. B2B — bedrijfsnaam en KVK-nummer vereist.",
  },
  faq: {
    h2: "Veelgestelde vragen",
    items: [
      { q: "Moet ik AI begrijpen?", a: "Nee. U legt uw bedrijf uit; wij doen de rest." },
      {
        q: "In welke taal is het rapport?",
        a: "Rapporten, de briefing en alle communicatie zijn in het Engels. U mag de briefingvragen gerust in het Nederlands beantwoorden — wij lezen prima Nederlands. Het rapport zelf wordt geleverd in helder Engels, zonder jargon.",
      },
      { q: "Is dit een verkooptrechter voor consultancy?", a: "Nee. Er is niets anders te koop. Dat is precies het punt." },
      { q: "Wat als AI niet geschikt is voor mijn bedrijf?", a: "Dan staat dat in het rapport, met een alternatief." },
      { q: "Wie schrijft het rapport?", a: "Gegenereerd met AI-ondersteuning, beoordeeld en goedgekeurd door een naamgetekende specialist vóór levering." },
      { q: "Hoe worden mijn gegevens behandeld?", a: "Vertrouwelijk, AVG/GDPR-conform, nooit gebruikt voor andere klanten." },
      { q: "Voor welke bedrijfsgrootte is dit bedoeld?", a: "MKB, ongeveer 5–100 medewerkers." },
      { q: "Kan ik achteraf vragen stellen?", a: "Ja. Als iets in uw plan onduidelijk is, stuurt u een korte vervolgvraag en wij verduidelijken dit schriftelijk." },
      {
        q: "Wat is het verschil tussen de Quick Fix en het volledige plan?",
        a: "Quick Fix: u brengt één specifiek probleem in, wij sturen u één praktisch plan daarvoor. Volledig plan: wij kijken naar uw hele bedrijf en prioriteren de 3–5 belangrijkste kansen. Begin klein — uw €49 wordt verrekend als u binnen 30 dagen upgradet.",
      },
      {
        q: "Hoe zit het met terugbetalingen?",
        a: "Quick Fix: als het plan niet bruikbaar is, betalen wij het terug. Volledig plan: onze Dag-1 Snapshot-garantie — als de Dag-1 Snapshot niet aan de verwachting voldoet, volledige terugbetaling. Dit is een B2B-product.",
      },
    ],
  },
  finalCta: {
    h2: "Over 5 werkdagen weet u wat de moeite waard is — en wat niet.",
  },
  footer: {
    line1: "Noordstar is een product van Lumina Fortuna",
    kvk: "KVK [nummer]",
    btw: "BTW [nummer]",
    privacy: "Privacybeleid",
    terms: "Voorwaarden & Disclaimer",
    contactLabel: "Contact",
  },
  reserveModal: {
    quickFixTitle: "Reserveer uw Quick Fix",
    fullPlanTitle: "Reserveer uw Volledig Bedrijfsplan",
    intro:
      "De betaling (iDEAL) wordt momenteel afgerond. Laat uw gegevens achter en wij sturen u een beveiligde betaallink.",
    nameLabel: "Volledige naam",
    companyLabel: "Bedrijf",
    emailLabel: "Zakelijk e-mailadres",
    submit: "Reserveer mijn plek",
    success: "Dank u. Wij hebben uw gegevens ontvangen en nemen spoedig contact met u op met een beveiligde betaallink.",
    close: "Sluiten",
  },
  sampleModal: {
    title: "Een kijkje in het rapport",
    close: "Sluiten",
  },
  langToggle: { en: "EN", nl: "NL" },
  privacy: {
    title: "Privacybeleid",
    updated: "Laatst bijgewerkt: [datum] — concept, in afwachting van juridische toetsing",
    intro:
      "Dit privacybeleid legt uit hoe Lumina Fortuna (“Noordstar”, “wij”, “ons”) informatie verzamelt, gebruikt en beschermt in verband met het Noordstar AI Opportunity Report.",
    sections: [
      {
        h: "1. Gegevens die wij verzamelen",
        p: "Wij verzamelen informatie die u rechtstreeks verstrekt, waaronder contactgegevens (naam, bedrijf, e-mail), bedrijfsinformatie die u indient via onze briefingvragenlijst, en betalingsgerelateerde informatie die wordt verwerkt door onze betaalprovider. [Placeholder — exacte gegevenscategorieën te specificeren bij juridische toetsing.]",
      },
      {
        h: "2. Hoe wij uw gegevens gebruiken",
        p: "Wij gebruiken uw gegevens uitsluitend om uw AI Opportunity Report voor te bereiden en te leveren, om met u te communiceren over uw bestelling, en om te voldoen aan wettelijke en administratieve verplichtingen. Uw bedrijfsinformatie wordt nooit gedeeld met of gebruikt ten behoeve van andere klanten. [Placeholder — bewaartermijnen en wettelijke grondslag onder AVG/GDPR te bevestigen.]",
      },
      {
        h: "3. Opslag en beveiliging van gegevens",
        p: "Gegevens worden opgeslagen met gangbare beveiligingsmaatregelen en worden vertrouwelijk behandeld. [Placeholder — hostinglocatie, subverwerkers en beveiligingsmaatregelen te specificeren bij juridische toetsing.]",
      },
      {
        h: "4. Uw rechten",
        p: "Onder de AVG/GDPR heeft u recht op inzage, correctie of verwijdering van uw persoonsgegevens, en het recht om bezwaar te maken tegen of bepaalde verwerkingen te beperken. [Placeholder — contactpersoon gegevensbescherming en klachtenprocedure toevoegen.]",
      },
      {
        h: "5. Contact",
        p: "Voor privacygerelateerde vragen, neem contact op via info@noordstar.nl. [Placeholder — dit document is een concept in afwachting van toetsing door gekwalificeerd juridisch advies en vormt nog geen definitief, bindend beleid.]",
      },
    ],
  },
  terms: {
    title: "Voorwaarden & Disclaimer",
    updated: "Laatst bijgewerkt: [datum] — concept, in afwachting van juridische toetsing",
    intro:
      "Deze voorwaarden zijn van toepassing op de aankoop en het gebruik van het Noordstar AI Opportunity Report, een product van Lumina Fortuna (“Noordstar”, “wij”, “ons”). Door een rapport te bestellen, gaat u akkoord met onderstaande voorwaarden. [Placeholder — dit document is een concept in afwachting van toetsing door gekwalificeerd juridisch advies.]",
    sections: [
      {
        h: "1. Aard van de dienstverlening",
        p: "Noordstar levert uitsluitend strategisch advies. Het AI Opportunity Report is een analytisch en adviserend document, gebaseerd op de informatie die u verstrekt. Wij implementeren, bouwen, installeren of beheren geen software, systemen of AI-oplossingen namens u.",
      },
      {
        h: "2. Geen garantie op bedrijfsresultaten",
        p: "Het rapport weerspiegelt onze professionele beoordeling op basis van de informatie die tijdens uw briefing is verstrekt. Wij geven geen garantie, waarborg of verklaring — expliciet of impliciet — met betrekking tot enig specifiek bedrijfsresultaat, financieel resultaat, kostenbesparing of rendement dat voortvloeit uit het rapport of uit acties die daarop gebaseerd zijn.",
      },
      {
        h: "3. Verantwoordelijkheid van de klant voor implementatie",
        p: "Elke beslissing om de aanbevelingen uit het rapport op te volgen, te implementeren of naast zich neer te leggen, is uitsluitend de verantwoordelijkheid van de klant. Noordstar is niet aansprakelijk voor de uitkomst van implementatiebeslissingen die zelfstandig worden genomen door de klant of door een externe leverancier die de klant inschakelt.",
      },
      {
        h: "4. Betaling en terugbetaling",
        p: "Rapporten worden geleverd tegen de prijs vermeld bij het afrekenen. Onze Dag-1 Snapshot-garantie staat beschreven in de sectie Prijzen van deze website. [Placeholder — volledige betalingsvoorwaarden, facturering en annuleringsbeleid toevoegen bij juridische toetsing.]",
      },
      {
        h: "5. Vertrouwelijkheid",
        p: "Informatie die u verstrekt wordt vertrouwelijk behandeld en uitsluitend gebruikt om uw rapport voor te bereiden. [Placeholder — volledige vertrouwelijkheids- en IE-bepalingen toevoegen bij juridische toetsing.]",
      },
      {
        h: "6. Beperking van aansprakelijkheid",
        p: "[Placeholder — jurisdictiespecifieke bepaling inzake beperking van aansprakelijkheid toevoegen bij juridische toetsing.]",
      },
      {
        h: "7. Toepasselijk recht",
        p: "[Placeholder — bepaling inzake toepasselijk recht en geschillenbeslechting toevoegen bij juridische toetsing.]",
      },
      {
        h: "8. Contact",
        p: "Voor vragen over deze voorwaarden, neem contact op via info@noordstar.nl.",
      },
    ],
  },
  common: {
    backHome: "Terug naar de homepage",
  },
};

export const translations: Record<Language, typeof en> = { en, nl };
