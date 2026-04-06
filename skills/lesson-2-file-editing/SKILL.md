---
name: lesson-2-file-editing
description: "레슨 2: 파일 편집 — Claude Code로 파일 생성, 읽기, 편집하기"
---

# 레슨 2: 파일 편집

<Purpose>
Claude Code가 파일을 다루는 방법 — 읽기, 생성, 편집 — 을 학생에게 가르칩니다. 세 가지 핵심 파일 도구(Read, Write, Edit), 각 도구의 사용 시점, Claude가 파일 경로를 해석하는 방법을 설명합니다. 인터랙티브 퀴즈와 파일 생성 및 편집을 모두 다루는 두 단계 실습 챌린지를 통해 학생을 안내합니다.
</Purpose>

## 소개

Claude Code의 가장 실용적인 기능 중 하나는 프로젝트의 파일과 직접 작업하는 것입니다. 코드를 채팅 창에 복사하는 대신, 단순히 Claude에게 파일을 가리키고 필요한 것을 설명하면 됩니다. Claude는 그런 다음 자동으로 작업에 맞는 올바른 도구를 선택합니다.

Claude Code에는 세 가지 핵심 파일 도구가 있습니다. **Read**는 Claude가 변경할 내용을 결정하기 전에 파일의 내용을 볼 수 있게 합니다 — Claude는 항상 편집하기 전에 읽으므로 맹목적으로 덮어쓰지 않기 때문에 이것이 중요합니다. **Write**는 완전히 새로운 파일을 생성하거나 기존 파일을 완전히 교체합니다. **Edit**는 이미 존재하는 파일에 타깃을 정한 정밀한 변경을 가하며, 나머지는 그대로 둡니다. 실제로 Claude에게 어떤 도구를 사용할지 말할 필요는 거의 없습니다. 원하는 것을 설명하면 Claude가 읽기, 쓰기, 편집 중 무엇을 할지 파악합니다.

파일 경로는 유연합니다. `/Users/you/project/src/app.ts`와 같은 전체 절대 경로, `src/app.ts`와 같은 상대 경로, 또는 파일이 명확한 경우 `app.ts`와 같은 파일 이름만 줄 수 있습니다. Claude는 세션의 작업 디렉토리를 기반으로 경로를 해석합니다. 길러야 할 핵심 습관은 명시적으로 하는 것입니다. 어느 파일에 어떤 변경을 할지 명확하게 설명할수록, Claude의 편집이 더 정확하고 안전해집니다.

## 핵심 개념

- **Read tool** — 파일 내용 보기; Claude는 항상 편집 전에 파일을 읽습니다
- **Write tool** — 새 파일 생성 또는 기존 파일 완전 교체
- **Edit tool** — 나머지는 건드리지 않고 기존 파일에 타깃된 변경 가하기
- **절대 경로 vs 상대 경로** — 둘 다 작동합니다; Claude는 세션의 작업 디렉토리에서 경로를 해석합니다
- **생성 vs 편집** — 파일이 아직 없을 때는 "create" 사용, 있을 때는 "edit" 또는 "update" 사용
- **Claude가 도구를 선택** — 목표를 설명하면 Claude가 자동으로 Read, Write, Edit 중 하나를 선택합니다

## 인터랙티브 퀴즈

중요: 아래의 각 질문에 대해, AskUserQuestion을 사용하여 학생에게 질문과 네 가지 선택지만 제시하세요. 학생이 명시적으로 선택하기 전까지 정답을 공개하거나, 암시하거나, 확인하지 마세요. 계속하기 전에 학생의 응답을 기다리세요.

### 질문 1: 기존 파일을 수정하는 도구는 무엇인가요?

학생에게 다음 선택지를 제시하세요:
A) Write (파일 전체를 덮어씁니다)
B) Edit (타깃된 변경을 가합니다)
C) sed를 사용한 Bash
D) 복사 붙여넣기

--- 학생이 응답한 후 ---

정답은 B입니다.

정답인 경우: 맞아요! Edit tool은 정밀하고 타깃된 변경을 가합니다 — 지정된 줄만 건드립니다. Write는 전체 파일을 교체하는데, 이는 보존하고 싶은 내용을 삭제할 수 있습니다. Claude는 파일이 이미 존재하고 일부만 변경하려 할 때 기본적으로 Edit을 사용합니다.

오답인 경우: 정답은 B입니다. Edit tool은 기존 파일에 정밀하고 타깃된 변경을 가합니다. Write는 전체 파일을 교체합니다 — 한 줄만 변경하려는 경우 위험합니다. Claude는 파일이 이미 존재하고 일부만 수정하려 할 때 기본적으로 Edit을 사용합니다.

### 질문 2: 새로 생성 vs 기존 편집?

학생에게 다음 선택지를 제시하세요:
A) 항상 새 파일을 생성하세요
B) 파일이 아직 없으면 생성하고, 있으면 편집하세요
C) 항상 편집하세요
D) 상관없습니다

--- 학생이 응답한 후 ---

정답은 B입니다.

정답인 경우: 정확해요! Write와 Edit은 매우 다르게 동작하기 때문에 이 구분이 중요합니다. Write는 파일을 처음부터 생성(또는 교체)합니다. Edit은 이미 존재하는 파일의 특정 부분을 수정합니다. 올바른 도구를 상황에 맞게 사용하면 파일이 안전하게 유지됩니다.

