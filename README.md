# Noordstar

Landing page for **Noordstar**, an independent AI Opportunity Report for SMEs.
Built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

- Single page with anchor navigation (hero, problem, what you get, method,
  comparison, independence, how it works, pricing, FAQ, final CTA)
- EN / NL language toggle (Dutch is the default; NL copy is a best-effort
  translation and should be reviewed by a native editor before launch)
- Mobile-first, minimal animation, deep navy + white + amber/gold palette
- `/privacy` and `/terms` pages with placeholder legal copy marked for
  legal review
- "Reserve your report" email-capture modal in place of live checkout
  (payment integration comes later — see **Next steps** below)

## Getting started

Requirements: Node.js 18.18+ (or 20+) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # lint
```

## Project structure

```
app/
  layout.tsx        # fonts, SEO metadata, OG tags, analytics placeholder
  page.tsx           # assembles all landing page sections
  privacy/page.tsx    # Privacy Policy (placeholder legal copy)
  terms/page.tsx      # Terms & Disclaimer (placeholder legal copy)
components/           # one component per section + shared UI (header,
                       # modals, FAQ accordion, pricing cards, icons)
lib/
  translations.ts      # single source of truth for all EN/NL copy
  language-context.tsx # language toggle state (persisted to localStorage)
  modal-context.tsx     # reserve / sample-report modal state
```

All copy lives in `lib/translations.ts`. Edit it there rather than in the
components — every component reads its strings from this dictionary via
`useLanguage()`.

## Deploying to Vercel

### Option A — via the Vercel dashboard

1. Push this repository to GitHub (already done if you're reading this on
   the `claude/noordstar-landing-page-n0w0zf` branch).
2. Go to [vercel.com/new](https://vercel.com/new) and import the
   `moniquemattos-collab/noordstar-site` repository.
3. Vercel auto-detects Next.js — leave the default build command
   (`next build`) and output settings as-is.
4. Add environment variables if you're enabling analytics (see below),
   then click **Deploy**.
5. Every push to the connected branch redeploys automatically; pull
   requests get their own preview URL.

### Option B — via the Vercel CLI

```bash
npm i -g vercel
vercel        # first run: link/create the project, deploy a preview
vercel --prod # deploy to production
```

### Custom domain

In the Vercel project, go to **Settings → Domains** and add your domain
(e.g. `noordstar.nl`), then follow the DNS instructions Vercel provides.

## Environment variables (optional)

Copy `.env.example` to `.env.local` and fill in the values you need:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Enables the Plausible analytics snippet |
| `NEXT_PUBLIC_GA_ID` | Enables the GA4 analytics snippet |

The actual `<script>` tags are commented out in `app/layout.tsx` — set the
relevant variable(s) and uncomment the matching snippet when you're ready
to turn analytics on. Remember to add the same variables in the Vercel
project settings (**Settings → Environment Variables**) before deploying.

## Next steps before launch

- **Payment**: the pricing CTAs currently open a "Reserve your report"
  form that just collects name / company / email
  (`components/ReserveModal.tsx`). Replace the placeholder `onSubmit`
  handler with your iDEAL / Mollie / Stripe checkout integration.
- **Briefing questionnaire**: a Tally/Typeform embed placeholder is
  commented in `components/ReserveModal.tsx` — swap in the real form ID
  once the questionnaire is built.
- **Analytics**: uncomment and configure Plausible or GA4 in
  `app/layout.tsx` as described above.
- **Legal copy**: `/privacy` and `/terms` contain placeholder text and
  bracketed notes (`[Placeholder — ...]`) that must be reviewed and
  finalized by qualified legal counsel before launch, along with the KVK
  and BTW numbers in the footer.
- **NL translation**: the Dutch copy in `lib/translations.ts` (the `nl`
  object) is a best-effort translation and should be proofread by a
  native Dutch editor.
- **Sample report images**: the "Inside the report" carousel and lightbox
  currently render CSS-based mockups (`components/ReportSlideVisual.tsx`).
  Replace these with real report-page screenshots when available.
