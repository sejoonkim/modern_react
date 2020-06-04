import React from "react";
function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
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

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
