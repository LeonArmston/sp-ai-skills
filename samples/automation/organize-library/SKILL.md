---
name: organize-library
description: Fully organise a SharePoint document library — classify files, extract metadata, apply brand-consistent column formatting, create per-content-type views, set folder colours, and create notification rules for overdue items. Orchestrates the file-classifier skill and reads SHAREPOINT.md for brand guidelines.
category: automation
tools_required:
  - get_current_list_or_library
  - get_list_schema
  - get_list_item_metadata
  - load_skill
  - apply_column_formatting
  - apply_view_formatting
  - create_or_update_list
  - get_views_of_list
  - create_or_update_rule
  - get_user_info
  - set_context_file
tested_on: AI in SharePoint Public Preview (May 2026)
author: pnp community
source: https://github.com/pnp/sharepoint-skills/tree/main/Skills/organize-library
---

# Organize Library

End-to-end SharePoint document library organisation with incremental visual feedback at each step. Classifies files, formats metadata columns, creates per-content-type views, colours folders, and sets up notification rules — all using brand colours from the site's SHAREPOINT.md context file.

**Design principle:** Give users visible progress after every sub-step. Never process silently.

## Before you begin

Use `set_context_file` or look for a `SHAREPOINT.md` file on the site. This file contains brand colours, terminology, and site-specific guidelines. Read it before applying any formatting. If no SHAREPOINT.md exists, use these defaults:
- Primary colour: `#0078D4` (Microsoft Blue)
- Secondary colour: `#038387` (Teal)
- Folder colours for content types: Contracts → Dark Purple, Invoices → Dark Blue, Purchase Orders → Dark Green

Confirm with the user before proceeding.

## Step 1 — Assessment and folder setup

Use `get_list_item_metadata` to inventory all files and folders. Report:
- Total file count
- Existing folder structure
- Any existing classification or metadata columns

Ask the user to confirm they want to proceed with full organisation. Wait for explicit approval.

## Step 2 — Folder colouring

Use `apply_column_formatting` to apply colour to existing folders using the brand colours from SHAREPOINT.md. Assign content-type-specific colours:
- Contracts folder → Dark Purple
- Invoices folder → Dark Blue
- Purchase Orders folder → Dark Green
- Unassigned folders → default grey

**After this step:** Confirm coloured folders are visible to the user.

## Step 3 — File classification and metadata extraction

Load the file-classifier skill using `load_skill`:
> *"Load the file-classifier skill"*

Run it against the current library. Wait for it to complete. Do not duplicate the classification logic — rely entirely on the file-classifier skill for this step.

After classification completes, format the FileClassification column using `apply_column_formatting` with brand-coloured pills (15% opacity backgrounds):
- Contracts → Primary colour pill
- Invoices → Secondary colour pill
- Purchase Orders → accent colour pill
- Unclassified → grey pill

Update the default "All Documents" view using `apply_view_formatting`:
- Group by FileClassification
- Style group headers with content-type colours
- Show columns: Name, FileClassification, Modified, Modified By only
- Do not add metadata columns to the default view

**After this step:** Confirm classification pills are visible.

## Step 4 — Metadata column formatting

For each metadata column created by file-classifier, apply formatting using `apply_column_formatting`:

**Date columns** (ContractEndDate, InvoiceDueDate, PODeliveryDate):
- Normal: calendar icon + formatted date text
- Overdue (date < today): warning icon + pill with Deep Purple background + relative day count (e.g. "14 days overdue")

**Number columns** (ContractValue, InvoiceAmount, POOrderValue):
- Data bar formatting using Primary Blue
- Show numeric value alongside the bar

**Status columns** (ContractStatus, InvoicePaymentStatus, POStatus):
- Paid / Active / Open → Blue pill with CheckMark icon
- Pending → Light blue pill with Clock icon
- Completed → Purple pill with Completed icon
- Overdue → Dark Purple pill with Warning icon
- On Hold → Blue-Grey pill with Blocked icon
- Cancelled → Red pill with Cancel icon

Use `rgba()` with exactly 4 parameters for all semi-transparent colours.

**After this step:** Confirm formatted metadata columns are visible.

## Step 5 — Per-content-type views

Use `create_or_update_list` or `apply_view_formatting` to create three separate views. Each view must:
- Include a CAML Where filter on the FileClassification column for the relevant type
- Show: Name, FileClassification, [5 type-specific metadata columns], Modified, Modified By
- Be named: "Contracts", "Invoices", "Purchase Orders"

Do not include metadata columns from other content types in each view.

**After this step:** Confirm new views appear in the view picker.

## Step 6 — Notification rules

Use `get_user_info` to resolve the current user's details. For each Status column (ContractStatus, InvoicePaymentStatus, POStatus), use `create_or_update_rule` to create a notification rule that:
- Triggers when the Status column value changes to "Overdue"
- Sends an email to the relevant reviewer (ask the user to confirm the email address)

Create one rule per status column. Confirm each rule is active after creation.

**After this step:** Confirm notification rules are active.

## Step 7 — Summary

Present a completion summary:
- Files classified by type
- Metadata columns formatted
- Views created
- Notification rules active
- Organisation Score (using the same calculation as the library-cleanup skill)

Offer next steps:
- Run library-cleanup to address naming and duplicates
- Export the site storage heatmap to review storage usage
- Review Unclassified files manually
