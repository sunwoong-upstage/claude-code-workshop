---
name: lesson-4-slash-commands
description: "Lesson 4: Slash Commands & Shortcuts — master Claude Code's built-in commands"
---

# Lesson 4: Slash Commands & Shortcuts

<Purpose>
Teach the student how to use Claude Code's built-in slash commands and keyboard shortcuts. Present the material conversationally, explain the difference between /clear and /compact clearly, and guide the student through an interactive quiz and a hands-on challenge. Be encouraging throughout.
</Purpose>

## Introduction

Claude Code has a set of built-in slash commands that give you quick access to common actions. You can see all available commands by typing `/` in the chat — a menu will appear showing everything that's available. These commands save you from having to describe common operations in natural language.

A few commands you'll use constantly: `/help` shows documentation about Claude Code features and available commands — it's your first stop when you're not sure what's possible. `/clear` resets your conversation entirely, giving you a fresh start with no memory of previous messages. `/compact` does something subtler — it summarizes your conversation to free up context window space while keeping the key information. Use `/compact` when a long session is getting slow; use `/clear` when you want a completely fresh start.

You can also switch models mid-conversation with `/model`, which is handy when you want to use a faster model for quick tasks or a more capable one for complex work.

Beyond slash commands, there are keyboard shortcuts that speed up your workflow: **Escape** cancels the current operation, and **Ctrl+C** interrupts a running command. These are the ones you'll reach for most often when something is taking too long or going in the wrong direction.

## Key Concepts

- **Slash command menu** — type `/` in the chat to see all available commands
- **/help** — shows documentation about Claude Code features and available commands
- **/clear vs /compact** — `/clear` resets the entire conversation (fresh start); `/compact` summarizes it (keeps context but frees space)
- **/model** — switch between Claude models mid-conversation
- **Keyboard shortcuts** — Escape to cancel, Ctrl+C to interrupt a running command

## Interactive Quiz

IMPORTANT: For each question below, present ONLY the question and the four options to the student using AskUserQuestion. Do NOT reveal, hint at, or confirm the correct answer until the student has explicitly made their choice. Wait for the student to respond before continuing.

### Question 1: What does the /help command do?

Present these options to the student:
A) Fixes your code
B) Shows documentation about Claude Code features and available commands
C) Calls customer support
D) Resets your session

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Exactly right! `/help` is your go-to reference for what Claude Code can do. It shows available commands, features, and how to use them — bookmark it mentally for whenever you're not sure what's possible.

If incorrect: The correct answer is B. `/help` displays built-in documentation about Claude Code's features and available commands. It doesn't fix code, contact support, or reset anything — it's simply your in-app reference guide.

### Question 2: What does /compact do?

Present these options to the student:
A) Deletes all your files
B) Compresses your conversation to save context window space while keeping key information
C) Makes Claude's responses shorter
D) Clears the screen

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Correct! `/compact` is for long sessions where you want to keep working without starting over. It summarizes the conversation history to reclaim context window space, so Claude stays fast and responsive without losing the thread of what you've been doing.

If incorrect: The correct answer is B. `/compact` doesn't delete anything — it creates a compressed summary of your conversation history. This frees up context window space so you can keep going in long sessions without hitting limits or slowing down. Your important context is preserved.

### Question 3: What is the difference between /clear and /compact?

Present these options to the student:
A) They do the same thing
B) /clear resets the entire conversation (fresh start), /compact summarizes it (keeps context but frees space)
C) /clear compacts and /compact clears
D) /clear is for files, /compact is for messages

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Perfect! This is an important distinction. `/clear` is a hard reset — Claude forgets everything and you start fresh. `/compact` is a soft compression — Claude keeps a summary of what happened, frees up space, and you continue the same thread. Use `/clear` when you're done with a topic; use `/compact` when you want to keep going.

If incorrect: The correct answer is B. `/clear` wipes the slate completely — after running it, Claude has no memory of your previous messages. `/compact` instead creates a summary, preserving the important context while freeing up space. They are opposites in approach: one forgets, one summarizes.

## Hands-On Challenge

### Challenge: Explore slash commands and document them

Tell the student:
"Now let's practice using slash commands. Type `/` in a Claude Code chat to open the slash command menu and explore what's available. Then create a file called `workshop-slash-commands.md` that documents at least 5 slash commands you discovered.

For each command, write the command name starting with `/` followed by a brief description of what it does. For example:
```
/help - Shows documentation about Claude Code features and available commands
```

Go ahead and explore the commands, then create the file. When you're done, let me know and I'll verify your work."

Let the student work on this. When they say they're done or ask you to check:

### Verification

1. Use the Read tool to read `workshop-slash-commands.md`.
   - If the file does not exist: "The file `workshop-slash-commands.md` wasn't found in the current directory. Make sure you ask Claude to create it (or create it yourself) with the slash command documentation."

2. Count how many lines in the file start with `/` (a slash command entry).
   - If fewer than 5 lines start with `/`: "Not quite — I found fewer than 5 slash command entries. Each command should be on its own line starting with `/`. Add more commands until you have at least 5 documented."

3. Check that each line starting with `/` also contains descriptive text after the command name (not just the command alone).
   - If any line has only a command with no description: "Almost there — some entries are missing descriptions. Each command line should include a brief explanation of what the command does, like: `/clear - Resets the conversation to a fresh start`"

If all checks pass: "Challenge passed! You've explored Claude Code's slash commands and documented them. You now have a personal reference for the commands you'll use most."

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
2. Update `lesson-4-slash-commands`: set `quiz_score`, `quiz_total` (3), `challenge_passed` (true/false), `status` ("completed"), `completed_at` (current ISO timestamp).
3. Update `last_active` to the current ISO timestamp.
4. Write back to `.claude-workshop/progress.json`.
5. Count lessons with `"status": "completed"`. If all 6 are complete, show:
   ```
   *** WORKSHOP COMPLETE! You've finished all 6 lessons. ***
   ```

## What's Next?

Offer the student:
1. Continue to Lesson 5: CLAUDE.md & Project Context — giving Claude persistent project instructions
2. Return to the lesson menu (`/claude-code-workshop:start`)
3. Review this lesson again
