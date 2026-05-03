# Version Change Summary

## Summary

Generates a plain-English summary of what changed between two versions of a Word document stored in SharePoint. Uses SharePoint version history and the built-in `compare_file_versions` tool to identify substantive, editorial, and administrative changes by section.

Useful for document reviewers, approvers, legal and compliance teams, and anyone who needs to quickly understand what changed in a document without reading it line by line.

## Prerequisites

- AI in SharePoint public preview enabled on the site or tenant
- Microsoft 365 Copilot licence
- The document must be a Word (`.docx`) file with version history enabled in SharePoint
- At least two versions must exist in SharePoint version history
- Tools required: `get_current_list_or_library`, `get_list_item_metadata`, `list_item_versions`, `compare_file_versions`

## How to deploy

**Option 1 — Via chat:**
1. Open the AI in SharePoint chat panel on your site
2. Paste the contents of `SKILL.md` and ask the agent to save it:
   > *"Create a skill from the following definition and save it to this site"*

**Option 2 — File upload:**
1. Navigate to `Agent Assets/Skills/` on your site
2. Create a folder named `version-change-summary`
3. Upload `SKILL.md` into that folder

## How to use

1. Navigate to the library containing the document
2. In the AI in SharePoint chat, type:
   > *"Run version change summary on Supplier Agreement.docx"*
   
   or
   
   > *"Summarise what changed in the current document"*

3. The skill shows available versions and asks which two to compare (defaults to current vs. previous)
4. Review the structured change summary

## Example output

```
Version Change Summary
Document: Supplier Agreement v4.docx
Comparing: Version 4.0 (current, 2 May 2026, Sarah Jones)
       vs. Version 3.0 (14 April 2026, Mike Chen)

Summary of changes:
This revision updates payment terms from 30 days to 45 days and adds a
new data processing clause (Section 8) to meet current compliance requirements.
Minor editorial corrections throughout.

Detailed changes by section:
  Section 3 — Payment Terms
    CHANGED: Payment period updated from 30 to 45 days net
    CHANGED: Late payment interest rate updated from 2% to 1.5% per month

  Section 8 — Data Processing (NEW)
    ADDED: New section on GDPR data processing obligations and sub-processor notification

  Section 12 — Governing Law
    EDITORIAL: Formatting and punctuation corrections, no change in meaning

Change classification:
  Substantive: Section 3 (payment terms), Section 8 (new clause)
  Editorial:   Section 12
```

## Tested on

AI in SharePoint Public Preview — May 2026

## Author

[Leon Armston](https://github.com/leonarmston)
