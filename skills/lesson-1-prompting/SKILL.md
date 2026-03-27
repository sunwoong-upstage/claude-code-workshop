---
name: lesson-1-prompting
description: "Lesson 1: Talking to Claude — learn to write effective prompts"
---

# Lesson 1: Talking to Claude

<Purpose>
Teach the student how to write effective prompts for Claude Code. Present the material conversationally, use concrete examples that contrast weak and strong prompts, and guide the student through an interactive quiz and a hands-on challenge. Be encouraging throughout.
</Purpose>

## Introduction

The single most important skill when working with Claude Code is writing clear, specific prompts. Claude is powerful, but it can only work with the information you give it. A vague request leads to a generic response; a precise request leads to exactly what you need.

Consider the difference between these two prompts: "fix my code" versus "fix the TypeError in src/auth.ts on line 42 where the user object might be null — the function should return an empty string if the user is undefined." The second prompt gives Claude the file, the line, the error type, the cause, and the desired behavior. Claude can act immediately and accurately.

Good prompts share three qualities: they are **specific** (naming files, line numbers, and error messages), they provide **context** (what you were doing, what went wrong), and they state the **desired outcome** (what the fixed behavior should look like). When a first attempt doesn't get you exactly what you want, iterate — add more detail or clarify your intent in a follow-up message rather than starting over.

## Key Concepts

- **Specific vs vague prompts** — name the file, function, and error rather than saying "something is broken"
- **Providing file paths and error messages** — copy the exact error text into your prompt
- **Stating desired outcomes** — describe what success looks like, not just what is wrong
- **Iterating on prompts** — use follow-up messages to refine Claude's response without restarting

## Interactive Quiz

IMPORTANT: For each question below, present ONLY the question and the four options to the student using AskUserQuestion. Do NOT reveal, hint at, or confirm the correct answer until the student has explicitly made their choice. Wait for the student to respond before continuing.

### Question 1: What makes a good prompt?

Present these options to the student:
A) "Fix my code"
B) "Fix the TypeError in src/auth.ts line 42 where the user object is null"
C) "Make it work"
D) "Do the thing"

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Great work! Option B is strong because it names the exact file (`src/auth.ts`), the line number (42), the error type (TypeError), and the root cause (null user object). Claude can go straight to the problem without guessing.

If incorrect: The correct answer is B. Options A, C, and D give Claude nothing to work with — no file, no error, no context. Option B names the exact file, line number, error type, and cause, so Claude can act immediately and precisely.

### Question 2: Which provides the best context?

Present these options to the student:
A) "The app is broken"
B) "I'm getting errors"
C) "After running npm test, the auth.test.ts file fails with 'Cannot read property email of undefined' on line 23"
D) "Something's wrong with the tests"

--- AFTER STUDENT RESPONDS ---

The correct answer is C.

If correct: Exactly right! Option C includes the command that triggered the failure, the exact file, the precise error message, and the line number. That's everything Claude needs to diagnose and fix the problem without back-and-forth.

If incorrect: The correct answer is C. Options A, B, and D are too vague — Claude would have to ask several follow-up questions before doing anything useful. Option C includes the triggering command, the file name, the exact error text, and the line number. More context always produces better results.

### Question 3: When should you use a follow-up message?

Present these options to the student:
A) Always start fresh with a new prompt
B) When you want to refine or build on Claude's previous response
C) Never — one prompt should do everything
D) Only when Claude makes a mistake

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Perfect! Follow-up messages let you refine, redirect, or extend Claude's work without losing the context already established. It's more efficient than starting over and often gets you to the right answer faster.

If incorrect: The correct answer is B. Starting fresh every time loses all the context Claude has built up. Follow-up messages are a normal, efficient part of working with Claude — use them to add detail, correct a misunderstanding, or ask Claude to adjust its approach.

## Hands-On Challenge

### Challenge: Write a specific prompt and execute it

Tell the student:
"Now let's practice writing a specific, outcome-focused prompt. Ask Claude Code to create a file called `workshop-greeting.js` that exports a function called `greet` which takes a `name` parameter and returns the string: `Hello, {name}! Welcome to Claude Code.`

Go ahead and write that prompt and run it. When you're done, let me know and I'll verify the result."

Let the student work on this. When they say they're done or ask you to check:

### Verification

1. Use the Read tool to read `workshop-greeting.js` in the current working directory.
2. Check that the file contains `function greet` or `const greet` (the function definition).
3. Check that the file contains the string `Hello`.
4. Check that the file contains `Welcome to Claude Code`.

If all checks pass: "Challenge passed! Your prompt was clear enough to produce a working `greet` function. That's the prompt-writing skill in action."

If the file does not exist: "Not quite — the file `workshop-greeting.js` wasn't found. Try again with a prompt that explicitly names the file and its location. For example: 'Create a file called workshop-greeting.js that exports a greet function...'"

If the file exists but is missing content: "Not quite — the file exists but is missing some expected content. Check that your function returns a string containing 'Hello' and 'Welcome to Claude Code', then try again."

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
2. Update `lesson-1-prompting`: set `quiz_score`, `quiz_total` (3), `challenge_passed` (true/false), `status` ("completed"), `completed_at` (current ISO timestamp).
3. Update `last_active` to the current ISO timestamp.
4. Write back to `.claude-workshop/progress.json`.
5. Count lessons with `"status": "completed"`. If all 6 are complete, show:
   ```
   *** WORKSHOP COMPLETE! You've finished all 6 lessons. ***
   ```

## What's Next?

Offer the student:
1. Continue to Lesson 2: File Editing — creating, reading, and editing files with Claude Code
2. Return to the lesson menu (`/claude-code-workshop:start`)
3. Review this lesson again
