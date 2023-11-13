import { ReactNode, ChangeEvent } from 'react'
import styles from './BaseInput.module.scss'

interface Props {
  children?: ReactNode
  value: string
  type: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function BaseInput({ children, value, onChange }: Props) {
  return (
    <div>
      <label htmlFor=''></label>
      <input value={value} onChange={onChange} className={styles['base-input']}>
        {children}
      </input>
    </div>
  )
}

export default BaseInput
