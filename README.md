# QueerPathways

QueerPathways web application and product dataset repository.

## Overview

This repository contains the source code for QueerPathways, including web pages, scripts, feed generators, and product listing documentation.

## Project Structure

- `src/` - React frontend application files and components
- `public/` - Static assets, headers, redirects, and feed output
- `scripts/` - Utility scripts (`generate-feed.mjs`, `verify-env.mjs`)
- `six flagship STD.com listings.csv` - Flagship product catalog CSV data import file
- `pathways/`, `modalities/`, `library/`, `soundtrack/` - Content directories
- `netlify/` & `netlify.toml` - Netlify deployment configuration

## Development

Install dependencies:
```bash
npm install
```

Start dev server:
```bash
npm run dev
```

Type check and lint:
```bash
npm run lint
```

Build for production:
```bash
npm run build
```

## Data Files

- `six flagship STD.com listings.csv`: Contains Shopify/e-commerce compatible product catalog records for flagship gear listings, including titles, descriptions, pricing, SKUs, inventory settings, and media URLs.
