# Contributing to SP AI Skills

Thank you for contributing! This repo is a community collection of AI Skills for AI in SharePoint (Microsoft 365 Copilot). Every skill you share helps the whole community get more out of AI in SharePoint.

## Before you start

- Test your skill in a real AI in SharePoint environment — actually run it, don't just author it
- Make sure the skill only uses tools available in your environment (use `--agenttools` in chat to verify)
- Keep `SKILL.md` as pure instructions — no YAML frontmatter

## Folder structure

Each skill lives in its own folder under `samples/[category]/[skill-name]/`:

```
samples/
└── [category]/
    └── [skill-name]/
        ├── SKILL.md       # The deployable skill definition
        ├── README.md      # Usage, prerequisites, example output
        └── assets/        # Optional screenshots
```

## SKILL.md format

`SKILL.md` contains only the skill instructions — pure Markdown the AI agent reads directly. No YAML frontmatter. Start with a `#` heading and write step-by-step instructions.

```markdown
# Skill Name

Brief description of what this skill does.

## Step 1 — ...
```

All metadata (category, tools, author, version) belongs in `README.md`, not in `SKILL.md`. Users copy or drop `SKILL.md` straight into their SharePoint environment.

## README.md template

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

## Categories

| Folder | Use for |
|---|---|
| `document-quality` | Metadata checking, ROT detection, readability, version review |
| `list-library` | Schema auditing, view management, column formatting, duplicate detection |
| `content-generation` | Document generation, report creation, proposal assembly |
| `governance` | Compliance checking, audit trails, sensitivity, approvals |
| `automation` | Rules, quicksteps, approval workflows, batch updates |

## Submitting a pull request

1. Fork this repository
2. Create a branch: `add/[skill-name]`
3. Add your skill under `samples/[category]/[skill-name]/`
4. Open a pull request with a clear description of what the skill does and what you tested it on

## Code of Conduct

This repository follows the [PnP Community Code of Conduct](https://pnp.github.io/code-of-conduct/).

> **THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
