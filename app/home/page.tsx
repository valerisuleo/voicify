'use client';

import React from 'react';
import ChipsComponent from '../library/chips/chips';
import CardComponent from '../library/card/card';
import { ICard } from '../library/card/interfaces';
import ImageComponent from '../library/image/image';
import LikeComponent from '../library/like/like';
import ButtonComponent from '../library/buttons/button';
import { IBtn } from '../library/buttons/interfaces';

const HomePage = () => {
    const handleClick = () => {
        console.log('fire');
    };

    const handleLike = () => {
        console.log('like');
    };

    const propsCard: ICard = {
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

    const propsBtn: IBtn = {
        label: 'Primary',
        classes: 'primary',
        type: 'button',
        onEmitEvent: handleClick,
    };

    return (
        <div>
            <ChipsComponent
                label={'Primary'}
                classes={'primary'}
                src={'/avatar.jpg'}
                width={50}
                height={50}
            ></ChipsComponent>

            <div className="max-w-sm my-10">
                <CardComponent {...propsCard}></CardComponent>
            </div>

            <div className="my-6">
                <LikeComponent
                    color="pink"
                    onEmitEvent={handleLike}
                ></LikeComponent>
            </div>
            <div className="m-6">
                <ButtonComponent {...propsBtn}></ButtonComponent>
            </div>
        </div>
    );
};

export default HomePage;