# Metadata Completeness Checker

## Summary

Audits a document library and reports which documents have missing or incomplete required metadata. Useful for governance reviews, content audits, and preparing libraries for migration or archival.

## Prerequisites

- AI in SharePoint public preview enabled on the site or tenant
- Microsoft 365 Copilot licence
- Navigate to the document library you want to audit before invoking the skill
- Tools required: `get_current_list_or_library`, `get_list_schema`, `get_list_item_metadata`, `qna_on_list`

## How to deploy

[Download SKILL.md](https://raw.githubusercontent.com/LeonArmston/sp-ai-skills/main/samples/document-quality/metadata-completeness-checker/SKILL.md ':ignore')

**Option 1 — Via chat:**
1. Open the AI in SharePoint chat panel on your site
2. Paste the contents of `SKILL.md` and ask the agent to save it:
   > *"Create a skill from the following definition and save it to this site"*

**Option 2 — File upload:**
1. Navigate to `Agent Assets/Skills/` on your site
2. Create a folder named `metadata-completeness-checker`
3. Upload `SKILL.md` into that folder

## How to use

1. Navigate to the document library you want to audit
2. In the AI in SharePoint chat, type:
   > *"Run the metadata completeness checker on this library"*
3. The skill will show you the identified required fields and ask you to confirm before scanning
4. Review the report and optionally ask the agent to update metadata on specific items

## Example output

```
Metadata Completeness Report — Contracts Library
Documents reviewed: 47
Documents with missing fields: 12 (26%)

HIGH PRIORITY — 'Department' is missing from 18 documents (38%)

Document                        Missing Fields
──────────────────────────────────────────────
Q1 Supplier Agreement.docx      Department, Content Type
Project Alpha SOW.docx          Department
NDA Template v3.docx            Department, Document Owner
...
```

## Skill definition

Copy the content below directly into the AI in SharePoint chat to deploy this skill, or download the file using the link in the [How to deploy](#how-to-deploy) section.

[!code-yaml[](SKILL.md)]

## Tested on

AI in SharePoint Public Preview — May 2026

## Author

[Leon Armston](https://github.com/leonarmston)
