import styles from './Dashboard.module.css'
import Header from './components/Header'
import Navbar from './components/Navbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={styles.layout}>
      <Navbar />
      <div className={styles.container}>
        <Header />
        {children}
      </div>
    </section>
  )
}
