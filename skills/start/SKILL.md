---
name: start
description: Launch the Claude Code interactive workshop - learn Claude Code through hands-on lessons
---

## Instructions

Follow these steps exactly:

### Step 1: Display Welcome Message

Output this welcome message:

```
Welcome to the Claude Code Interactive Workshop!
=================================================

Learn Claude Code through hands-on lessons, quizzes, and challenges.
This workshop will teach you everything you need to use Claude Code effectively.
```

### Step 2: Load Progress

Read the file `.claude-workshop/progress.json`.

If it does not exist:
1. Run `mkdir -p .claude-workshop` via Bash
2. Write the following to `.claude-workshop/progress.json`, replacing `<current ISO timestamp>` with the actual current ISO 8601 timestamp:

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

### Step 3: Compute Completion

From the loaded progress data:
- `total_completed` = count of lessons where `status === "completed"`
- `all_complete` = (`total_completed === 6`)

### Step 4: If all_complete, Show Completion Badge

If `all_complete` is true, display:

```
========================================
  CONGRATULATIONS! Workshop Complete!
========================================

You've completed all 6 lessons!

Your Results:
  Lesson 1: Prompting          -- {quiz_score}/{quiz_total} quiz, challenge {PASSED/FAILED}
  Lesson 2: File Editing       -- {quiz_score}/{quiz_total} quiz, challenge {PASSED/FAILED}
  Lesson 3: Running Commands   -- {quiz_score}/{quiz_total} quiz, challenge {PASSED/FAILED}
  Lesson 4: Slash Commands     -- {quiz_score}/{quiz_total} quiz, challenge {PASSED/FAILED}
  Lesson 5: CLAUDE.md          -- {quiz_score}/{quiz_total} quiz, challenge {PASSED/FAILED}
  Lesson 6: Skills & Plugins   -- {quiz_score}/{quiz_total} quiz, challenge {PASSED/FAILED}

Overall Quiz Score: {sum}/{total}

You're now ready to use Claude Code effectively!
Next steps:
  - Explore community plugins
  - Create your own CLAUDE.md for your projects
  - Try building something with Claude Code!
```

(Fill in scores from the progress.json data. If a lesson has no score data, show "--".)

### Step 5: Show Lesson Menu

Display the lesson menu. For each lesson, show `[DONE]` if its status is "completed", otherwise `[    ]`:

```
Your Progress: {total_completed}/6 lessons completed

1. {[DONE] or [    ]} Talking to Claude -- prompting effectively
2. {[DONE] or [    ]} File Editing -- creating, reading, editing files
3. {[DONE] or [    ]} Running Commands -- shell commands, permissions
4. {[DONE] or [    ]} Slash Commands & Shortcuts -- /help, /clear, /compact
5. {[DONE] or [    ]} CLAUDE.md & Project Context -- project instructions
6. {[DONE] or [    ]} Finding & Using Plugins -- community plugins
```

### Step 6: Ask the Student to Choose

Use the AskUserQuestion tool with the question:

> "Which lesson would you like to start or continue? Enter a number (1-6) or describe what you'd like to learn:"

Provide these options: `["1", "2", "3", "4", "5", "6", "I want to learn about something specific..."]`

### Step 7: Route Based on Selection

Map the user's choice to the correct lesson skill:

| Choice | Skill to invoke |
|--------|----------------|
| "1" | `Skill("claude-code-workshop:lesson-1-prompting")` |
| "2" | `Skill("claude-code-workshop:lesson-2-file-editing")` |
| "3" | `Skill("claude-code-workshop:lesson-3-commands")` |
| "4" | `Skill("claude-code-workshop:lesson-4-slash-commands")` |
| "5" | `Skill("claude-code-workshop:lesson-5-claude-md")` |
| "6" | `Skill("claude-code-workshop:lesson-6-skills")` |

### Step 8: Handle Freeform Input

If the user chose "I want to learn about something specific..." or typed a freeform response, map keywords to lessons:

- "prompt", "ask", "talk", "chat" → invoke `Skill("claude-code-workshop:lesson-1-prompting")`
- "file", "edit", "create", "read", "write" → invoke `Skill("claude-code-workshop:lesson-2-file-editing")`
- "command", "shell", "terminal", "bash", "run" → invoke `Skill("claude-code-workshop:lesson-3-commands")`
- "slash", "shortcut", "/help", "/clear", "keyboard" → invoke `Skill("claude-code-workshop:lesson-4-slash-commands")`
- "claude.md", "project", "context", "memory", "instructions" → invoke `Skill("claude-code-workshop:lesson-5-claude-md")`
- "skill", "plugin", "community", "install", "marketplace" → invoke `Skill("claude-code-workshop:lesson-6-skills")`

If no keyword matches, ask the user to clarify which lesson topic interests them and re-prompt.
