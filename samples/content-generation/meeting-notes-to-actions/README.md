# Meeting Notes to Actions

## Summary

Extracts action items from meeting notes and creates structured list items in a SharePoint "Action Items" list — complete with owner, due date, priority, and status. If the list doesn't exist yet, the skill creates it automatically.

Ideal for teams who run regular meetings and want a quick way to capture actions without manual data entry.

## Prerequisites

- AI in SharePoint public preview enabled on the site or tenant
- Microsoft 365 Copilot licence
- Meeting notes available to paste into chat (or in a document in the current library)
- Tools required: `discover_sharepoint_lists`, `create_or_update_list`, `create_list_items`, `get_user_info`, `get_datetime_info`

## How to deploy

[Download SKILL.md](https://raw.githubusercontent.com/LeonArmston/sp-ai-skills/main/samples/content-generation/meeting-notes-to-actions/SKILL.md ':ignore')

**Option 1 — Via chat:**
1. Open the AI in SharePoint chat panel on your site
2. Paste the contents of `SKILL.md` and ask the agent to save it:
   > *"Create a skill from the following definition and save it to this site"*

**Option 2 — File upload:**
1. Navigate to `Agent Assets/Skills/` on your site
2. Create a folder named `meeting-notes-to-actions`
3. Upload `SKILL.md` into that folder

## How to use

1. In the AI in SharePoint chat, type:
   > *"Run meeting notes to actions"*
2. Paste your meeting notes when prompted
3. Review and confirm the extracted action items table
4. The skill creates the items in your "Action Items" list (creating the list first if needed)

## Example output

**Extracted action items (for confirmation):**

| Action | Owner | Due Date | Priority |
|---|---|---|---|
| Update the project timeline in SharePoint | Sarah Jones | 10 May 2026 | High |
| Send updated supplier contact list to procurement | Mike Chen | 14 May 2026 | Medium |
| Schedule quarterly review meeting | Sarah Jones | To confirm | Low |

**After confirmation:**

```
Created 3 action items in 'Action Items' list.

Note:
  - 'Schedule quarterly review meeting' has no due date — please update manually.

Navigate to Action Items list to review: [link]
```

## Skill definition

[!code-yaml[](SKILL.md)]

## Tested on

AI in SharePoint Public Preview — May 2026

## Author

[Leon Armston](https://github.com/leonarmston)
