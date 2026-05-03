# Getting Started

AI Skills for AI in SharePoint let you define repeatable, multi-step workflows as Markdown files. Your whole team can invoke a skill by name and get consistent, reliable results every time — no code required.

## Prerequisites

Before using any skill in this repository, make sure you have:

- **Microsoft 365 Copilot licence** — required for AI in SharePoint
- **AI in SharePoint enabled** — your site or tenant must be opted into the public preview
- **Edit permissions** on the site to save skills; View permissions to run them

> **Tip:** Type `--agenttools` in the AI in SharePoint chat panel to see which tools are active in your environment. Not all tools are available in every tenant configuration.

## What is a skill?

A skill is a `SKILL.md` file stored in the `Agent Assets/Skills/` library on your SharePoint site. When the AI in SharePoint agent loads a skill, it follows the instructions in the file step-by-step using its built-in tools.

Skills can:

- Read and analyse documents and list items
- Create, update, or organise content
- Apply formatting and views
- Set up rules, approvals, and quicksteps
- Chain multiple actions together in a single workflow

## Deploying a skill

### Option 1 — Via chat (recommended for quick testing)

1. Open AI in SharePoint from the chat panel on your site
2. Paste the contents of `SKILL.md` and ask the agent to save it:
   > *"Create a skill from the following definition and save it to this site"*
3. Invoke the skill by name:
   > *"Run [skill name] on the documents in this library"*

### Option 2 — Direct file upload

1. Navigate to `Agent Assets/Skills/` on your site
2. Create a folder named after the skill (e.g. `metadata-completeness-checker`)
3. Upload `SKILL.md` into that folder
4. Call the skill from the AI chat by name

## Checking which skills are saved

Type `–Agent-Skills` in the AI in SharePoint chat panel to list all skills currently saved on your site.

## Available tools

Skills can only use the built-in tools provided by AI in SharePoint. Use `--agenttools` in chat to see what's available in your environment.

The full tool reference is in the [README](https://github.com/LeonArmston/sp-ai-skills#available-agent-tools) and in the [CLAUDE.md](https://github.com/LeonArmston/sp-ai-skills/blob/main/CLAUDE.md) project file.

## Troubleshooting

**Skill not found** — Make sure the `SKILL.md` is in a subfolder of `Agent Assets/Skills/`, not directly in the library root.

**Tool not available** — Run `--agenttools` to confirm the tool exists in your environment. Some tools require specific tenant configuration.

**Unexpected results** — Skills are instructions to the AI agent. Results may vary based on your content and environment. Test with representative data before using in production.

## Resources

- [AI Skills in SharePoint — Microsoft Learn](https://learn.microsoft.com/en-us/sharepoint/ai-in-sharepoint-skills)
- [AI in SharePoint overview — Microsoft Learn](https://learn.microsoft.com/en-us/sharepoint/ai-in-sharepoint-get-started)
- [Public preview announcement](https://techcommunity.microsoft.com/blog/spblog/ai-skills-are-now-in-public-preview-teaching-ai-in-sharepoint-what-to-know-and-h/4512532)
