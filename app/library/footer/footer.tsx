'use client';
import React from 'react';
import { grid } from '../common/grid';
import ListGroupComponent from '../components/list-group/list-group';
import { navLinks } from './config';
import { useRouter } from 'next/navigation';
import { IFooterLink } from './interfaces';

const FooterComponent = () => {
    const router = useRouter();

    const handleNavigation = (current: IFooterLink) => {
        if (current.route) {
            router.push(`/${current.route}`);
        }
    };

    return (
        <footer className="p-4 border-t border-gray-200">
            <div className={grid.row}>
                <div className={grid['col-md-3']}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla assumenda accusamus magnam voluptatum quos veniam
                    aliquam totam impedit sed deserunt corrupti dolor
                    perferendis optio debitis rem, repellendus laborum at odit.
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
