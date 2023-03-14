import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      return [...prevList, { id: Math.floor(Math.random() * 100), name: uName, age: uAge }];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUsers={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
