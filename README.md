# Runzhe Zhang — Academic Homepage

An English academic website based on [Astro Academia](https://github.com/maiobarbero/astro_academia). It includes a homepage, research projects, and publications. The template is available under the [MIT License](LICENSE).

## Preview locally

From this directory, run:

```powershell
npm.cmd ci
npm.cmd run dev
```

Open the local URL shown in the terminal, usually `http://localhost:4321/`. Run `npm.cmd run build` to generate the static site in `dist/`.

## Update the content

- `src/data/research.ts`: the three research projects and their results.
- `src/data/cv.ts`: publications and public paper links.
- `src/settings.ts`: name, research interests, email, and site settings.
- `src/pages/`: page structure and copy.

The site displays only the email address as contact information. FlowLM currently has an [arXiv paper link](https://arxiv.org/abs/2605.20199); no public link has been supplied for SMART.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this directory to its `main` branch. Naming the repository `your-username.github.io` gives it a short URL.
2. Under **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. `.github/workflows/deploy.yml` will build and deploy the site. It supports both user sites and project sites.

Check the publication statuses and public email before publishing. This local repository is not connected to your GitHub account.
