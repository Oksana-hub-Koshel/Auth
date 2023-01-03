import './App.css';
import {useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./firebase_config/firebase-config";


function App() {
    const [registerEmail, setRegisterEmail]=useState('')
    const [registerPassword, setRegisterPassword]=useState('')
    const [loginEmail, setLoginEmail]=useState('')
    const [loginPassword, setLoginPassword]=useState('')
    const [user, setUser]=useState({})
    //
    // onAuthStateChanged(auth,(currentUser) =>{
    //     setUser(currentUser);
    // })

    const register = async () =>{
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail,registerPassword);
            console.log(user)
        }
        catch (error){
            console.log(error.message())
        }

    }

    const login =async () =>{
        try{
            const user = await signInWithEmailAndPassword(auth, loginEmail,loginPassword);
            console.log(user)
        }
        catch (error){
            console.log(error.message())
        }
    }

    const out = async () => {
        await signOut(auth)
    }

    return (
        <div className="App">
            <div>
                <h6>Register User</h6>
                <div style={{display:"flex", gap:5, justifyContent:"center"}}>
                    <input placeholder="Email" onChange={(event) => setRegisterEmail(event.target.value)}/>
                    <input placeholder="Password"  onChange={(event) => setRegisterPassword(event.target.value)}/>
                    <button onClick={register}>Create User</button>
                </div>

            </div>
            <div>
                <h6>Login</h6>
                <div style={{display:"flex", gap:5, justifyContent:"center"}}>
                    <input  onChange={(event) => setLoginEmail(event.target.value)}/>
                    <input  onChange={(event) => setLoginPassword(event.target.value)}/>
                    <button onClick={login}>Login</button>
                </div>

            </div>
            <div>
                <h6>User Logged In:</h6>
                {user?.email}
                <button onClick={out}>Sign Out</button>
            </div>
        </div>


    );
}

export default App;
