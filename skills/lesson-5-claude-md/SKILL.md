---
name: lesson-5-claude-md
description: "Lesson 5: CLAUDE.md & Project Context — teach Claude about your project"
---

# Lesson 5: CLAUDE.md & Project Context

<Purpose>
Teach the student how to use CLAUDE.md to give Claude persistent project context. Present the material conversationally, use concrete examples of good vs. poor CLAUDE.md content, and guide the student through an interactive quiz and a hands-on challenge. Be encouraging throughout.
</Purpose>

## Introduction

CLAUDE.md is a special file that Claude Code reads automatically when you start a session. It's like a briefing document — you tell Claude about your project's conventions, tech stack, testing requirements, and coding style. Instead of explaining your project setup every time, you write it once in CLAUDE.md and Claude always knows.

There are two types of CLAUDE.md files. The **project CLAUDE.md** lives in your repository root and is shared with your entire team — everyone gets the same project-level context. The **user CLAUDE.md** lives at `~/.claude/CLAUDE.md` and holds your personal preferences that apply across all your projects, like your preferred coding style or tools you always use.

A good CLAUDE.md includes: the project's purpose, the tech stack, coding conventions, test commands, and any architecture notes that Claude needs to make good decisions. Keep it concise — Claude reads the whole file at the start of every session, so shorter and clearer is better than exhaustive.

## Key Concepts

- **CLAUDE.md purpose and location** — a briefing file Claude reads automatically at session start; project CLAUDE.md goes in the repo root
- **Project vs user CLAUDE.md** — project (`./CLAUDE.md`) is shared with the team; user (`~/.claude/CLAUDE.md`) holds personal preferences
- **What to include** — coding style, test commands, tech stack, architecture notes, naming conventions
- **How Claude reads it** — automatically at the start of every session; no manual loading needed

## Interactive Quiz

IMPORTANT: For each question below, present ONLY the question and the four options to the student using AskUserQuestion. Do NOT reveal, hint at, or confirm the correct answer until the student has explicitly made their choice. Wait for the student to respond before continuing.

### Question 1: What is CLAUDE.md and where does it go?

Present these options to the student:
A) A readme file that goes anywhere
B) A special instructions file in your project root that Claude reads automatically at the start of every session
C) A configuration file in ~/.config/
D) A markdown template for documentation

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Exactly right! CLAUDE.md is Claude's briefing document — it lives in your project root and is read automatically every time you start a Claude Code session in that directory. No imports, no commands needed.

If incorrect: The correct answer is B. CLAUDE.md is a special file Claude Code looks for in your project root at the start of every session. It acts as a persistent briefing: you write your project's conventions, stack, and commands once, and Claude always has that context.

### Question 2: What is the difference between project CLAUDE.md and user CLAUDE.md?

Present these options to the student:
A) They're the same thing
B) Project CLAUDE.md is in your repo (shared with team), user CLAUDE.md is in ~/.claude/ (personal preferences)
C) Project is for production, user is for development
D) There's only one CLAUDE.md

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Perfect! The project CLAUDE.md in your repo root is committed to version control and shared with the whole team. The user CLAUDE.md at ~/.claude/CLAUDE.md is personal — your preferred tools, style rules, and habits that apply to every project you work on.

If incorrect: The correct answer is B. Think of it this way: the project CLAUDE.md (in `./`) is for team-wide conventions that everyone should follow. The user CLAUDE.md (in `~/.claude/`) is for your personal preferences — the things you always want Claude to know about how you like to work, regardless of which project you're in.

### Question 3: Which of these is the BEST thing to put in CLAUDE.md?

Present these options to the student:
A) Your entire codebase copied into it
B) "Always use TypeScript with strict mode. Run tests with: npm test. Follow the existing naming convention in src/."
C) "Be a good AI"
D) API keys and passwords

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Great choice! Option B is specific and actionable — it tells Claude the language, the compiler strictness setting, the test command, and the naming convention. Claude can apply all of that immediately without asking.

If incorrect: The correct answer is B. Option A is too large — Claude reads the whole file at session start and you don't want it bloated with code. Option C is too vague to be useful. Option D is a serious security risk — never put secrets in CLAUDE.md since it's committed to version control. Option B is ideal: specific language settings, the test command, and a concrete style rule.

## Hands-On Challenge

### Challenge: Create a CLAUDE.md for this project

Tell the student:
"Now let's practice! Create a `CLAUDE.md` file in the current directory. It should include at least:
1. A brief project description (one or two sentences about what this project is)
2. A coding style or convention rule (e.g., naming conventions, indentation, language version)
3. A test command or build instruction (e.g., `npm test`, `python -m pytest`, `make build`)

Go ahead and create the file. When you're done, let me know and I'll verify it."

Let the student work on this. When they say they're done or ask you to check:

### Verification

1. Use the Read tool to read `CLAUDE.md` in the current working directory.
2. Check that the file exists and has at least 3 non-empty lines.
3. Check that the file contains at least one of these project instruction keywords: "test", "style", "convention", "build", "run", "npm", "python", "make", "install", "lint", "format", "typescript", "javascript".

If all checks pass: "Challenge passed! You've written a CLAUDE.md that gives Claude real project context. Next time you open Claude Code in this directory, it will have this briefing automatically — no extra prompting needed."

If the file does not exist: "Not quite — the file `CLAUDE.md` wasn't found in the current directory. Try asking Claude to create it with a project description, a style rule, and a command."

If the file exists but has fewer than 3 non-empty lines: "Close! The file exists but needs a bit more content. Make sure you have at least a project description, a style rule, and a command."

If the file has no instruction keywords: "The file exists but doesn't seem to contain any project instructions. Try adding a test command (like `npm test`) or a style rule (like 'use TypeScript strict mode')."

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
2. Update `lesson-5-claude-md`: set `quiz_score`, `quiz_total` (3), `challenge_passed` (true/false), `status` ("completed"), `completed_at` (current ISO timestamp).
3. Update `last_active` to the current ISO timestamp.
4. Write back to `.claude-workshop/progress.json`.
5. Count lessons with `"status": "completed"`. If all 6 are complete, show:
   ```
   *** WORKSHOP COMPLETE! You've finished all 6 lessons. ***
   ```

## What's Next?

Offer the student:
1. Continue to Lesson 6: Finding & Using Plugins — extend Claude Code with community plugins
2. Return to the lesson menu (`/claude-code-workshop:start`)
3. Review this lesson again
