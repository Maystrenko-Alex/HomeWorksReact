import React, { ChangeEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
  users: Array<UserType>
  addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('') // стейт для инпута
  const [error, setError] = useState<true | false>(false) // стейт для ошибки

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // обрабатывает вводимое имя в инпуте
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

  const totalUsers = users.length

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
