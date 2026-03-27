# Claude Code Interactive Workshop

Learn Claude Code interactively, while using Claude Code.

## Installation

```bash
# Add the workshop plugin
claude plugin marketplace add https://github.com/<owner>/claude-code-workshop

# Install it
claude plugin install claude-code-workshop
```

## Getting Started

After installation, open Claude Code and type:

```
/claude-code-workshop:start
```

## Curriculum

The workshop includes 6 hands-on lessons:

1. **Talking to Claude** — Learn to write effective prompts
2. **File Editing** — Create, read, and edit files through Claude Code
3. **Running Commands** — Execute shell commands safely
4. **Slash Commands & Shortcuts** — Master built-in commands and keyboard shortcuts
5. **CLAUDE.md & Project Context** — Teach Claude about your project
6. **Finding & Using Plugins** — Extend Claude Code with community plugins

Each lesson includes:
- Explanatory content with examples
- Interactive quizzes (multiple choice)
- Hands-on challenges with automated verification
- Progress tracking across sessions

## Progress

Your progress is saved to `.claude-workshop/progress.json` in your current directory.
It persists across sessions — pick up where you left off anytime.

To reset your progress:
```
/claude-code-workshop:reset
```

## Contributing

Want to add a lesson? Create a new directory under `skills/` with a `SKILL.md` file following the existing lesson format. See any `lesson-*` directory for examples.

## License

MIT
