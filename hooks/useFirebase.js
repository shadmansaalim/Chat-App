import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import swal from 'sweetalert';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



initializeAuthentication();
toast.configure()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    const registerUser = (name, email, password, router) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);

                // Send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    router.push('/profile');
                    swal("Account Created Successfully!", "You can now chat with your friends and family", "success");
                }).catch((error) => {

                });

            })
            .catch((error) => {
                if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
                    swal("Invalid!", "An account already exists with this email'", "error");
                }
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLoading(false);

            } else {
                setUser({})
                setIsLoading(false);
            }

        });
    }, [auth])



    const loginUser = (email, password, router) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                router.push(`/profile`);
                toast.success(`Welcome back ${auth.currentUser.displayName.split(' ')[0]}`)
            })
            .catch((error) => {
                if (error.message === "Firebase: Error (auth/wrong-password).") {
                    swal("Invalid Password!", "Please check your email & password and then try again", "error");
                }
                else if (error.message === "Firebase: Error (auth/user-not-found).") {
                    swal("User Not Found!", "Please check your email & password and then try again", "warning");
                }
            })
            .finally(() => setIsLoading(false));
    }
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }



    return {
        user,
        isLoading,
        registerUser,
        loginUser,
        logOut,
    }

}


export default useFirebase;