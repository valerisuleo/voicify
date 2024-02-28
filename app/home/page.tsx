'use client';

import React from 'react';
import ChipsComponent from '../library/chips/chips';
import CardComponent from '../library/card/card';
import { ICard } from '../library/card/interfaces';
import ImageComponent from '../library/image/image';

const HomePage = () => {
    const handleClick = () => {
        console.log('fire');
    };

    const props: ICard = {
        header: {
            children: (
                <ImageComponent
                    src={'/avatar.jpg'}
                    width={200}
                    height={200}
                ></ImageComponent>
            ),
        },

        body: {
            cardTitle: 'Elvis',
            cardText: undefined,
            children: (
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati, ratione perferendis provident soluta accusamus
                    ipsam! Quidem ipsa fugit minus incidunt illo deserunt,
                    temporibus aut aliquam! Doloribus culpa soluta voluptatibus
                    ad.
                </p>
            ),
        },
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

            <div className="max-w-sm my-10">
                <CardComponent {...props}></CardComponent>
            </div>
        </div>
    );
};

export default HomePage;
