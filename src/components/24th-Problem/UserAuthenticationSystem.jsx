import React from "react";
import { useAuth } from "./UserAuthContext";

const UserAuthenticationSystem = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <h1>User Authentication Example</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => login({ username: "12345" })}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserAuthenticationSystem;
