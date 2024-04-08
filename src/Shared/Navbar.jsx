import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../assets/logo2.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const links = <>
        <NavLink to="/" className="text-xl font-bold transition-colors duration-300">Home</NavLink>
        <NavLink to="/about" className="text-xl font-bold transition-colors duration-300">About</NavLink>
        <NavLink to="/courses" className="text-xl font-bold transition-colors duration-300">Courses</NavLink>
        <NavLink to="/contact" className="text-xl font-bold transition-colors duration-300">Contact</NavLink>
      
    </>
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full py- z-50 shadow-sm ${scrolled ? 'bg-[#ffff] shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-2">
                <div className="flex justify-between items-center">
                    <Link to={'/'}> <img className='h-[72px] rounded-' src={logo} alt="" /> </Link>
                    <ul className={`hidden md:flex tiro-bangla flex-1 justify-end items-center space-x-6 ${scrolled ? 'text-black' : 'text-black'}`}>
                        {links}
                    </ul>
                    <div className="">
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="md:hidden inline-flex items-center justify-center p-2 cursor-pointer">
                                    <HiMenuAlt3 className={`text-3xl ${scrolled ? 'text-white' : 'text-white'}`}></HiMenuAlt3>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex-col items-center space-y-4">
                                    {links}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;