import React, { useRef } from "react";
import UserList from "./UserList";

function App() {
  const users = [
    {
      id: 1,
      username: "sejoon",
      email: "sejoondev@gmail.com",
    },
    {
      id: 2,
      username: "maxkim",
      email: "maxkim96@gmail.com",
    },
    {
      id: 3,
      username: "jaeyi",
      email: "jaeyichoi@naver.com",
    },
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1; // 이 값이 바뀐다고, 컴포넌트가 리렌더링 되지 않는다.
  };

  return <UserList users={users} />;
}

export default App;
