---
name: lesson-6-skills
description: "레슨 6: 플러그인 찾기 & 사용하기 — 커뮤니티 플러그인으로 Claude Code 확장하기"
---

# 레슨 6: 플러그인 찾기 & 사용하기

<Purpose>
학생에게 Claude Code 플러그인 생태계가 어떻게 작동하는지, 플러그인이 어떻게 설치되는지, 그리고 스킬이 슬래시 명령어가 되는 방법을 가르칩니다. 이 워크샵 자체의 구체적인 예시를 활용하세요 — 학생은 지금 플러그인을 사용하고 있습니다. 인터랙티브 퀴즈와 실습 챌린지를 통해 학생을 안내합니다. 내내 격려하는 태도를 유지하세요.
</Purpose>

## 소개

Claude Code에는 할 수 있는 일을 확장하는 플러그인 생태계가 있습니다. 플러그인은 새로운 슬래시 명령어 — 스킬이라고 불리는 — 를 추가하여 기본 제공 기능 이상의 새로운 능력을 Claude Code에 부여합니다. 플러그인은 GitHub 저장소로 배포되며 `claude plugin` 명령어로 설치됩니다.

흥미로운 점은 이 워크샵 자체가 플러그인이라는 것입니다! `claude plugin marketplace add`와 `claude plugin install`로 설치했으며, 지금 바로 `/claude-code-workshop:start` 스킬을 실행하고 있습니다. 이 레슨에서 하는 모든 것이 여러분이 배우려는 플러그인 시스템 덕분에 가능합니다.

플러그인은 `skills/` 디렉토리를 포함하는 GitHub 저장소입니다. `skills/`의 각 하위 디렉토리에는 해당 스킬이 무엇을 하는지 정의하는 `SKILL.md` 파일이 있습니다. 플러그인이 설치되면 모든 스킬이 자동으로 `/플러그인이름:스킬이름` 형식의 슬래시 명령어가 됩니다. 수동 등록도, 설정 파일도 필요 없습니다 — 올바른 위치에 `SKILL.md` 파일만 있으면 됩니다.

플러그인을 설치하려면: 먼저 `claude plugin marketplace add <github-url>`로 로컬 플러그인 레지스트리에 추가한 다음, `claude plugin install <플러그인이름>`으로 설치합니다. 그 이후부터 모든 스킬을 슬래시 명령어로 사용할 수 있습니다.

## 핵심 개념

- **플러그인이란 무엇인가** — 새로운 슬래시 명령어를 추가하는 `SKILL.md` 파일이 있는 `skills/` 디렉토리를 포함하는 GitHub 저장소
- **설치 방법** — `claude plugin marketplace add <github-url>`로 등록한 다음 `claude plugin install <플러그인이름>`으로 활성화
- **스킬이 슬래시 명령어가 되는 방법** — 각 `skills/<이름>/SKILL.md`가 자동으로 `/플러그인이름:이름`이 됩니다
- **사용 가능한 플러그인 탐색** — 플러그인의 `skills/` 디렉토리를 살펴보면 사용 가능한 모든 명령어를 볼 수 있습니다

## 인터랙티브 퀴즈

중요: 아래 각 질문에 대해 AskUserQuestion을 사용하여 학생에게 질문과 네 가지 선택지만 제시하세요. 학생이 명시적으로 선택하기 전까지 정답을 밝히거나 암시하거나 확인하지 마세요. 학생이 응답할 때까지 기다린 후 계속 진행하세요.

### 질문 1: Claude Code 플러그인이란 무엇인가요?

학생에게 다음 선택지를 제시하세요:
A) Chrome 브라우저 확장 프로그램
B) Claude Code에 새로운 슬래시 명령어를 추가하는 스킬 파일(SKILL.md)을 포함하는 GitHub 저장소
C) pip로 설치하는 Python 패키지
D) VS Code 확장 프로그램

--- 학생이 응답한 후 ---

정답은 B입니다.

