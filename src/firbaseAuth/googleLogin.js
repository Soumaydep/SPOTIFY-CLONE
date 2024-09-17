import firebase from 'firebase/compat/app';
import { auth } from '../firebase';

export const googleLogin = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();

    // Force the popup to ask the user to select an account
    provider.setCustomParameters({
      prompt: 'select_account'  // Forces account selection
    });

  try {
    const result = await auth.signInWithPopup(provider);
    const user = result.user;  // Ensure result.user is valid
    const token = await user.getIdToken(); // Await the getIdToken() call

    console.log("User details:", user);  // Check if this logs the correct user details
    window.localStorage.setItem('firebase_token', token);
    window.localStorage.setItem('user',JSON.stringify(user));

    return user;  // Return user object
  } catch (error) {
    console.error("Google login error:", error);
    return null; // Handle the error by returning null
  }
};
