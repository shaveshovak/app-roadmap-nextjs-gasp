# GitHub Pages Deployment

This project is configured for GitHub Pages static hosting.

## GitHub Settings

1. Push the project to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` -> `Pages`.
4. Set `Source` to `GitHub Actions`.

If deployment fails with `Get Pages site failed`, `Creating Pages deployment failed`,
or `HttpError: Not Found`, GitHub Pages is not enabled for the repository yet, or
the source is not set to `GitHub Actions`.

If deployment fails with `Resource not accessible by integration`, GitHub did not
allow the workflow token to enable Pages automatically. Open:

```txt
https://github.com/shaveshovak/app-roadmap-nextjs-gasp/settings/pages
```

Then enable Pages and choose `GitHub Actions` as the source.

## Repository Project Page

If the site will live at:

```txt
https://your-username.github.io/repository-name/
```

add a repository variable:

```txt
NEXT_PUBLIC_BASE_PATH=/repository-name
```

For this repository, use:

```txt
NEXT_PUBLIC_BASE_PATH=/app-roadmap-nextjs-gasp
```

Create it in `Settings` -> `Secrets and variables` -> `Actions` -> `Variables`.

For a user or organization site like:

```txt
https://your-username.github.io/
```

leave `NEXT_PUBLIC_BASE_PATH` unset.

## Local Static Build

```bash
npm run build:pages
```

The static output is generated in the `out` folder.
