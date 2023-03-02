import { FC } from 'react';

import Card from '../UI/Card';

export type User = {
  name: string;
  age: number;
};

type UserListProps = {
  users: User[];
};

const UserList: FC<UserListProps> = (props) => {
  const { users } = props;

  return (
    <Card className="mx-auto my-8 w-[90%] max-w-2xl">
      <ul className="list-none p-4">
        {users.map((user) => (
          <li key={user.name} className="my-2 mx-0 border-[1px] border-solid border-[#ccc] p-2">
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
