'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'
import HomeIcon from '@/public/assets/icons/home-lg-alt.svg'
import BookmarkIcon from '@/public/assets/icons/bookmark.svg'
import GraduationCapIcon from '@/public/assets/icons/graduation-cap.svg'
import UsdSquareIcon from '@/public/assets/icons/usd-square.svg'
import FileChartLineIcon from '@/public/assets/icons/file-chart-line.svg'
import SlidersVSquareIcon from '@/public/assets/icons/sliders-v-square.svg'
import LogoutIcon from '@/public/assets/icons/logout.svg'

function Navbar() {
  const [currentItem, setCurrentItem] = useState('home')

  return (
    <div className={styles.navbar}>
      <div className={styles['navbar-title']}>MANAGE COURSES</div>
      <div className={styles.profile}>
        <Image
          src="/assets/avatar.png"
          width={128}
          height={128}
          className={styles.avatar}
          aria-label="Avatar Image"
          alt="Avatar Image"
        />
        <span className={styles['admin-name']}>John Doe</span>
        <span className={styles['admin-title']}>Admin</span>
      </div>
      <div className={styles['nav-container']}>
        <div className={styles.navlinks}>
          <div
            className={
              currentItem === 'home'
                ? `${styles['nav-item']} ${styles['nav-item-active']}`
                : styles['nav-item']
            }
          >
            <Link
              className={styles['nav-item-link']}
              onClick={() => setCurrentItem('home')}
              href="/dashboard"
            >
              <div className={styles['nav-icon-container']}>
                <Image
                  src={HomeIcon}
                  width={19}
                  height={17}
                  alt="Home Icon"
                  aria-label="Home Icon"
                />
              </div>
              <span className={styles['nav-item-text']}>Home</span>
            </Link>
          </div>
          <div
            className={
              currentItem === 'course'
                ? `${styles['nav-item']} ${styles['nav-item-active']}`
                : styles['nav-item']
            }
          >
            <Link
              className={styles['nav-item-link']}
              onClick={() => setCurrentItem('course')}
              href="#"
            >
              <div className={styles['nav-icon-container']}>
                <Image
                  src={BookmarkIcon}
                  width={12}
                  height={15}
                  alt="Course Icon"
                  aria-label="Course Icon"
                />
              </div>
              <span className={styles['nav-item-text']}>Course</span>
            </Link>
          </div>
          <div
            className={
              currentItem === 'students'
                ? `${styles['nav-item']} ${styles['nav-item-active']}`
                : styles['nav-item']
            }
          >
            <Link
              className={styles['nav-item-link']}
              onClick={() => setCurrentItem('students')}
              href="#"
            >
              <div className={styles['nav-icon-container']}>
                <Image
                  src={GraduationCapIcon}
                  width={20}
                  height={16}
                  alt="Students Icon"
                  aria-label="Students Icon"
                />
              </div>
              <span className={styles['nav-item-text']}>Students</span>
            </Link>
          </div>
          <div
            className={
              currentItem === 'payment'
                ? `${styles['nav-item']} ${styles['nav-item-active']}`
                : styles['nav-item']
            }
          >
            <Link
              className={styles['nav-item-link']}
              onClick={() => setCurrentItem('payment')}
              href="#"
            >
              <div className={styles['nav-icon-container']}>
                <Image
                  src={UsdSquareIcon}
                  width={15}
                  height={17}
                  alt="Payment Icon"
                  aria-label="Payment Icon"
                />
              </div>
              <span className={styles['nav-item-text']}>Payment</span>
            </Link>
          </div>
          <div
            className={
              currentItem === 'report'
                ? `${styles['nav-item']} ${styles['nav-item-active']}`
                : styles['nav-item']
            }
          >
            <Link
              className={styles['nav-item-link']}
              onClick={() => setCurrentItem('report')}
              href="#"
            >
              <div className={styles['nav-icon-container']}>
                <Image
                  src={FileChartLineIcon}
                  width={13}
                  height={17}
                  alt="Report Icon"
                  aria-label="Report Icon"
                />
              </div>
              <span className={styles['nav-item-text']}>Report</span>
            </Link>
          </div>
          <div
            className={
              currentItem === 'settings'
                ? `${styles['nav-item']} ${styles['nav-item-active']}`
                : styles['nav-item']
            }
          >
            <Link
              className={styles['nav-item-link']}
              onClick={() => setCurrentItem('settings')}
              href="#"
            >
              <div className={styles['nav-icon-container']}>
                <Image
                  src={SlidersVSquareIcon}
                  width={15}
                  height={17}
                  alt="Settings Icon"
                  aria-label="Settings Icon"
                />
              </div>
              <span className={styles['nav-item-text']}>Settings</span>
            </Link>
          </div>
        </div>
        <div className={styles['nav-item']}>
          <Link className={styles['nav-item-link']} href="/signin">
            <span className={styles['nav-item-text']}>Logout</span>
            <div
              className={`${styles['nav-icon-container']} ${styles['nav-icon-container-logout']}`}
            >
              <Image
                src={LogoutIcon}
                width={17}
                height={13}
                alt="Logout Icon"
                aria-label="Logout Icon"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
