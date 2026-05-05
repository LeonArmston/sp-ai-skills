---
name: file-classifier
description: Classify SharePoint documents by content type (Contracts, Invoices, Purchase Orders) using structure-first analysis, then extract and populate five metadata columns per content type
category: document-quality
tools_required:
  - get_current_list_or_library
  - get_list_schema
  - get_list_item_metadata
  - fetch_file
  - create_or_update_list
  - update_list_items
tested_on: AI in SharePoint Public Preview (May 2026)
author: pnp community
source: https://github.com/pnp/sharepoint-skills/tree/main/Skills/file-classifier
---

# File Classifier

Classify documents in the current SharePoint library by their content type and extract structured metadata — using structure-first analysis, not keyword matching.

## Classification types

**Contracts** — Bilateral agreements with named parties on both sides, mutual obligations, and signature blocks for all parties (e.g. MSAs, NDAs, leases, employment agreements). A document that mentions payment terms or includes the word "invoice" is still a Contract if it has bilateral signatures and governs ongoing obligations.

**Invoices** — Single-vendor billing documents with an invoice number, itemised line items, and a payment due date. An Invoice is solely a billing request from one vendor — it lacks multi-party signature blocks and termination clauses.

**Purchase Orders** — Buyer-issued procurement authorisations with a PO number, line items, and a delivery address.

**Unclassified** — Documents that do not clearly match the above. No metadata columns are created for Unclassified files.

## Workflow

### Step 1 — Verify classification column
Use `get_list_schema` to check whether a column named "FileClassification" (Choice type) already exists in the library. If it does not exist, use `create_or_update_list` to create it with choices: Contracts, Invoices, Purchase Orders, Unclassified.

### Step 2 — Read files in batches
Use `get_list_item_metadata` to retrieve the list of all files. Use `fetch_file` to read file contents in batches of up to 10 files at a time. Do not attempt to classify without reading the content — never guess from the filename alone.

### Step 3 — Classify each file
Apply the classification decision guide above. Focus on document structure and purpose:
- Does it have signature blocks for multiple named parties? → Contracts
- Is it a billing document from one vendor? → Invoices
- Is it a buyer-issued procurement order? → Purchase Orders
- Does not clearly fit? → Unclassified

### Step 4 — Create metadata columns
For each content type present in the library (excluding Unclassified), use `create_or_update_list` to add exactly five columns if they do not already exist. Check by internal name before creating to avoid duplicates.

**Contracts columns:**
- ContractID (Single line of text)
- ContractParties (Single line of text)
- ContractEndDate (Date and Time)
- ContractValue (Number)
- ContractStatus (Choice: Active, Expired, Pending, On Hold)

**Invoices columns:**
- InvoiceNumber (Single line of text)
- VendorSupplierName (Single line of text) — shared with Purchase Orders, check before creating
- InvoiceDueDate (Date and Time)
- InvoiceAmount (Number)
- InvoicePaymentStatus (Choice: Unpaid, Paid, Overdue, Credit)

**Purchase Orders columns:**
- PONumber (Single line of text)
- VendorSupplierName (Single line of text) — shared with Invoices, check before creating
- PODeliveryDate (Date and Time)
- POOrderValue (Number)
- POStatus (Choice: Open, Completed, Cancelled, On Hold)

**Important:** VendorSupplierName is shared between Invoices and Purchase Orders. Check the schema for this column by its internal name before attempting to create it. Only create it once.

### Step 5 — Extract metadata values
For each classified file, extract the relevant metadata values from the file content. If a value cannot be found or is ambiguous:
- Text fields: use "Unknown" as the default
- Date fields: leave empty
- Number fields: use 0
- Status fields: use the first choice option as the default

Never invent or guess values. Only populate fields where the value can be clearly identified in the document.

### Step 6 — Update list items
Use `update_list_items` to write the FileClassification value and the extracted metadata for each file. Process in batches.

### Step 7 — Report results
Summarise in chat:
- Total files processed
- Count per classification type
- Number of files where metadata was fully extracted vs. partially extracted
- Any files that could not be read or classified

Ask the user if they want to review any Unclassified files manually.
