# Salween Solutions Company Website

Static company website built with Jekyll and hosted on Cloudflare Pages.

**Website:** [www.salweensolutions.com](https://www.salweensolutions.com)

## Requirements

- Ruby **3.2.0**, as specified in `.ruby-version`.
- Bundler **2.6.9**, as recorded in `Gemfile.lock`.
- Dependencies from `Gemfile` and the committed `Gemfile.lock`, including Jekyll through the `github-pages` gem and WEBrick for local serving.

Run the following commands from the repository root. Use the project's Ruby version before installing Bundler or dependencies. No npm installation is required.

## Local Development

Install the matching Bundler version and locked dependencies:

```sh
gem install bundler -v 2.6.9
BUNDLE_FROZEN=true bundle install
```

Start the development server:

```sh
PAGES_ENV=dotcom JEKYLL_ENV=development bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Open [http://127.0.0.1:4000](http://127.0.0.1:4000). Jekyll rebuilds the site when source files change; restart the server after changing `_config.yml`.

Some navigation links use the full production URL, so they open the live website during local preview.

## Production Build

```sh
PAGES_ENV=dotcom JEKYLL_ENV=production BUNDLE_FROZEN=true bundle exec jekyll build
```

The generated site is written to `_site/`, which is ignored by Git. Keep `PAGES_ENV=dotcom` for this site's GitHub metadata integration so asset URLs remain rooted at `/` instead of gaining an unintended repository prefix.

Commit intentional dependency changes together with the updated `Gemfile.lock`. Frozen installation fails if `Gemfile` and the lockfile disagree rather than silently resolving different dependencies.

## Deployment

Cloudflare Pages project **`salweensolutions`** is connected to **`salween/salween.github.io`**. Updates pushed or merged into **`main`** trigger automatic production deployments.

### Cloudflare Pages Settings

| Setting | Value |
| --- | --- |
| Framework | Jekyll |
| Build system | Version 3 |
| Production branch | `main` |
| Root directory | Repository root; leave the path setting blank |
| Build command | `bundle exec jekyll build` |
| Build output directory | `_site` |
| `RUBY_VERSION` | `3.2.0` |
| `JEKYLL_ENV` | `production` |
| `PAGES_ENV` | `dotcom` |
| `BUNDLE_FROZEN` | `true` |

Review deployment status and build logs in the Cloudflare dashboard under **Workers & Pages → salweensolutions → Deployments**.

### Domains

- Primary website: [https://www.salweensolutions.com](https://www.salweensolutions.com).
- Pages project hostname: [https://salweensolutions.pages.dev](https://salweensolutions.pages.dev).
- Both `salweensolutions.com` and `www.salweensolutions.com` are attached as custom domains. The Cloudflare HTTPS apex-to-WWW redirect uses **301** and preserves the path and query string.
- `_config.yml` uses `url: "https://www.salweensolutions.com"` and `baseurl: ""`; `CNAME` contains `www.salweensolutions.com`. Keep these aligned with the primary domain. Custom-domain attachment and redirect rules are managed separately in Cloudflare.

## Repository Layout

| Path | Purpose |
| --- | --- |
| `index.md` | Homepage content |
| `_layouts/default.html` | Shared HTML layout and navigation |
| `_sass/` | Sass styles and Bootstrap sources |
| `assets/` | CSS entry points, JavaScript, images, and other static assets |
| `_config.yml` | Jekyll configuration and production URL |
| `Gemfile` / `Gemfile.lock` | Ruby dependencies and locked versions |
| `CNAME` | Primary custom-domain hostname |
