import react, {useState} from 'react';
import { User, Error } from '@/types'

type UseGetUser = {
    loading: boolean;
    users?: User[];
    errors?: Error[];
}
export const useGetUsers = (): UseGetUser => {
    const loading = true;
    const [users, setUsers] = useState<User[]|undefined>(undefined)
    const [errors, setErrors] = useState<Error[]|undefined>(undefined)

    fetch('/api/users').then((response) => {
        console.log('f: response', response)
    }).catch(ex => {

    })

    return {
        loading,
        users,
        errors        
    }
}