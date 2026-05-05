# File Classifier

## Summary

Classifies documents in a SharePoint library into Contracts, Invoices, or Purchase Orders using structure-first analysis — reading actual file content, not guessing from filenames. Once classified, extracts and populates five targeted metadata columns per content type, creating the columns automatically if they don't exist.

> This skill originated in the [pnp/sharepoint-skills](https://github.com/pnp/sharepoint-skills/tree/main/Skills/file-classifier) repository and has been contributed to the sp-ai-skills community library.

## Prerequisites

- AI in SharePoint public preview enabled on the site or tenant
- Microsoft 365 Copilot licence
- Navigate to the document library you want to classify before invoking the skill
- Tools required: `get_current_list_or_library`, `get_list_schema`, `get_list_item_metadata`, `fetch_file`, `create_or_update_list`, `update_list_items`

## How to deploy

[Download SKILL.md](https://raw.githubusercontent.com/LeonArmston/sp-ai-skills/main/samples/document-quality/file-classifier/SKILL.md ':ignore')

**Option 1 — Via chat:**
1. Open the AI in SharePoint chat panel on your site
2. Paste the contents of `SKILL.md` and ask the agent to save it:
   > *"Create a skill from the following definition and save it to this site"*

**Option 2 — File upload:**
1. Navigate to `Agent Assets/Skills/` on your site
2. Create a folder named `file-classifier`
3. Upload `SKILL.md` into that folder

## How to use

1. Navigate to the document library you want to classify
2. In the AI in SharePoint chat, type:
   > *"Run the file classifier on this library"*
3. The skill reads each file's content and classifies it
4. Metadata columns are created automatically if they don't exist
5. Review the summary report and any Unclassified files

## Example output

```
File Classification Report — Contracts Library
Files processed: 34

  Contracts:        18 files
  Invoices:          9 files
  Purchase Orders:   5 files
  Unclassified:      2 files

Metadata extraction:
  Fully extracted:   28 files
  Partially:          4 files (missing date or value)
  Could not read:     2 files (PDF scan — manual review required)

Columns created:
  FileClassification (Choice)
  ContractID, ContractParties, ContractEndDate, ContractValue, ContractStatus
  InvoiceNumber, VendorSupplierName, InvoiceDueDate, InvoiceAmount, InvoicePaymentStatus
  PONumber, PODeliveryDate, POOrderValue, POStatus
```

## Skill definition

Copy the content below directly into the AI in SharePoint chat to deploy this skill, or use the download link above.

[!code-yaml[](SKILL.md)]

## Tested on

AI in SharePoint Public Preview — May 2026

## Author

[pnp community](https://github.com/pnp/sharepoint-skills)
