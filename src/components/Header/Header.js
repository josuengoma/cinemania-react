import React from 'react';
import Logo from '../../logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <>
            <header>
                <div className='logo'>
                    <Link to="/" class="logo"><span>C</span>iné<span>M</span>ania</Link>
                </div>
                <nav class="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/login">Login</Link>
                </nav>
                <div class="icons">
                    <form action="" class="search-bar-container">
                        <input id="search-bar" placeholder='Recherche' />
                    </form>
                </div>
            </header>
        </>
    )
}


export default Header;