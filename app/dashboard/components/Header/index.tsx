import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import CaretCircleDownIcon from '@/public/assets/icons/caret-circle-down.svg'
import BellIcon from '@/public/assets/icons/bell.svg'

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Image
          src={CaretCircleDownIcon}
          width={18}
          height={18}
          alt="Caret Circle Down Icon"
          aria-label="Caret Circle Down Icon"
        />
      </div>
      <div>
        <Image
          src={BellIcon}
          width={17}
          height={20}
          alt="Bell Icon"
          aria-label="Bell Icon"
        />
      </div>
    </div>
  )
}

export default Header
