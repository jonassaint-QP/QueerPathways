# QueerPathways

QueerPathways web application and product dataset repository.

## Overview

This repository contains the source code for QueerPathways, including web pages, scripts, feed generators, and product listing documentation.

## Project Structure

- `src/` - React frontend application files and components
- `public/` - Static assets, headers, redirects, and feed output
- `scripts/` - Utility scripts (`generate-feed.mjs`, `verify-env.mjs`)
- `Core 300.csv` - Combined source catalog for the Core 300 product collection
- `Starting 300.csv` - Normalized current product list with pricing and image paths
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

### Core 300 Catalog

`Core 300.csv` preserves the supplied Core 300 source data. It is a combined working file rather than a single import-ready CSV: the first section uses a 25-column Shopify product schema, while later sections use an eight-column catalog schema (`SKU`, `Name`, `Wholesale`, `Retail`, `Category`, `Persona`, `Vendor`, and `Description`). Normalize the sections into separate, consistently quoted files before importing them into Shopify or another catalog system.

### Starting 300 Catalog

`Starting 300.csv` is the normalized current product list. It contains 65 unique products and uses nine consistently quoted columns: `SKU`, `Name`, `Wholesale`, `Retail`, `Category`, `Persona`, `Vendor`, `Image Src`, and `Description`. The normalized file removes wrapper text and export marker characters from the supplied source while preserving the product data.

#### Catalog Update: August 7, 2026

- Added 65 products from the supplied `Starting 300.CSV` export.
- Removed the export title, private-use marker characters, trailing spaces, and inconsistent line endings.
- Repaired CSV quoting around descriptions containing commas and names containing inch marks.
- Preserved source order, SKUs, names, prices, categories, personas, vendors, image paths, and descriptions.
- Validated nine columns per row, unique SKUs, non-negative two-decimal prices, normalized `/images/products/` paths, and canonical UTF-8/LF encoding.

Two same-name pairs remain intentionally separate because their SKUs, pricing, personas, and images differ:

- `BC-FDA8` and `BC-FDA8-2`
- `IDDXTM-04` and `IDDXTM-04-2`

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
	Path("Starting 300.csv"): 9,
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
