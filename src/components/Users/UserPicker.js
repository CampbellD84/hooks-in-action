import { useEffect } from "react";
import { useUser } from "./UserContext";
import Spinner from "../UI/Spinner";
import useFetch from "../../utils/useFetch";

export default function UserPicker() {
  const [user, setUser] = useUser();
  const { data: users = [], status } = useFetch("http://localhost:3001/users");

  useEffect(() => {
    setUser(users[0]);
  }, [users, setUser]);

  function handleSelect(e) {
    const selectedID = parseInt(e.target.value, 10);
    const selectedUser = users.find((u) => u.id === selectedID);

    setUser(selectedUser);
  }

  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "error") {
    return <span>Error!</span>;
  }

  return (
    <select className="user-picker" onChange={handleSelect} value={user?.id}>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}
