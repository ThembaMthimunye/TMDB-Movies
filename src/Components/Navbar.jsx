import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ title }) => {
    return (
        <nav 
            className="bg-[url('./assets/images/navimage.jpg')] bg-cover bg-center h-[30rem] bg-no-repeat"
        >
             
            <div className="relative flex items-center justify-between h-16 p-[70px]">
                <Link 
                    to="/" 
                    className="text-blue-700 text-3xl bg-[ FFFFFF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[6rem] h-[2.5rem] px-2"
                >
                    Home
                </Link>
               
                
            </div>
            {title && <div className="text-center text-white mt-4">{title}</div>}
        </nav>
    );
};

export default Navbar;
