---
name: start
description: Claude Code 대화형 워크숍 실행 - 실습 레슨을 통해 Claude Code 배우기
---

## Instructions

다음 단계를 정확히 따르세요:

### Step 1: Display Welcome Message

다음 환영 메시지를 출력하세요:

```
Claude Code 대화형 워크숍에 오신 것을 환영합니다!
=================================================

실습 레슨, 퀴즈, 챌린지를 통해 Claude Code를 배워보세요.
이 워크숍은 Claude Code를 효과적으로 사용하는 데 필요한 모든 것을 가르쳐 드립니다.
```

### Step 2: Load Progress

`.claude-workshop/progress.json` 파일을 읽으세요.

파일이 존재하지 않으면:
1. Bash를 통해 `mkdir -p .claude-workshop` 실행
2. `<current ISO timestamp>`를 실제 현재 ISO 8601 타임스탬프로 교체하여 `.claude-workshop/progress.json`에 다음 내용을 작성:

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

불러온 진행 데이터에서:
- `total_completed` = `status === "completed"`인 레슨의 수
- `all_complete` = (`total_completed === 6`)

### Step 4: If all_complete, Show Completion Badge

`all_complete`가 true이면 다음을 표시하세요:

```
========================================
  축하합니다! 워크숍 완료!
========================================

6개 레슨을 모두 완료했습니다!

결과:
  레슨 1: 프롬프팅          -- {quiz_score}/{quiz_total} 퀴즈, 챌린지 {통과/실패}
  레슨 2: 파일 편집         -- {quiz_score}/{quiz_total} 퀴즈, 챌린지 {통과/실패}
  레슨 3: 명령어 실행       -- {quiz_score}/{quiz_total} 퀴즈, 챌린지 {통과/실패}
  레슨 4: 슬래시 명령어     -- {quiz_score}/{quiz_total} 퀴즈, 챌린지 {통과/실패}
  레슨 5: CLAUDE.md         -- {quiz_score}/{quiz_total} 퀴즈, 챌린지 {통과/실패}
  레슨 6: 스킬 & 플러그인   -- {quiz_score}/{quiz_total} 퀴즈, 챌린지 {통과/실패}

전체 퀴즈 점수: {sum}/{total}

이제 Claude Code를 효과적으로 사용할 준비가 되었습니다!
다음 단계:
  - 커뮤니티 플러그인 탐색하기
  - 프로젝트에 맞는 CLAUDE.md 만들기
  - Claude Code로 무언가 만들어 보기!
```

(progress.json 데이터에서 점수를 채워 넣으세요. 레슨에 점수 데이터가 없으면 "--"으로 표시하세요.)

### Step 5: Show Lesson Menu

레슨 메뉴를 표시하세요. 각 레슨의 status가 "completed"이면 `[DONE]`을, 아니면 `[    ]`을 표시:

```
진행 상황: {total_completed}/6 레슨 완료

1. {[DONE] or [    ]} Claude와 대화하기 -- 효과적인 프롬프팅
2. {[DONE] or [    ]} 파일 편집 -- 파일 생성, 읽기, 편집
3. {[DONE] or [    ]} 명령어 실행 -- 셸 명령어, 권한
4. {[DONE] or [    ]} 슬래시 명령어 & 단축키 -- /help, /clear, /compact
5. {[DONE] or [    ]} CLAUDE.md & 프로젝트 컨텍스트 -- 프로젝트 지침
6. {[DONE] or [    ]} 플러그인 찾기 & 사용하기 -- 커뮤니티 플러그인
```

### Step 6: Ask the Student to Choose

AskUserQuestion 도구를 사용하여 다음 질문을 하세요:

> "시작하거나 계속할 레슨을 선택하세요. 번호(1-6)를 입력하거나 배우고 싶은 내용을 설명해 주세요:"

다음 옵션을 제공하세요: `["1", "2", "3", "4", "5", "6", "특정 주제를 배우고 싶어요..."]`

### Step 7: Route Based on Selection

사용자의 선택을 올바른 레슨 스킬에 매핑하세요:

| 선택 | 호출할 스킬 |
|--------|----------------|
| "1" | `Skill("claude-code-workshop:lesson-1-prompting")` |
| "2" | `Skill("claude-code-workshop:lesson-2-file-editing")` |
| "3" | `Skill("claude-code-workshop:lesson-3-commands")` |
| "4" | `Skill("claude-code-workshop:lesson-4-slash-commands")` |
| "5" | `Skill("claude-code-workshop:lesson-5-claude-md")` |
| "6" | `Skill("claude-code-workshop:lesson-6-skills")` |

### Step 8: Handle Freeform Input

사용자가 "특정 주제를 배우고 싶어요..."를 선택하거나 자유 형식으로 입력한 경우, 키워드를 레슨에 매핑하세요:

- "prompt", "ask", "talk", "chat" → `Skill("claude-code-workshop:lesson-1-prompting")` 호출
- "file", "edit", "create", "read", "write" → `Skill("claude-code-workshop:lesson-2-file-editing")` 호출
- "command", "shell", "terminal", "bash", "run" → `Skill("claude-code-workshop:lesson-3-commands")` 호출
- "slash", "shortcut", "/help", "/clear", "keyboard" → `Skill("claude-code-workshop:lesson-4-slash-commands")` 호출
- "claude.md", "project", "context", "memory", "instructions" → `Skill("claude-code-workshop:lesson-5-claude-md")` 호출
- "skill", "plugin", "community", "install", "marketplace" → `Skill("claude-code-workshop:lesson-6-skills")` 호출

키워드가 일치하지 않으면, 사용자에게 관심 있는 레슨 주제를 명확히 해달라고 요청하고 다시 프롬프트를 표시하세요.
