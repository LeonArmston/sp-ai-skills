# sp-ai-skills

Community-contributed AI Skills for AI in SharePoint (Microsoft 365 Copilot). Each skill is a Markdown file you can drop into your site's Agent Assets library to give your team repeatable, consistent AI-powered workflows — no code required.

> ⚠️ **Preview notice:** AI Skills in SharePoint are currently in public preview. Skills in this repository are tested against the preview release. Behaviour may change as the feature evolves toward general availability (expected late May–July 2026).

---

## What are AI Skills in SharePoint?

AI Skills extend the AI in SharePoint experience by turning multi-step workflows into reusable assets that anyone on your site can run. Instead of typing the same instructions into chat every time, you define a skill once and your whole team can invoke it by name — getting consistent, repeatable outputs every time.

Skills are stored as Markdown (`.md`) files in the `Agent Assets/Skills/` library on your SharePoint site. They work within the built-in capabilities of AI in SharePoint and can chain multiple steps together — summarising content, organising files, creating or updating lists, applying formatting, and more.

**Requirements:**
- Microsoft 365 Copilot licence
- Site or tenant opted in to the AI in SharePoint public preview
- Edit permissions on the site to create skills; View permissions to run them

> 💡 To see which AI tools are available in your environment, type `--agenttools` in the AI in SharePoint chat panel.  
> To list skills already saved on your site, type `–Agent-Skills`.

---

## Samples

Skills are organised into categories matching common SharePoint use cases. Each sample lives in its own folder with a `SKILL.md` file and a `README.md` explaining what it does, how to use it, and which tools it depends on.

| Category | Sample | Description |
|---|---|---|
| 📄 Document Quality | [metadata-completeness-checker](./samples/document-quality/metadata-completeness-checker/) | Reviews selected documents and reports missing required metadata |
| 📄 Document Quality | [rot-content-identifier](./samples/document-quality/rot-content-identifier/) | Flags Redundant, Outdated or Trivial content in a library |
| 📋 List & Library | [column-schema-auditor](./samples/list-library/column-schema-auditor/) | Reviews library columns against a defined standard and reports gaps |
| ✍️ Content Generation | [meeting-notes-to-actions](./samples/content-generation/meeting-notes-to-actions/) | Converts meeting notes into a formatted SharePoint action list |
| 🏛️ Governance | [version-change-summary](./samples/governance/version-change-summary/) | Summarises what changed between the current and previous version of a document |

