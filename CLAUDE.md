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
npm install        # first-time setup (npm ci also works)
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
src/index.css         # Tailwind directives, :root accent vars, .section-shell/.section-inner
src/assets/logo.jpeg  # brand mark, imported by Navigation.jsx
src/components/
  Navigation.jsx      # fixed glass navbar, IntersectionObserver scroll-spy, mobile menu
  GridBackground.jsx  # decorative grid + glow layers (absolute, z-0, inside the card)
  Hero.jsx            # headline + two CTAs
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
  <div className="mx-3 mb-3 rounded-3xl overflow-hidden relative isolate">
    <GridBackground />                {/* z-0, paints the base surface */}
    <div className="relative z-10">…sections… <Footer /></div>
  </div>
</div>
```

The `mx-3 rounded-3xl overflow-hidden` wrapper is the site's signature "inset
card" look. `overflow-hidden` clips anything a section tries to bleed outside,
and `overflow-x-hidden` on the outer div keeps the oversized blur orbs from
creating a horizontal scrollbar. Removing either will visibly break the layout.

Three things here are load-bearing and easy to undo by accident:

- The card must **not** set its own background. `GridBackground` paints the base
  `#0d0d0f`. Putting `bg-[#0d0d0f]` back on the card covers the grid completely.
- `isolate` creates the stacking context that keeps `GridBackground` at z-0
  behind the content instead of behind the page.
- Sections live inside a `relative z-10` wrapper so they stack above the grid.

The navbar's `left-3 right-3` deliberately matches the card's `mx-3` so their
edges line up. Change one and you must change the other.

### Navigation and section IDs

Nav links, scroll-spy, and footer links are all keyed to four section IDs:
`work`, `about`, `services`, `contact`. If you add, rename, or remove a section
you must update **three** places: the section's `id`, the `navLinks` array and
the `sectionIds` array in `Navigation.jsx`, and the anchor links in
`Footer.jsx`.

Scroll offset for the fixed navbar is handled in two places — `scroll-padding-top:
7rem` on `html` and `scroll-mt-28` baked into `.section-shell`. Keep both in sync
with the navbar height (`h-16 md:h-20` plus `mt-3`) if you change it.

### GridBackground

`absolute inset-0 z-0` inside the card: base surface, two offset grid layers,
three glow orbs spread down the page, and a bottom fade. Purely decorative and
`pointer-events-none`.

It previously used `position: fixed` with `-z-10`, which put it behind the card's
own opaque background — the grid never rendered at all. If the grid disappears
again, that layering is the first thing to check.

## Conventions

- **Components**: one per file, `PascalCase.jsx`, arrow-function declaration,
  `export default` at the bottom. No prop types, no barrel/index files, no
  shared UI primitives — each section is self-contained.
- **Imports**: relative paths only (`./components/Hero`), no path aliases.
- **Styling**: Tailwind utility classes inline. Reach for arbitrary values
  (`bg-[#0d0d0f]`, `w-[600px]`) rather than extending the config. Inline
  `style={{}}` only where a value is computed at runtime.
- **Section rhythm**: every section uses the `.section-shell` /`.section-inner`
  pair from `index.css` (`section-shell` = padding, gutters and `scroll-mt-28`;
  `section-inner` = `max-w-6xl mx-auto`). Use them rather than hand-rolling
  per-section padding — that is what previously left Work on different gutters
  from everything else.
- **No two-accent gradients.** Blue and orange are near-complementary, so
  interpolating between them greys out at the midpoint in sRGB and oklab, and
  detours through cyan or magenta in oklch. Emphasis words and CTAs use *solid*
  accent colours, alternating blue/orange section to section. `index.css` carries
  a comment saying so; don't reintroduce `.text-gradient`.
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

The same two accents are also mirrored as CSS custom properties (`--accent-blue`,
`--accent-orange`) on `:root` in `index.css`, which is what `GridBackground`'s
rgba grid lines are derived from. Everything is on one palette now — if you touch
brand colour, change the Tailwind token and the `:root` variable together rather
than introducing a third value.

The header wordmark renders "Suhan" orange and "Creatives" blue to match the
logo lockup.

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

- The build warns that `caniuse-lite` data is stale. Harmless; ignore it unless
  asked to refresh.
- The JS bundle is ~283 kB (91 kB gzipped), largely framer-motion. There is no
  code splitting — everything ships in one chunk.
- Every image except the logo is hot-linked from Unsplash, so the site does not
  render fully offline and depends on a third party staying up.
