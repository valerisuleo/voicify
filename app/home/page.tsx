'use client'

import React from 'react';
import ChipsComponent from '../library/chips/chips';

const HomePage = () => {
    const handleClick = () => {
        console.log('fire');
    };
    return (
        <div>
            <ChipsComponent
                label={'Primary'}
                classes={'primary'}
                src={'/avatar.jpg'}
                width={50}
                height={50}
                onEmitEvent={handleClick}
            ></ChipsComponent>
        </div>
    );
};

export default HomePage;