정답인 경우: 맞습니다! Claude Code 플러그인은 단순히 특정 구조를 가진 GitHub 저장소입니다 — 각 하위 디렉토리에 `SKILL.md` 파일이 있는 `skills/` 디렉토리. 그게 전부입니다. 컴파일된 코드도, 패키지 레지스트리도 없습니다 — 올바른 레이아웃의 마크다운 파일만 있으면 됩니다.

오답인 경우: 정답은 B입니다. Claude Code 플러그인은 브라우저 확장 프로그램도, pip 패키지도, VS Code 확장 프로그램도 아닙니다. `SKILL.md` 파일을 포함하는 `skills/` 디렉토리가 있는 GitHub 저장소입니다. 지금 사용하고 있는 플러그인 — 이 워크샵 — 이 바로 그런 저장소입니다.

### 질문 2: Claude Code 플러그인을 어떻게 설치하나요?

학생에게 다음 선택지를 제시하세요:
A) npm install -g 플러그인이름
B) pip install 플러그인이름
C) claude plugin marketplace add <github-url> 후 claude plugin install
D) .zip 파일을 다운로드하고 압축 해제

--- 학생이 응답한 후 ---

정답은 C입니다.

중요: A의 npm은 틀린 답입니다 — 이것은 구식의 더 이상 사용되지 않는 방법입니다. 학생이 A를 선택한 경우 반드시 이를 명확히 해주세요.

정답인 경우: 완벽합니다! 두 단계 과정은 이렇습니다: `claude plugin marketplace add <github-url>`로 GitHub URL에서 플러그인을 등록하고, `claude plugin install <플러그인이름>`으로 활성화합니다. 바로 이 워크샵을 설치한 방법입니다.

오답인 경우 (A를 선택한 경우): 정답은 A가 아닌 C입니다. `npm install -g`는 Claude Code 플러그인을 설치하는 구식의 더 이상 사용되지 않는 방법입니다 — 더 이상 작동하지 않습니다. 현재 방법은 `claude plugin marketplace add <github-url>`로 플러그인을 등록한 다음 `claude plugin install <플러그인이름>`으로 활성화하는 것입니다.

오답인 경우 (B, D 또는 기타를 선택한 경우): 정답은 C입니다. 플러그인은 Python 패키지나 zip 다운로드가 아닙니다. `claude plugin marketplace add <github-url>`로 GitHub URL에서 플러그인을 등록한 다음, `claude plugin install <플러그인이름>`으로 활성화하세요. 바로 이 워크샵을 설치한 방법입니다.

### 질문 3: 플러그인 스킬은 어떻게 슬래시 명령어가 되나요?

학생에게 다음 선택지를 제시하세요:
A) 설정 파일에 각 명령어를 수동으로 등록합니다
B) 플러그인의 skills/ 디렉토리에 SKILL.md 파일이 있으며, 각각이 자동으로 /플러그인이름:스킬이름 명령어가 됩니다
C) 전역 Claude Code 설정 파일을 편집합니다
D) 그렇지 않습니다 — 다른 방식으로 호출해야 합니다

--- 학생이 응답한 후 ---

정답은 B입니다.

정답인 경우: 정확합니다! 명명은 자동이며 디렉토리 구조를 기반으로 합니다: `my-plugin`이라는 플러그인에서 `skills/my-feature/SKILL.md`에 있는 파일은 `/my-plugin:my-feature`가 됩니다. 등록도, 설정도 필요 없습니다 — 올바른 위치에 파일만 있으면 됩니다.

오답인 경우: 정답은 B입니다. 플러그인 시스템은 설정보다 규칙을 우선하는 접근 방식을 사용합니다: 플러그인의 모든 `skills/<이름>/SKILL.md`가 자동으로 `/플러그인이름:이름` 슬래시 명령어가 됩니다. GitHub에서 플러그인의 `skills/` 디렉토리를 살펴보면 어떤 명령어를 제공하는지 알 수 있습니다.

## 실습 챌린지

### 챌린지: 이 워크샵 플러그인의 구조 탐색하기

학생에게 안내하세요:
"이미 플러그인을 실행 중이니 — 이 워크샵 — 내부에서 어떻게 구성되어 있는지 살펴봅시다! 과제는 다음과 같습니다:

