---
name: lesson-7-creating-skills
description: "레슨 7: 나만의 스킬 만들기 — SKILL.md로 시작해서 외부 API 연동까지"
---

# 레슨 7: 나만의 스킬 만들기

<Purpose>
학생에게 Claude Code 스킬을 직접 만드는 방법을 가르칩니다. 가장 간단한 형태(SKILL.md 파일 하나)에서 시작하여, 외부 API(Upstage)를 활용하는 실전 스킬까지 단계별로 안내합니다. 핵심 메시지: "코드를 직접 작성할 줄 몰라도 Claude Code가 대신 작성해줍니다." 인터랙티브 퀴즈와 실습 챌린지를 통해 학생을 안내하고, 내내 격려하는 태도를 유지하세요.
</Purpose>

## 소개

레슨 6에서 플러그인과 스킬이 무엇인지 배웠습니다. 이번 레슨에서는 직접 **나만의 스킬을 만들어** 봅니다.

스킬을 만드는 것은 생각보다 훨씬 간단합니다. 가장 기본적인 스킬은 `SKILL.md` 파일 **하나**만 있으면 됩니다. 코드도, 스크립트도, 복잡한 설정도 필요 없습니다. 마크다운 파일에 Claude에게 무엇을 해야 하는지 지시사항을 적으면 — 그것이 바로 스킬입니다.

스킬의 핵심 구조는 이렇습니다:

```markdown
---
name: my-skill
description: 이 스킬이 하는 일을 설명합니다
---

## 지시사항

Claude에게 수행할 작업을 자연어로 설명합니다...
```

`---`로 감싸진 부분을 **프론트매터**라고 합니다. `name`은 슬래시 명령어 이름이 되고, `description`은 스킬의 설명입니다. 그 아래에 Claude가 따라야 할 지시사항을 마크다운으로 작성합니다.

여기서 정말 중요한 점이 있습니다: **스킬에 코드가 필요하더라도, 여러분이 직접 코드를 작성할 필요가 없습니다.** SKILL.md에 "이런 API를 호출하는 코드를 작성해줘"라고 지시하면, Claude Code가 코드를 대신 작성하고 실행합니다. 여러분은 **무엇을 할지**만 설명하면 되고, **어떻게 할지**는 Claude가 알아서 합니다.

이번 레슨에서는 실제로 [Upstage](https://console.upstage.ai) API를 활용하는 스킬을 만들어 봅니다. Upstage는 문서 AI와 Solar LLM을 제공하는 플랫폼으로, 문서 파싱, OCR, 정보 추출 등 강력한 기능을 API로 사용할 수 있습니다.

## 핵심 개념

- **SKILL.md만으로 스킬 만들기** — `scripts/` 폴더 없이 마크다운 파일 하나로 동작하는 스킬
- **프론트매터** — `name`, `description` 등 스킬의 메타데이터를 정의하는 YAML 헤더
- **스킬 위치** — 프로젝트용은 `.claude/skills/스킬이름/SKILL.md`, 개인용은 `~/.claude/skills/스킬이름/SKILL.md`
- **Claude가 코드를 대신 작성** — 스킬 지시사항에 원하는 동작을 설명하면 Claude가 구현 코드를 작성하고 실행합니다
- **외부 API 연동** — 스킬에서 curl이나 SDK를 통해 외부 서비스(예: Upstage API)를 호출할 수 있습니다
- **allowed-tools** — 스킬 실행 시 Claude가 권한 확인 없이 사용할 수 있는 도구를 지정합니다

## 인터랙티브 퀴즈

중요: 아래 각 질문에 대해 AskUserQuestion을 사용하여 학생에게 질문과 네 가지 선택지만 제시하세요. 학생이 명시적으로 선택하기 전까지 정답을 밝히거나 암시하거나 확인하지 마세요. 학생이 응답할 때까지 기다린 후 계속 진행하세요.

### 질문 1: 스킬을 만들기 위해 최소한으로 필요한 것은?

학생에게 다음 선택지를 제시하세요:
A) SKILL.md 파일, package.json, scripts/ 폴더
B) SKILL.md 파일 하나만 있으면 됩니다
C) Python 스크립트와 requirements.txt
D) Dockerfile과 docker-compose.yml

--- 학생이 응답한 후 ---

정답은 B입니다.

정답인 경우: 맞습니다! 스킬의 최소 단위는 `SKILL.md` 파일 하나입니다. 프론트매터에 이름과 설명을 적고, 본문에 지시사항을 작성하면 바로 동작하는 스킬이 됩니다. 코드도, 빌드도, 설치도 필요 없습니다.

