# Library Cleanup

## Summary

Four-phase document library organisation agent. Scans for duplicates, bad names, empty folders and excessive nesting, recommends a clean structure with before/after comparison, reads actual file content to propose meaningful renames (never guesses), then executes with a numbered checklist the user can follow step by step.

> This skill originated in the [pnp/sharepoint-skills](https://github.com/pnp/sharepoint-skills/tree/main/Skills/library-cleanup) repository and has been contributed to the sp-ai-skills community library.

## Prerequisites

- AI in SharePoint public preview enabled on the site or tenant
- Microsoft 365 Copilot licence
- Navigate to the library you want to clean up before invoking the skill
- Tools required: `get_current_list_or_library`, `get_list_item_metadata`, `fetch_file`, `update_list_items`, `delete_list_item`, `create_or_update_list`

## How to deploy

[Download SKILL.md](https://raw.githubusercontent.com/LeonArmston/sp-ai-skills/main/samples/list-library/library-cleanup/SKILL.md ':ignore')

**Option 1 — Via chat:**
1. Open the AI in SharePoint chat panel on your site
2. Paste the contents of `SKILL.md` and ask the agent to save it:
   > *"Create a skill from the following definition and save it to this site"*

**Option 2 — File upload:**
1. Navigate to `Agent Assets/Skills/` on your site
2. Create a folder named `library-cleanup`
3. Upload `SKILL.md` into that folder

## How to use

1. Navigate to the library you want to clean up
2. In the AI in SharePoint chat, type:
   > *"Clean up this library"*
3. Review the Phase 1 issues report and the Phase 2 proposed structure
4. Approve the plan when ready — the agent will execute with a live checklist
5. Review the Phase 4 impact report

## Example output

**Phase 1 — Issues found:**
```
Organisation Score: 42/100

Issues identified:
  Duplicate files:   6  (–30 pts)
  Empty folders:     4  (–12 pts)
  Bad names:         9 files, 3 folders  (–30 pts)
  Stale files:      12 files not modified in 2+ years
```

**Phase 2 — Proposed structure:**
```
BEFORE                          AFTER
────────────────────────────    ──────────────────────────
📁 Contracts                   📁 Contracts
  📁 2023                         Supplier Agreement - Contoso 2024.docx
    📁 Archive                    NDA - Alpine Suppliers Ltd.docx
      old stuff.docx              MSA - Woodgrove Bank.docx
📁 New Folder                  📁 Invoices
  Copy of invoice.docx            Invoice 1042 - Contoso - Apr 2025.pdf
  invoice.docx (DUPLICATE)        Credit Note 87 - Alpine.pdf
```

## Skill definition

[!code-yaml[](SKILL.md)]

## Tested on

AI in SharePoint Public Preview — May 2026

## Author

[pnp community](https://github.com/pnp/sharepoint-skills)
