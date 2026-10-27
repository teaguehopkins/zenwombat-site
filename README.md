# zenwombat.com

The Zen Wombat studio homepage: one static page linking to the studio's browser games.

- Save the Art: https://zenwombat.itch.io/save-the-art
- Legends of Loot: https://legendsofloot.zenwombat.com
- Vector: https://vector.zenwombat.com

## Run it

```sh
python3 -m http.server 8080 --directory site   # http://localhost:8080
```

There is no build step. Pushing to `main` deploys `site/` to GitHub Pages (`.github/workflows/pages.yml`).
Because it deploys through Actions, the custom domain (`zenwombat.com`) is set in the repo's Pages settings;
`site/CNAME` is only a record of it.

## Adding a game

Add a `<li class="row row--yourgame" data-row>` to the menu in `site/index.html`, give it `--accent` and
`--field` colours in `site/styles.css`, and add a `VideoGame` entry to the JSON-LD in the page head.

A game that isn't out yet gets the same row without `data-play`: a `.stamp` badge in the title and a `.soon` status line
where Play would be, with `tabindex="-1"` on the `<li>` so the arrow keys can still land on it.
