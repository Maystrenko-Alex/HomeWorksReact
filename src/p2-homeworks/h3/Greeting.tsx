import React, { ChangeEvent } from 'react';
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

    const errorJSX = error ? <div style={{ color: 'red'}}>ERROR</div> : '';

    const errorInput = error ? s.error : s.input;

    return (
        <div className={s.wrapper}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={errorInput}
                />
                <button className={s.btn} onClick={addUser}>add</button>
            </div>
            {errorJSX}
            <div>
                Users Count:  {totalUsers}
            </div>
        </div>
    )
}

export default Greeting
