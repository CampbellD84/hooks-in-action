import { useState } from "react";
import { users } from "../../static.json";

export default function UsersList() {
  const [usersIndex, setUsersIndex] = useState(0);

  return (
    <ul className="bookables items-list-nav">
      {users.map((user, i) => (
        <li key={user.id} className={i === usersIndex ? "selected" : null}>
          <button className="btn" onClick={() => setUsersIndex(i)}>
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
