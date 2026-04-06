/**
 * Progress Schema Reference
 *
 * This file is a TypeScript schema reference only — it is NOT executed at runtime.
 * It documents the shape of .claude-workshop/progress.json for maintainers and tooling.
 *
 * Schema version: "1.0"
 *
 * Migration instructions:
 *   - If progress.json has no "version" field, treat it as pre-1.0 and recreate with defaults.
 *   - If version is "1.0", read as-is.
 *   - Future versions: add a migration function below and update the version string.
 */

// ─── Lesson Status ───────────────────────────────────────────────────────────

export type LessonStatus = "not-started" | "in-progress" | "completed";

// ─── Lesson Progress ──────────────────────────────────────────────────────────

export interface LessonProgress {
  status: LessonStatus;
  /** Number of correct quiz answers so far (omitted until quiz begins) */
  quiz_score?: number;
  /** Total number of quiz questions in the lesson (omitted until quiz begins) */
  quiz_total?: number;
  /** Whether the hands-on challenge has been verified as passing (omitted until attempted) */
  challenge_passed?: boolean;
  /** ISO 8601 timestamp set when status transitions to "completed" (omitted until completed) */
  completed_at?: string;
}

// ─── Workshop Progress ────────────────────────────────────────────────────────

export interface WorkshopProgress {
  /** Schema version — currently always "1.0" */
  version: "1.0";
  /** ISO 8601 timestamp of first session start */
  started_at: string;
  /** ISO 8601 timestamp of most recent activity — always updated on write */
  last_active: string;
  /**
   * Per-lesson progress keyed by lesson identifier.
   * All 7 lesson keys must always be present (initialized to "not-started").
   */
  lessons: {
    "lesson-1-prompting": LessonProgress;
    "lesson-2-file-editing": LessonProgress;
    "lesson-3-commands": LessonProgress;
    "lesson-4-slash-commands": LessonProgress;
    "lesson-5-claude-md": LessonProgress;
    "lesson-6-skills": LessonProgress;
    "lesson-7-creating-skills": LessonProgress;
  };
  //
  // NOTE: `total_completed` and `all_complete` are DERIVED on read, NOT stored.
  //
  // To derive:
  //   total_completed = Object.values(lessons).filter(l => l.status === "completed").length
  //   all_complete    = (total_completed === 7)
  //
  // Never write these fields back to progress.json.
}

// ─── Default Progress ─────────────────────────────────────────────────────────

/**
 * Use this constant (with actual timestamps) when creating a fresh progress.json.
 * Replace started_at and last_active with the current ISO timestamp at creation time.
 */
export const DEFAULT_PROGRESS: WorkshopProgress = {
  version: "1.0",
  started_at: "<ISO timestamp at creation>",
  last_active: "<ISO timestamp at creation>",
  lessons: {
    "lesson-1-prompting": { status: "not-started" },
    "lesson-2-file-editing": { status: "not-started" },
    "lesson-3-commands": { status: "not-started" },
    "lesson-4-slash-commands": { status: "not-started" },
    "lesson-5-claude-md": { status: "not-started" },
    "lesson-6-skills": { status: "not-started" },
    "lesson-7-creating-skills": { status: "not-started" },
  },
};
