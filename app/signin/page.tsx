'use client'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

function Signin() {
  const handleSubmit = (event: React.SyntheticEvent) => event.preventDefault()

  return (
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <span className={styles.title}>MANAGE COURSES</span>
        <span className={styles['title-secondary']}>SIGN IN</span>
        <span className={styles.description}>
          Enter your credentials to access your account
        </span>
        <form onSubmit={handleSubmit}>
          <div className={styles['form-control']}>
            <label className={styles['form-control-label']}>Email</label>
            <input
              className={styles['form-control-input']}
              name="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className={styles['form-control']}>
            <label className={styles['form-control-label']}>Password</label>
            <input
              className={styles['form-control-input']}
              name="password"
              placeholder="Enter your password"
              type="password"
            />
          </div>
          <Link href="/dashboard">
            <button className={styles.signinButton} type="submit">
              SIGN IN
            </button>
          </Link>
        </form>
        <span className={styles.resetPassword}>
          Forgot your password? <Link href="#">Reset Password</Link>
        </span>
      </div>
    </div>
  )
}

export default Signin
