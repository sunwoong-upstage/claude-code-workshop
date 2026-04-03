# Claude Code 워크숍

**코딩을 몰라도 괜찮아요!** Claude Code를 사용하면서 Claude Code를 배우는 대화형 워크숍입니다.

> Claude Code는 터미널(명령어 창)에서 AI와 대화하며 코딩하는 도구입니다.
> 이 워크숍은 프로그래밍 경험이 없는 분도 처음부터 차근차근 따라할 수 있도록 만들었습니다.

---

## 1단계: Claude Code 설치하기

Claude Code를 아직 설치하지 않았다면, 먼저 설치해야 합니다.

### Mac 사용자

1. **터미널 열기**: `Cmd + Space`를 누르고 "터미널"을 검색하여 실행합니다
2. **Node.js 설치 확인**: 터미널에 아래 명령어를 복사해서 붙여넣고 Enter를 누르세요
   ```bash
   node --version
   ```
   - 버전 번호(예: `v20.x.x`)가 나오면 이미 설치되어 있습니다
   - `command not found`라고 나오면, 먼저 Node.js를 설치해야 합니다:
     ```bash
     # Homebrew가 있는 경우
     brew install node

     # Homebrew가 없는 경우, https://nodejs.org 에서 LTS 버전 다운로드
     ```
3. **Claude Code 설치**: 터미널에서 아래 명령어를 실행하세요
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```
4. **설치 확인**: 아래 명령어로 설치가 잘 되었는지 확인하세요
   ```bash
   claude --version
   ```

### Windows 사용자

1. **터미널 열기**: `Win + R`을 누르고 `cmd`를 입력하여 실행합니다 (또는 PowerShell 사용)
2. **Node.js 설치**: https://nodejs.org 에서 LTS 버전을 다운로드하여 설치합니다
3. **Claude Code 설치**:
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

### 처음 실행하기

설치 후, 터미널에서 `claude`를 입력하면 Claude Code가 시작됩니다:

```bash
claude
```

처음 실행하면 Anthropic 계정 로그인 화면이 나옵니다. 안내에 따라 로그인하세요.
(아직 계정이 없다면 https://console.anthropic.com 에서 만들 수 있습니다)

---

## 2단계: 워크숍 시작하기

### 방법 A: 플러그인으로 설치 (추천)

터미널에서 아래 명령어를 순서대로 실행하세요:

```bash
# 워크숍 플러그인 추가
claude plugin marketplace add https://github.com/<owner>/claude-code-workshop

# 플러그인 설치
claude plugin install claude-code-workshop
```

설치가 완료되면 Claude Code를 실행하고 아래를 입력하세요:

```
/claude-code-workshop:start
```

### 방법 B: 직접 다운로드

```bash
# 워크숍 파일 다운로드
git clone https://github.com/<owner>/claude-code-workshop.git

# 워크숍 폴더로 이동
cd claude-code-workshop

# Claude Code 실행 (플러그인 직접 로드)
claude --plugin-dir .
```

실행 후 아래를 입력하세요:

```
/claude-code-workshop:start
```

---

## 3단계: 레슨 따라하기

워크숍에는 **7개의 실습 레슨**이 있습니다. 순서대로 진행하는 것을 추천하지만, 관심 있는 레슨부터 시작해도 됩니다!

| 레슨 | 주제 | 배우는 내용 |
|------|------|-------------|
| 1 | **Claude와 대화하기** | 효과적으로 질문하고 요청하는 방법 |
| 2 | **파일 편집** | 파일 만들기, 읽기, 수정하기 |
| 3 | **명령어 실행** | 안전하게 셸 명령어 사용하기 |
| 4 | **슬래시 명령어 & 단축키** | 자주 쓰는 내장 기능 익히기 |
| 5 | **CLAUDE.md & 프로젝트 컨텍스트** | 내 프로젝트에 대해 Claude에게 알려주기 |
| 6 | **플러그인 찾기 & 사용하기** | 다른 사람이 만든 기능 설치하기 |
| 7 | **나만의 스킬 만들기** | 직접 스킬을 만들고 Upstage API 연동하기 |

각 레슨에는 다음이 포함됩니다:

- 쉬운 설명과 실제 예시
- 이해도 확인 퀴즈 (객관식)
- 직접 해보는 실습 챌린지 (자동으로 결과 확인!)
- 진행 상황 자동 저장

---

## 자주 묻는 질문

### Q: 프로그래밍을 전혀 몰라도 할 수 있나요?

**네!** 이 워크숍은 프로그래밍 경험이 없는 분을 위해 만들었습니다. 레슨 1부터 차근차근 따라하면 됩니다.

### Q: 비용이 드나요?

Claude Code를 사용하려면 Anthropic API 계정이 필요합니다. 자세한 요금은 https://www.anthropic.com/pricing 을 참고하세요.

### Q: 진행 상황이 저장되나요?

네! 진행 상황은 `.claude-workshop/progress.json` 파일에 자동 저장됩니다. 다음에 다시 시작하면 이어서 할 수 있습니다.

진행 상황을 처음부터 다시 시작하고 싶다면:
```
/claude-code-workshop:reset
```

### Q: 도움이 필요할 때는?

Claude Code 안에서 `/help`를 입력하면 도움말을 볼 수 있습니다.

---

## 기여하기

레슨을 추가하고 싶으신가요? 기존 레슨 형식을 따르는 `SKILL.md` 파일과 함께 `skills/` 아래에 새 디렉토리를 만드세요. 예시는 `lesson-*` 디렉토리를 참고하세요.

## 라이선스

MIT