1. Claude Code를 사용하여 `/Users/sunwoong/dev/personal/claude-code-workshop/` (또는 이 워크샵이 설치된 위치)의 워크샵 디렉토리에 있는 `.claude-plugin/plugin.json` 플러그인 매니페스트를 읽으세요.
2. `skills/` 디렉토리를 살펴보고 스킬 폴더를 3개 이상 확인하세요.
3. 현재 디렉토리에 `workshop-plugin-notes.md` 파일을 만들어 발견한 내용을 요약하세요: 플러그인 이름, 버전, 그리고 설명이 포함된 스킬 3개 이상.

탐색해보세요! 노트 파일을 만들었으면 알려주시면 확인하겠습니다."

학생이 작업하도록 기다리세요. 완료했다고 하거나 확인을 요청하면:

### 검증

1. Read 도구를 사용하여 현재 작업 디렉토리의 `workshop-plugin-notes.md`를 읽으세요.
2. 파일이 존재하는지 확인하세요.
3. 파일에 "claude-code-workshop" (플러그인 이름)이 언급되어 있는지 확인하세요.
4. 파일에 스킬 이름이 3개 이상 언급되어 있는지 확인하세요 — "start", "reset", "lesson-1", "lesson-2", "lesson-3", "lesson-4", "lesson-5", "lesson-6", "lesson" 중 하나를 찾아보세요.

모든 확인이 통과되면: "챌린지 통과! 실제 플러그인의 내부를 탐색했습니다. 모든 Claude Code 플러그인은 같은 방식으로 작동합니다 — GitHub 저장소, plugin.json, 그리고 skills/ 디렉토리. 이제 어떤 플러그인의 구조도 읽을 수 있습니다."

파일이 존재하지 않는 경우: "아직 부족합니다 — `workshop-plugin-notes.md`를 찾을 수 없습니다. Claude에게 plugin.json과 skills/ 디렉토리를 읽고 발견한 내용을 요약한 파일을 만들어달라고 요청해보세요."

파일은 있지만 'claude-code-workshop'이 언급되지 않은 경우: "파일은 있지만 플러그인 이름 'claude-code-workshop'이 언급되어 있지 않습니다. 노트에 plugin.json 매니페스트의 플러그인 이름이 포함되어 있는지 확인하세요."

파일은 있지만 스킬이 3개 미만인 경우: "파일은 있지만 스킬 이름을 3개 이상 찾을 수 없습니다. skills/ 디렉토리의 스킬을 3개 이상 나열했는지 확인하세요 (예: 'start', 'reset', 그리고 레슨 스킬 중 하나)."

## 진행 상황 업데이트

퀴즈와 챌린지를 완료한 후 학생의 진행 상황을 업데이트하세요:

1. `.claude-workshop/progress.json`을 읽으세요 (없으면 기본값으로 생성):
   기본 스키마:
   ```json
   {
     "version": "1.0",
     "started_at": "<현재 ISO 타임스탬프>",
     "last_active": "<현재 ISO 타임스탬프>",
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
2. `lesson-6-skills`를 업데이트하세요: `quiz_score`, `quiz_total` (3), `challenge_passed` (true/false), `status` ("completed"), `completed_at` (현재 ISO 타임스탬프)를 설정하세요.
3. `last_active`를 현재 ISO 타임스탬프로 업데이트하세요.
4. `.claude-workshop/progress.json`에 다시 저장하세요.
5. `"status": "completed"`인 레슨 수를 세세요. 7개 모두 완료된 경우 다음을 표시하세요:
   ```
   *** 워크샵 완료! 7개의 레슨을 모두 마쳤습니다. ***
   ```

## 다음 단계

학생에게 다음을 제안하세요:
1. 레슨 7: 나만의 스킬 만들기로 계속하기 — SKILL.md 작성법과 Upstage API 연동 실습
2. 레슨 메뉴로 돌아가기 (`/claude-code-workshop:start`)
3. 이 레슨 다시 복습하기
