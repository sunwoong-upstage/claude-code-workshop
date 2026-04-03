---
name: reset
description: 워크숍 진행 상황을 모두 초기화하고 처음부터 시작하기
---

## Instructions

다음 단계를 정확히 따르세요:

### Step 1: Ask for Confirmation

AskUserQuestion 도구를 사용하여 다음 질문을 하세요:

> "정말로 워크숍 진행 상황을 모두 초기화하시겠습니까? 이 작업은 취소할 수 없습니다."

다음 옵션을 제공하세요: `["네, 초기화할게요", "아니요, 유지할게요"]`

### Step 2: Handle Response

**사용자가 확인한 경우 ("네, 초기화할게요" 선택):**

1. Bash를 통해 다음 명령어를 실행: `rm -f .claude-workshop/progress.json`
2. 출력:

```
진행 상황이 초기화되었습니다! /claude-code-workshop:start 를 실행하여 다시 시작하세요.
```

**사용자가 거부한 경우 ("아니요, 유지할게요" 선택):**

출력:

```
초기화가 취소되었습니다. 진행 상황은 안전하게 보존됩니다.
```
