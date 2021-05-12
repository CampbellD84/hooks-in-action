import { useState, useEffect } from "react";
import Spinner from "../UI/Spinner";
import getData from "../../utils/api";

export default function UsersList() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [users, setUsers] = useState(null);
  const [usersIndex, setUsersIndex] = useState(0);
  const user = users?.[usersIndex];

  useEffect(() => {
    getData("http://localhost:3001/users")
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return (
      <p>
        <Spinner /> Loading users...
      </p>
    );
  }

  return (
    <>
      <ul className="users items-list-nav">
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
