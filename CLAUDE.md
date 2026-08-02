# CLAUDE.md

Guidance for AI assistants working in this repository.

## What this is

A single-page marketing/portfolio site for **Suhan Creatives**, a graphic design
studio based in Mbeya, Tanzania. React 18 + Vite 6 + Tailwind CSS 3, no backend,
no router, no tests. Everything renders client-side from one page of stacked
sections.

The npm package name is still `designer-portfolio` (the original template name);
the product name is Suhan Creatives.

## Commands

```bash
npm install        # first-time setup (npm ci fails — package-lock is out of sync)
npm run dev        # Vite dev server on http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the built dist/ locally
```

There is **no linter, no formatter, and no test suite**. Nothing will catch a
mistake for you, so verify changes by running `npm run build` (it must succeed)
and eyeballing `npm run dev`.

`@types/react` / `@types/react-dom` are installed but this is a plain JavaScript
project — there is no TypeScript and no `tsconfig.json`. `react-icons` is a
declared dependency but is **not imported anywhere**; icons come from
`lucide-react`.

## Architecture

```
index.html            # Vite entry; loads Inter from Google Fonts; sets <title>
src/main.jsx          # ReactDOM.createRoot → <App /> in StrictMode
src/App.jsx           # composes every section in fixed order
src/index.css         # Tailwind directives + .text-gradient / .bg-gradient-brand
src/assets/logo.jpeg  # brand mark, imported by Navigation.jsx
src/components/
  Navigation.jsx      # fixed glass navbar, IntersectionObserver scroll-spy, mobile menu
  GridBackground.jsx  # decorative fixed grid + glow layers (position:fixed, -z-10)
  Hero.jsx            # full-viewport headline + two CTAs
  Work.jsx            # 6-project grid (hardcoded array)
  About.jsx           # bio + skills chips
  Services.jsx        # 4 service cards (hardcoded array)
  Contact.jsx         # contact details + mailto/WhatsApp form
  Footer.jsx          # copyright + anchor links
```

### Layout shell

`App.jsx` renders `<Navigation />` outside a rounded, clipped container that holds
everything else:

```jsx
<div className="relative overflow-x-hidden bg-black">
  <Navigation />
  <div className="mx-3 rounded-3xl overflow-hidden bg-[#0d0d0f] relative">
    <GridBackground /> …sections… <Footer />
  </div>
</div>
```

The `mx-3 rounded-3xl overflow-hidden` wrapper is the site's signature "inset
card" look. `overflow-hidden` on it clips anything a section tries to bleed
outside, and `overflow-x-hidden` on the outer div is what keeps the oversized
blur orbs from creating a horizontal scrollbar. Removing either will visibly
break the layout.

### Navigation and section IDs

Nav links, scroll-spy, and footer links are all keyed to four section IDs:
`work`, `about`, `services`, `contact`. If you add, rename, or remove a section
you must update **three** places: the section's `id`, the `navLinks` array and
the `sectionIds` array in `Navigation.jsx`, and the anchor links in
`Footer.jsx`.

Scroll offset for the fixed navbar is handled twice — `scroll-padding-top: 120px`
in `index.css` and `scroll-mt-24` on each section. Keep both in sync with the
navbar's `h-20` height when changing it.

`Navigation.jsx` styles the active link with `var(--accent-blue, #60a5fa)`. That
CSS custom property is **never defined anywhere**, so the fallback `#60a5fa` is
what actually renders. Either define `--accent-blue` in `index.css` or switch to
the Tailwind `accent-blue` token — don't add more references to the undefined
variable.

### GridBackground

Uses `position: fixed` with `-z-10` for the base, grid lines, glow orbs, and edge
fade. Because it's fixed rather than absolute, the background does not scroll
with the page and is not actually constrained by the rounded container it sits
inside. It is purely decorative and safe to reorder, but any new section that
needs to sit above it requires a positive `z-index` or `relative z-10`.

## Conventions

- **Components**: one per file, `PascalCase.jsx`, arrow-function declaration,
  `export default` at the bottom. No prop types, no barrel/index files, no
  shared UI primitives — each section is self-contained.
- **Imports**: relative paths only (`./components/Hero`), no path aliases.
- **Styling**: Tailwind utility classes inline. Reach for arbitrary values
  (`bg-[#0d0d0f]`, `w-[600px]`) rather than extending the config. Only two custom
  classes exist, both in `index.css`: `.text-gradient` (blue→orange text) and
  `.bg-gradient-brand`. Inline `style={{}}` is used only where a value is
  computed at runtime.
