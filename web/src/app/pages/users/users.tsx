
import { Layout } from '@/app/components/page'
import { useGetUsers } from '@/hooks/userHook'

export default function Home() {  
  const {loading, users, errors} = useGetUsers()  

  return (    
      <Layout>
        <h1>Users</h1>
      </Layout>
  )
}
