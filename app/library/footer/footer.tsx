'use client';
import React from 'react';
import { grid } from '../common/grid';
import ListGroupComponent from '../components/list-group/list-group';
import { navLinks } from './config';
import { useRouter } from 'next/navigation';
import { IFooterLink } from './interfaces';
import { LogoComponent } from '../common/logo/logo';

const FooterComponent = () => {
    const router = useRouter();

    const handleNavigation = (current: IFooterLink) => {
        if (current.route) {
            router.push(`/${current.route}`);
        }
    };

    return (
        <footer className="p-10 border-t border-gray-200">
            <div className={grid.row}>
                <div
                    className={`flex flex-col justify-between ${grid['col-md-3']}`}
                >
                    <div>
                        <LogoComponent />
                    </div>
                    <div className="text-sm text-gray-600">
                        <p>© Copyright 2023</p>
                        <p>Voicify AI LTD</p>
                    </div>
                    <p className="text-sm text-gray-600">
                        Keep rocking & sing your song.
                    </p>
                </div>
                <div className={grid['col-md-3']}>
                    <ListGroupComponent
                        collection={navLinks.firstList}
                        propKey={'id'}
                        propText={'label'}
                        borderless={true}
                        onEmitEvent={handleNavigation}
                    ></ListGroupComponent>
                </div>
                <div className={grid['col-md-3']}>
                    <ListGroupComponent
                        collection={navLinks.secondList}
                        propKey={'id'}
                        propText={'label'}
                        borderless={true}
                        onEmitEvent={handleNavigation}
                    ></ListGroupComponent>
                </div>
                <div className={grid['col-md-3']}>
                    <ListGroupComponent
                        collection={navLinks.thirdList}
                        propKey={'id'}
                        propText={'label'}
                        borderless={true}
                        onEmitEvent={handleNavigation}
                    ></ListGroupComponent>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
