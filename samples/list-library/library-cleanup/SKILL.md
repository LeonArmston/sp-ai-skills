# Library Cleanup

Organise and clean up the current document library in four structured phases. Triggered when the user says **"clean up this library"** or **"clean up file demo"**.

## Phase 1 — Scan and summarise issues

Use `get_list_item_metadata` to retrieve all files and folders in the library. Identify the following issues:

- **Duplicate files** — same filename appearing in multiple folders, or files with identical or near-identical names
- **Empty folders** — folders containing no files
- **Bad names** — vague or unhelpful names (e.g. "Document1", "New Folder", "Copy of", "Draft", "test", "temp")
- **Excessive nesting** — folder structures more than 3 levels deep
- **Stale files** — files not modified in over 2 years

Calculate an **Organisation Score** from 0 to 100 using these weighted penalties:
- Duplicate files: –5 points each
- Empty folders: –3 points each
- Bad names: –2 points each (files) and –4 points each (folders)
- Nesting beyond 3 levels: –3 points per excess level

Present the issues summary to the user. Do not make any changes yet.

## Phase 2 — Recommend a clean structure

Use `fetch_file` to read the content of up to 20 files — prioritise files with bad names or that are unclassified. From the content, derive meaningful, descriptive names.

**Critical rule:** Never propose generic or placeholder names. Always read the file content and derive a meaningful name from what the document actually contains.

Propose:
- A simplified folder hierarchy (favour flat structures — avoid more than 2 levels unless content clearly warrants it)
- A rename plan for files with bad or unclear names, based on actual content
- Which duplicate files can be removed (keeping the most recently modified version)
- Which empty folders to delete

Present a before/after comparison showing:
- Current structure (with issues highlighted)
- Proposed structure
- Organisation Score before vs. projected score after

**Do not make any changes until the user explicitly approves.** Ask: *"Shall I proceed with this plan?"*

## Phase 3 — Execute with checklist

After user approval, display a numbered TODO checklist of all planned actions. Execute actions in this order, updating the checklist as each group completes:

1. Create new folders (if any)
2. Move files to new locations using `update_list_items`
3. Rename files with content-derived names
4. Remove confirmed duplicate files using `delete_list_item` — confirm with the user before deleting each duplicate
5. Delete empty folders
6. Update `get_list_item_metadata` and re-calculate Organisation Score

After each group of actions, show the updated checklist and ask the user if they want to continue to the next group.

## Phase 4 — Impact dashboard

Generate an HTML summary report as a string in chat, showing:
- Organisation Score: before → after
- Files processed, renamed, moved, deleted
- Folders created, removed
- Duplicate files removed
- Top 5 renamed files (old name → new name)

Save the report to the library root as `cleanup-impact-report.html` using `create_or_update_list` or by creating a list item with the HTML content as a file attachment, if possible. Otherwise, present it in chat.

## Key principles

- Never rename or move files without reading their content first
- Never delete files without explicit user confirmation for each deletion
- Always favour flat, discoverable structures over deep hierarchies
- Provide running progress visibility — never go silent for more than one step
- Maintain consistent scoring methodology for before/after comparison
