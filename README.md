# amirjebali.com

Portfolio of Amir Jebali, film editor. Static site built with [Astro](https://astro.build), hosted on GitHub Pages.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Add or edit a work

Everything is in `src/data/works.json`. One entry per work:

```json
{
  "id": "my-new-film",
  "title": "My New Film",
  "category": "film",
  "year": 2027,
  "with": "Director Name, School",
  "role": "Picture and sound edit",
  "description": "One or two sentences.",
  "credits": [{ "label": "Director", "value": "Director Name" }],
  "video": { "provider": "youtube", "id": "VIDEO_ID" },
  "links": [{ "label": "IMDb", "url": "https://www.imdb.com/title/tt0000000/" }],
  "still": "my-new-film.jpg"
}
```

- `id` becomes the address: `amirjebali.com/work/my-new-film/`.
- `category` is `film`, `post` (post-production and sound) or `music` (music videos).
- `video.provider` is `youtube`, `vimeo` or `drive`. Add `"protected": true` for password-protected Vimeo videos.
- **Never write a viewing password in this repository: it is public.**
- Works are sorted newest first. Works from the same year keep the order they have in the file.
- `still` is optional: put a 16:9 JPG in `public/stills/`. Without it, YouTube works use the YouTube thumbnail and the others show a slate.

The build checks every entry and stops with a clear message if a field is missing or misspelled.

## Bio and contact

`src/data/site.ts`. To offer the CV for download, add `public/cv.pdf` and set `cv: 'cv.pdf'`.

## Publish

Push to `main`. The GitHub Action builds the site and deploys it to GitHub Pages in about a minute.
