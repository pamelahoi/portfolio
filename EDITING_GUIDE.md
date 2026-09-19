# Pamela Hoi portfolio — editing guide

This is a static GitHub Pages website. You can edit it directly in GitHub without installing anything.

## Files

- `index.html` — page text, navigation, project cards, About and Contact
- `styles.css` — colours, spacing, typography and responsive layout
- `script.js` — project pop-up content and interactions
- `assets/v2/` — all images used by the current design

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

Open `script.js`. Near the top you will see `PLACEHOLDER_PROJECT` and `PROJECTS`.

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
- `blume`

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

## Change homepage, About or Contact text

Open `index.html`, search for the exact sentence and edit it. Keep the surrounding HTML tags intact.

## Use Neue Metana

The Figma file uses Neue Metana. The website currently uses a close system fallback because the licensed web-font file was not included in Figma.

If you own a web licence, upload `NeueMetana-Bold.woff2` to `assets/fonts/`, then add this at the top of `styles.css`:

```css
@font-face {
  font-family: "Neue Metana";
  src: url("assets/fonts/NeueMetana-Bold.woff2") format("woff2");
  font-weight: 700 900;
  font-style: normal;
  font-display: swap;
}
```

Change the `--display` line to:

```css
--display: "Neue Metana", "Arial Black", "Helvetica Neue", sans-serif;
```

## Publish changes

Commit changes to the branch and folder selected under **Settings → Pages**. GitHub Pages redeploys automatically, usually within a few minutes.
