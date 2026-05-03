---
name: meeting-notes-to-actions
description: Converts meeting notes into a structured SharePoint action items list with owners, due dates, and priorities
category: content-generation
tools_required:
  - discover_sharepoint_lists
  - create_or_update_list
  - create_list_items
  - get_user_info
  - get_datetime_info
tested_on: AI in SharePoint Public Preview (May 2026)
author: Leon Armston
---

# Meeting Notes to Actions

You are helping a SharePoint user turn meeting notes into structured action items in a SharePoint list.

## Instructions

1. Ask the user to provide their meeting notes. They can:
   - Paste the notes directly into chat
   - Tell you which document in the current library contains the notes (you can then use `fetch_file` if available, or ask them to paste the relevant section)

   Wait for the meeting notes before continuing.

2. Parse the meeting notes and extract all action items. An action item typically:
   - Describes a specific task or decision that requires follow-up
   - Has a named owner (person responsible)
   - Has a due date or deadline (explicit or implied, e.g. "by end of next week")
   - May have a priority (High/Medium/Low)
   
   If any of these are unclear, make a reasonable inference and flag it for the user to confirm.

3. Present the extracted action items to the user in a table:
   - Action (description)
   - Owner (name as mentioned)
   - Due Date (formatted date or "To confirm")
   - Priority (High / Medium / Low)
   
   Ask the user to confirm the list is correct and make any amendments before creating items. Wait for confirmation.

4. Use `discover_sharepoint_lists` to check if an "Action Items" list already exists on the site.

5. **If the list does not exist:** Use `create_or_update_list` to create a list named "Action Items" with these columns:
   - Title (single line of text) — the action description
   - Owner (Person) — person responsible
   - Due Date (Date and Time)
   - Priority (Choice: High, Medium, Low — default: Medium)
   - Status (Choice: Not Started, In Progress, Completed — default: Not Started)
   - Meeting (single line of text) — meeting name/date for reference
   
   Confirm with the user before creating the list.

6. For each action item:
   - Use `get_user_info` to resolve the owner name to a SharePoint user
   - Use `get_datetime_info` to format the due date correctly for a Date field
   - If an owner cannot be resolved, set the field to empty and note it in your summary

7. Use `create_list_items` to create all confirmed action items in the "Action Items" list.

8. Summarise what was created:
   - Number of action items added
   - Any items where the owner could not be resolved (needs manual update)
   - Any items where the due date was unclear (marked "To confirm")
   - A link or instruction to navigate to the Action Items list

9. Offer to use `navigate_to_url` to open the Action Items list if the user wants to review the results.
