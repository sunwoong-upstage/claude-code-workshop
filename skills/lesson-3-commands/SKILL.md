---
name: lesson-3-commands
description: "Lesson 3: Running Commands — execute shell commands through Claude Code"
---

# Lesson 3: Running Commands

<Purpose>
Teach the student how Claude Code executes shell commands through the Bash tool. Present the material conversationally, use concrete examples that contrast safe and unsafe command requests, and guide the student through an interactive quiz and a hands-on challenge. Emphasize the permission system and best practices for safety. Be encouraging throughout.
</Purpose>

## Introduction

Claude Code can run shell commands directly in your terminal using the Bash tool. When you ask Claude to do something that requires a command — like creating a directory, running tests, or checking what files exist — Claude executes the command, reads the output, and acts on the results. This tight integration between conversation and execution is one of Claude Code's most powerful features.

The key thing to understand is the **permission system**. Claude distinguishes between read-only commands (like `ls`, `cat`, or `grep`) and commands that modify your system (like `mkdir`, `rm`, or `npm install`). For commands that could change your files or system state, Claude will ask for your approval before running them. You'll see a permission prompt, and you can approve or deny the action.

This design means you're always in control. You can let Claude run commands freely when you trust what it's doing, or you can review each command carefully. The best way to work with Claude on commands is to be specific about what you want — the more precise your request, the more precise the command Claude will run.

## Key Concepts

- **Bash tool** — Claude runs shell commands through a built-in Bash tool that executes in your current shell
- **Permission prompts** — Claude asks for approval before running commands that could modify your system
- **Reading command output** — Claude sees the stdout/stderr output and uses it to inform its next steps
- **Safety best practices** — be specific about what you want; avoid vague requests like "clean up" or "fix everything"
- **Background commands** — long-running processes (builds, servers) can run in the background so they don't block the conversation

## Interactive Quiz

IMPORTANT: For each question below, present ONLY the question and the four options to the student using AskUserQuestion. Do NOT reveal, hint at, or confirm the correct answer until the student has explicitly made their choice. Wait for the student to respond before continuing.

### Question 1: How does Claude Code run shell commands?

Present these options to the student:
A) It opens a separate terminal window
B) Through the Bash tool, which executes commands in your current shell
C) It can't run commands, only suggest them
D) Through a sandboxed VM

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Exactly right! The Bash tool lets Claude execute commands directly in your current shell environment. Claude sees the output and can act on it immediately — no copy-pasting required.

If incorrect: The correct answer is B. Claude uses a built-in Bash tool that runs commands directly in your current shell. It's not a separate window, not a VM, and not just suggestions — real commands run and Claude reads the real output.

### Question 2: What happens when Claude needs to run a command that could modify your system?

Present these options to the student:
A) It runs it automatically
B) It asks for your permission first
C) It refuses to run it
D) It only runs read-only commands

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Correct! Claude's permission system keeps you in control. Modifying commands — creating files, installing packages, deleting things — require your approval before they run. Read-only commands like `ls` or `cat` generally run without prompting.

If incorrect: The correct answer is B. Claude won't silently modify your system. When a command would create, delete, or change files or packages, Claude shows you a permission prompt and waits for your go-ahead. You can always deny an action you're not comfortable with.

### Question 3: Which is the safest way to ask Claude to help with commands?

Present these options to the student:
A) "Delete everything in this folder"
B) "Run rm -rf /"
C) "List all JavaScript files in the src directory and show me any that import the auth module"
D) "Just fix it"

--- AFTER STUDENT RESPONDS ---

The correct answer is C.

If correct: Perfect! Option C is specific, scoped, and read-only. It tells Claude exactly what to look for, where to look, and what to report — no guessing, no risk of unintended side effects.

If incorrect: The correct answer is C. Options A and B are dangerously vague or outright destructive — never ask Claude to "delete everything" or run `rm -rf /`. Option D gives Claude no direction at all. Option C is specific (JavaScript files), scoped (src directory), and safe (read-only search) — that's the model for good command requests.

## Hands-On Challenge

### Challenge: Use Claude Code to create a directory and file

Tell the student:
"Now let's practice using Claude Code to run commands. Ask Claude Code to do all three of these things:
1. Create a directory called `workshop-test-dir`
2. Create a file `workshop-test-dir/hello.txt` with the content 'Created by Claude Code'
3. List the contents of the directory

Go ahead and ask Claude to do this. When you're done, let me know and I'll verify the result."

Let the student work on this. When they say they're done or ask you to check:

### Verification

1. Use the Bash tool to run: `test -d workshop-test-dir && echo EXISTS || echo MISSING`
   - If output is "MISSING": the directory was not created. Tell the student: "The directory `workshop-test-dir` wasn't found. Try asking Claude explicitly: 'Create a directory called workshop-test-dir in the current folder.'"

2. Use the Bash tool to run: `test -f workshop-test-dir/hello.txt && echo EXISTS || echo MISSING`
   - If output is "MISSING": the file was not created. Tell the student: "The file `workshop-test-dir/hello.txt` wasn't found. Try asking Claude: 'Create a file called hello.txt inside workshop-test-dir with the text: Created by Claude Code'"

3. Use the Read tool to read `workshop-test-dir/hello.txt` and verify it contains "Created by Claude Code".
   - If the content is wrong or missing: "The file exists but doesn't have the right content. It should contain exactly: 'Created by Claude Code'"

If all three checks pass: "Challenge passed! You used Claude Code to run shell commands, create a directory, and write a file. That's the Bash tool in action."

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
2. Update `lesson-3-commands`: set `quiz_score`, `quiz_total` (3), `challenge_passed` (true/false), `status` ("completed"), `completed_at` (current ISO timestamp).
3. Update `last_active` to the current ISO timestamp.
4. Write back to `.claude-workshop/progress.json`.
5. Count lessons with `"status": "completed"`. If all 6 are complete, show:
   ```
   *** WORKSHOP COMPLETE! You've finished all 6 lessons. ***
   ```

## What's Next?

Offer the student:
1. Continue to Lesson 4: Slash Commands & Shortcuts — built-in commands for common actions
2. Return to the lesson menu (`/claude-code-workshop:start`)
3. Review this lesson again
