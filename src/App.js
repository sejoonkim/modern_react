import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello />
      <Hello name="react" color="red" />
    </Wrapper>
  );
}

export default App;
