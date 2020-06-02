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

<br/>

### Development Setting

- yarn is `faster` than npm
- `npx create-react-app modern_react`

<br/>

### My First React Component

- 함수형 컴포넌트 사용

- `export default Hello`

  - Hello 컴포넌트를 내보내겠다.

- React 컴포넌트가 삽인되는 과정
  1. App.js
     - 사용자가 정의한 컴포넌트를 모은다.
  2. index.js
     - `index.html`의 DOM 중 id가 "root"인 것을 찾아 그 안에 App.js의 내용을 추가한다.
  3. index.html
     - `<div id="root"></div>` 속에 들어간다.

<br/>

### JSX Syntax

- 정의: React에서 컴포넌트의 생김새를 정의할 때 사용하는 문법이다.
- HTML과 유사하게 생겼지만, JS이다.

  - XML 형태 코드 -> Babel -> 변환
  - Babel's Try it out, [Link](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=BQKABGA8AmCWBuA-KAjRAJApgG2wewBpIB6NKYuJcMASiA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.10.2&externalPlugins=)

- Basic Syntax
  1. tag 꼭 닫기
     - `<input>` `<br>` 꼭 닫아야 한다.
     - self-closing tag: 두 태그 사이에 내용이 없을 때 사용하자.
  2. 2개 이상의 tag는 하나의 tag로 감싸야 한다.
     - `<div>`나 `<>`(fragment)로 사용한다.
  3. `()`괄호는 코드의 가독성을 위해서 사용된다. 없어도 무방하다.
- JSX 내부에서 JS 값 사용하기
  - `<div>{name}</div>`
- `style`과 `className`

  - `style`
    - `const style = { 스타일 지정하기 }`
    - inline: `<div style={style}>{name}</div>`
  - `className`
    - HTML's `class`

- 주석
  - `{/* Comment */}`
  - inside self-closing tag
    - `// Comment`

<br/>

### props 통해 컴포넌트에게 값 전달하기

- `props`란
  - properties의 줄임말
  - 컴포넌트를 사용할 때 Parent에서 Child에게 특정 값 전달하기 위해 사용된다.
- Child의 함수에서 파라미터로 `props`를 받는 경우
  - `props`는 Object이다.
- `구조분해, 비구조화할당` 사용할 경우

  - `props`대신 `{color, name}`을 파라미터로 받는다.
  - `<div style={{ color }}>안녕하세요</div>`
  - `{{}}` JS 객체를 받기 위해 쓰인다.

- `props`가 주어지지 않을 때의 `default Props`

  ```javascript
  Hello.defaultProps = {
    name: "noname",
  };
  ```

- `props children`

  - 컴포넌트 안의 값을 조회할 때 쓰인다.
  - children이라는 `props`를 받아온다.

  ```react
  function Wrapper({ children }) {
    const style = {
      border: "2px solid black",
      padding: 16,
    };

    return <div style={style}>{children}</div>;
  }
  ```

<br/>

### 조건부 렌더링

- 정의: 특정 조건의 `참`, `거짓`에 따라 다른 값을 보여준다.
- 삼항연산자 또는 `&&` 사용하기
- `falthy`한 값 중에 `0`은 출력된다.
- `props` 이름만 tag 안에 넣었을 경우 `true`로 간주된다.

```react
function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial ? <b>True Value</b> : <b>False Value</b>} {isSpecial && <b>*</b>} 안녕하세요
      {name}
    </div>
  );
}
```

<br/>

### useState 통한 동적 상태 관리

- 함수형 컴포넌트에서 `Hooks` 사용하여 상태를 관리할 수 있다.

- 이벤트 설정방법

  - UI 컴포넌트 내부에서 함수를 만들고 `<button onClick={함수이름}>`으로 연결하자.
  - `"함수 호출"`(HTML/CSS/JS의 방법) 아니다
  - JSX `onClick` vs HTML/CSS/JS `onclick`

- `const [*number*, *setNumber*] = *useState*(0);`

  - useState(0) 호출 시 배열이 반환된다. `number`는 0으로 초기화된다.
  - `number`는 상태를 관리할 값을 담고 있는 변수이다. 배열의 첫 원소.
  - `setNumber`는 함수이며 `number`의 값을 바꾼다. 배열의 두번째 원소.
    - `*setNumber*(number + 1);`

- `setNumber()`안에 값 업데이트에 대한 로직을 짤 수 있다.
  - `업데이트 함수`를 사용하는 것이다. `함수형 업데이트`
  - `setNumber(prevNumber => prevNumber + 1);`

<br/>

### input 상태 관리하기

- <input>의 입력 value를 상태 관리하기

  ```react
  <div>
    <input onChange={onChange} value={text} />
    <button onClick={onReset}>초기화</button>
    <div>
      <b>Value: </b>
      {text}
    </div>
  </div>
  ```

  - `useState`함수를 활용하여 "text"의 상태를 관리한다.

    ```react
    const [text, setText] = useState("");
    ```

  - `onChange` 함수는 `<input>`의 `onChange`이벤트를 다룬다. e를 매개변수로 받아오며, "text"를 `<input>`의 값으로 지정한다.

    ```react
    const onChange = (e) => {
      setText(e.target.value);
    };
    ```

  - `onReset`함수는 `<button>`의 `onClick`이벤트에 해당된다. 초기화 버튼을 누를 때, "text"가 빈 문자열로 지정된다.

    ```react
    const onReset = () => {
      setText("");
    };
    ```
