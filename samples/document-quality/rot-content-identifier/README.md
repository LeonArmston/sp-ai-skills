# ROT Content Identifier

## Summary

Scans a document library and flags Redundant, Outdated, or Trivial (ROT) content to support governance and clean-up efforts. Helps site owners identify what to archive, delete, or consolidate without manually reviewing every file.

## Prerequisites

- AI in SharePoint public preview enabled on the site or tenant
- Microsoft 365 Copilot licence
- Navigate to the document library you want to scan before invoking the skill
- Tools required: `get_current_list_or_library`, `get_list_item_metadata`, `fetch_file`, `qna_on_list`

## How to deploy

[Download SKILL.md](https://raw.githubusercontent.com/LeonArmston/sp-ai-skills/main/samples/document-quality/rot-content-identifier/SKILL.md ':ignore')

**Option 1 — Via chat:**
1. Open the AI in SharePoint chat panel on your site
2. Paste the contents of `SKILL.md` and ask the agent to save it:
   > *"Create a skill from the following definition and save it to this site"*

**Option 2 — File upload:**
1. Navigate to `Agent Assets/Skills/` on your site
2. Create a folder named `rot-content-identifier`
3. Upload `SKILL.md` into that folder

## How to use

1. Navigate to the document library you want to scan
2. In the AI in SharePoint chat, type:
   > *"Run the ROT content identifier on this library"*
3. The skill will ask you to confirm the age threshold for "outdated" content (default: 2 years)
4. Review the three-section report and decide which items to delete, archive, or keep

## Example output

```
ROT Content Report — HR Policies Library
Documents reviewed: 63

REDUNDANT (2 items)
  Expenses Policy v1.docx — superseded by Expenses Policy v2.docx (last modified 2022)
  Leave Policy DRAFT.docx — appears identical to Leave Policy.docx

OUTDATED (11 items)
  Induction Checklist 2019.docx — last modified 5 years ago
  IT Security Policy (Old).docx — last modified 3 years ago
  ...

TRIVIAL (3 items)
  New Document.docx — empty file, 1KB
  Copy of Template.docx — placeholder, 2KB
  test.docx — no content
```

## Skill definition

[!code-yaml[](SKILL.md)]

## Tested on

AI in SharePoint Public Preview — May 2026

## Author

[Leon Armston](https://github.com/leonarmston)
