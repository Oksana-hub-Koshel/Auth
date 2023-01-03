import './App.css';
import {useState} from "react";
import {register, out, login} from "./auth/auth_logic";


function App() {

    const [user, setUser]=useState({})
    const [registerEmail, setRegisterEmail]=useState('')
    const [registerPassword, setRegisterPassword]=useState('')
    const [loginEmail, setLoginEmail]=useState('')
    const [loginPassword, setLoginPassword]=useState('')
    //
    // onAuthStateChanged(auth,(currentUser) =>{
    //     setUser(currentUser);
    // })



    return (
        <div className="App">
            <div>
                <h6>Register User</h6>
                <div style={{display:"flex", gap:5, justifyContent:"center"}}>
                    <input placeholder="Email" onChange={(event) => setRegisterEmail(event.target.value)}/>
                    <input placeholder="Password"  onChange={(event) => setRegisterPassword(event.target.value)}/>
                    <button onClick={() => register(registerEmail, registerPassword)}>Create User</button>
                </div>

            </div>
            <div>
                <h6>Login</h6>
                <div style={{display:"flex", gap:5, justifyContent:"center"}}>
                    <input  onChange={(event) => setLoginEmail(event.target.value)}/>
                    <input  onChange={(event) => setLoginPassword(event.target.value)}/>
                    <button onClick={()=> login( loginEmail, loginPassword)}>Login</button>
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
