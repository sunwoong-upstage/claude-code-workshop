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
   * All 6 lesson keys must always be present (initialized to "not-started").
   */
  lessons: {
    lesson_01_navigation: LessonProgress;
    lesson_02_editing: LessonProgress;
    lesson_03_multi_file: LessonProgress;
    lesson_04_terminal: LessonProgress;
    lesson_05_git: LessonProgress;
    lesson_06_agents: LessonProgress;
  };
  //
  // NOTE: `total_completed` and `all_complete` are DERIVED on read, NOT stored.
  //
  // To derive:
  //   total_completed = Object.values(lessons).filter(l => l.status === "completed").length
  //   all_complete    = (total_completed === 6)
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
    lesson_01_navigation: { status: "not-started" },
    lesson_02_editing: { status: "not-started" },
    lesson_03_multi_file: { status: "not-started" },
    lesson_04_terminal: { status: "not-started" },
    lesson_05_git: { status: "not-started" },
    lesson_06_agents: { status: "not-started" },
  },
};
