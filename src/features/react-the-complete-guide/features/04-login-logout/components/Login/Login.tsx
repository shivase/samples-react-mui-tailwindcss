import { useState, useReducer } from 'react';

import Button from '..//UI/Button/Button';
import { useAuth } from '../../store/auth-context';
import Card from '../UI/Card/Card';
import Input from '../UI/Form/Input';

type emailReducerAction = {
  type: 'USER_INPUT' | 'USER_BUR';
  val: string;
};

type emailReducerState = {
  value: string;
  isValid: boolean;
};

const emailReducer = (state: emailReducerState, action: emailReducerAction) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'USER_BUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }

  return { value: '', isValid: false };
};

const Login = () => {
  const ctx = useAuth();

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false,
  });

  // useEffect(() => {
  //  const identifier = setTimeout(() => {
  //    setFormIsValid(
  //      enteredEmail.includes('@') && enteredPassword.trim().length > 6,
  //    );
  //  }, 500);

  //  return () => {
  //    clearTimeout(identifier);
  //  };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: 'USER_INPUT', val: e.target.value });

    setFormIsValid(emailState.isValid && enteredPassword.trim().length > 6);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(e.target.value);
    setFormIsValid(emailState.isValid && enteredPassword.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'USER_BUR', val: '' });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ctx.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className="my-8 mx-auto w-[90%] max-w-[40rem] p-8 ">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="my-4 mx-0 flex flex-col items-stretch md:flex-row md:items-center">
          <label htmlFor="email" className="mb-2 block flex-1 font-bold text-[#464646]">
            E-Mail
          </label>
          <Input
            type="email"
            id="email"
            value={emailState.value}
            isValid={emailState.isValid}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className="my-4 mx-0 flex flex-col items-stretch md:flex-row md:items-center">
          <label htmlFor="password" className="mb-2 block flex-1 font-bold text-[#464646]">
            Password
          </label>
          <Input
            type="password"
            id="password"
            value={enteredPassword}
            isValid={passwordIsValid}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className="text-center">
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
