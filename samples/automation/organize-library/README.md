# Organize Library

## Summary

End-to-end SharePoint document library organisation in seven steps — classifies files (via the file-classifier skill), applies brand-consistent column formatting with colour-coded pills and data bars, creates filtered views per content type, colours folders, and sets up notification rules for overdue items. Reads the site's `SHAREPOINT.md` context file for brand colours.

> This skill originated in the [pnp/sharepoint-skills](https://github.com/pnp/sharepoint-skills/tree/main/Skills/organize-library) repository and has been contributed to the sp-ai-skills community library.

## Prerequisites

- AI in SharePoint public preview enabled on the site or tenant
- Microsoft 365 Copilot licence
- The **file-classifier** skill must be saved on the site first (this skill calls it via `load_skill`)
- Optionally, a `SHAREPOINT.md` context file on the site with your brand colours
- Navigate to the library you want to organise before invoking the skill
- Tools required: `get_current_list_or_library`, `get_list_schema`, `get_list_item_metadata`, `load_skill`, `apply_column_formatting`, `apply_view_formatting`, `create_or_update_list`, `create_or_update_rule`, `get_user_info`, `set_context_file`

## How to deploy

[Download SKILL.md](https://raw.githubusercontent.com/LeonArmston/sp-ai-skills/main/samples/automation/organize-library/SKILL.md ':ignore')

**Option 1 — Via chat:**
1. Open the AI in SharePoint chat panel on your site
2. Paste the contents of `SKILL.md` and ask the agent to save it:
   > *"Create a skill from the following definition and save it to this site"*

**Option 2 — File upload:**
1. Navigate to `Agent Assets/Skills/` on your site
2. Create a folder named `organize-library`
3. Upload `SKILL.md` into that folder

## How to use

1. Deploy the **file-classifier** skill first (this skill depends on it)
2. Navigate to the library you want to organise
3. In the AI in SharePoint chat, type:
   > *"Organise this library"*
4. Review the assessment and approve before changes are made
5. Watch each step complete with visual feedback

## What you get

After running:
- Colour-coded folders matching your brand
- FileClassification column with coloured pills
- Metadata columns with data bars, overdue highlights, and icon-based status pills
- Three separate filtered views: Contracts, Invoices, Purchase Orders
- Notification rules that email reviewers when items become Overdue

## Skill definition

[!code-yaml[](SKILL.md)]

## Tested on

AI in SharePoint Public Preview — May 2026

## Author

[pnp community](https://github.com/pnp/sharepoint-skills)
