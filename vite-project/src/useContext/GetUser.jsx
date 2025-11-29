import React from "react";
import UserContext from "./UserContext";
import { useContext } from "react";

const GetUser = () => {
  const { user } = useContext(UserContext);
  return (
    <div style={{ marginLeft: "40px"}}>
      <h3>a. Get User details</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default GetUser;
