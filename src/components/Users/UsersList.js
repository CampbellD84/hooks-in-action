import { useState } from "react";
import { users } from "../../static.json";

export default function UsersList() {
  const [usersIndex, setUsersIndex] = useState(0);
  const user = users[usersIndex];

  return (
    <>
      <ul className="bookables items-list-nav">
        {users.map((user, i) => (
          <li key={user.id} className={i === usersIndex ? "selected" : null}>
            <button className="btn" onClick={() => setUsersIndex(i)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>

      {user && (
        <div className="item user">
          <div className="item-header">
            <h2>{user.name}</h2>
          </div>
          <div className="user-details">
            <h3>{user.title}</h3>
            <p>{user.notes}</p>
          </div>
        </div>
      )}
    </>
  );
}
