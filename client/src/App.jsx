import React from "react";
import { Admin, User } from "./loader/index";

const App = () => {
  const isAuthenticated = false;
  const isAdmin = false;

  return (
    <div>
      {isAuthenticated ? (
        isAdmin ? (
          <Admin />
        ) : (
          <User value={isAuthenticated} />
        )
      ) : (
        <User value={false} />
      )}
    </div>
  );
};

export default App;
