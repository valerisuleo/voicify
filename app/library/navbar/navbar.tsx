import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';
import { svgList, navLinks } from './config';

const NavbarComponent = () => {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo Section */}
                    <div className="inline-flex items-center">
                        <div className="whitespace-nowrap">
                            {svgList.map((item, i) => (
                                <Link
                                    href={''}
                                    className={`inline-flex items-center justify-center ${
                                        i === svgList.length - 1
                                            ? `${styles['adjust-y']}`
                                            : ''
                                    }`}
                                    key={i}
                                    style={{ marginRight: `${item.margin}px` }}
                                >
                                    {item.svg}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links Section */}
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        {navLinks.map((item, i) => (
                            <Link
                                key={i}
                                className="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-xl font-medium cursor-pointer whitespace-nowrap"
                                href={''}
                            >
                                {' '}
                                <span className="icon mr-2">{item.icon}</span>
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Avatar and Button Section */}
                    <div className="ml-6 flex items-center">
                        {/* <img
                            className="h-8 w-8 rounded-full"
                            src="/path-to-your-avatar.jpg"
                            alt="User Avatar"
                        /> */}
                        <button className="ml-4 bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Upgrade
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
