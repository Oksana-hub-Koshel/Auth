import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/menu">Menu</Link>
        </div>
    );
};

export default Navbar;