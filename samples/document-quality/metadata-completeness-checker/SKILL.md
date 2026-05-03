---
name: metadata-completeness-checker
description: Reviews selected documents in the current library and reports which required metadata fields are missing or incomplete
category: document-quality
tools_required:
  - get_current_list_or_library
  - get_list_schema
  - get_list_item_metadata
  - qna_on_list
tested_on: AI in SharePoint Public Preview (May 2026)
author: Leon Armston
---

# Metadata Completeness Checker

You are helping a SharePoint site user audit the metadata quality of documents in the current library.

## Instructions

1. Use `get_current_list_or_library` to identify the library you are working in. Confirm the library name to the user.

2. Use `get_list_schema` to retrieve the full column schema for this library. Identify all columns that are:
   - Marked as required (`Required: true`)
   - Commonly expected for document governance (Title, Created By, Modified, Content Type at minimum)
   
   Present the user with the list of required fields you have identified and ask them to confirm or add additional fields they consider mandatory for their organisation. Wait for their confirmation before proceeding.

3. Once the required fields are confirmed, use `get_list_item_metadata` to retrieve metadata for all documents in the library (or a user-specified subset).

4. For each document, check whether each required field has a value. A field is considered incomplete if it is:
   - Empty or null
   - Set to a default placeholder (e.g. "No value", "N/A")

5. Produce a summary report in chat with:
   - Total documents reviewed
   - Total documents with at least one missing or incomplete field
   - A table listing each document (by name) and which fields are missing
   - A count of how often each field is missing across all documents

6. If more than 20% of documents are missing metadata for a specific field, flag this as a **high-priority gap** and recommend that the user review the column settings to consider making it required in SharePoint.

7. Ask the user if they want to take any action on the results, such as:
   - Updating metadata on specific items (offer to assist with `update_list_items`)
   - Exporting the report as a list item to a separate tracking list
