---
name: lesson-6-skills
description: "Lesson 6: Finding & Using Plugins — extend Claude Code with community plugins"
---

# Lesson 6: Finding & Using Plugins

<Purpose>
Teach the student how the Claude Code plugin ecosystem works, how plugins are installed, and how skills become slash commands. Use concrete examples from this workshop itself — the student is using a plugin right now. Guide the student through an interactive quiz and a hands-on challenge. Be encouraging throughout.
</Purpose>

## Introduction

Claude Code has a plugin ecosystem that extends what it can do. Plugins add new slash commands — called skills — that give Claude Code new capabilities beyond what it ships with. Plugins are distributed as GitHub repositories and installed via the `claude plugin` command.

Here's the exciting part: this workshop itself is a plugin! You installed it with `claude plugin marketplace add` and `claude plugin install`, and right now you're running its `/claude-code-workshop:start` skill. Everything you're doing in this lesson is made possible by the plugin system you're about to learn about.

A plugin is a GitHub repository that contains a `skills/` directory. Each subdirectory in `skills/` holds a `SKILL.md` file that defines what that skill does. When the plugin is installed, every skill automatically becomes a slash command in the format `/plugin-name:skill-name`. No manual registration, no config files — just a `SKILL.md` file in the right place.

To install a plugin: first add it to your local plugin registry with `claude plugin marketplace add <github-url>`, then install it with `claude plugin install <plugin-name>`. From that point on, all its skills are available as slash commands.

## Key Concepts

- **What plugins are** — GitHub repositories containing a `skills/` directory with `SKILL.md` files that add new slash commands
- **How to install** — `claude plugin marketplace add <github-url>` to register, then `claude plugin install <plugin-name>` to activate
- **How skills become slash commands** — each `skills/<name>/SKILL.md` automatically becomes `/plugin-name:name`
- **Exploring available plugins** — browse the plugin's `skills/` directory to see all available commands

## Interactive Quiz

IMPORTANT: For each question below, present ONLY the question and the four options to the student using AskUserQuestion. Do NOT reveal, hint at, or confirm the correct answer until the student has explicitly made their choice. Wait for the student to respond before continuing.

### Question 1: What IS a Claude Code plugin?

Present these options to the student:
A) A Chrome browser extension
B) A GitHub repository containing skill files (SKILL.md) that add new slash commands to Claude Code
C) A Python package installed with pip
D) A VS Code extension

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Exactly! A Claude Code plugin is simply a GitHub repository with a specific structure — a `skills/` directory where each subdirectory contains a `SKILL.md` file. That's it. No compiled code, no package registry, just markdown files in the right layout.

If incorrect: The correct answer is B. Claude Code plugins aren't browser extensions, pip packages, or VS Code extensions. They're GitHub repositories with a `skills/` directory containing `SKILL.md` files. The plugin you're using right now — this workshop — is one such repository.

### Question 2: How do you install a Claude Code plugin?

Present these options to the student:
A) npm install -g plugin-name
B) pip install plugin-name
C) claude plugin marketplace add <github-url> followed by claude plugin install
D) Download a .zip file and extract it

--- AFTER STUDENT RESPONDS ---

The correct answer is C.

IMPORTANT: Option A with npm is WRONG — this is the old deprecated method. Make sure to clarify this if the student chooses A.

If correct: Perfect! The two-step process is: `claude plugin marketplace add <github-url>` to register the plugin from its GitHub URL, then `claude plugin install <plugin-name>` to activate it. That's exactly how you installed this workshop.

If incorrect (and chose A): The correct answer is C, not A. `npm install -g` is the old, deprecated method for installing Claude Code plugins — it no longer works. The current method is `claude plugin marketplace add <github-url>` to register the plugin, then `claude plugin install <plugin-name>` to activate it.

If incorrect (chose B, D, or other): The correct answer is C. Plugins aren't Python packages or zip downloads. Use `claude plugin marketplace add <github-url>` to register the plugin from its GitHub URL, then `claude plugin install <plugin-name>` to activate it. This is exactly how you installed this workshop.

### Question 3: How do plugin skills become slash commands?