오답인 경우: 정답은 B입니다. 스킬을 만드는 데 필요한 것은 `SKILL.md` 파일 **하나**뿐입니다. scripts/ 폴더나 package.json, Docker 설정은 전혀 필요하지 않습니다. 마크다운 파일에 프론트매터와 지시사항을 작성하면 — 그것이 바로 스킬입니다.

### 질문 2: 스킬에서 API를 호출하는 코드가 필요할 때 어떻게 하나요?

학생에게 다음 선택지를 제시하세요:
A) 반드시 직접 코드를 작성해서 scripts/ 폴더에 넣어야 합니다
B) SKILL.md에 "이 API를 호출해줘"라고 지시하면 Claude가 코드를 작성하고 실행합니다
C) API 호출은 스킬에서 할 수 없습니다
D) 별도의 서버를 먼저 구축해야 합니다

--- 학생이 응답한 후 ---

정답은 B입니다.

정답인 경우: 정확합니다! 이것이 Claude Code의 가장 강력한 점입니다. SKILL.md에 "Upstage API의 Document Parse 엔드포인트를 호출해서 PDF를 마크다운으로 변환해줘"라고 작성하면, Claude가 curl 명령이나 Python/Node.js 코드를 알아서 작성하고 실행합니다. 여러분은 **무엇을 할지**만 설명하면 됩니다.

오답인 경우: 정답은 B입니다. 스킬의 마법은 여기에 있습니다 — 코드를 직접 작성할 줄 몰라도 괜찮습니다. SKILL.md에 원하는 동작을 자연어로 설명하면 Claude Code가 필요한 코드를 자동으로 작성하고 실행합니다. `scripts/` 폴더는 더 발전된 스킬을 만들 때 선택적으로 사용하는 것입니다.

### 질문 3: 프로젝트 전용 스킬의 SKILL.md는 어디에 위치해야 하나요?

학생에게 다음 선택지를 제시하세요:
A) 프로젝트 루트의 `skills/스킬이름/SKILL.md`
B) `~/.claude/skills/스킬이름/SKILL.md`
C) `.claude/skills/스킬이름/SKILL.md`
D) 아무 곳이나 상관없습니다

--- 학생이 응답한 후 ---

정답은 C입니다.

정답인 경우: 맞습니다! 프로젝트 전용 스킬은 `.claude/skills/스킬이름/SKILL.md` 경로에 위치합니다. 반면에 `~/.claude/skills/`는 모든 프로젝트에서 사용할 수 있는 개인 스킬을 위한 경로입니다. 프로젝트의 `.claude/` 디렉토리에 있는 스킬은 해당 프로젝트에서만 활성화됩니다.

오답인 경우: 정답은 C입니다. 프로젝트 전용 스킬은 프로젝트 루트의 `.claude/skills/스킬이름/SKILL.md`에 위치합니다. 주의할 점은 `skills/`가 아니라 `.claude/skills/`입니다. `~/.claude/skills/`는 개인용 글로벌 스킬을 위한 경로이고, 프로젝트 디렉토리의 `.claude/skills/`는 해당 프로젝트에서만 사용되는 스킬을 위한 경로입니다.

## 실습 챌린지

### 챌린지: Upstage API를 활용하는 문서 분석 스킬 만들기

학생에게 안내하세요:
"이제 실제로 스킬을 만들어 봅시다! 두 단계로 진행합니다.

**Step 1: 간단한 스킬 만들기 (SKILL.md만으로)**

먼저 가장 기본적인 스킬을 만듭니다. 현재 디렉토리에 `.claude/skills/hello/SKILL.md` 파일을 만들어 주세요. 내용은 다음과 같아야 합니다:

- 프론트매터에 `name: hello`와 적절한 `description`
- Claude에게 사용자를 반갑게 맞이하고 현재 프로젝트에 대해 간단히 설명하는 지시사항

이것은 여러분이 직접 작성해도 되고, Claude에게 만들어달라고 요청해도 됩니다.

**Step 2: Upstage API 연동 스킬 만들기**

이제 좀 더 실전적인 스킬을 만들어 봅시다. `.claude/skills/doc-parser/SKILL.md` 파일을 만들어 주세요. 이 스킬은:

- 프론트매터에 `name: doc-parser`와 적절한 `description`
- 사용자가 문서 파일 경로를 인자로 전달하면, Upstage Document Parse API (`POST https://api.upstage.ai/v1/document-digitization`)를 호출하여 문서를 마크다운으로 변환하는 지시사항
- API 키는 환경변수 `UPSTAGE_API_KEY`에서 가져오도록 안내
- 변환 결과를 `{원본파일명}-parsed.md` 파일로 저장하도록 안내

핵심 포인트: **curl이나 코드를 직접 작성할 필요가 없습니다!** SKILL.md에 Claude가 해야 할 일을 자연어로 설명하세요. 예를 들어 'Upstage Document Parse API를 curl로 호출해서...' 같은 식으로요. Claude Code가 실제 API 호출 코드를 알아서 작성하고 실행합니다.