> More samples coming soon. Contributions welcome — see [Contributing](#contributing).

---

## How to use a skill

### Option 1 — Via the AI in SharePoint chat (recommended)

1. Open the AI in SharePoint chat panel on your site (floating button, bottom right)
2. Paste the contents of the `SKILL.md` file into chat and ask the agent to save it as a skill:
   > *"Create a skill from the following definition and save it to this site"*
3. Once saved, invoke the skill by name:
   > *"Run [skill name] on the selected documents"*

### Option 2 — Direct file upload

1. Navigate to your site's `Agent Assets/Skills/` library (created automatically when AI in SharePoint is enabled)
2. Create a new folder named after the skill (e.g. `metadata-completeness-checker`)
3. Upload the `SKILL.md` file into that folder
4. Invoke the skill from the AI in SharePoint chat by name

---

## Folder structure

Each sample follows this structure:

```
samples/
└── [category]/
    └── [skill-name]/
        ├── SKILL.md        # The skill definition — drop this into Agent Assets/Skills/
        ├── README.md       # What it does, prerequisites, usage, screenshots
        └── assets/         # Optional: screenshots, example outputs
```

---

## Skill metadata

Each `SKILL.md` in this repository includes a frontmatter header:

```yaml
---
name: skill-name
description: One-line description of what the skill does
category: document-quality | list-library | content-generation | governance | automation
tools_required:
  - tool_name_1
  - tool_name_2
tested_on: AI in SharePoint Public Preview (May 2026)
author: Your Name
---
```

The `tools_required` field lists the agent tools the skill depends on. You can verify these are available in your environment using `--agenttools` in the chat panel.

---

## Contributing

This repository welcomes contributions from the community. Whether you're sharing a skill you've built for your own team, or improving an existing sample, your contribution helps the whole SharePoint community.

### Before you contribute

- Test your skill in a real AI in SharePoint environment (not just authored — actually run it)
- Include a `README.md` with the template below
- Fill in the frontmatter in `SKILL.md` completely, including `tools_required`
- Add a screenshot to the `assets/` folder if possible

### Sample README template

Each sample's `README.md` should include:

```markdown
# Skill Name

## Summary
Brief description of what this skill does and when you'd use it.

## Prerequisites
- AI in SharePoint public preview enabled
- [Any specific list/library structure required]
- Tools required: [list from --agenttools]

## How to use
Step-by-step instructions for deploying and invoking the skill.

## Example output
Description or screenshot of what the skill produces.

## Tested on
AI in SharePoint Public Preview – [Month Year]

## Author
[Your name] ([@yourhandle](https://github.com/yourhandle))
```

### Submitting

1. Fork this repository
2. Create a branch: `add/[skill-name]`
3. Add your skill folder under the appropriate `samples/[category]/` directory
4. Submit a pull request with a clear description of what the skill does

---

## Available agent tools

The following tools are available in AI in SharePoint as of the public preview (May 2026), discoverable via `--agenttools` in the chat panel. Skills in this repository declare which tools they depend on so you can verify compatibility with your environment.

<details>
<summary>📦 Automation & Rules (7 tools)</summary>

| Tool | Description |
|---|---|
| `template_finder` | Exclusive tool for template/form search and structured document generation |
| `compare_file_versions` | Analyse a Word document for changes from its previous version |
| `configure_approvals` | Configure modern approvals for a SharePoint list |
| `create_approval_request` | Create a new approval request for a list item or document |
| `create_or_update_rule` | Create or update a SharePoint rule with EmailNotification action |
| `delete_quickstep` | Delete a quickstep from a list or library |
| `delete_rule` | Delete one or more rules from a list or library |

</details>

<details>
<summary>📦 Creation (4 tools)</summary>

| Tool | Description |
|---|---|
| `create_form` | Create a new form in a SharePoint list |
| `create_list_items` | Create new items in a SharePoint list |
| `create_or_edit_page` | Switch to edit mode, create pages, or create news posts |
| `create_or_update_list` | Create or update a list or document library with specified columns |

</details>

<details>
<summary>📦 Deletion (4 tools)</summary>

| Tool | Description |
|---|---|
| `delete_field` | Delete one or more fields from a list |
| `delete_list` | Permanently delete a list or document library |
| `delete_list_item` | Delete one or more items from a list |
| `delete_view` | Delete one or more views from a list |

</details>

<details>
<summary>📦 Discovery & Schema (3 tools)</summary>

| Tool | Description |
|---|---|
| `discover_sharepoint_lists` | Discover all lists and libraries in a site |
| `get_list_schema` | Retrieve the complete schema for a list or library |
| `get_views_of_list` | Retrieve all views defined for a list or library |

</details>

<details>
<summary>📦 Field Data Helpers (5 tools)</summary>

| Tool | Description |
|---|---|
| `get_datetime_info` | Format date/time values for DateTime fields |
| `get_location_info` | Resolve location names/addresses for Location fields |
| `get_lookup_info` | Resolve lookup values for Lookup fields |
| `get_taxonomy_info` | Resolve managed metadata terms for taxonomy fields |
| `get_user_info` | Resolve person names/emails for User fields |

</details>

<details>
<summary>📦 More Automation & Rules (7 tools)</summary>

| Tool | Description |
|---|---|
| `apply_column_formatting` | Apply custom formatting to a field in a list or library |
| `apply_view_formatting` | Apply custom JSON formatting to a list or library view |
| `get_approval_enabled` | Check whether modern approvals are enabled on a list |
| `get_approval_request` | Get approval request details for a list item |
| `get_quicksteps` | Retrieve all quicksteps for a list or library |
| `get_rules` | Retrieve all rules defined for a list |
| `resolve_approval_request` | Approve, reject, or cancel an approval request |

</details>

<details>
<summary>📦 Navigation (7 tools)</summary>

| Tool | Description |
|---|---|
| `navigate_to_url` | Navigate to a list, library, or page |
| `get_current_list_or_library` | Get info about the current list or library being viewed |
| `get_list_item_metadata` | Obtain key metadata from list items |
| `get_term_sets` | Retrieve the definition of a SharePoint term set |
| `get_view_definition` | Retrieve the complete definition of one or more views |
| `list_item_versions` | Enumerate all versions of one or more list items |
| `preview_view_changes` | Preview how a list would look after applying updated View XML |

</details>

<details>
<summary>📦 Updates & Configuration (4 tools)</summary>

| Tool | Description |
|---|---|
| `get_restoreable_lists` | Retrieve lists and libraries in the recycle bin |
| `restore_list` | Restore a list or library from the recycle bin |
| `update_batch_list_items` | Batch update list items matching a CAML query |
| `update_list_items` | Update existing items in a list |

</details>

<details>
<summary>📦 Platform (3 tools)</summary>

| Tool | Description |
|---|---|
| `create_skill` | Create and save a skill to the Agent Assets library |
| `load_skill` | Load a specific skill into the current conversation context |
| `set_context_file` | Create or update the SHAREPOINT.md context file |

</details>

<details>
<summary>📦 Sydney-based (4 tools)</summary>

| Tool | Description |
|---|---|
| `fetch_file` | Fetch and analyse files using the M365 file analysis agent |
| `org_chart` | Retrieve organisational chart information |
| `qna_on_list` | Answer questions about content in the current list or library |
| `search_enterprise_files` | Search for information across the enterprise |

</details>

> Tool availability may vary by tenant configuration. The tool list above reflects the AI in SharePoint public preview as of May 2026. Tools may be added or removed as the feature evolves.

---

## Resources

- [AI Skills in SharePoint — Microsoft Learn](https://learn.microsoft.com/en-us/sharepoint/ai-in-sharepoint-skills)
- [Get started with AI in SharePoint — Microsoft Learn](https://learn.microsoft.com/en-us/sharepoint/ai-in-sharepoint-get-started)
- [AI Skills public preview announcement — Microsoft Tech Community](https://techcommunity.microsoft.com/blog/spblog/ai-skills-are-now-in-public-preview-teaching-ai-in-sharepoint-what-to-know-and-h/4512532)
- [Leon Armston's Blog — leonarmston.com](https://www.leonarmston.com)

---

## Code of Conduct

This repository follows the [PnP Community Code of Conduct](https://pnp.github.io/code-of-conduct/).

## Licence

This repository is licensed under the [MIT Licence](./LICENSE).

> **THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

*This project is maintained by [@leonarmston](https://github.com/leonarmston) and the Microsoft 365 PnP community.*
