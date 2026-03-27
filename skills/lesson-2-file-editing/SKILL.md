---
name: lesson-2-file-editing
description: "Lesson 2: File Editing — creating, reading, and editing files with Claude Code"
---

# Lesson 2: File Editing

<Purpose>
Teach the student how Claude Code handles files — reading, creating, and editing them. Explain the three core file tools (Read, Write, Edit), when each is used, and how Claude resolves file paths. Guide the student through an interactive quiz and a two-step hands-on challenge that covers both creating and editing a file.
</Purpose>

## Introduction

One of Claude Code's most practical superpowers is working directly with files in your project. Rather than copying code into a chat window, you simply point Claude at the file and describe what you need. Claude then picks the right tool for the job automatically.

Claude Code has three core file tools. **Read** lets Claude view the contents of any file before deciding what to change — this is important because Claude always reads before editing, so it never overwrites something blindly. **Write** creates a brand-new file (or completely replaces an existing one). **Edit** makes targeted, surgical changes to a file that already exists, leaving everything else untouched. In practice you will rarely need to tell Claude which tool to use; just describe what you want and Claude figures out whether to read, write, or edit.

File paths are flexible. You can give Claude a full absolute path like `/Users/you/project/src/app.ts`, a relative path like `src/app.ts`, or even just a file name like `app.ts` if the file is unambiguous. Claude resolves the path based on the working directory of your session. The key habit to build is being explicit: the more clearly you describe which file and what change, the more accurate and safe Claude's edits will be.

## Key Concepts

- **Read tool** — view file contents; Claude always reads a file before editing it
- **Write tool** — create a new file or fully replace an existing one
- **Edit tool** — make targeted changes to an existing file without touching the rest
- **Absolute vs relative paths** — both work; Claude resolves paths from the session's working directory
- **Create vs edit** — use "create" when the file doesn't exist yet, "edit" or "update" when it does
- **Claude picks the tool** — you describe the goal; Claude selects Read, Write, or Edit automatically

## Interactive Quiz

IMPORTANT: For each question below, present ONLY the question and the four options to the student using AskUserQuestion. Do NOT reveal, hint at, or confirm the correct answer until the student has explicitly made their choice. Wait for the student to respond before continuing.

### Question 1: Which tool modifies an existing file?

Present these options to the student:
A) Write (overwrites the whole file)
B) Edit (makes targeted changes)
C) Bash with sed
D) Copy and paste

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Correct! The Edit tool makes precise, targeted changes — only the specified lines are touched. Write would replace the entire file, which could destroy content you want to keep. Claude defaults to Edit whenever a file already exists and you only want to change part of it.

If incorrect: The correct answer is B. The Edit tool makes surgical, targeted changes to an existing file. Write replaces the entire file — risky if you only want to change one line. Claude uses Edit by default when a file already exists and you want to modify it partially.

### Question 2: Create new vs edit existing?

Present these options to the student:
A) Always create new files
B) Create when the file doesn't exist yet; edit when it does
C) Always edit
D) It doesn't matter

--- AFTER STUDENT RESPONDS ---

The correct answer is B.

If correct: Exactly right! The distinction matters because Write and Edit behave very differently. Write creates (or replaces) a file from scratch. Edit modifies specific parts of a file that already exists. Matching the right tool to the situation keeps your files safe.

If incorrect: The correct answer is B. "Create" and "edit" are meaningfully different operations. If you ask Claude to create a file that already exists, it may overwrite it entirely. If you ask it to edit a file that doesn't exist yet, there's nothing to edit. Being explicit about intent ("create a new file called X" vs "edit the existing file X") helps Claude choose the right tool.

### Question 3: How does Claude know which file to edit?

Present these options to the student:
A) It guesses randomly
B) You must always give the full absolute path
C) You can give a file name, relative path, or absolute path — Claude figures it out
D) You must open the file first

--- AFTER STUDENT RESPONDS ---

The correct answer is C.

If correct: Right! Claude accepts file names, relative paths, and absolute paths. It resolves them against the session's working directory. Being more specific (e.g., including the folder) helps when multiple files share the same name.

If incorrect: The correct answer is C. You don't need to provide a full absolute path every time. Claude accepts a file name (`app.ts`), a relative path (`src/app.ts`), or a full absolute path. It resolves the location from the session's working directory. The more specific you are, the less ambiguity — but short names work fine for unambiguous files.

## Hands-On Challenge

### Challenge: Create and then edit a file

Tell the student:
"This challenge has two steps.

**Step 1:** Create a file called `workshop-test.txt` with exactly this content:
```
Line 1: Hello from the Claude Code Workshop
Line 2: This is a test file
Line 3: Learning is fun
```

**Step 2:** Edit that file so that Line 2 reads: `Line 2: I edited this with Claude Code`

Give it a try — use two separate prompts, one to create and one to edit. Let me know when you're done and I'll check the result."

Let the student work on this. When they say they're done or ask you to check:

### Verification

1. Use the Read tool to read `workshop-test.txt` in the current working directory.
2. Check that the file contains `Hello from the Claude Code Workshop`.
3. Check that the file contains `I edited this with Claude Code`.
4. Check that the file does NOT contain `This is a test file`.

If all three checks pass: "Challenge passed! You created a file and then made a targeted edit — exactly how Claude Code file editing works in real projects. Well done."

If the file does not exist: "Not quite — `workshop-test.txt` wasn't found. Start with Step 1: ask Claude to create the file with the three lines of content shown above."

If the file still contains "This is a test file": "Almost there — the file exists, but Line 2 hasn't been updated yet. Ask Claude to edit `workshop-test.txt` and change 'This is a test file' to 'I edited this with Claude Code'."

If the file is missing "Hello from the Claude Code Workshop": "The file seems to be missing some of the original content. Try creating it again with all three lines, then re-apply the edit to Line 2."

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
2. Update `lesson-2-file-editing`: set `quiz_score`, `quiz_total` (3), `challenge_passed` (true/false), `status` ("completed"), `completed_at` (current ISO timestamp).
3. Update `last_active` to the current ISO timestamp.
4. Write back to `.claude-workshop/progress.json`.
5. Count lessons with `"status": "completed"`. If all 6 are complete, show:
   ```
   *** WORKSHOP COMPLETE! You've finished all 6 lessons. ***
   ```

## What's Next?

Offer the student:
1. Continue to Lesson 3: Commands — running shell commands and scripts with Claude Code
2. Return to the lesson menu (`/claude-code-workshop:start`)
3. Review this lesson again
