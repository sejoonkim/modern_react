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
  <br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
