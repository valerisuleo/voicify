'use client';

import React, { Fragment } from 'react';
import ChipsComponent from '../library/components/chips/chips';
import CardComponent from '../library/components/card/card';
import { ICard } from '../library/components/card/interfaces';
import ImageComponent from '../library/components/image/image';
import LikeComponent from '../library/components/like/like';
import ButtonComponent from '../library/components/buttons/button';
import { IBtn } from '../library/components/buttons/interfaces';
import HeroComponent from '../library/components/hero/hero';
import ListGroupComponent from '../library/components/list-group/list-group';
import { IListGroup } from '../library/components/list-group/interface';
import { grid } from '../library/common/grid';
import { categories } from './mock';

const HomePage = () => {
    const handleClick = () => {
        console.log('fire');
    };

    const handleLike = () => {
        console.log('like');
    };

    const handleSelection = () => {
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
        label: 'primary',
        classes: 'primary',
        type: 'button',
        onEmitEvent: handleClick,
    };

    const propsList: IListGroup = {
        collection: [
            {
                id: '1',
                name: 'Item 1',
            },
            {
                id: '2',
                name: 'Item 2',
            },
        ],
        propKey: 'id',
        propText: 'name',
        onEmitEvent: handleSelection,
        borderless: false,
    };

    return (
        <Fragment>
            <HeroComponent
                variant="image"
                imageSrc="/hero.png"
                isBreakingGrid={true}
            >
                <div className="bg-slate-600 bg-opacity-20 rounded-full px-4 text-center">
                    <h1 className="font-extrabold text-8xl tracking-tight">
                        Create song covers
                    </h1>
                    <h1 className="font-extrabold text-8xl tracking-tight">
                        using any voice with AI
                    </h1>

                    <p className="text-white font-semibold text-xl mt-4">
                        The #1 platform for making high quality AI covers in
                        seconds!
                    </p>
                </div>
            </HeroComponent>

            <div className="flex justify-center mt-10">
                {categories.map((item) => (
                    <ChipsComponent
                        label={item.label}
                        classes="secondary"
                        key={item.name}
                        width={100}
                        height={100}
                        src={item.src}
                    />
                ))}
            </div>
        </Fragment>

        // <div className="">
        //     <div className="m-6">

        //     </div>
        //     <ChipsComponent
        //         label={'Music'}
        //         classes={'secondary'}
        //         src={'/avatar.jpg'}
        //         width={100}
        //         height={100}
        //     ></ChipsComponent>

        //     <div className="max-w-sm my-10">
        //         <CardComponent {...propsCard}></CardComponent>
        //     </div>

        //     <div className="my-6">
        //         <LikeComponent
        //             color="pink"
        //             onEmitEvent={handleLike}
        //         ></LikeComponent>
        //     </div>
        //     <div className="m-6">
        //         <ButtonComponent {...propsBtn}></ButtonComponent>
        //     </div>
        //     <div className="max-w-sm m-6">
        //         <ListGroupComponent {...propsList}></ListGroupComponent>
        //     </div>
        // </div>
    );
};

export default HomePage;
