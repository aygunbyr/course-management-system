import React from 'react'
import styles from './Dashboard.module.css'
import Widget from './components/Widget'
import StudentsIcon from '@/public/assets/icons/dashboard-students.svg'
import CourseIcon from '@/public/assets/icons/dashboard-course.svg'
import PaymentsIcon from '@/public/assets/icons/dashboard-payments.svg'
import UsersIcon from '@/public/assets/icons/dashboard-users.svg'

function Dashboard() {
  return (
    <div className={styles.home}>
      <Widget
        variant="lightblue"
        icon={StudentsIcon}
        width={48}
        height={30}
        title="Students"
        count="243"
      />

      <Widget
        variant="lightpink"
        icon={CourseIcon}
        width={28}
        height={35}
        title="Course"
        count="13"
      />

      <Widget
        variant="lightyellow"
        icon={PaymentsIcon}
        width={35}
        height={35}
        title="Payments"
        count="556,000₺"
      />

      <Widget
        variant="orange"
        icon={UsersIcon}
        width={34}
        height={34}
        title="Users"
        count="3"
      />
    </div>
  )
}

export default Dashboard
