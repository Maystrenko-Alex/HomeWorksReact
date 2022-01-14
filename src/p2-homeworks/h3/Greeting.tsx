import React, { ChangeEvent, KeyboardEvent } from 'react';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
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
        <SuperInputText
          value={name}
          onChange={setNameCallback}
          onKeyPress={onKeyPressHandler}
          className={errorInput}>

        </SuperInputText>
        {/* <input
          value={name}
          onChange={setNameCallback}
          onKeyPress={onKeyPressHandler}
          className={errorInput}
        /> */}
        <SuperButton
          className={s.btn} 
          onClick={addUser} >
          add
        </SuperButton>
        {/* <button className={s.btn} onClick={addUser}>add</button> */}
        {errorJSX}
      </div>
      <div>
        <span>Users Count:</span>  {totalUsers}
      </div>
    </div>
  )
}

export default Greeting
