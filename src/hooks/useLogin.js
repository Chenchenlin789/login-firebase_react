
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react'
import { auth } from '../firebase/config'

export const useLogin = () => {
    const [error, setError] = useState(null);
    const login = (email, password) => {
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
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

    return { error, login };
}

