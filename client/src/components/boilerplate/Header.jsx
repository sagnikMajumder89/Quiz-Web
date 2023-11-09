import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/OIG.hugGbEkv462NZdO5u.png';

export default function Header() {

    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setLoggedIn(true);
        }
    }, [])
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setLoggedIn(false);
    }

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-20"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        {!loggedIn && <Link
                            to="/auth/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>}
                        {!loggedIn && <Link
                            to="/auth/register"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            SignUp
                        </Link>}
                        {loggedIn &&
                            <Link
                                to="/"
                                onClick={logout}
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Logout
                            </Link>}
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <div className="flex flex-row">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 px-4 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 px-4 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </div>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

