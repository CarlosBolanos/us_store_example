import { Header, Footer } from '@/app/components/page'
import styles from './layout.module.css'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (    
    <main className={styles.main}>
      <Header />
      <div className={styles.center}>
        {children}
      </div>
      <Footer />
    </main>    
  )
}
