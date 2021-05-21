import { useState, useEffect } from "react";
import Spinner from "../UI/Spinner";
import getData from "../../utils/api";

export default function UsersList({ user, setUser }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getData("http://localhost:3001/users")
      .then((data) => {
        setUser(data[0]);
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [setUser]);

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
    <ul className="users items-list-nav">
      {users.map((user) => (
        <li key={user.id} className={user.id === user?.id ? "selected" : null}>
          <button className="btn" onClick={() => setUser(user)}>
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
