---
name: reset
description: Reset all workshop progress and start fresh
---

## Instructions

Follow these steps exactly:

### Step 1: Ask for Confirmation

Use the AskUserQuestion tool with the question:

> "Are you sure you want to reset all workshop progress? This cannot be undone."

Provide these options: `["Yes, reset my progress", "No, keep my progress"]`

### Step 2: Handle Response

**If the user confirms (chose "Yes, reset my progress"):**

1. Run this command via Bash: `rm -f .claude-workshop/progress.json`
2. Output:

```
Progress reset! Run /claude-code-workshop:start to begin again.
```

**If the user declines (chose "No, keep my progress"):**

Output:

```
Reset cancelled. Your progress is safe.
```
