import Image from 'next/image'
import { Layout } from '@/app/components/page'
import styles from './home.module.css'

export default function Home() {  

  return (    
      <Layout>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </Layout>
  )
}
