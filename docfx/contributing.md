# Contributing

SP AI Skills is a community project — every skill you share helps the whole SharePoint community get more from AI in SharePoint.

## What makes a good contribution

- **It works** — test your skill in a real AI in SharePoint environment, not just written and assumed
- **It solves a real problem** — something your team actually uses, not a toy example
- **It's well documented** — a clear README with prerequisites, usage instructions, and example output

## Adding a new skill

### 1. Fork and branch

```bash
git clone https://github.com/LeonArmston/sp-ai-skills
cd sp-ai-skills
git checkout -b add/my-skill-name
```

### 2. Create your skill folder

```
samples/
└── [category]/
    └── [skill-name]/
        ├── SKILL.md
        ├── README.md
        └── assets/        # Optional screenshots
```

**Categories:** `document-quality` · `list-library` · `content-generation` · `governance` · `automation`

### 3. Write SKILL.md

Every `SKILL.md` must include frontmatter:

```yaml
---
name: my-skill-name
description: One-line description of what the skill does
category: document-quality
tools_required:
  - get_current_list_or_library
  - get_list_schema
tested_on: AI in SharePoint Public Preview (May 2026)
author: Your Name
---

[Skill instructions follow in plain Markdown...]
```

**Writing good instructions:**
- Be specific about what the user should have open or selected before invoking
- Chain tools logically — discover lists before writing to them
- Tell the agent exactly what output to produce (chat summary, list items, updated metadata, etc.)
- Handle edge cases: what should the agent do if a required list doesn't exist?

### 4. Write README.md

Use this template:

```markdown
# Skill Name

## Summary
What this skill does and when you'd use it.

## Prerequisites
- AI in SharePoint public preview enabled
- Microsoft 365 Copilot licence
- [Any list/library structure required]
- Tools required: [from tools_required frontmatter]

## How to deploy
1. Copy SKILL.md to Agent Assets/Skills/[skill-name]/ on your site
   OR paste the contents into AI in SharePoint chat and ask it to save as a skill

## How to use
How to invoke the skill and what inputs it expects.

## Example output
Description or screenshot of what the skill produces.

## Tested on
AI in SharePoint Public Preview – [Month Year]

## Author
[Name](https://github.com/handle)
```

### 5. Submit a pull request

Open a PR against `main` with a title like `Add skill: My Skill Name`. Include a brief description of the problem it solves and confirmation that you've tested it.

## Improving existing skills

Found a bug or want to improve an existing skill? Open an issue or submit a PR directly. Include what you changed and on which environment you tested.

## Code of Conduct

This repository follows the [PnP Community Code of Conduct](https://pnp.github.io/code-of-conduct/).

> **THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED.**
