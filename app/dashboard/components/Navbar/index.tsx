'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'
import HomeIcon from '@/public/assets/icons/home-lg-alt.svg'
import BookmarkIcon from '@/public/assets/icons/bookmark.svg'
import GraduationCapIcon from '@/public/assets/icons/graduation-cap.svg'
import UsdSquareIcon from '@/public/assets/icons/usd-square.svg'
import FileChartLineIcon from '@/public/assets/icons/file-chart-line.svg'
import SlidersVSquareIcon from '@/public/assets/icons/sliders-v-square.svg'
import LogoutIcon from '@/public/assets/icons/logout.svg'

type NavLinkProps = {
  href: string
  isActive: boolean
  children: React.ReactNode
}

type NavItemProps = {
  href: string
  isActive: boolean
  iconSrc: any
  iconWidth: number
  iconHeight: number
  text: string
}

const NavLink = ({ href, isActive, children }: NavLinkProps) => {
  const activeClass = isActive ? styles['nav-item-active'] : ''
  const logoutClass = href === '/signin' ? styles['nav-item-logout'] : ''

  return (
    <div className={`${styles['nav-item']} ${activeClass}`}>
      <Link className={`${styles['nav-item-link']} ${logoutClass}`} href={href}>
        {children}
      </Link>
    </div>
  )
}

const NavItem = ({
  href,
  isActive,
  iconSrc,
  iconWidth,
  iconHeight,
  text,
}: NavItemProps) => {
  return (
    <NavLink href={href} isActive={isActive}>
      <div className={styles['nav-icon-container']}>
        <Image
          src={iconSrc}
          width={iconWidth}
          height={iconHeight}
          alt={`${text} Icon`}
          aria-label={`${text} Icon`}
        />
      </div>
      <span className={styles['nav-item-text']}>{text}</span>
    </NavLink>
  )
}

function Navbar() {
  const pathname = usePathname()

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
      <nav className={styles['nav-container']}>
        <div className={styles.navlinks}>
          <NavItem
            href="/dashboard"
            isActive={pathname === '/dashboard'}
            iconSrc={HomeIcon}
            iconWidth={19}
            iconHeight={17}
            text="Home"
          />
          <NavItem
            href="#"
            isActive={pathname === '/dashboard/course'}
            iconSrc={BookmarkIcon}
            iconWidth={12}
            iconHeight={15}
            text="Course"
          />
          <NavItem
            href="/dashboard/students"
            isActive={pathname === '/dashboard/students'}
            iconSrc={GraduationCapIcon}
            iconWidth={20}
            iconHeight={16}
            text="Students"
          />
          <NavItem
            href="#"
            isActive={pathname === '/dashboard/payment'}
            iconSrc={UsdSquareIcon}
            iconWidth={15}
            iconHeight={17}
            text="Payment"
          />
          <NavItem
            href="#"
            isActive={pathname === '/dashboard/report'}
            iconSrc={FileChartLineIcon}
            iconWidth={13}
            iconHeight={17}
            text="Report"
          />
          <NavItem
            href="#"
            isActive={pathname === '/dashboard/settings'}
            iconSrc={SlidersVSquareIcon}
            iconWidth={15}
            iconHeight={17}
            text="Settings"
          />
        </div>
        <NavItem
          href="/signin"
          isActive={false}
          iconSrc={LogoutIcon}
          iconWidth={15}
          iconHeight={17}
          text="Logout"
        />
      </nav>
    </div>
  )
}

export default React.memo(Navbar)
