# Pamela Hoi portfolio — editing guide

This is a static GitHub Pages website. You can edit it directly in GitHub without installing anything.

## Files

- `index.html` — page text, navigation, project cards, About and Contact
- `styles.css` — colours, spacing, typography and responsive layout
- `script.js` — project pop-up content and interactions
- `assets/v2/` — all images used by the current design
- `assets/fonts/` — place the Neue Metana webfont here when licensed
- `assets/brand-logos/` — add your brand logo files here
- `assets/case-studies/` — images used by the three Figma project pop-ups

## Edit the scrolling brand logos

The section between the project cards and About Pam contains 20 brand names from your list as **text placeholders**. They are not the official logos yet. Open `index.html`, search for `brand-list`, and edit only the **first** list. `script.js` makes the second copy automatically so the row loops without a jump.

To replace a name with an actual logo, upload its SVG, PNG or WebP file to `assets/brand-logos/`. Then change, for example:

```html
<span class="brand-mark">Spritzer</span>
```

to:

```html
<span class="brand-mark"><img src="assets/brand-logos/spritzer.svg" alt="Spritzer"></span>
```

Repeat for the logos you have. Keep at most 20 entries; you can mix actual logos with text placeholders while you collect the files. For clear display, use SVGs or transparent PNGs and crop out large empty margins. The display size is controlled by `.brand-mark img` in `styles.css`.

WebP files also work. Keep every logo inside the first `.brand-list` container, as a direct child in a `.brand-mark` span. The CSS keeps the row horizontal even if you place an `<img>` directly inside the list. If your live site stacks logos vertically, replace its `styles.css` with the one from this package and check that the page points to it with `<link rel="stylesheet" href="styles.css">`.

The line loops automatically, pauses when hovered, and becomes a manually scrollable row for visitors who prefer reduced motion. To change its speed, edit `animation: brand-scroll 80s linear infinite` in `styles.css`; a smaller number moves faster.

## Change a homepage project image

Replace the relevant file inside `assets/v2/` while keeping its filename:

- `reserve.png`
- `youth.png`
- `bori-card.png`
- `stash-kit.png`
- `g412.png`
- `blume.png`

In GitHub, open `assets/v2`, choose **Add file → Upload files**, upload the replacement and commit it. PNG, JPG and WebP all work, but if you change the file extension you must update the matching `src` in `index.html`.

## Change a project-card title

Open `index.html` and search for the existing title:

```html
<span>StashAway Reserve<br>Rebranding</span>
```

Edit the words and commit the change. `<br>` creates a line break.

## Add a real case study to a project pop-up

StashAway Reserve, Youth Alive Malaysia and the StashAway Employee Onboarding Kit now have dedicated, scrollable Figma-inspired pop-ups in `index.html`. Search for these IDs to edit their visible text:

- `reserve-case-study`
- `youth-alive-case-study`
- `stashaway-kit-case-study`

Their visual boards are stored here:

- `assets/case-studies/reserve/figma-card.png`
- `assets/case-studies/youth-alive/figma-card.png`
- `assets/case-studies/stashaway-kit/figma-card.png`

To refresh one after editing Figma, export the matching Figma frame as a PNG and replace the corresponding `figma-card.png` file while keeping the same filename. Export at 2× or 3× for a sharper live website. The CSS crops these boards into the relevant visual sections; if you substantially change the frame height, adjust the matching `*-slice` values in `styles.css`.

For other unfinished cards, open `script.js`. Near the top you will see `PLACEHOLDER_PROJECT` and `PROJECTS`.

Every unfinished card currently falls back to the Bori placeholder. To customise StashAway Reserve, change `PROJECTS` to:

```js
const PROJECTS = {
  bori: PLACEHOLDER_PROJECT,
  reserve: {
    title: "StashAway Reserve Rebranding",
    category: "BRAND REFRESH • 2024",
    summary: "Write the project introduction here.",
    image: "assets/v2/reserve-case-study.png",
    imageAlt: "Description of the image",
    role: "Write your role here.",
    approach: "Write your approach here."
  }
};
```

Then upload `reserve-case-study.png` into `assets/v2/`.

The project keys come from `data-project` in `index.html`:

- `reserve`
- `youth-alive`
- `bori`
- `stashaway-kit`
- `g412`
- `spritzer`

Repeat the same object structure for each project.

## Add more images inside the pop-up

Upload images to `assets/v2/`. In `index.html`, find this line:

```html
<img class="project-hero" id="modal-image" ...>
```

Additional permanent images can be placed below it:

```html
<img class="project-hero" src="assets/v2/your-new-image.png" alt="Describe the image">
```

This adds the same extra image to every pop-up. If each project needs a different gallery, extend the `PROJECTS` data with an image gallery.

## Use the Spritzer video case-study pop-up

The Figma-inspired Spritzer layout is already written in `index.html`. It contains six rounded portrait `<video>` elements, arranged as three videos, four white content cards, and three more videos.

The former Blume Perfume homepage card has already been replaced with **Spritzer Social Media** and connected to this layout using:

```html
<button class="project-card" type="button" data-project="spritzer" aria-haspopup="dialog">
```

Its cover image temporarily remains `assets/v2/blume.png`. When your Spritzer cover is ready, upload it to `assets/v2/` and change that card's `<img src="...">` in `index.html`.

Upload your MP4 files into `assets/videos/` using these exact names:

- `spritzer-01.mp4`
- `spritzer-02.mp4`
- `spritzer-03.mp4`
- `spritzer-04.mp4`
- `spritzer-05.mp4`
- `spritzer-06.mp4`

Or edit the source directly in `index.html`:

```html
<video controls playsinline preload="metadata">
  <source src="assets/videos/your-video.mp4" type="video/mp4">
</video>
```

For reliable playback on GitHub Pages, use MP4 files encoded with H.264 video and AAC audio. Keep each portfolio clip compressed; large videos will make the pop-up slow to load. The modal automatically pauses videos when it closes.

## Change homepage, About or Contact text

Open `index.html`, search for the exact sentence and edit it. Keep the surrounding HTML tags intact.

## Use Neue Metana

Headings, project titles and bold text are set to Neue Metana; the rest of the site uses Helvetica. The CSS is ready, but no font file was included in the Figma export. Visitors will see Helvetica until you add the webfont.

If you have a Neue Metana **webfont licence**, upload the bold WOFF2 file to `assets/fonts/` and name it exactly `NeueMetana-Bold.woff2`. The existing `@font-face` rule at the top of `styles.css` will load it automatically; no CSS edit is needed. If your licensed file has a different name, either rename it or change that URL in `styles.css`. Refresh with a hard reload after GitHub Pages publishes the change. The headings now use Arial Black as a bold fallback while the font file is absent, but that fallback is not Neue Metana.

The typeface creator sells [Neue Metana webfont licences](https://dirtylinestudio.com/product/neue-metana-font-family/); the free/demo version is described as personal use only. A font available inside Figma is not automatically a file that GitHub Pages can serve.

To change the overall page scale further, edit the pixel values and `clamp()` sizes in `styles.css`. The current layout is about 90% of the original, with mobile body text kept readable.

## Publish changes

Commit changes to the branch and folder selected under **Settings → Pages**. GitHub Pages redeploys automatically, usually within a few minutes.
