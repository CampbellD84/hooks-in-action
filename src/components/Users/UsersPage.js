import { useContext, useState } from "react";
import UsersList from "./UsersList";
import UserDetails from "./UserDetails";

import UserContext from "../Users/UserContext";

export default function UsersPage() {
  const [user, setUser] = useState(null);

  const { user: loggedInUser } = useContext(UserContext);

  const currentUser = user || loggedInUser;

  return (
    <main className="users-page">
      <UsersList user={currentUser} setUser={setUser} />
      <UserDetails user={currentUser} />
    </main>
  );
}
