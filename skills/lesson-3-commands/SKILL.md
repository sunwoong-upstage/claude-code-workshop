---
name: lesson-3-commands
description: "레슨 3: 명령어 실행 — Claude Code로 셸 명령어 실행하기"
---

# 레슨 3: 명령어 실행

<Purpose>
Claude Code가 Bash tool을 통해 셸 명령어를 실행하는 방법을 학생에게 가르칩니다. 대화하듯 내용을 전달하고, 안전한 명령어 요청과 안전하지 않은 명령어 요청을 대조하는 구체적인 예시를 사용하며, 인터랙티브 퀴즈와 실습 챌린지를 통해 학생을 안내합니다. 권한 시스템과 안전을 위한 모범 사례를 강조합니다. 전반적으로 격려하는 자세를 유지합니다.
</Purpose>

## 소개

Claude Code는 Bash tool을 사용하여 터미널에서 직접 셸 명령어를 실행할 수 있습니다. 디렉토리 생성, 테스트 실행, 파일 존재 확인 등 명령어가 필요한 작업을 요청하면 Claude가 명령어를 실행하고, 출력을 읽고, 결과에 따라 행동합니다. 대화와 실행 사이의 이 긴밀한 통합은 Claude Code의 가장 강력한 기능 중 하나입니다.

이해해야 할 핵심은 **권한 시스템**입니다. Claude는 읽기 전용 명령어(예: `ls`, `cat`, `grep`)와 시스템을 수정하는 명령어(예: `mkdir`, `rm`, `npm install`)를 구분합니다. 파일이나 시스템 상태를 변경할 수 있는 명령어의 경우 실행하기 전에 승인을 요청합니다. 권한 프롬프트가 표시되며, 작업을 승인하거나 거부할 수 있습니다.

이 설계는 항상 여러분이 통제권을 갖는다는 것을 의미합니다. Claude가 하는 일을 신뢰할 때는 자유롭게 명령어를 실행하도록 하거나, 각 명령어를 신중하게 검토할 수 있습니다. Claude와 명령어 작업을 할 때 가장 좋은 방법은 원하는 것을 구체적으로 지정하는 것입니다 — 요청이 정확할수록 Claude가 실행하는 명령어도 정확해집니다.

## 핵심 개념

- **Bash tool** — Claude는 현재 셸에서 실행되는 내장 Bash tool을 통해 셸 명령어를 실행합니다
- **권한 프롬프트** — Claude는 시스템을 수정할 수 있는 명령어를 실행하기 전에 승인을 요청합니다
- **명령어 출력 읽기** — Claude는 stdout/stderr 출력을 보고 이를 다음 단계에 활용합니다
- **안전 모범 사례** — 원하는 것을 구체적으로 지정하세요; "clean up"이나 "fix everything"과 같은 모호한 요청을 피하세요
- **백그라운드 명령어** — 장기 실행 프로세스(빌드, 서버)는 대화를 차단하지 않도록 백그라운드에서 실행할 수 있습니다

## 인터랙티브 퀴즈

중요: 아래의 각 질문에 대해, AskUserQuestion을 사용하여 학생에게 질문과 네 가지 선택지만 제시하세요. 학생이 명시적으로 선택하기 전까지 정답을 공개하거나, 암시하거나, 확인하지 마세요. 계속하기 전에 학생의 응답을 기다리세요.

### 질문 1: Claude Code는 어떻게 셸 명령어를 실행하나요?

학생에게 다음 선택지를 제시하세요:
A) 별도의 터미널 창을 엽니다
B) 현재 셸에서 명령어를 실행하는 Bash tool을 통해서
C) 명령어를 실행할 수 없고, 제안만 할 수 있습니다
D) 샌드박스된 VM을 통해서

--- 학생이 응답한 후 ---

정답은 B입니다.

정답인 경우: 정확해요! Bash tool을 사용하면 Claude가 현재 셸 환경에서 직접 명령어를 실행할 수 있습니다. Claude는 출력을 보고 즉시 행동할 수 있습니다 — 복사 붙여넣기가 필요 없습니다.

오답인 경우: 정답은 B입니다. Claude는 현재 셸에서 직접 명령어를 실행하는 내장 Bash tool을 사용합니다. 별도의 창도, VM도, 단순한 제안도 아닙니다 — 실제 명령어가 실행되고 Claude는 실제 출력을 읽습니다.

### 질문 2: Claude가 시스템을 수정할 수 있는 명령어를 실행해야 할 때 어떻게 되나요?

학생에게 다음 선택지를 제시하세요:
A) 자동으로 실행합니다
B) 먼저 허가를 요청합니다
C) 실행을 거부합니다
D) 읽기 전용 명령어만 실행합니다

--- 학생이 응답한 후 ---

정답은 B입니다.

