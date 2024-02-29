'use client';

import React, { Fragment, useState } from 'react';
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
import { getCol, grid } from '../library/common/grid';
import { categories } from './mock';
import styles from './home.module.scss';
import useScreenDetect from '../library/common/useScreenDetect';
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

    const screenType = useScreenDetect();

    function setWidth(): string {
        let width = '60%';

        switch (screenType) {
            case 'desktop':
                width = '60%';
                break;
            case 'tablet':
                width = '80%';
                break;
            case 'mobile':
                width = '100%';
                break;
            default:
                break;
        }

        return width;
    }

    return (
        <Fragment>
            <HeroComponent
                variant="image"
                imageSrc="/hero.png"
                isBreakingGrid={true}
            >
                <div className="bg-slate-600 bg-opacity-20 rounded-full px-4 py-8 md:py-12 md:px-8 text-center">
                    <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight">
                        Create song covers
                    </h1>
                    <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight">
                        using any voice with AI
                    </h1>

                    <p className="text-white font-semibold text-lg md:text-xl lg:text-2xl mt-4 md:mt-6">
                        The #1 platform for making high quality AI covers in
                        seconds!
                    </p>
                </div>
            </HeroComponent>

            <div
                className={`${grid.row}`}
                style={{ width: setWidth(), margin: 'auto' }}
            >
                {categories.map((item) => (
                    <div
                        className={`${getCol(
                            'col-xs-6',
                            'col-md-4',
                            'col-lg-3'
                        )}`}
                        key={item.name}
                    >
                        <ChipsComponent
                            label={item.label}
                            classes="secondary"
                            key={item.name}
                            width={100}
                            height={100}
                            src={item.src}
                        />
                    </div>
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
