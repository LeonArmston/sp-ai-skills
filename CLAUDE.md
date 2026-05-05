# sp-ai-skills — Project Context for Claude Code

This repository is a community collection of reusable AI Skills for **AI in SharePoint** (Microsoft 365 Copilot). Skills are Markdown files deployed to a SharePoint site's `Agent Assets/Skills/` library.

## What this repo is

- Each skill is a `SKILL.md` file that defines a repeatable, multi-step workflow for the AI in SharePoint agent
- Skills work within the built-in tool capabilities of AI in SharePoint — no custom code, no external connections
- Samples live under `samples/[category]/[skill-name]/`
- This repo is maintained by Leon Armston ([@leonarmston](https://github.com/leonarmston)) and intended for transfer to the PnP GitHub org as `sp-ai-skills`

## Repo structure

```
sp-ai-skills/
├── CLAUDE.md                  # This file
├── README.md                  # Main repo README
├── LICENSE                    # MIT
├── CONTRIBUTING.md            # Contribution guidelines
└── samples/
    ├── document-quality/
    ├── list-library/
    ├── content-generation/
    ├── governance/
    └── automation/
```

Each sample folder contains:
```
[skill-name]/
├── SKILL.md       # The deployable skill definition
├── README.md      # Usage, prerequisites, screenshots
└── assets/        # Optional screenshots/example outputs
```

## SKILL.md format

`SKILL.md` files contain **only the skill instructions** — pure Markdown that the AI agent reads and follows. No YAML frontmatter. The file starts directly with a `# Heading` and step-by-step instructions.

All metadata (category, tools required, author, tested version) belongs in the `README.md`, not in the skill file. Users copy or upload `SKILL.md` directly into their SharePoint environment and should not see repository metadata.

```markdown
# Skill Name

Brief one-line description of what this skill does.

## Step 1 — ...

Instructions for the AI agent...
```

Write instructions as clear, step-by-step directives to the AI agent. Be specific about inputs, outputs, and how to handle edge cases.

## Sample README.md format

```markdown
# Skill Name

## Summary
What this skill does and when you'd use it.

## Prerequisites
- AI in SharePoint public preview enabled (site or tenant)
- Microsoft 365 Copilot licence
- [Any required list/library structure]
- Tools required: [from tools_required frontmatter]

## How to deploy
1. Copy `SKILL.md` to `Agent Assets/Skills/[skill-name]/` on your site
   OR paste the contents into the AI in SharePoint chat and ask it to save as a skill

## How to use
How to invoke the skill and what inputs it expects.

## Example output
What the skill produces — description or screenshot.

## Tested on
AI in SharePoint Public Preview – [Month Year]

## Author
[Name](https://github.com/handle)
```

---

## Available AI in SharePoint agent tools

These are the 44 tools available to the AI in SharePoint agent as of the public preview (May 2026), discovered via `--agenttools` in the chat panel. Skills can only use these tools — they cannot connect to external systems or run custom code.

When writing a SKILL.md, only reference tools from this list. Add all tools the skill depends on to the `tools_required` frontmatter.

### Automation & Rules
| Tool | Description |
|---|---|
| `template_finder` | EXCLUSIVE tool for template/form search and structured document generation |
| `compare_file_versions` | Analyse a Word (DOCX) document for changes from its previous version |
| `configure_approvals` | Configure modern approvals for a SharePoint list |
| `create_approval_request` | Create a new approval request for a list item or document |
| `create_or_update_rule` | Create or update a SharePoint rule with EmailNotification action |
| `delete_quickstep` | Delete a quickstep from a list or library |
| `delete_rule` | Delete one or more rules from a list or library |

### Creation
| Tool | Description |
|---|---|
| `create_form` | Create a new form in a SharePoint list |
| `create_list_items` | Create new items in a SharePoint list with specified field values |
| `create_or_edit_page` | Switch to edit mode, create pages, or create news posts |
| `create_or_update_list` | Create or update a list or document library with specified columns and settings |

### Deletion
| Tool | Description |
|---|---|
| `delete_field` | Delete one or more fields from a list |
| `delete_list` | Permanently delete a list or document library |
| `delete_list_item` | Delete one or more items from a list |
| `delete_view` | Delete one or more views from a list |

### Discovery & Schema
| Tool | Description |
|---|---|
| `discover_sharepoint_lists` | Discover all lists and libraries in a site |
| `get_list_schema` | Retrieve the complete schema for a list or library |
| `get_views_of_list` | Retrieve all views defined for a list or library |

### Field Data Helpers
| Tool | Description |
|---|---|
| `get_datetime_info` | Format date/time values for DateTime fields |
| `get_location_info` | Resolve location names/addresses for Location fields |
| `get_lookup_info` | Resolve lookup values for Lookup fields |
| `get_taxonomy_info` | Resolve managed metadata terms for taxonomy fields |
| `get_user_info` | Resolve person names/emails for User fields |

### More Automation & Rules
| Tool | Description |
|---|---|
| `apply_column_formatting` | Apply custom formatting to a field in a list or library |
| `apply_view_formatting` | Apply custom JSON formatting to a list or library view |
| `get_approval_enabled` | Check whether modern approvals are enabled on a list |
| `get_approval_request` | Get approval request details for a list item |
| `get_quicksteps` | Retrieve all quicksteps for a list or library |
| `get_rules` | Retrieve all rules defined for a list |
| `resolve_approval_request` | Approve, reject, or cancel an approval request |

### Navigation
| Tool | Description |
|---|---|
| `navigate_to_url` | Navigate to a list, library, or page |
| `get_current_list_or_library` | Get info about the current list or library being viewed |
| `get_list_item_metadata` | Obtain key metadata from list items |
| `get_term_sets` | Retrieve the definition of a SharePoint term set |
| `get_view_definition` | Retrieve the complete definition of one or more views |
| `list_item_versions` | Enumerate all versions of one or more list items with field-level changes |
| `preview_view_changes` | Preview how a list would look after applying updated View XML |

### Updates & Configuration
| Tool | Description |
|---|---|
| `get_restoreable_lists` | Retrieve lists and libraries currently in the recycle bin |
| `restore_list` | Restore a list or library from the recycle bin |
| `update_batch_list_items` | Batch update list items matching a CAML query |
| `update_list_items` | Update existing items in a list with new field values |

### Platform
| Tool | Description |
|---|---|
| `create_skill` | Create and save a skill to the Agent Assets library |
| `load_skill` | Load a specific skill into the current conversation context |
| `set_context_file` | Create or update the SHAREPOINT.md context file |

### Sydney-based (delegate to M365 agents)
| Tool | Description |
|---|---|
| `fetch_file` | Fetch and analyse files using the M365 file analysis agent |
| `org_chart` | Retrieve organisational chart information |
| `qna_on_list` | Answer questions about content in the current list or library |
| `search_enterprise_files` | Search for information across the enterprise |

---

## Writing good skills — guidelines

- **Be specific about inputs.** State what the user should have selected or which library/list the skill operates on.
- **Chain tools logically.** Use `discover_sharepoint_lists` or `get_list_schema` before trying to write to a list — confirm it exists first.
- **Handle missing structure.** If a skill needs a list that may not exist, instruct the agent to create it (use `create_or_update_list`).
- **Declare outputs clearly.** Tell the agent exactly what to produce — a list item, a Word document, a summary in chat, etc.
- **Avoid deletion tools unless essential.** `delete_list`, `delete_list_item`, `delete_field` are destructive — only include them in skills where deletion is the explicit purpose.
- **`update_batch_list_items` uses CAML queries** — be precise about the query logic in the skill instructions.
- **`apply_view_formatting` has CSS constraints** — only approved Fluent UI classes work. Note this in skills that use it.
- **`template_finder` is exclusive** — it's the only route to structured document generation. Use it for any skill that outputs Word/Excel/PowerPoint.

## Categories

When creating a new sample, place it in the most appropriate category:

| Category folder | Use for |
|---|---|
| `document-quality` | Metadata checking, ROT detection, readability, version review |
| `list-library` | Schema auditing, view management, column formatting, duplicate detection |
| `content-generation` | Document generation, report creation, proposal assembly |
| `governance` | Compliance checking, audit trails, sensitivity, approvals |
| `automation` | Rules, quicksteps, approval workflows, batch updates |

## Key commands (for documentation and testing context)

- `--agenttools` — lists all tools available to the agent in the current SP environment
- `–Agent-Skills` — lists skills saved on the current site
- Skills are invoked by name in chat, or auto-loaded by the agent when the prompt matches
