import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase/config'

export const useSignup = () => {
    const [error, setError] = useState(null);
    const signup = (email, password) => {
        setError(null)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // console.log(userCredential)
                // console.log('----')
                const user = userCredential.user;
                console.log('user is signed up', user)
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    return { error, signup };
}

