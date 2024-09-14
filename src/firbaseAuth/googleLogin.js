import firebase from 'firebase/compat/app';
import {auth}  from '../firebase';

export const googleLogin =() =>
{
    const provider=new firebase.auth.GoogleAuthProvider();

    return auth.signInWithPopup(provider).then(result =>{
        const token= result.user.getIdToken();

        console.log("here is token",token)

        window.localStorage.setItem('firebase_token',token);

        return result.user;

    }).catch(error =>
    {
        console.error("Google login error",error);
    }
    )

    
};
