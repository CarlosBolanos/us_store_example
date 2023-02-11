import react, {useState} from 'react';
import { User, Error } from '@/types'

type UseGetUser = {
    loading: boolean;
    users?: User[];
    errors?: Error[];
}
export const useGetUsers = (): UseGetUser => {
    const [loading, setIsLoading] = useState<boolean>(false)
    const [users, setUsers] = useState<User[]|undefined>(undefined)
    const [errors, setErrors] = useState<Error[]|undefined>(undefined)

    fetch('/api/users')
    .then(async(response) => {
        const data = await response.json()
        setIsLoading(false)                    
        // setUsers(data)
    })
    .catch(ex => {
        setIsLoading(false)
        setErrors([{code: 1, message: 'error retrieving users from api'}])
    })

    return {
        loading,
        users,
        errors        
    }
}