import { createContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Shaed Noor",
    email: "syednoor058@gmail.com",
  });

  const updateUser = (newName) => {
    setUser((prevUser) => ({ ...prevUser, name: newName }));
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserProvider };
