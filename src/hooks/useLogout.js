import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config'
import { useState } from 'react'

export const useLogout = () => {
    const [error, setError] = useState(null);
    const logout = () => {
        setError(null)
        signOut(auth)
            .then(() => {
                console.log('user is loged out')
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    return { error, logout };
}

export default useLogout;
