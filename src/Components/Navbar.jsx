import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
    return (
        <nav 
            className="bg-[url('./assets/images/pexels-hngstrm-3137890.jpg')] bg-cover bg-center h-[30rem] bg-no-repeat"
        >
            <div className="relative flex items-center justify-between h-16 p-[70px]">
                <Link 
                    to="/" 
                    className="text-blue-700 text-3xl bg-[ FFFFFF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[6rem] h-[2.5rem] px-2"
                >
                    Home
                </Link>
                <Link 
                    to="/now-playing" 
                    className="text-blue-700 text-3xl bg-[ FFFFFF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[12rem] h-[2.5rem] px-2"
                >
                    Now Playing
                </Link>
                <Link 
                    to="/upcoming" 
                    className="text-blue-700 text-3xl bg-[ FFFFFF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[11rem] h-[2.5rem] px-4"
                >
                    Upcoming
                </Link>
                <Link 
                    to="/most-watched" 
                    className="text-blue-700 text-3xl bg-[ FFFFFF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[14rem] h-[2.5rem] px-3"
                >
                    Most Watched
                </Link>
                <Link 
                    to="/genre" 
                    className="text-blue-700 text-3xl bg-[ FFFFFF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[7rem] h-[2.5rem] px-4"
                >
                    Genre
                </Link>
            </div>
            {title && <div className="text-center text-white mt-4">{title}</div>}
        </nav>
    );
};

export default Navbar;
