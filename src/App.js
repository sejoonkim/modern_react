import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user)); // push, splice는 사용하지 말자
    setInputs({
      username: "",
      email: "",
    });
    console.log(nextId.current);
    nextId.current += 1; // 이 값이 바뀐다고, 컴포넌트가 리렌더링 되지 않는다.
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
