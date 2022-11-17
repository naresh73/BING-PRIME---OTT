import React from 'react';
import './header.css';
import logo from '../../Assests/logo.png'


export default function Header() {
    return (
        <header className='header'>
            <a href="/bing" class="logo">
                <img src={logo} alt="logo" />
                </a>
            <ul class="navigation">
                <li><a href="/bing">Home</a></li>
                <li><a href="/bing">TV Shows</a></li>
                <li><a href="/bing">Movies</a></li>
                <li><a href="/bing">Web Series</a></li>
                <li><a href="/bing">Latest</a></li>
                <li><a href="/bing">My List</a></li>
            </ul>
            <div class="search">
                <input type="text" placeholder="Search" />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <i class="fa fa-user-o"></i>
        </header>
    )
}
