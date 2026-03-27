# Progress Tracking Instructions (Maintainer Reference)

This file documents the progress tracking protocol. Each lesson SKILL.md embeds these instructions inline.

## Loading Progress

1. Read `.claude-workshop/progress.json` using the Read tool
2. If the file does not exist, create it with `mkdir -p .claude-workshop` and write the default JSON schema
3. If JSON parsing fails, warn the student and recreate with defaults

## Default Schema

```json
{
  "version": "1.0",
  "started_at": "<ISO timestamp>",
  "last_active": "<ISO timestamp>",
  "lessons": {
    "lesson_01_navigation": { "status": "not-started" },
    "lesson_02_editing":    { "status": "not-started" },
    "lesson_03_multi_file": { "status": "not-started" },
    "lesson_04_terminal":   { "status": "not-started" },
    "lesson_05_git":        { "status": "not-started" },
    "lesson_06_agents":     { "status": "not-started" }
  }
}
```

## Deriving Completion Status

- Count lessons where `status === "completed"` to get `total_completed`
- `all_complete = (total_completed === 6)`
- Do NOT read these from JSON — they are not stored

## Updating Progress

1. After each quiz answer: update `quiz_score`, set `status` to `"in-progress"`
2. After challenge verification: set `challenge_passed`
3. When `quiz_score === quiz_total` AND `challenge_passed === true`: set `status` `"completed"`, set `completed_at`
4. Always update `last_active`
5. Write updated JSON back

## Completion Check

After updating, derive `all_complete`. If true, show the completion badge.
