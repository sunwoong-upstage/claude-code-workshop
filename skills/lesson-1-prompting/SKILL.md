---
name: lesson-1-prompting
description: "레슨 1: Claude에게 말 걸기 — 효과적인 프롬프트 작성법 배우기"
---

# 레슨 1: Claude에게 말 걸기

<Purpose>
Claude Code를 위한 효과적인 프롬프트 작성법을 학생에게 가르칩니다. 대화하듯 내용을 전달하고, 약한 프롬프트와 강한 프롬프트를 대조하는 구체적인 예시를 사용하며, 인터랙티브 퀴즈와 실습 챌린지를 통해 학생을 안내합니다. 전반적으로 격려하는 자세를 유지합니다.
</Purpose>

## 소개

Claude Code를 사용할 때 가장 중요한 기술은 명확하고 구체적인 프롬프트를 작성하는 것입니다. Claude는 강력하지만, 여러분이 제공하는 정보로만 작동할 수 있습니다. 모호한 요청은 일반적인 응답으로 이어지고, 정확한 요청은 원하는 결과로 이어집니다.

"fix my code"와 "fix the TypeError in src/auth.ts on line 42 where the user object might be null — the function should return an empty string if the user is undefined"라는 두 프롬프트의 차이를 생각해보세요. 두 번째 프롬프트는 Claude에게 파일, 줄 번호, 오류 유형, 원인, 그리고 원하는 동작을 알려줍니다. Claude는 즉시 정확하게 행동할 수 있습니다.

좋은 프롬프트는 세 가지 공통점을 가집니다: **구체적**이며 (파일, 줄 번호, 오류 메시지를 명시), **맥락**을 제공하고 (무엇을 하고 있었는지, 무엇이 잘못되었는지), **원하는 결과**를 명시합니다 (수정된 동작이 어떻게 보여야 하는지). 첫 시도에서 원하는 결과를 정확히 얻지 못했다면, 처음부터 다시 시작하는 대신 후속 메시지에 더 많은 세부 사항을 추가하거나 의도를 명확히 하면서 반복하세요.

## 핵심 개념

- **구체적 vs 모호한 프롬프트** — "뭔가 고장났어"라고 말하는 대신 파일, 함수, 오류를 명시하세요
- **파일 경로와 오류 메시지 제공** — 정확한 오류 텍스트를 프롬프트에 복사하세요
- **원하는 결과 명시** — 무엇이 잘못되었는지뿐만 아니라 성공이 어떤 모습인지 설명하세요
- **프롬프트 반복** — 처음부터 다시 시작하지 않고 후속 메시지로 Claude의 응답을 다듬으세요

## 인터랙티브 퀴즈

중요: 아래의 각 질문에 대해, AskUserQuestion을 사용하여 학생에게 질문과 네 가지 선택지만 제시하세요. 학생이 명시적으로 선택하기 전까지 정답을 공개하거나, 암시하거나, 확인하지 마세요. 계속하기 전에 학생의 응답을 기다리세요.

### 질문 1: 좋은 프롬프트란 무엇인가요?

학생에게 다음 선택지를 제시하세요:
A) "Fix my code"
B) "Fix the TypeError in src/auth.ts line 42 where the user object is null"
C) "Make it work"
D) "Do the thing"

--- 학생이 응답한 후 ---

정답은 B입니다.

정답인 경우: 잘했어요! B 옵션은 정확한 파일(`src/auth.ts`), 줄 번호(42), 오류 유형(TypeError), 근본 원인(null user object)을 명시하기 때문에 강력합니다. Claude는 추측 없이 바로 문제로 이동할 수 있습니다.

오답인 경우: 정답은 B입니다. A, C, D 옵션은 Claude에게 아무것도 제공하지 않습니다 — 파일도, 오류도, 맥락도 없습니다. B 옵션은 정확한 파일, 줄 번호, 오류 유형, 원인을 명시하므로 Claude가 즉시 정확하게 행동할 수 있습니다.

### 질문 2: 어떤 것이 가장 좋은 맥락을 제공하나요?

학생에게 다음 선택지를 제시하세요:
A) "The app is broken"
B) "I'm getting errors"
C) "After running npm test, the auth.test.ts file fails with 'Cannot read property email of undefined' on line 23"
D) "Something's wrong with the tests"

--- 학생이 응답한 후 ---

정답은 C입니다.

