# Modern React

## Introduction

- Trend

  - 클래스형 컴포넌트 -> Hooks + 함수형 컴포넌트

- How React "Library" was made?
  - JS를 사용한 DOM 변형
    - `DOM` = 각 HTML element에 대한 정보를 지니고 있는 JS 객체이다.
    - 기존 JS에서의 변형 방법은 무엇인가?
      - `getElementById`나 `querySelector` 활용하여 DOM을 선택하고, 이벤트가 발생하면 변화를 준다.
      - 문제점: Web App이 커질 때, 이벤트 및 DOM이 많아질수록 관리가 어려워진다.
  - React를 사용한 DOM 변형
    - 기존 방식인 `상태`가 바뀌었을 때 DOM을 어떻게 `업데이트` 해야할지 정하는 것이 아니라.
    - 다 날리고 새롭게 보여줄 것이다.
    - `Virtual DOM` 활용하여 성능을 지키고, `업데이트` 반영을 빠르게 한다.
      - 메모리에 가상으로 존재하는 JS 객체이다.
    - 프로세스:
      1. 상태가 업데이트 된다.
      2. 업데이트가 필요한 UI가 Virtual DOM에 Rendering된다.
      3. 리액트 개발팀이 개발한 비교 알고리즘을 통해 실제 브라우저에서 보이는 DOM과 Virtual DOM과 비교한다.
      4. 차이점 감지한다.
      5. 실제 DOM에 Patch한다.
  - "UI를 어떻게 보여줄지 집중한다." ~~"UI를 어떻게 업데이트 할 지"~~
  - `컴포넌트` = UI 조각
