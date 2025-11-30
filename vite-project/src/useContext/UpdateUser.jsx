import React, { useRef, useState } from "react";
import { useContext } from "react";
import UserContext from "./UserContext";

const UpdateUser = () => {
  const { user, updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState(user.name);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName && newName.trim()) {
      updateUser(newName);
      setNewName("");
      formRef.current.reset();
    }
  };
  return (
    <div style={{ marginLeft: "40px", marginTop: "40px" }}>
      <h3>b. Update User details</h3>
      <form
        ref={formRef}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          gap: "10px",
        }}
      >
        <label>Enter new name</label>
        <input
          type="text"
          style={{ padding: "10px" }}
          name="newName"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Update Name
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