오답인 경우: 정답은 B입니다. "생성"과 "편집"은 의미 있는 차이가 있는 작업입니다. 이미 존재하는 파일을 생성하도록 Claude에게 요청하면 전체가 덮어쓰일 수 있습니다. 아직 없는 파일을 편집하도록 요청하면 편집할 것이 없습니다. 의도를 명시적으로 표현하면 ("create a new file called X" vs "edit the existing file X") Claude가 올바른 도구를 선택하는 데 도움이 됩니다.

### 질문 3: Claude는 어떤 파일을 편집할지 어떻게 알까요?

학생에게 다음 선택지를 제시하세요:
A) 무작위로 추측합니다
B) 항상 전체 절대 경로를 제공해야 합니다
C) 파일 이름, 상대 경로, 절대 경로 중 어느 것이든 줄 수 있습니다 — Claude가 파악합니다
D) 먼저 파일을 열어야 합니다

--- 학생이 응답한 후 ---

정답은 C입니다.

정답인 경우: 맞아요! Claude는 파일 이름, 상대 경로, 절대 경로를 모두 받아들입니다. 세션의 작업 디렉토리를 기준으로 해석합니다. 여러 파일이 같은 이름을 공유할 때는 더 구체적으로 지정하는 것(예: 폴더 포함)이 도움이 됩니다.

오답인 경우: 정답은 C입니다. 매번 전체 절대 경로를 제공할 필요는 없습니다. Claude는 파일 이름(`app.ts`), 상대 경로(`src/app.ts`), 전체 절대 경로를 모두 받아들입니다. 세션의 작업 디렉토리에서 위치를 해석합니다. 더 구체적일수록 모호함이 줄어들지만, 명확한 파일의 경우 짧은 이름으로도 잘 작동합니다.

## 실습 챌린지

### 챌린지: 파일 생성 후 편집하기

학생에게 알려주세요:
"이 챌린지는 두 단계입니다.

**1단계:** 다음 내용으로 `workshop-test.txt` 파일을 정확하게 생성하세요:
```
Line 1: Hello from the Claude Code Workshop
Line 2: This is a test file
Line 3: Learning is fun
```

**2단계:** 그 파일을 편집하여 Line 2가 `Line 2: I edited this with Claude Code`로 읽히도록 하세요.

해보세요 — 생성용 하나, 편집용 하나의 두 개의 별도 프롬프트를 사용하세요. 완료되면 알려주시면 결과를 확인하겠습니다."

학생이 작업하도록 두세요. 완료했다고 말하거나 확인을 요청하면:

### 검증

1. Read tool을 사용하여 현재 작업 디렉토리의 `workshop-test.txt`를 읽으세요.
2. 파일에 `Hello from the Claude Code Workshop`이 포함되어 있는지 확인하세요.
3. 파일에 `I edited this with Claude Code`가 포함되어 있는지 확인하세요.
4. 파일에 `This is a test file`이 포함되어 있지 않은지 확인하세요.

세 가지 검사 모두 통과 시: "챌린지 통과! 파일을 생성하고 타깃된 편집을 했습니다 — 실제 프로젝트에서 Claude Code 파일 편집이 작동하는 방식 그대로입니다. 잘했어요."

파일이 존재하지 않는 경우: "아직이에요 — `workshop-test.txt`를 찾을 수 없습니다. 1단계부터 시작하세요: Claude에게 위에 표시된 세 줄의 내용으로 파일을 생성하도록 요청하세요."

파일에 여전히 "This is a test file"이 있는 경우: "거의 다 됐어요 — 파일은 있지만 Line 2가 아직 업데이트되지 않았습니다. Claude에게 `workshop-test.txt`를 편집하여 'This is a test file'을 'I edited this with Claude Code'로 변경하도록 요청하세요."

파일에 "Hello from the Claude Code Workshop"이 없는 경우: "파일에 원본 내용 일부가 없는 것 같습니다. 세 줄 모두로 파일을 다시 생성한 후 Line 2 편집을 다시 적용해보세요."

## 진행 상황 업데이트

퀴즈와 챌린지를 완료한 후 학생의 진행 상황을 업데이트하세요:

1. `.claude-workshop/progress.json`을 읽으세요 (없으면 기본값으로 생성):
   기본 스키마:
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
       "lesson-6-skills": { "status": "not-started" },
       "lesson-7-creating-skills": { "status": "not-started" }
     }
   }
   ```
2. `lesson-2-file-editing` 업데이트: `quiz_score`, `quiz_total` (3), `challenge_passed` (true/false), `status` ("completed"), `completed_at` (현재 ISO 타임스탬프)를 설정하세요.
3. `last_active`를 현재 ISO 타임스탬프로 업데이트하세요.
4. `.claude-workshop/progress.json`에 다시 저장하세요.
5. `"status": "completed"`인 레슨 수를 세세요. 7개 모두 완료되면 다음을 표시하세요:
   ```
   *** 워크숍 완료! 7개의 레슨을 모두 마쳤습니다. ***
   ```

## 다음 단계

학생에게 제안하세요:
1. 레슨 3으로 계속: 명령어 — Claude Code로 셸 명령어 및 스크립트 실행하기
2. 레슨 메뉴로 돌아가기 (`/claude-code-workshop:start`)
3. 이 레슨 다시 보기
