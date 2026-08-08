# QueerPathways

QueerPathways web application and product dataset repository.

## Overview

This repository contains the source code for QueerPathways, including web pages, scripts, feed generators, and product listing documentation.

## Project Structure

- `src/` - React frontend application files and components
- `public/` - Static assets, headers, redirects, and feed output
- `scripts/` - Utility scripts (`generate-feed.mjs`, `verify-env.mjs`)
- `Lube.csv` - Lubricant product inventory and pricing catalog
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

### Lube Catalog

`Lube.csv` contains 20 product records. Each row has eight columns:

1. `SKU`
2. `Name`
3. `Price`
4. `Release Date`
5. `Stock`
6. `Category`
7. `Vendor`
8. `Description`

SKUs must be unique. Prices use decimal notation, while release date and stock values are integers. Descriptions containing commas must remain CSV-quoted.

### Flagship Catalog

`six flagship STD.com listings.csv` contains seven Shopify-compatible product records. Each row has 33 columns covering handles, descriptions, vendors, tags, publication settings, variants, inventory, pricing, images, SEO metadata, and Google Shopping labels.

Handles must be unique. Every product row must retain all 33 columns, including empty placeholders for optional image fields.

### CSV Validation

Run this structural check before importing or committing catalog changes:

```bash
python3 - <<'PY'
import csv
from pathlib import Path

expected_widths = {
	Path("Lube.csv"): 8,
	Path("six flagship STD.com listings.csv"): 33,
}

for path, expected_width in expected_widths.items():
	with path.open(newline="", encoding="utf-8-sig") as file:
		rows = list(csv.reader(file, strict=True))

	assert rows, f"{path} is empty"
	assert all(len(row) == expected_width for row in rows), (
		f"{path} contains a row with an unexpected column count"
	)
	print(f"PASS: {path} ({len(rows) - 1} products, {expected_width} columns)")
PY
```
