import React, {useState} from 'react';
import axios from "axios";

const FetchButtons = () => {
    const [text, setText]=useState('')

    const fetchData=(category)=>{
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
            .then((res)=> {
                    setText(res.data[0].excuse)
                }
            )
    }

    return (
 <>
            <h1>Generate an Excuse</h1>
            <div style={{display:'flex', flexDirection:"column", gap:10}}>

                <div style={{display:"flex", flexDirection:"column", gap: 10, justifyContent: "center", alignItems:"center"}}>
                    <button onClick={() => fetchData("party")}>Party</button>
                </div>

                <div style={{display:"flex", flexDirection:"column", gap: 10, justifyContent: "center", alignItems:"center"}}>
                    <button onClick={() => fetchData("family")}>Family</button>
                </div>

                <div style={{display:"flex", flexDirection:"column", gap: 10, justifyContent: "center", alignItems:"center"}}>
                    <button onClick={() => fetchData("office")}>Office</button>
                </div>
                {text}
        </div>
 </>

    );
};

export default FetchButtons;