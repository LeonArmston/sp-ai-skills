# Column Schema Auditor

## Summary

Reviews the column schema of a SharePoint list or library and reports gaps, inconsistencies, or unused columns. Supports both comparison against a defined standard and a general quality audit. Helps teams keep their lists well-structured and consistent as sites evolve.

## Prerequisites

- AI in SharePoint public preview enabled on the site or tenant
- Microsoft 365 Copilot licence
- Navigate to the list or library you want to audit before invoking the skill
- Tools required: `get_current_list_or_library`, `get_list_schema`, `discover_sharepoint_lists`, `get_list_item_metadata`

## How to deploy

[Download SKILL.md](https://raw.githubusercontent.com/LeonArmston/sp-ai-skills/main/samples/list-library/column-schema-auditor/SKILL.md ':ignore')

**Option 1 — Via chat:**
1. Open the AI in SharePoint chat panel on your site
2. Paste the contents of `SKILL.md` and ask the agent to save it:
   > *"Create a skill from the following definition and save it to this site"*

**Option 2 — File upload:**
1. Navigate to `Agent Assets/Skills/` on your site
2. Create a folder named `column-schema-auditor`
3. Upload `SKILL.md` into that folder

## How to use

1. Navigate to the list or library you want to audit
2. In the AI in SharePoint chat, type:
   > *"Run the column schema auditor on this list"*
3. The skill will ask whether you want to compare against a specific standard or run a general quality check
4. If comparing against a standard, describe the required columns when prompted

## Example output

```
Column Schema Audit — Project Tracker
Total columns: 24   |   Populated columns: 19

MISSING COLUMNS (vs. your standard)
  - Budget Owner (Person field) — required by standard, not present
  - RAG Status (Choice: Red/Amber/Green) — required by standard, not present

EXTRA / LEGACY COLUMNS
  - Column1 (Text) — generic name, 0 items populated — recommend review
  - OldCategory (Choice) — not in standard, 3 items populated

QUALITY ISSUES
  - 'Priority' is Text but standard expects Choice
  - 22 columns total — consider reviewing whether all are actively used

RECOMMENDATIONS
  1. Add Budget Owner and RAG Status columns
  2. Rename or remove Column1
  3. Change Priority to a Choice column for consistent filtering
```

## Skill definition

[!code-yaml[](SKILL.md)]

## Tested on

AI in SharePoint Public Preview — May 2026

## Author

[Leon Armston](https://github.com/leonarmston)
