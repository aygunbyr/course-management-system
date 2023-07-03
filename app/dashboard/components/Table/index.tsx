import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Table.module.css'
import SearchIcon from '@/public/assets/icons/search.svg'

type TableProps = {
  title: string
  cols: string[]
  data: any
}

function Table({ title, cols, data }: TableProps) {
  const [searchText, setSearchText] = useState<string>('')

  return (
    <section className={styles.table}>
      <div className={styles.topbar}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <span className={styles.searchIcon}>
            <Image
              src={SearchIcon}
              width={14}
              height={14}
              alt="Search Icon"
              aria-label="Search Icon"
            />
          </span>
        </div>
        <button
          className={styles.btn}
          onClick={() => alert('You have clicked button!')}
        >
          ADD NEW STUDENT
        </button>
      </div>
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
      Table
    </section>
  )
}

export default Table
