import Spinner from "../UI/Spinner";
import useFetch from "../../utils/useFetch";

export default function UsersList({ user, setUser }) {
  const {
    data: users = [],
    status,
    error,
  } = useFetch("http://localhost:3001/users");

  if (status === "error") {
    return <p>{error.message}</p>;
  }

  if (status === "loading") {
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
