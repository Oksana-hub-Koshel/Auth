import React from 'react';
import {useContext} from "react";
import {AppContext} from "../App";

const Menu = () => {
    const{ userName }=useContext(AppContext)

    return (
        <div>
            <p>{userName}</p>
        </div>
    );
};

export default Menu;