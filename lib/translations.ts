export type Language = "en" | "nl";

const en = {
  meta: {
    title: "Noordstar — One business problem. One practical AI fix. €49",
    description:
      "Describe one thing that's wasting time in your business. Get a short, practical plan within 2 business days — reviewed by a named specialist. €49, full refund if it's not useful.",
  },
  nav: {
    product: "Example",
    howItWorks: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
  },
  hero: {
    eyebrow: "AI for normal businesses. Explained normally.",
    h1: "Everyone keeps talking about AI. What could it actually fix in your business?",
    sub: "You don't need a big AI transformation. Sometimes one small change saves hours of frustrating work every week. Tell us what's getting in your way — we'll tell you whether there's a smarter way to do it.",
    reassurance:
      "You don't need to understand AI. That's our job. No sales calls, no agency pitch.",
    trust:
      "Reviewed by a named specialist · Delivered within 2 business days · 100% independent — we don't sell implementation",
    primaryCta: "Tell us the problem — €49",
    secondaryCta: "See how it works ↓",
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
    closing:
      "Every one of these has been solved before — usually with something much simpler than an “AI transformation.” That's what a Quick Fix is for.",
  },
  freeCheck: {
    h2: "Start free: tell us about ONE annoying problem",
    body: "Describe one thing in your business that takes too much time. Within one business day, you'll get a short first assessment from us: how we understand the problem, where we'd look first, and whether it's likely a simple do-it-yourself fix or something bigger. Free. No strings, no spam.",
    note: "One problem per check. Please don't include customer personal data or confidential documents — we don't need them.",
    placeholder:
      "Your form will appear here — connect TALLY_FORM_URL in components/FreeCheck.tsx.",
  },
  productDemo: {
    h2: "One problem. One practical fix. €49.",
    intro:
      "You describe one thing that's wasting your time. Within 2 business days you get a short, practical plan — reviewed by a named specialist. Here's a real example:",
    cardLabel: "Quick Fix plan · Sample",
    problemLabel: "The problem",
    problemText:
      "“I get 100+ emails a day. I can't keep up — I tell customers to just WhatsApp me.”",
    foundLabel: "What we found",
    foundText:
      "It's not an email problem — it's a sorting problem. Four different streams land in one pile, and the valuable 10% drowns in the routine 90%.",
    fixLabel: "The simplest fix",
    fixText:
      "Sorting rules → five template replies → AI for drafting (not sending). No chatbot. No new software.",
    diyLabel: "Do it yourself",
    diyText: "3 steps, ±2 hours, this week.",
    difficultyLabel: "Difficulty",
    difficultyValue: "Easy",
    costLabel: "Likely cost",
    costValue: "€0–25/month",
    dontDoLabel: "Don't do",
    dontDoText:
      "Don't buy a chatbot. Don't switch email providers. Don't start a CRM project.",
    closing: "Have something like this in your business?",
  },
  process: {
    h2: "How it works",
    steps: [
      {
        title: "Tell us the problem",
        text: "describe it in your own words, plus a few quick questions (which tools you use, how often it happens). ±5 minutes.",
      },
      {
        title: "Pay €49",
        text: "secure checkout, iDEAL. Excl. VAT, B2B.",
      },
      {
        title: "We investigate",
        text: "AI helps us analyse fast; a named human specialist reviews everything before it reaches you.",
      },
      {
        title: "Your plan arrives within 2 business days",
        text: "what we found, what we'd do, how to do it yourself, what it'll cost, what NOT to do, and when you'd need professional help.",
      },
    ],
    guarantee:
      "If your plan isn't practical and usable, we refund it. Simple as that.",
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
    body: "We don't implement, we don't sell software, we don't take commissions from tools we recommend. If the honest answer is “you don't need AI for this” — that's what your plan will say.",
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
    title: "Quick Fix",
    price: "€49 excl. VAT",
    body: "One problem. One practical plan.",
    bullets: [
      "What's actually causing it",
      "The simplest solution that works",
      "Step-by-step, do-it-yourself instructions",
      "What it'll cost and what NOT to buy",
      "Reviewed by a named specialist",
      "Delivered within 2 business days",
      "Not usable? Full refund.",
    ],
    cta: "Tell us the problem — €49",
    note: "B2B — company name and KVK number at checkout.",
  },
  faq: {
    h2: "Frequently asked questions",
    items: [
      { q: "Do I need to understand AI?", a: "No. You explain your business; we do the rest." },
      {
        q: "What if AI isn't the right answer for my problem?",
        a: "Then your plan says so, and shows the simpler fix instead. That happens more often than you'd think.",
      },
      {
        q: "What if my problem is actually five problems?",
        a: "We'll tell you honestly. For problems that span the whole business, we offer a broader analysis — we'll propose it if it genuinely fits, never as a default upsell.",
      },
      { q: "Who writes the plan?", a: "Generated with AI support, reviewed and approved by a named specialist before delivery." },
      {
        q: "What language?",
        a: "Reports, the briefing and all communication are in English. You're welcome to answer briefing questions in Dutch — we read Dutch fine. The report itself is delivered in clear, jargon-free English.",
      },
      { q: "How is my data handled?", a: "Confidential, GDPR/AVG-compliant, never used for other clients." },
      {
        q: "Refunds?",
        a: "If your plan isn't practical and usable, we refund your €49. No forms, no fight.",
      },
    ],
  },
  finalCta: {
    h2: "Start with one annoying problem.",
    sub: "Fifteen minutes from now, it can be our problem instead of yours.",
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
    title: "Reserve your Quick Fix",
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
    title: "Noordstar — Eén bedrijfsprobleem. Eén praktische AI-oplossing. €49",
    description:
      "Beschrijf één ding dat tijd kost in uw bedrijf. Ontvang binnen 2 werkdagen een kort, praktisch plan — beoordeeld door een naamgetekende specialist. €49, volledige terugbetaling als het niet bruikbaar is.",
  },
  nav: {
    product: "Voorbeeld",
    howItWorks: "Hoe het werkt",
    pricing: "Prijzen",
    faq: "FAQ",
  },
  hero: {
    eyebrow: "AI voor gewone bedrijven. Normaal uitgelegd.",
    h1: "Iedereen heeft het over AI. Wat zou het daadwerkelijk kunnen oplossen in uw bedrijf?",
    sub: "U heeft geen grote AI-transformatie nodig. Soms bespaart één kleine verandering elke week uren frustrerend werk. Vertel ons wat u in de weg zit — wij vertellen u of het slimmer kan.",
    reassurance:
      "U hoeft AI niet te begrijpen. Dat is onze taak. Geen verkoopgesprekken, geen bureau-pitch.",
    trust:
      "Beoordeeld door een naamgetekende specialist · Geleverd binnen 2 werkdagen · 100% onafhankelijk — wij verkopen geen implementatie",
    primaryCta: "Vertel ons het probleem — €49",
    secondaryCta: "Bekijk hoe het werkt ↓",
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
    closing:
      "Elk van deze is al eerder opgelost — meestal met iets veel eenvoudigers dan een “AI-transformatie.” Daar is een Quick Fix voor bedoeld.",
  },
  freeCheck: {
    h2: "Start gratis: vertel ons over ÉÉN vervelend probleem",
    body: "Beschrijf één ding in uw bedrijf dat te veel tijd kost. Binnen één werkdag ontvangt u een korte eerste inschatting van ons: hoe wij het probleem begrijpen, waar wij als eerste zouden kijken, en of het waarschijnlijk een eenvoudige zelf-oplossing is of iets groters. Gratis. Geen verplichtingen, geen spam.",
    note: "Eén probleem per check. Voeg geen persoonsgegevens van klanten of vertrouwelijke documenten toe — die hebben wij niet nodig.",
    placeholder:
      "Uw formulier verschijnt hier — koppel TALLY_FORM_URL in components/FreeCheck.tsx.",
  },
  productDemo: {
    h2: "Eén probleem. Eén praktische oplossing. €49.",
    intro:
      "U beschrijft één ding dat uw tijd kost. Binnen 2 werkdagen ontvangt u een kort, praktisch plan — beoordeeld door een naamgetekende specialist. Hier is een echt voorbeeld:",
    cardLabel: "Quick Fix-plan · Voorbeeld",
    problemLabel: "Het probleem",
    problemText:
      "“Ik krijg meer dan 100 e-mails per dag. Ik kan het niet bijbenen — ik zeg tegen klanten dat ze me maar moeten WhatsAppen.”",
    foundLabel: "Wat wij vonden",
    foundText:
      "Het is geen e-mailprobleem — het is een sorteerprobleem. Vier verschillende stromen komen in één hoop terecht, en de waardevolle 10% verdrinkt in de routinematige 90%.",
    fixLabel: "De eenvoudigste oplossing",
    fixText:
      "Sorteerregels → vijf standaardantwoorden → AI om te concepteren (niet te versturen). Geen chatbot. Geen nieuwe software.",
    diyLabel: "Zelf doen",
    diyText: "3 stappen, ±2 uur, deze week.",
    difficultyLabel: "Moeilijkheidsgraad",
    difficultyValue: "Makkelijk",
    costLabel: "Verwachte kosten",
    costValue: "€0–25/maand",
    dontDoLabel: "Niet doen",
    dontDoText:
      "Koop geen chatbot. Stap niet over van e-mailprovider. Start geen CRM-project.",
    closing: "Heeft u zoiets in uw bedrijf?",
  },
  process: {
    h2: "Zo werkt het",
    steps: [
      {
        title: "Vertel ons het probleem",
        text: "beschrijf het in uw eigen woorden, plus een paar korte vragen (welke tools u gebruikt, hoe vaak het voorkomt). ±5 minuten.",
      },
      {
        title: "Betaal €49",
        text: "beveiligde checkout, iDEAL. Excl. BTW, B2B.",
      },
      {
        title: "Wij onderzoeken",
        text: "AI helpt ons snel te analyseren; een naamgetekende menselijke specialist beoordeelt alles voordat het bij u terechtkomt.",
      },
      {
        title: "Uw plan komt binnen 2 werkdagen",
        text: "wat wij vonden, wat wij zouden doen, hoe u het zelf kunt uitvoeren, wat het kost, wat u NIET moet doen, en wanneer u een professional nodig heeft.",
      },
    ],
    guarantee:
      "Is uw plan niet praktisch en bruikbaar? Dan betalen wij het terug. Zo simpel is het.",
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
    body: "Wij implementeren niet, wij verkopen geen software, wij nemen geen commissies van tools die wij aanbevelen. Als het eerlijke antwoord is “u heeft hier geen AI voor nodig” — dan is dat precies wat uw plan zal zeggen.",
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
    title: "Quick Fix",
    price: "€49 excl. BTW",
    body: "Eén probleem. Eén praktisch plan.",
    bullets: [
      "Wat het daadwerkelijk veroorzaakt",
      "De eenvoudigste oplossing die werkt",
      "Stapsgewijze, zelf uit te voeren instructies",
      "Wat het kost en wat u NIET moet kopen",
      "Beoordeeld door een naamgetekende specialist",
      "Geleverd binnen 2 werkdagen",
      "Niet bruikbaar? Volledige terugbetaling.",
    ],
    cta: "Vertel ons het probleem — €49",
    note: "B2B — bedrijfsnaam en KVK-nummer bij het afrekenen.",
  },
  faq: {
    h2: "Veelgestelde vragen",
    items: [
      { q: "Moet ik AI begrijpen?", a: "Nee. U legt uw bedrijf uit; wij doen de rest." },
      {
        q: "Wat als AI niet het juiste antwoord is voor mijn probleem?",
        a: "Dan zegt uw plan dat, en laat het de eenvoudigere oplossing zien. Dat gebeurt vaker dan u zou denken.",
      },
      {
        q: "Wat als mijn probleem eigenlijk vijf problemen zijn?",
        a: "Dat vertellen wij u eerlijk. Voor problemen die uw hele bedrijf raken, bieden wij een bredere analyse aan — wij stellen dit voor als het echt past, nooit als standaard upsell.",
      },
      { q: "Wie schrijft het plan?", a: "Gegenereerd met AI-ondersteuning, beoordeeld en goedgekeurd door een naamgetekende specialist vóór levering." },
      {
        q: "Welke taal?",
        a: "Rapporten, de briefing en alle communicatie zijn in het Engels. U mag de briefingvragen gerust in het Nederlands beantwoorden — wij lezen prima Nederlands. Het rapport zelf wordt geleverd in helder Engels, zonder jargon.",
      },
      { q: "Hoe worden mijn gegevens behandeld?", a: "Vertrouwelijk, AVG/GDPR-conform, nooit gebruikt voor andere klanten." },
      {
        q: "Terugbetalingen?",
        a: "Is uw plan niet praktisch en bruikbaar? Dan betalen wij uw €49 terug. Geen formulieren, geen gedoe.",
      },
    ],
  },
  finalCta: {
    h2: "Begin met één vervelend probleem.",
    sub: "Over vijftien minuten kan het ons probleem zijn in plaats van het uwe.",
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
    title: "Reserveer uw Quick Fix",
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
