import { ReactNode } from 'react'
import styles from './BaseButton.module.scss'

interface Props {
  children: ReactNode
  onClick: () => void
}

function BaseButton({ children, onClick }: Props) {
  return (
    <div>
      <label htmlFor=''></label>
      <button className={styles['base-button']} onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default BaseButton
