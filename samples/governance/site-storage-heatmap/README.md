# Site Storage Heatmap

## Summary

Generates an interactive HTML dashboard showing storage allocation and activity patterns across every document library, list, and site pages library on your SharePoint site. Files are colour-coded by activity recency (Hot/Warm/Cool/Cold), with click-through drill-downs per container. The output is saved as a self-contained HTML file in your document library.

> This skill originated in the [pnp/sharepoint-skills](https://github.com/pnp/sharepoint-skills/tree/main/Skills/site-storage-heatmap) repository and has been contributed to the sp-ai-skills community library.

## Prerequisites

- AI in SharePoint public preview enabled on the site or tenant
- Microsoft 365 Copilot licence
- Tools required: `get_user_info`, `discover_sharepoint_lists`, `get_list_item_metadata`, `get_list_schema`, `create_list_items`, `navigate_to_url`

> **Note:** Download the generated HTML file and open it locally to use the interactive features. SharePoint strips inline JavaScript from browser previews.

## How to deploy

[Download SKILL.md](https://raw.githubusercontent.com/LeonArmston/sp-ai-skills/main/samples/governance/site-storage-heatmap/SKILL.md ':ignore')

**Option 1 — Via chat:**
1. Open the AI in SharePoint chat panel on your site
2. Paste the contents of `SKILL.md` and ask the agent to save it:
   > *"Create a skill from the following definition and save it to this site"*

**Option 2 — File upload:**
1. Navigate to `Agent Assets/Skills/` on your site
2. Create a folder named `site-storage-heatmap`
3. Upload `SKILL.md` into that folder

## How to use

1. In the AI in SharePoint chat on any page of the site, type:
   > *"Generate a site storage heatmap"*
2. The skill discovers all containers, collects file metrics, and generates the HTML dashboard
3. The file is saved to a "storage heatmap" folder in your document library
4. Download the HTML file and open it in your browser for full interactivity

## Example output

The generated dashboard shows:

```
Leon-Site-Storage-Heatmap.html
Generated: 5 May 2026  |  Leon Armston

SITE SUMMARY
Containers: 8  |  Total items: 1,247  |  Total storage: 4.2 GB

Activity breakdown: ████░░░░░░░░░░░░░░░░
  Hot  (≤7d):   89 items  (7%)
  Warm (≤30d): 203 items (16%)
  Cool (≤90d): 312 items (25%)
  Cold (>90d): 643 items (52%)

DOCUMENT LIBRARIES
┌─────────────────────┬──────────┬────────────┐
│ Contracts           │ 234 items│ 1.1 GB     │ ████░░░░░░ (18% Hot)
│ Shared Documents    │ 489 items│ 2.3 GB     │ ██░░░░░░░░ (8% Hot)
│ Agent Assets        │  12 items│ 0.1 MB     │ ████████░░ (72% Hot)
└─────────────────────┴──────────┴────────────┘
```

## Skill definition

[!code-yaml[](SKILL.md)]

## Tested on

AI in SharePoint Public Preview — May 2026

## Author

[pnp community](https://github.com/pnp/sharepoint-skills)