Upstage API 문서는 다음 URL에서 확인할 수 있습니다: https://console.upstage.ai/api/docs/for-agents/raw
API 키는 https://console.upstage.ai 에서 발급받을 수 있습니다.

두 스킬을 모두 만들었으면 알려주세요!"

학생이 작업하도록 기다리세요. 완료했다고 하거나 확인을 요청하면:

### 검증

**Step 1 검증 — hello 스킬:**

1. Read 도구를 사용하여 `.claude/skills/hello/SKILL.md`를 읽으세요.
2. 파일이 존재하는지 확인하세요.
3. 프론트매터에 `name: hello`가 있는지 확인하세요.
4. 프론트매터에 `description`이 있는지 확인하세요.
5. 프론트매터 아래에 지시사항 내용이 있는지 확인하세요 (비어있지 않은 본문).

Step 1이 통과하지 않은 경우:
- 파일이 존재하지 않으면: "`.claude/skills/hello/SKILL.md` 파일을 찾을 수 없습니다. 경로를 확인해주세요 — `.claude/skills/hello/` 디렉토리 안에 `SKILL.md` 파일이 있어야 합니다."
- 프론트매터가 없으면: "파일은 있지만 프론트매터(---로 감싸진 name과 description)가 없습니다. SKILL.md 파일 맨 위에 프론트매터를 추가해주세요."
- 본문이 비어있으면: "프론트매터는 있지만 지시사항 본문이 비어있습니다. Claude에게 무엇을 해야 하는지 설명하는 내용을 추가해주세요."

**Step 2 검증 — doc-parser 스킬:**

1. Read 도구를 사용하여 `.claude/skills/doc-parser/SKILL.md`를 읽으세요.
2. 파일이 존재하는지 확인하세요.
3. 프론트매터에 `name: doc-parser`가 있는지 확인하세요.
4. 본문에 다음 키워드 중 하나 이상이 포함되어 있는지 확인하세요: "upstage", "document-digitization", "document-parse", "api.upstage.ai", "UPSTAGE_API_KEY"
5. 본문에 마크다운 변환 관련 내용이 있는지 확인하세요: "markdown", "마크다운", "변환", "파싱" 중 하나 이상.

Step 2가 통과하지 않은 경우:
- 파일이 존재하지 않으면: "`.claude/skills/doc-parser/SKILL.md` 파일을 찾을 수 없습니다. `.claude/skills/doc-parser/` 디렉토리를 만들고 그 안에 `SKILL.md`를 작성해주세요."
- Upstage 관련 키워드가 없으면: "파일은 있지만 Upstage API 관련 내용이 없습니다. Document Parse API(`https://api.upstage.ai/v1/document-digitization`)를 호출하는 지시사항을 추가해주세요."
- 마크다운 변환 관련 내용이 없으면: "거의 다 됐습니다! 문서를 마크다운으로 변환하여 저장하는 지시사항을 추가해주세요."

모든 검증이 통과되면: "챌린지 통과! 두 개의 스킬을 성공적으로 만들었습니다. 첫 번째 스킬은 가장 기본적인 형태로, SKILL.md만으로 동작하는 것을 확인했습니다. 두 번째 스킬은 외부 API를 연동하는 실전 스킬입니다 — 그리고 여러분이 curl이나 코드를 직접 작성하지 않아도 Claude Code가 실제 실행을 처리한다는 것을 경험했습니다. 이것이 스킬의 진정한 힘입니다!"

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
2. `lesson-7-creating-skills`를 업데이트하세요: `quiz_score`, `quiz_total` (3), `challenge_passed` (true/false), `status` ("completed"), `completed_at` (현재 ISO 타임스탬프)를 설정하세요.
3. `last_active`를 현재 ISO 타임스탬프로 업데이트하세요.
4. `.claude-workshop/progress.json`에 다시 저장하세요.
5. `"status": "completed"`인 레슨 수를 세세요. 7개 모두 완료된 경우 다음을 표시하세요:
   ```
   *** 워크샵 완료! 7개의 레슨을 모두 마쳤습니다. ***
   ```

## 다음 단계

학생에게 다음을 제안하세요:
1. 방금 만든 `doc-parser` 스킬을 실제로 실행해보기 — `/doc-parser` 명령어로 PDF 파일을 파싱해보세요
2. Upstage API의 다른 기능 (OCR, Information Extraction, Solar LLM)을 활용하는 스킬 만들어보기
3. 레슨 메뉴로 돌아가기 (`/claude-code-workshop:start`)
4. 만든 스킬을 GitHub에 공유하여 다른 사람들도 사용할 수 있게 해보세요!
