import { useState } from 'react';

import AddUser from '../components//Users/AddUser';
import UserList from '../components/Users/UsersList';
import type { User } from '../components/Users/UsersList';

export const Modal = () => {
  const [usersList, setUsersList] = useState<User[]>([]);

  const addUserHandler = (user: User) => {
    setUsersList((prev: User[]) => [...prev, user]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
};
