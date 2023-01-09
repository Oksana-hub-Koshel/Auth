import './App.css';
import {Routes, Route, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contacts from "./pages/Contacts";
import Navbar from "./Navbar";
import {createContext, useState} from "react";
import Form from "./Form/Form";

export const AppContext=createContext();


function App() {
const [userName, setUserName]=useState('')

    return (
        <div className="App">
            <Navbar />
            <AppContext.Provider value={{userName, setUserName}}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/menu" element={<Menu />}/>
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="*" element={<h1>Page not found</h1>}/>
            </Routes>
            </AppContext.Provider>
<Form />
            {/*<Auth />*/}
            {/*<TodoList />*/}

        </div>


    );
}

export default App;
