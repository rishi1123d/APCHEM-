# The Thermal Twins: Enthalpy & Entropy's Excellent Adventure

A thermodynamics road-trip fable for chemistry education.

## Deployment

This site is deployed to GitHub Pages with a custom domain.

### GitHub Pages Configuration

1. The site is built with Next.js 15 using the Static Export feature
2. GitHub Actions automatically builds and deploys the site when changes are pushed to the `main` branch
3. The custom domain `mrmarbryisthebestchemist.xyz` is configured both in GitHub Pages and in the `public/CNAME` file

### DNS Configuration

The domain is configured with the following records on Namecheap:

| Type | Host/Name | Value | TTL |
|------|-----------|-------|-----|
| A | @ | 185.199.108.153 | 30 min |
| A | @ | 185.199.109.153 | 30 min |
| A | @ | 185.199.110.153 | 30 min |
| A | @ | 185.199.111.153 | 30 min |
| CNAME | www | rishi1123d.github.io. | 30 min |

### Local Development

To develop the site locally:

```bash
npm install
npm run dev
```

To build the site locally:

```bash
npm run build
```

The static files will be output to the `out` directory.
