'use client'
import React, { useEffect, useState } from 'react'
import { fetchStudents } from '@/services'
import styles from '../Dashboard.module.css'
import Table from '../components/Table'

function Students() {
  const [students, setStudents] = useState<[]>([])

  useEffect(() => {
    ;(async () => {
      const students = await fetchStudents()

      setStudents(students.users)
    })()
  }, [])

  const cols = ['', 'Name', 'Email', 'Phone', 'Website', 'Company Name', '']

  return (
    <section className={styles.students}>
      <Table title="Students List" cols={cols} data={students} />
    </section>
  )
}

export default Students

// const data: DataProps[] = [
//   {
//     imageSrc: '/assets/profile.png',
//     name: 'John Doe',
//     email: 'john@gmail.com',
//     phone: '7305477760',
//     website: 'karthi.lorem.com',
//     companyName: 'Deckow-Crist',
//   },
//   {
//     imageSrc: '/assets/profile.png',
//     name: 'John Doe',
//     email: 'john@gmail.com',
//     phone: '7305477760',
//     website: 'karthi.lorem.com',
//     companyName: 'Deckow-Crist',
//   },
//   {
//     imageSrc: '/assets/profile.png',
//     name: 'John Doe',
//     email: 'john@gmail.com',
//     phone: '7305477760',
//     website: 'karthi.lorem.com',
//     companyName: 'Deckow-Crist',
//   },
//   {
//     imageSrc: '/assets/profile.png',
//     name: 'John Doe',
//     email: 'john@gmail.com',
//     phone: '7305477760',
//     website: 'karthi.lorem.com',
//     companyName: 'Deckow-Crist',
//   },
//   {
//     imageSrc: '/assets/profile.png',
//     name: 'John Doe',
//     email: 'john@gmail.com',
//     phone: '7305477760',
//     website: 'karthi.lorem.com',
//     companyName: 'Deckow-Crist',
//   },
//   {
//     imageSrc: '/assets/profile.png',
//     name: 'John Doe',
//     email: 'john@gmail.com',
//     phone: '7305477760',
//     website: 'karthi.lorem.com',
//     companyName: 'Deckow-Crist',
//   },
//   {
//     imageSrc: '/assets/profile.png',
//     name: 'John Doe',
//     email: 'john@gmail.com',
//     phone: '7305477760',
//     website: 'karthi.lorem.com',
//     companyName: 'Deckow-Crist',
//   },
//   {
//     imageSrc: '/assets/profile.png',
//     name: 'John Doe',
//     email: 'john@gmail.com',
//     phone: '7305477760',
//     website: 'karthi.lorem.com',
//     companyName: 'Deckow-Crist',
//   },
//   {
//     imageSrc: '/assets/profile.png',
//     name: 'John Doe',
//     email: 'john@gmail.com',
//     phone: '7305477760',
//     website: 'karthi.lorem.com',
//     companyName: 'Deckow-Crist',
//   },
//   {
//     imageSrc: '/assets/profile.png',
//     name: 'John Doe',
//     email: 'john@gmail.com',
//     phone: '7305477760',
//     website: 'karthi.lorem.com',
//     companyName: 'Deckow-Crist',
//   },
// ]