정답인 경우: 맞아요! Claude의 권한 시스템이 여러분을 통제권을 갖게 합니다. 파일 생성, 패키지 설치, 삭제 등 수정 명령어는 실행 전에 승인이 필요합니다. `ls`나 `cat`과 같은 읽기 전용 명령어는 일반적으로 프롬프트 없이 실행됩니다.

오답인 경우: 정답은 B입니다. Claude는 조용히 시스템을 수정하지 않습니다. 명령어가 파일이나 패키지를 생성, 삭제, 변경할 경우 Claude는 권한 프롬프트를 표시하고 승인을 기다립니다. 불편한 작업은 언제든지 거부할 수 있습니다.

### 질문 3: Claude에게 명령어 도움을 요청하는 가장 안전한 방법은 무엇인가요?

학생에게 다음 선택지를 제시하세요:
A) "Delete everything in this folder"
B) "Run rm -rf /"
C) "List all JavaScript files in the src directory and show me any that import the auth module"
D) "Just fix it"

--- 학생이 응답한 후 ---

정답은 C입니다.

정답인 경우: 완벽해요! C 옵션은 구체적이고, 범위가 정해져 있으며, 읽기 전용입니다. Claude에게 무엇을 찾을지, 어디서 찾을지, 무엇을 보고할지 정확하게 알려줍니다 — 추측도 없고, 의도치 않은 부작용의 위험도 없습니다.

오답인 경우: 정답은 C입니다. A와 B 옵션은 위험할 정도로 모호하거나 완전히 파괴적입니다 — Claude에게 "delete everything"을 요청하거나 `rm -rf /`를 실행하도록 하지 마세요. D 옵션은 Claude에게 아무런 방향을 제시하지 않습니다. C 옵션은 구체적(JavaScript 파일)이고, 범위가 정해져 있으며(src 디렉토리), 안전합니다(읽기 전용 검색) — 이것이 좋은 명령어 요청의 모범입니다.

## 실습 챌린지

### 챌린지: Claude Code로 디렉토리와 파일 생성하기

학생에게 알려주세요:
"이제 Claude Code를 사용하여 명령어를 실행하는 연습을 해봅시다. Claude Code에게 다음 세 가지를 모두 수행하도록 요청하세요:
1. `workshop-test-dir`라는 디렉토리 생성
2. 'Created by Claude Code' 내용으로 `workshop-test-dir/hello.txt` 파일 생성
3. 디렉토리 내용 목록 표시

Claude에게 요청해보세요. 완료되면 알려주시면 결과를 확인하겠습니다."

학생이 작업하도록 두세요. 완료했다고 말하거나 확인을 요청하면:

### 검증

1. Bash tool을 사용하여 실행: `test -d workshop-test-dir && echo EXISTS || echo MISSING`
   - 출력이 "MISSING"인 경우: 디렉토리가 생성되지 않은 것입니다. 학생에게 알려주세요: "`workshop-test-dir` 디렉토리를 찾을 수 없습니다. Claude에게 명확하게 요청해보세요: '현재 폴더에 workshop-test-dir이라는 디렉토리를 만들어줘'"

2. Bash tool을 사용하여 실행: `test -f workshop-test-dir/hello.txt && echo EXISTS || echo MISSING`
   - 출력이 "MISSING"인 경우: 파일이 생성되지 않은 것입니다. 학생에게 알려주세요: "`workshop-test-dir/hello.txt` 파일을 찾을 수 없습니다. Claude에게 요청해보세요: 'workshop-test-dir 안에 hello.txt 파일을 만들고 Created by Claude Code라는 내용을 넣어줘'"

3. Read tool을 사용하여 `workshop-test-dir/hello.txt`를 읽고 "Created by Claude Code"가 포함되어 있는지 확인하세요.
   - 내용이 잘못되었거나 없는 경우: "파일은 있지만 올바른 내용이 없습니다. 정확히 다음을 포함해야 합니다: 'Created by Claude Code'"

세 가지 검사 모두 통과 시: "챌린지 통과! Claude Code를 사용하여 셸 명령어를 실행하고, 디렉토리를 생성하고, 파일을 작성했습니다. Bash tool이 실제로 작동하는 모습입니다."

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
2. `lesson-3-commands` 업데이트: `quiz_score`, `quiz_total` (3), `challenge_passed` (true/false), `status` ("completed"), `completed_at` (현재 ISO 타임스탬프)를 설정하세요.
3. `last_active`를 현재 ISO 타임스탬프로 업데이트하세요.
4. `.claude-workshop/progress.json`에 다시 저장하세요.
5. `"status": "completed"`인 레슨 수를 세세요. 7개 모두 완료되면 다음을 표시하세요:
   ```
   *** 워크숍 완료! 7개의 레슨을 모두 마쳤습니다. ***
   ```

## 다음 단계

학생에게 제안하세요:
1. 레슨 4로 계속: 슬래시 명령어 & 단축키 — 일반 작업을 위한 내장 명령어
2. 레슨 메뉴로 돌아가기 (`/claude-code-workshop:start`)
3. 이 레슨 다시 보기
