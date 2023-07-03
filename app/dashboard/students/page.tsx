'use client'
import React, { useEffect, useState } from 'react'
import { fetchStudents } from '@/app/services'
import styles from '../Dashboard.module.css'
import Table from '../components/Table'

function Students() {
  const [students, setStudents] = useState(null)

  useEffect(() => {
    ;(async () => {
      const students = await fetchStudents()

      setStudents(students)
    })()
  }, [])

  return (
    <div className={styles.students}>
      <Table title="Students List" cols={[]} data={students} />
    </div>
  )
}

export default Students
