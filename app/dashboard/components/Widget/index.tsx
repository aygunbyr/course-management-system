import React from 'react'
import Image from 'next/image'
import styles from './Widget.module.css'

type WidgetProps = {
  variant: 'lightblue' | 'lightpink' | 'lightyellow' | 'orange'
  icon: any
  width: number
  height: number
  title: string
  count: string
}

function Widget({ variant, icon, width, height, title, count }: WidgetProps) {
  return (
    <div className={`${styles.widget} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Image
          src={icon}
          width={width}
          height={height}
          alt={`${title} Icon`}
          aria-label={`${title} Icon`}
        />
      </div>
      <div
        className={
          variant === 'orange'
            ? `${styles.title} ${styles['title-color-white']}`
            : `${styles.title} ${styles['title-color']}`
        }
      >
        {title}
      </div>
      <div className={styles.count}>{count}</div>
    </div>
  )
}

export default Widget
