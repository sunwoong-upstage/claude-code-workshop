# Claude Code Interactive Workshop

Claude Code를 사용하면서 Claude Code를 대화형으로 배워보세요.

## 설치

```bash
# 워크숍 플러그인 추가
claude plugin marketplace add https://github.com/<owner>/claude-code-workshop

# 설치
claude plugin install claude-code-workshop
```

## 시작하기

설치 후 Claude Code를 열고 다음을 입력하세요:

```
/claude-code-workshop:start
```

## 커리큘럼

워크숍에는 6개의 실습 레슨이 포함되어 있습니다:

1. **Claude와 대화하기** — 효과적인 프롬프트 작성법 배우기
2. **파일 편집** — Claude Code를 통해 파일 생성, 읽기, 편집하기
3. **명령어 실행** — 안전하게 셸 명령어 실행하기
4. **슬래시 명령어 & 단축키** — 내장 명령어와 키보드 단축키 마스터하기
5. **CLAUDE.md & 프로젝트 컨텍스트** — Claude에게 내 프로젝트 가르치기
6. **플러그인 찾기 & 사용하기** — 커뮤니티 플러그인으로 Claude Code 확장하기

각 레슨에는 다음이 포함됩니다:
- 예제가 포함된 설명 콘텐츠
- 대화형 퀴즈 (객관식)
- 자동 검증이 있는 실습 챌린지
- 세션 간 진행 상황 추적

## 진행 상황

진행 상황은 현재 디렉토리의 `.claude-workshop/progress.json`에 저장됩니다.
세션 간에도 유지되므로 언제든지 중단한 곳부터 계속할 수 있습니다.

진행 상황을 초기화하려면:
```
/claude-code-workshop:reset
```

## 기여하기

레슨을 추가하고 싶으신가요? 기존 레슨 형식을 따르는 `SKILL.md` 파일과 함께 `skills/` 아래에 새 디렉토리를 만드세요. 예시는 `lesson-*` 디렉토리를 참고하세요.

## 라이선스

MIT
