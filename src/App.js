import React from "react";
import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        { name: uName, age: uAge, id: Math.random().toString() },
        ...prevUsersList,
      ];
    });
  };



  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
