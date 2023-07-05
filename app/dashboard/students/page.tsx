'use client'
import React, { useEffect, useState } from 'react'
import { fetchStudents } from '@/services'
import styles from '../Dashboard.module.css'
import Table from '../components/Table'
import { User } from '@/types/user'

function Students() {
  const [students, setStudents] = useState<User[]>([])

  useEffect(() => {
    ;(async () => {
      const students = await fetchStudents()

      setStudents(students.users)
    })()
  }, [])

  const cols = ['', 'Name', 'Email', 'Phone', 'Website', 'Company Name', '']

  return (
    <section className={styles.students}>
      <Table
        title="Students List"
        cols={cols}
        data={students}
        setData={setStudents}
      />
    </section>
  )
}

export default Students
