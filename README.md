# RAMSA · رَمْسَة

RAMSA is a bilingual, browser-based student innovation demo for Sincerely Emirati 2026 in Ajman. It connects early warning for heritage practices with documentation, immersive learning, workshops, and apprenticeship. Arabic is the default. The header language switch persists across all routes.

## Run locally

Use Node.js 22 or later from this directory. The project has zero package dependencies.

```sh
npm run check
npm start
```

Open the local address printed by the server. If PowerShell restricts npm scripts, use `npm.cmd run check` and `npm.cmd start`.

The government register, review actions, learner pathway and artisan drafts are illustrative. Local actions persist in the same browser. The immersive views are 2D, with optional device speech and on-screen scripts in each language. Original prototype videos have Emirati Arabic narration. The site has no accounts, live booking or live risk model.

## Deploy through GitHub Pages

1. Push this source to the repository's `main` branch, including `.github/workflows`.
2. In repository **Settings → Pages**, set **Source** to **GitHub Actions**.
3. In **Actions**, run **Deploy RAMSA to GitHub Pages** on `main`. Subsequent pushes to `main` also deploy.
4. Open the deployment URL recorded by the successful `github-pages` environment. Check the Arabic home page, English switch, direct hash routes and video playback at that URL.

The workflow publishes `site/` only. Relative asset paths and hash routes support project subpaths.

## Source materials

The implementation draws on the 31-slide early-warning presentation and the 15-slide Ajman entry form. The two embedded videos are included as submitted prototype media. The seven supplied AI-generated Future Visions concepts are included as WebP derivatives. The underwater image is cropped from one concept. The original entry decks contain personal information and are kept outside the repository.

[Contribution guide](CONTRIBUTING.md) · [Agent tasks](TASKS.md)

