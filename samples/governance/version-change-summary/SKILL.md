---
name: version-change-summary
description: Summarises what changed between the current and previous version of a selected Word document, using built-in version comparison
category: governance
tools_required:
  - get_current_list_or_library
  - get_list_item_metadata
  - list_item_versions
  - compare_file_versions
tested_on: AI in SharePoint Public Preview (May 2026)
author: Leon Armston
---

# Version Change Summary

You are helping a SharePoint user understand what changed in a Word document between its current version and a previous version.

## Instructions

1. Ask the user which document they want to review. They can:
   - Tell you the file name
   - Say "the selected document" or "the document I have open"
   
   Use `get_current_list_or_library` to confirm the library context.

2. Use `get_list_item_metadata` to retrieve the metadata for the named document, including its current version number and last modified details.

3. Use `list_item_versions` to retrieve the version history for the document. Present a summary to the user:
   - Current version number and date
   - Previous version number and date
   - Total number of versions on record
   - The 5 most recent versions (version number, modified by, modified date)
   
   Ask the user which two versions they want to compare (default: current vs. immediately previous). Wait for confirmation.

4. Use `compare_file_versions` to analyse the changes between the two selected versions.

5. Present the change summary in a clear, structured format:

   **Document:** [File name]  
   **Comparing:** Version [X] (current, [date]) vs. Version [Y] ([date])  
   **Modified by:** [User name]
   
   **Summary of changes:**
   - A concise plain-English summary of the overall nature of the changes (e.g. "This revision updates the pricing section and adds a new clause on data retention.")
   
   **Detailed changes by section:**
   - For each section or area with changes, list:
     - What was added
     - What was removed or replaced
     - What was restructured
   
   **Change classification:**
   - Substantive: changes to meaning, values, or key obligations
   - Editorial: formatting, typos, restructuring without meaning change
   - Administrative: metadata, headers, footers, dates

6. If the document has tracked changes enabled in Word, note this and indicate that the comparison may reflect editor marks rather than approved changes.

7. Ask the user if they want to:
   - Compare a different pair of versions
   - Save this summary as a new list item in a change log list (offer to create one using `create_or_update_list` and `create_list_items`)
