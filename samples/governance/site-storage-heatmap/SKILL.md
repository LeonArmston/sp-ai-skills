---
name: site-storage-heatmap
description: Generates an interactive HTML site map showing storage breakdown and hot/cold activity heatmap across all document libraries, lists, and site pages. Saves the file to the site library and navigates the user to it.
category: governance
tools_required:
  - get_user_info
  - discover_sharepoint_lists
  - get_list_item_metadata
  - get_list_schema
  - create_list_items
  - navigate_to_url
tested_on: AI in SharePoint Public Preview (May 2026)
author: pnp community
source: https://github.com/pnp/sharepoint-skills/tree/main/Skills/site-storage-heatmap
---

# Site Storage Heatmap

Generate an interactive HTML dashboard showing storage allocation and activity patterns across the entire SharePoint site. The output is a self-contained HTML file saved to the site's document library.

**Important:** The saved HTML file must be downloaded and opened locally for the JavaScript interactivity to work. SharePoint strips inline JavaScript from files viewed in the browser.

## Step 1 — Identify the current user

Use `get_user_info` to retrieve the current user's first name. This will be used in the output filename: `{FirstName}-Site-Storage-Heatmap.html`

Also retrieve the current system date. Never hardcode dates.

## Step 2 — Discover all site containers

Use `discover_sharepoint_lists` to identify all containers on the site:
- Document libraries
- Lists
- Site pages library

Record the internal name, display name, and type for each container.

## Step 3 — Collect file-level data

For each container, use `get_list_item_metadata` to retrieve file-level metrics. Parallelise calls where possible to minimise wait time. For each file record:
- File name
- File size (bytes)
- File type / extension
- Last modified date
- Created date
- Modified by (user)

If a container has more than 500 items, sample the first 500 and note the limitation in the report.

## Step 4 — Classify activity by recency tier

For each file, classify its activity tier based on the last modified date relative to today:
- **Hot** — modified within the last 7 days
- **Warm** — modified within the last 30 days (but not Hot)
- **Cool** — modified within the last 90 days (but not Warm)
- **Cold** — not modified in over 90 days

Use these colour codes:
- Hot → `#C7242B` (red)
- Warm → `#E87C2B` (amber)
- Cool → `#3A86C8` (blue)
- Cold → `#8A8886` (grey)

## Step 5 — Aggregate per-container statistics

For each container compute:
- Total item count
- Total storage (bytes, formatted as KB/MB/GB)
- Storage breakdown by file type (top 5 types)
- Item count per recency tier
- Average file age (days since last modification)
- Largest file name and size

## Step 6 — Compute site-wide rollup

Summarise across all containers:
- Total containers
- Total items
- Total storage
- Items by recency tier (count and percentage)
- Top 5 largest containers by storage
- Top 5 most active containers (most Hot + Warm files)

## Step 7 — Generate the HTML dashboard

Create a single self-contained HTML string with embedded CSS and JavaScript. No external CDN or framework dependencies. The dashboard must include:

**Header section:**
- Site name and report generation date/time
- Current user name
- Site-wide summary: total containers, total items, total storage

**Site-wide stacked bar chart:**
- Horizontal stacked bar showing Hot/Warm/Cool/Cold proportions for the whole site
- Legend with item counts and percentages per tier

**Three-column layout:**
- Column 1: Document Libraries
- Column 2: Lists
- Column 3: Site Pages

Each container card shows:
- Container name and type icon
- Total items and total storage
- Stacked mini-bar (Hot/Warm/Cool/Cold)
- Top 3 file types by count

**Click-through drill-down:**
- Clicking a container card opens a modal showing:
  - Full file type distribution (pie or bar)
  - Per-tier item list (file names, sizes, last modified dates)
  - Largest files in this container

All colours, spacing, and typography must use a clean, professional style consistent with Fluent UI / Microsoft 365 aesthetics.

## Step 8 — Save and navigate

Use `create_list_items` to save the HTML file to the site's default document library in a folder named "storage heatmap" (create the folder if it doesn't exist).

Name the file: `{FirstName}-Site-Storage-Heatmap.html`

After saving, use `navigate_to_url` to open the file location for the user.

Remind the user: *"To view the interactive dashboard, download the HTML file and open it in your browser. SharePoint removes inline JavaScript, so the interactive features won't work in the browser preview."*
