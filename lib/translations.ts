export type Language = "en" | "nl";

const en = {
  meta: {
    title: "Noordstar — AI Opportunity Report for SMEs | Independent AI advice",
    description:
      "A professional, independent analysis for SMEs: where AI will pay off in your business, where it won't, and a step-by-step blueprint to act. Delivered in 5 working days.",
  },
  nav: {
    whatYouGet: "What you get",
    method: "Method",
    howItWorks: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
    cta: "Get your report",
  },
  hero: {
    h1: "Know exactly where AI will pay off in your business — and where it won't.",
    sub: "A professional analysis for SMEs. You explain how your company works. We deliver a prioritized report showing where you lose time and money, which AI opportunities are worth pursuing — and a step-by-step blueprint to act. No sales calls. No implementation agenda.",
    primaryCta: "Get your AI Opportunity Report — €295",
    secondaryCta: "See a sample report",
    trust:
      "Reviewed by a named analyst · Delivered in 5 working days · 100% independent — we don't sell implementation",
  },
  problem: {
    h2: "Everyone says “use AI.” Nobody tells you where.",
    body: "You know AI matters. But between the hype, the tools, and agencies selling their own solutions, one question never gets answered honestly: what is actually worth doing in your business — and what's a waste of money? Free “AI scans” are everywhere. Their conclusion is always the same: hire the agency that made the scan.",
    highlight:
      "This report prevents a €20,000 mistake with a €295 decision.",
  },
  whatYouGet: {
    h2: "One report. Every decision you need.",
    cards: [
      {
        title: "Executive Dashboard",
        line: "your opportunity score and top priority, on page one",
      },
      {
        title: "Impact × Effort Matrix",
        line: "do this first, do this later, never do this",
      },
      {
        title: "Where AI helps — and where it doesn't",
        line: "including non-AI fixes when they're the honest answer",
      },
      {
        title: "90-Day Roadmap",
        line: "sequenced, starting with quick wins",
      },
      {
        title: "Implementation Pack",
        line: "checklists, vendor requirements, and the questions to ask any supplier",
      },
      {
        title: "Your Next 3 Decisions",
        line: "the last page tells you exactly what to do",
      },
    ],
    insideLabel: "Inside the report",
    slides: [
      { title: "Executive Dashboard", caption: "Opportunity score & top priority" },
      { title: "Impact × Effort Matrix", caption: "What to do first — and never" },
      { title: "90-Day Roadmap", caption: "Sequenced, starting with quick wins" },
    ],
  },
  method: {
    h2: "The Noordstar Method™",
    steps: [
      { title: "Understand", line: "we map how your business actually works, from your briefing" },
      { title: "Diagnose", line: "we identify where time and money leak" },
      { title: "Prioritize", line: "every opportunity ranked by impact × effort" },
      { title: "Design", line: "roadmap and blueprint for what's worth doing" },
      { title: "Decide", line: "clear decisions — including what NOT to do" },
    ],
    closing:
      "Every report follows the same auditable process. That's the difference between a methodology and an opinion.",
  },
  buying: {
    h2: "This is not a chatbot answer.",
    intro: "Anyone can ask an AI generic questions. What you're buying here is different:",
    tableHead: { generic: "Generic AI chat", noordstar: "Noordstar" },
    rows: [
      { generic: "Generic answers", noordstar: "Analysis of your business, based on your briefing" },
      { generic: "No context", noordstar: "Structured intake covering operations, systems, people and goals" },
      { generic: "No priorities", noordstar: "Ranked by impact × effort, with a “never do this” list" },
      { generic: "No plan", noordstar: "Roadmap, blueprint and implementation pack" },
      { generic: "No accountability", noordstar: "Standardized method, human expert review, named analyst on every report" },
    ],
    closing: "AI helps us work fast. A specialist decides what reaches you.",
  },
  independence: {
    h2: "We have nothing to sell you afterwards.",
    body: "We don't implement, we don't sell software, we don't take retainers. Our only product is honest advice. If the best answer for your business is “fix your process, skip the AI” — that's exactly what your report will say.",
  },
  howItWorks: {
    h2: "From order to clarity in 5 working days.",
    steps: [
      { title: "Order", line: "secure checkout (iDEAL), business details required" },
      { title: "Briefing", line: "structured questionnaire, ±35 minutes, save anytime" },
      { title: "Day 1", line: "Business Snapshot: our first read of your business and top opportunity" },
      { title: "Day 3–5", line: "Full report, reviewed and signed by your analyst" },
      { title: "Yours forever", line: "implement yourself or with any vendor you choose" },
    ],
  },
  pricing: {
    h2: "Pricing",
    main: {
      title: "AI Opportunity Report",
      price: "€295",
      bullets: [
        "Full diagnostic report",
        "Executive dashboard & scores",
        "Impact × Effort matrix",
        "90-day roadmap",
        "Implementation Pack",
        "Day-1 Business Snapshot",
        "Named analyst review",
      ],
      badge: "iDEAL payment",
      guarantee:
        "Read your Day-1 Snapshot. If it misses the mark: full refund, no questions asked.",
      cta: "Get your AI Opportunity Report — €295",
    },
    plus: {
      title: "Report Plus",
      price: "€495",
      description:
        "everything in the Report, plus one written Q&A round and a vendor shortlist comparison.",
      cta: "Get Report Plus — €495",
    },
    note: "B2B product — company name and KVK number required at checkout.",
  },
  faq: {
    h2: "Frequently asked questions",
    items: [
      { q: "Do I need to understand AI?", a: "No. You explain your business; we do the rest." },
      { q: "Is this a sales funnel for consulting?", a: "No. There is nothing else to buy. That's the point." },
      { q: "What if AI isn't right for my business?", a: "Then the report says so, and shows what to do instead." },
      { q: "Who writes the report?", a: "Generated with AI support, reviewed and approved by a named specialist before delivery." },
      { q: "How is my data handled?", a: "Confidential, GDPR/AVG-compliant, never used for other clients." },
      { q: "What size company is this for?", a: "SMEs, roughly 5–100 employees." },
      { q: "Can I ask questions afterwards?", a: "One written Q&A round is included in Report Plus." },
      { q: "What about refunds?", a: "Our Snapshot guarantee: if the Day-1 Snapshot misses the mark, full refund. This is a B2B product." },
    ],
  },
  finalCta: {
    h2: "In 5 days, you'll know exactly what to do.",
    primaryCta: "Get your AI Opportunity Report — €295",
    secondaryCta: "See a sample report",
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
    title: "Reserve your report",
    intro:
      "Payment (iDEAL) is being finalized. Leave your details and we'll send you a secure checkout link.",
    nameLabel: "Full name",
    companyLabel: "Company",
    emailLabel: "Work email",
    submit: "Reserve my report",
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
    title: "Noordstar — AI Opportunity Report voor het MKB | Onafhankelijk AI-advies",
    description:
      "Een professionele, onafhankelijke analyse voor het MKB: waar AI rendement oplevert in uw bedrijf, waar niet, en een stapsgewijs plan om in actie te komen. Geleverd binnen 5 werkdagen.",
  },
  nav: {
    whatYouGet: "Wat u krijgt",
    method: "Methode",
    howItWorks: "Werkwijze",
    pricing: "Prijzen",
    faq: "FAQ",
    cta: "Vraag uw rapport aan",
  },
  hero: {
    h1: "Weet precies waar AI in uw bedrijf rendement oplevert — en waar niet.",
    sub: "Een professionele analyse voor het MKB. U legt uit hoe uw bedrijf werkt. Wij leveren een geprioriteerd rapport dat laat zien waar u tijd en geld verliest, welke AI-kansen de moeite waard zijn — en een stapsgewijs plan om in actie te komen. Geen verkoopgesprekken. Geen implementatie-agenda.",
    primaryCta: "Vraag uw AI Opportunity Report aan — €295",
    secondaryCta: "Bekijk een voorbeeldrapport",
    trust:
      "Beoordeeld door een naamgetekende analist · Geleverd binnen 5 werkdagen · 100% onafhankelijk — wij verkopen geen implementatie",
  },
  problem: {
    h2: "Iedereen zegt “gebruik AI.” Niemand vertelt u waar.",
    body: "U weet dat AI ertoe doet. Maar tussen de hype, de tools en bureaus die hun eigen oplossingen verkopen, wordt één vraag nooit eerlijk beantwoord: wat is écht de moeite waard in uw bedrijf — en wat is weggegooid geld? Gratis “AI-scans” zijn overal. Hun conclusie is altijd hetzelfde: huur het bureau in dat de scan heeft gemaakt.",
    highlight:
      "Dit rapport voorkomt een fout van €20.000 met een beslissing van €295.",
  },
  whatYouGet: {
    h2: "Eén rapport. Elke beslissing die u nodig heeft.",
    cards: [
      {
        title: "Executive Dashboard",
        line: "uw kansenscore en topprioriteit, op pagina één",
      },
      {
        title: "Impact × Inspanning Matrix",
        line: "doe dit eerst, doe dit later, doe dit nooit",
      },
      {
        title: "Waar AI helpt — en waar niet",
        line: "inclusief oplossingen zonder AI wanneer dat het eerlijke antwoord is",
      },
      {
        title: "90-dagen Routekaart",
        line: "in volgorde, beginnend met snelle overwinningen",
      },
      {
        title: "Implementatiepakket",
        line: "checklists, leverancierseisen en de vragen die u aan elke leverancier moet stellen",
      },
      {
        title: "Uw Volgende 3 Beslissingen",
        line: "de laatste pagina vertelt u precies wat u moet doen",
      },
    ],
    insideLabel: "Een kijkje in het rapport",
    slides: [
      { title: "Executive Dashboard", caption: "Kansenscore & topprioriteit" },
      { title: "Impact × Inspanning Matrix", caption: "Wat eerst — en wat nooit" },
      { title: "90-dagen Routekaart", caption: "In volgorde, met snelle overwinningen eerst" },
    ],
  },
  method: {
    h2: "De Noordstar-methode™",
    steps: [
      { title: "Begrijpen", line: "we brengen in kaart hoe uw bedrijf daadwerkelijk werkt, op basis van uw briefing" },
      { title: "Diagnosticeren", line: "we identificeren waar tijd en geld weglekken" },
      { title: "Prioriteren", line: "elke kans gerangschikt op impact × inspanning" },
      { title: "Ontwerpen", line: "routekaart en blauwdruk voor wat de moeite waard is" },
      { title: "Beslissen", line: "heldere beslissingen — inclusief wat u NIET moet doen" },
    ],
    closing:
      "Elk rapport volgt hetzelfde controleerbare proces. Dat is het verschil tussen een methodiek en een mening.",
  },
  buying: {
    h2: "Dit is geen antwoord van een chatbot.",
    intro: "Iedereen kan een AI algemene vragen stellen. Wat u hier koopt is anders:",
    tableHead: { generic: "Algemene AI-chat", noordstar: "Noordstar" },
    rows: [
      { generic: "Algemene antwoorden", noordstar: "Analyse van uw bedrijf, gebaseerd op uw briefing" },
      { generic: "Geen context", noordstar: "Gestructureerde intake over processen, systemen, mensen en doelen" },
      { generic: "Geen prioriteiten", noordstar: "Gerangschikt op impact × inspanning, met een “doe dit nooit”-lijst" },
      { generic: "Geen plan", noordstar: "Routekaart, blauwdruk en implementatiepakket" },
      { generic: "Geen verantwoording", noordstar: "Gestandaardiseerde methode, beoordeling door een menselijke expert, naamgetekende analist op elk rapport" },
    ],
    closing: "AI helpt ons snel te werken. Een specialist bepaalt wat u bereikt.",
  },
  independence: {
    h2: "Wij hebben u daarna niets te verkopen.",
    body: "Wij implementeren niet, wij verkopen geen software, wij werken niet op basis van retainers. Ons enige product is eerlijk advies. Als het beste antwoord voor uw bedrijf is “verbeter uw proces, sla AI over” — dan is dat precies wat uw rapport zal zeggen.",
  },
  howItWorks: {
    h2: "Van bestelling tot duidelijkheid in 5 werkdagen.",
    steps: [
      { title: "Bestellen", line: "beveiligde checkout (iDEAL), bedrijfsgegevens vereist" },
      { title: "Briefing", line: "gestructureerde vragenlijst, ±35 minuten, op elk moment op te slaan" },
      { title: "Dag 1", line: "Business Snapshot: onze eerste analyse van uw bedrijf en topkans" },
      { title: "Dag 3–5", line: "Volledig rapport, beoordeeld en ondertekend door uw analist" },
      { title: "Blijvend van u", line: "implementeer zelf of met een leverancier van uw keuze" },
    ],
  },
  pricing: {
    h2: "Prijzen",
    main: {
      title: "AI Opportunity Report",
      price: "€295",
      bullets: [
        "Volledig diagnostisch rapport",
        "Executive dashboard & scores",
        "Impact × Inspanning matrix",
        "90-dagen routekaart",
        "Implementatiepakket",
        "Dag-1 Business Snapshot",
        "Beoordeling door naamgetekende analist",
      ],
      badge: "Betalen met iDEAL",
      guarantee:
        "Lees uw Dag-1 Snapshot. Voldoet deze niet aan uw verwachting: volledige terugbetaling, zonder vragen.",
      cta: "Vraag uw AI Opportunity Report aan — €295",
    },
    plus: {
      title: "Report Plus",
      price: "€495",
      description:
        "alles uit het Rapport, plus één schriftelijke Q&A-ronde en een vergelijking van een shortlist leveranciers.",
      cta: "Vraag Report Plus aan — €495",
    },
    note: "B2B-product — bedrijfsnaam en KVK-nummer vereist bij het afrekenen.",
  },
  faq: {
    h2: "Veelgestelde vragen",
    items: [
      { q: "Moet ik AI begrijpen?", a: "Nee. U legt uw bedrijf uit; wij doen de rest." },
      { q: "Is dit een verkooptrechter voor consultancy?", a: "Nee. Er is niets anders te koop. Dat is precies het punt." },
      { q: "Wat als AI niet geschikt is voor mijn bedrijf?", a: "Dan staat dat in het rapport, met een alternatief." },
      { q: "Wie schrijft het rapport?", a: "Gegenereerd met AI-ondersteuning, beoordeeld en goedgekeurd door een naamgetekende specialist vóór levering." },
      { q: "Hoe worden mijn gegevens behandeld?", a: "Vertrouwelijk, AVG/GDPR-conform, nooit gebruikt voor andere klanten." },
      { q: "Voor welke bedrijfsgrootte is dit bedoeld?", a: "MKB, ongeveer 5–100 medewerkers." },
      { q: "Kan ik achteraf vragen stellen?", a: "Eén schriftelijke Q&A-ronde is inbegrepen bij Report Plus." },
      { q: "Hoe zit het met terugbetalingen?", a: "Onze Snapshot-garantie: als de Dag-1 Snapshot niet aan de verwachting voldoet, volledige terugbetaling. Dit is een B2B-product." },
    ],
  },
  finalCta: {
    h2: "Over 5 dagen weet u precies wat u moet doen.",
    primaryCta: "Vraag uw AI Opportunity Report aan — €295",
    secondaryCta: "Bekijk een voorbeeldrapport",
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
    title: "Reserveer uw rapport",
    intro:
      "De betaling (iDEAL) wordt momenteel afgerond. Laat uw gegevens achter en wij sturen u een beveiligde betaallink.",
    nameLabel: "Volledige naam",
    companyLabel: "Bedrijf",
    emailLabel: "Zakelijk e-mailadres",
    submit: "Reserveer mijn rapport",
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
