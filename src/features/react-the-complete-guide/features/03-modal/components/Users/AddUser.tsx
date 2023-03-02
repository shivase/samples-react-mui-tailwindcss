import { FC, useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import type { User } from './UsersList';

type AddUserProps = {
  onAddUser: (user: User) => void;
};

type Error = {
  title: string;
  message: string;
};

const AddUser: FC<AddUserProps> = (props) => {
  const { onAddUser } = props;
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState<Error>();

  const addUserHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (not empty values).',
      });

      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });

      return;
    }
    onAddUser({ name: enteredUsername, age: +enteredAge });
    setEnteredUsername('');
    setEnteredAge('');
  };

  const errorHandler = () => {
    setError(undefined);
  };

  const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(e.target.value);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className="my-8 mx-auto w-[90%] max-w-2xl p-4">
        <form onSubmit={(e) => addUserHandler(e)}>
          <label htmlFor="username" className="mb-2 block font-bold">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            className="mb-2 block w-full border-[1px] border-solid border-[#ccc] p-1 focus:border-[#4f005f] focus:outline-none"
            onChange={(e) => usernameChangeHandler(e)}
          />
          <label htmlFor="age" className="mb-2 block font-bold">
            Age (Years)
          </label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            className="mb-2 block w-full border-[1px] border-solid border-[#ccc] p-1  focus:border-[#4f005f] focus:outline-none"
            onChange={(e) => ageChangeHandler(e)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
