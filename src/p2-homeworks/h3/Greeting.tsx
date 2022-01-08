import React, { ChangeEvent, KeyboardEvent } from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: boolean
  totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({ name, setNameCallback, addUser, error, totalUsers }) => {

  const errorJSX = error ? <div style={{ color: 'red' }}>ERROR</div> : '';
  const errorInput = error ? s.error : s.input;

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addUser()
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.input_wrapper}>
        <input
          value={name}
          onChange={setNameCallback}
          onKeyPress={onKeyPressHandler}
          className={errorInput}
        />
        <button className={s.btn} onClick={addUser}>add</button>
        {errorJSX}
      </div>
      <div>
        <span>Users Count:</span>  {totalUsers}
      </div>
    </div>
  )
}

export default Greeting