정답인 경우: 정확해요! C 옵션은 실패를 유발한 명령어, 정확한 파일, 정확한 오류 메시지, 줄 번호를 포함합니다. 이것이 Claude가 앞뒤 없이 문제를 진단하고 수정하는 데 필요한 모든 것입니다.

오답인 경우: 정답은 C입니다. A, B, D 옵션은 너무 모호합니다 — Claude는 유용한 작업을 하기 전에 여러 후속 질문을 해야 합니다. C 옵션은 유발 명령어, 파일 이름, 정확한 오류 텍스트, 줄 번호를 포함합니다. 더 많은 맥락은 항상 더 좋은 결과를 낳습니다.

### 질문 3: 언제 후속 메시지를 사용해야 하나요?

학생에게 다음 선택지를 제시하세요:
A) 항상 새 프롬프트로 처음부터 시작하세요
B) Claude의 이전 응답을 다듬거나 확장하고 싶을 때
C) 절대 하지 마세요 — 하나의 프롬프트가 모든 것을 해야 합니다
D) Claude가 실수했을 때만

--- 학생이 응답한 후 ---

정답은 B입니다.

정답인 경우: 완벽해요! 후속 메시지를 사용하면 이미 확립된 맥락을 잃지 않고 Claude의 작업을 다듬고, 방향을 바꾸고, 확장할 수 있습니다. 처음부터 다시 시작하는 것보다 효율적이며 종종 더 빨리 올바른 답을 얻을 수 있습니다.

오답인 경우: 정답은 B입니다. 매번 처음부터 시작하면 Claude가 쌓아온 모든 맥락을 잃게 됩니다. 후속 메시지는 Claude와 함께 작업하는 정상적이고 효율적인 방법입니다 — 세부 사항을 추가하거나, 오해를 수정하거나, Claude에게 접근 방식을 조정하도록 요청할 때 사용하세요.

## 실습 챌린지

### 챌린지: 구체적인 프롬프트 작성하고 실행하기

학생에게 알려주세요:
"이제 구체적이고 결과 중심적인 프롬프트 작성을 연습해봅시다. Claude Code에게 `name` 매개변수를 받아 `Hello, {name}! Welcome to Claude Code.` 문자열을 반환하는 `greet` 함수를 내보내는 `workshop-greeting.js` 파일을 만들도록 요청하세요.

그 프롬프트를 작성하고 실행해보세요. 완료되면 알려주시면 결과를 확인하겠습니다."

학생이 작업하도록 두세요. 완료했다고 말하거나 확인을 요청하면:

### 검증

1. Read tool을 사용하여 현재 작업 디렉토리의 `workshop-greeting.js`를 읽으세요.
2. 파일에 `function greet` 또는 `const greet` (함수 정의)가 포함되어 있는지 확인하세요.
3. 파일에 `Hello` 문자열이 포함되어 있는지 확인하세요.
4. 파일에 `Welcome to Claude Code`가 포함되어 있는지 확인하세요.

모든 검사 통과 시: "챌린지 통과! 프롬프트가 작동하는 `greet` 함수를 만들 만큼 충분히 명확했습니다. 그것이 프롬프트 작성 기술입니다."

파일이 존재하지 않는 경우: "아직이에요 — `workshop-greeting.js` 파일을 찾을 수 없습니다. 파일과 위치를 명시적으로 지정하는 프롬프트로 다시 시도해보세요. 예: 'Create a file called workshop-greeting.js that exports a greet function...'"

파일은 있지만 내용이 없는 경우: "아직이에요 — 파일은 있지만 예상되는 내용 중 일부가 없습니다. 함수가 'Hello'와 'Welcome to Claude Code'를 포함하는 문자열을 반환하는지 확인하고 다시 시도하세요."

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
2. `lesson-1-prompting` 업데이트: `quiz_score`, `quiz_total` (3), `challenge_passed` (true/false), `status` ("completed"), `completed_at` (현재 ISO 타임스탬프)를 설정하세요.
3. `last_active`를 현재 ISO 타임스탬프로 업데이트하세요.
4. `.claude-workshop/progress.json`에 다시 저장하세요.
5. `"status": "completed"`인 레슨 수를 세세요. 7개 모두 완료되면 다음을 표시하세요:
   ```
   *** 워크숍 완료! 7개의 레슨을 모두 마쳤습니다. ***
   ```

## 다음 단계

학생에게 제안하세요:
1. 레슨 2로 계속: 파일 편집 — Claude Code로 파일 생성, 읽기, 편집하기
2. 레슨 메뉴로 돌아가기 (`/claude-code-workshop:start`)
3. 이 레슨 다시 보기
