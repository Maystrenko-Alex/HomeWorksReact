import React, { ChangeEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
  users: Array<UserType>
  addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<true | false>(false);
  const totalUsers = users.length;

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const nameInput = e.currentTarget.value.trim();
    if (nameInput) {
      setName(nameInput);
      setError(false)
    } else {
      setError(true)
      setName('')
    }
  }

  const addUser = () => {
    if (name) {
      addUserCallback(name)
      alert(`Hello ${name} !`)
      setName('')
    } else {
      setError(true)
    }
  }


  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
