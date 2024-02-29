'use client';

import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';
import { navLinks } from './config';
import ChipsComponent from '../components/chips/chips';
import ImageComponent from '../components/image/image';
import { LogoComponent } from '../common/logo/logo';
import useScreenDetect from '../common/useScreenDetect';

const NavbarComponent = () => {
    const screenType = useScreenDetect();

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo Section */}
                    <LogoComponent />
                    {/* Navigation Links Section */}
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        {navLinks.map((item, i) => (
                            <Link
                                key={i}
                                className="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-xl font-medium cursor-pointer whitespace-nowrap md:text-lg md:px-0.5 md:pt-0.5"
                                href={item.route}
                            >
                                <div className={styles['icon-container']}>
                                    <ImageComponent
                                        src={`/${item.src}.svg`}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Avatar and Button Section */}

                    {screenType === 'desktop' && (
                        <div className="ml-6 flex items-center">
                            <ChipsComponent
                                label={'32'}
                                classes={'secondary'}
                                src={'/crypto.svg'}
                                width={100}
                                height={100}
                            ></ChipsComponent>

                            <div
                                className={`${styles['icon-container']} ${styles['avatar']}`}
                            >
                                <ImageComponent
                                    src="/avatar.jpg"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