- **Animation**: `framer-motion` everywhere. Above-the-fold content
  (Navigation, Hero) uses `initial` + `animate` with staggered `delay`; every
  section below the fold uses `initial` + `whileInView` with
  `viewport={{ once: true }}`. Follow that split — don't use `animate` for
  content the user has to scroll to.
- **Icons**: `lucide-react` only, sized via the `size` prop.
- **Content**: section data lives in a plain array at the top of its component
  (`projects` in `Work.jsx`, `services` in `Services.jsx`, `skills` in
  `About.jsx`, `contactInfo` in `Contact.jsx`). There is no CMS and no data
  layer — editing content means editing the component.
- **Two-tone alternation**: cards carry a `color: 'blue' | 'orange'` field and
  components branch on it with ternaries to pick accent classes. Note
  `Services.jsx` uses the string `'yellow'` for what is styled as orange —
  matching the existing ternaries matters more than the literal. Because Tailwind
  scans source text, accent classes must appear as complete literals; never build
  them by interpolation (`text-accent-${color}` will not be generated).

## Brand

The logo (`src/assets/logo.jpeg`) is a grey "S" monogram on black with one blue
and one orange dot, wordmark "SUHAN" in orange and "CREATIVES" in blue.

`tailwind.config.js` defines the tokens:

| Token | Value |
| --- | --- |
| `primary` | `#0a0a0a` |
| `primary-light` | `#1a1a1a` |
| `accent-blue` (also `accent` default) | `#5BA3E0` |
| `accent-orange` | `#F5A623` |

Fonts: Inter for both `font-sans` and `font-display`, loaded from Google Fonts in
`index.html` (not self-hosted).

Three blue/orange palettes are currently in play and they do not match: the
Tailwind tokens above, the `.text-gradient` / `.bg-gradient-brand` gradients in
`index.css` (`#5B9FFF` → `#FFB84D`), and the raw `rgba(59, 130, 246, …)` /
`rgba(251, 146, 60, …)` grid lines in `GridBackground.jsx`. If you touch brand
color, consolidate onto the Tailwind tokens rather than adding a fourth variant.

## Real vs. placeholder content

Only these details are verified as belonging to the real business — they appear
in `Contact.jsx` and are wired into working links:

- Email `suhancreative@gmail.com`
- Phone / WhatsApp `+255 625 726 195` (WhatsApp uses the digits `255625726195`)
- Location: Mbeya, Tanzania
- Service lines: Brand Identity, Digital Design, Print & Packaging, Art Direction

Everything else is inherited template filler and should be replaced with real
material before this is presented as a finished portfolio:

- All six projects in `Work.jsx` are invented, with **Unsplash stock photos** hot-linked
  from `images.unsplash.com`. None are Suhan Creatives work.
- The portrait in `About.jsx` is also a hot-linked Unsplash stock photo.
- The `About.jsx` bio is generic agency copy, including an unverified
  "over 8 years of experience" claim.
- Voice is inconsistent: `About.jsx` and `Contact.jsx` say "we/our"; `Services.jsx`
  says "What I Do" / "I offer".
- The header renders "Suhan" white + "Creatives" gradient, which inverts the
  logo's orange/blue wordmark.

Do **not** invent projects, clients, testimonials, statistics, or years of
experience to fill these in. Ask the user for real assets and copy. There is no
public web presence for Suhan Creatives that can be used as a source — the
repository itself is the only record.

## Contact form behavior

`Contact.jsx` has no backend. Both buttons are `type="button"` and call
`handleSubmit(e, method)`:

- **Email** → builds a `mailto:` link with `subject` and `message`, then sets
  `window.location.href`.
- **WhatsApp** → opens `https://wa.me/255625726195?text=<message>` in a new tab.

Consequences to be aware of before changing it: the `required` attributes on the
inputs never fire because the form is never submitted, so both handlers work on
an empty form; and the `name` and `email` fields are collected into state but
**never sent** — only `subject` and `message` reach the mailto link, and only
`message` reaches WhatsApp. Fixing that means either including those fields in
the message body or wiring a real form backend.

## Git workflow

Default branch is `main`. Work on a feature branch and push with
`git push -u origin <branch>`. Only open a pull request when explicitly asked.

## Gotchas

- `npm ci` fails — the lockfile is out of sync with `package.json`. Use
  `npm install`.
- The build warns that `caniuse-lite` data is stale. Harmless; ignore it unless
  asked to refresh.
- The JS bundle is ~283 kB (91 kB gzipped), largely framer-motion. There is no
  code splitting — everything ships in one chunk.
- Every image except the logo is hot-linked from Unsplash, so the site does not
  render fully offline and depends on a third party staying up.