Present these options to the student:
A) You manually register each command in a config file
B) The plugin's skills/ directory contains SKILL.md files, each automatically becomes a /plugin-name:skill-name command
C) You edit a global Claude Code settings file
D) They don't — you have to call them differently

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Spot on! The naming is automatic and based on directory structure: a file at `skills/my-feature/SKILL.md` in a plugin called `my-plugin` becomes `/my-plugin:my-feature`. No registration, no config — just the file in the right place.

If incorrect: The correct answer is B. The plugin system uses a convention-over-configuration approach: every `skills/<name>/SKILL.md` in a plugin automatically becomes a `/plugin-name:name` slash command. You can explore what commands a plugin offers just by looking at its `skills/` directory on GitHub.

## Hands-On Challenge

### Challenge: Explore this workshop plugin's structure

Tell the student:
"Since you're already running a plugin — this workshop — let's explore how it's structured from the inside! Here's your task:

1. Use Claude Code to read the plugin manifest at `.claude-plugin/plugin.json` in the workshop directory at `/Users/sunwoong/dev/personal/claude-code-workshop/` (or wherever this workshop is installed).
2. Look at the `skills/` directory and identify at least 3 skill folders.
3. Create a file called `workshop-plugin-notes.md` in the current directory summarizing what you found: the plugin name, version, and at least 3 skills with their descriptions.

Go ahead and explore! When you're done creating the notes file, let me know and I'll verify it."

Let the student work on this. When they say they're done or ask you to check:

### Verification

1. Use the Read tool to read `workshop-plugin-notes.md` in the current working directory.
2. Check that the file exists.
3. Check that the file mentions "claude-code-workshop" (the plugin name).
4. Check that the file mentions at least 3 skill names — look for any of: "start", "reset", "lesson-1", "lesson-2", "lesson-3", "lesson-4", "lesson-5", "lesson-6", "lesson".

If all checks pass: "Challenge passed! You've explored a real plugin from the inside. Every Claude Code plugin works the same way — a GitHub repo, a plugin.json, and a skills/ directory. Now you know how to read any plugin's structure."

If the file does not exist: "Not quite — `workshop-plugin-notes.md` wasn't found. Try asking Claude to read the plugin.json and skills/ directory, then create that file summarizing what it found."

If the file exists but doesn't mention 'claude-code-workshop': "The file exists but doesn't mention the plugin name 'claude-code-workshop'. Make sure your notes include the plugin name from the plugin.json manifest."

If the file exists but doesn't mention 3 skills: "The file exists but I couldn't find 3 or more skill names. Make sure you list at least 3 of the skills from the skills/ directory (like 'start', 'reset', and any lesson skill)."

## Progress Update

After completing the quiz and challenge, update the student's progress:

1. Read `.claude-workshop/progress.json` (create with defaults if missing):
   Default schema:
   ```json
   {
     "version": "1.0",
     "started_at": "<current ISO timestamp>",
     "last_active": "<current ISO timestamp>",
     "lessons": {
       "lesson-1-prompting": { "status": "not-started" },
       "lesson-2-file-editing": { "status": "not-started" },
       "lesson-3-commands": { "status": "not-started" },
       "lesson-4-slash-commands": { "status": "not-started" },
       "lesson-5-claude-md": { "status": "not-started" },
       "lesson-6-skills": { "status": "not-started" }
     }
   }
   ```
2. Update `lesson-6-skills`: set `quiz_score`, `quiz_total` (3), `challenge_passed` (true/false), `status` ("completed"), `completed_at` (current ISO timestamp).
3. Update `last_active` to the current ISO timestamp.
4. Write back to `.claude-workshop/progress.json`.
5. Count lessons with `"status": "completed"`. If all 6 are complete, show:
   ```
   *** WORKSHOP COMPLETE! You've finished all 6 lessons. ***
   ```

## What's Next?

Offer the student:
1. Return to the lesson menu (`/claude-code-workshop:start`) to review any lessons
2. Explore the Claude Code plugin marketplace to find more plugins
3. Try creating your own plugin — start with a `skills/` directory and a `SKILL.md` file!
