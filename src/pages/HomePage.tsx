import { useState, ChangeEvent } from 'react'
import BaseInput from '../components/base/BaseInput'
import BaseButton from '../components/base/BaseButton'

function HomePage() {
  const [name, setName] = useState('Jake')
  const [isShow, setIsShow] = useState(false)

  const toggleShow = () => setIsShow(!isShow)
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)

  return (
    <div>
      <h1>Home page</h1>
      <BaseInput type='text' value={name} onChange={handleNameChange}></BaseInput>
      <BaseButton onClick={toggleShow}>Show user</BaseButton>
      {isShow ? <div>{name}</div> : null}
    </div>
  )
}

export default HomePage
