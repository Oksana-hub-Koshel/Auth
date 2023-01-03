import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "../firebase_config/firebase-config";



export const register = async (registerEmail, registerPassword) =>{
    try{
        const user = await createUserWithEmailAndPassword(auth, registerEmail,registerPassword);
        console.log(user)
    }
    catch (error){
        console.log(error.message)
    }

}

export const login =async (loginEmail, loginPassword) =>{
    try{
        const user = await signInWithEmailAndPassword(auth, loginEmail,loginPassword);
        console.log(user)
    }
    catch (error){
        console.log(error.message)
    }
}

export const out = async () => {
    await signOut(auth)
}