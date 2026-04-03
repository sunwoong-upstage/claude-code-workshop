# 진행 상황 추적 지침 (관리자 참고용)

이 파일은 진행 상황 추적 프로토콜을 문서화합니다. 각 레슨의 SKILL.md는 이 지침을 인라인으로 포함합니다.

## 진행 상황 불러오기

1. Read 도구를 사용하여 `.claude-workshop/progress.json`을 읽기
2. 파일이 없으면 `mkdir -p .claude-workshop`으로 생성하고 기본 JSON 스키마 작성
3. JSON 파싱에 실패하면 학습자에게 경고하고 기본값으로 재생성

## 기본 스키마

```json
{
  "version": "1.0",
  "started_at": "<ISO timestamp>",
  "last_active": "<ISO timestamp>",
  "lessons": {
    "lesson_01_navigation": { "status": "not-started" },
    "lesson_02_editing":    { "status": "not-started" },
    "lesson_03_multi_file": { "status": "not-started" },
    "lesson_04_terminal":   { "status": "not-started" },
    "lesson_05_git":        { "status": "not-started" },
    "lesson_06_agents":     { "status": "not-started" }
  }
}
```

## 완료 상태 도출

- `status === "completed"`인 레슨의 수를 세어 `total_completed` 산출
- `all_complete = (total_completed === 6)`
- 이 값들은 JSON에서 읽지 말 것 — 저장되지 않음

## 진행 상황 업데이트

1. 각 퀴즈 답변 후: `quiz_score` 업데이트, `status`를 `"in-progress"`로 설정
2. 챌린지 검증 후: `challenge_passed` 설정
3. `quiz_score === quiz_total` AND `challenge_passed === true`일 때: `status`를 `"completed"`로 설정, `completed_at` 설정
4. 항상 `last_active` 업데이트
5. 업데이트된 JSON 다시 쓰기

## 완료 확인

업데이트 후 `all_complete`를 도출합니다. true이면 완료 배지를 표시하세요.
