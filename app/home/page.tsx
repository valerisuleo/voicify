/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { Fragment, useEffect, useState } from 'react';
import CardComponent from '../library/components/card/card';
import ChipsComponent from '../library/components/chips/chips';
import HeroComponent from '../library/components/hero/hero';
import ImageComponent from '../library/components/image/image';
import LikeComponent from '../library/components/like/like';
import { capitalizeFirstLetter } from '../library/common/utilities';
import { getCol, grid } from '../library/common/grid';
import { ICategory } from '../library/common/interfaces/category';
import { categories as mockData } from './mock';
import { ICardHomePage, IPhoto } from './interfaces';

const HomePage = () => {
    const [cards, setCards] = useState<ICardHomePage[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        fetchPhotosAndUpdateState('8');
        fetchAndSetCategories();
    }, []);

    async function fetchPhotos(limit: string): Promise<IPhoto[]> {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`,
            { cache: 'no-store' }
        );
        const photos: IPhoto[] = await response.json();
        return photos;
    }

    function transformPhotosToCards(photos: IPhoto[]): ICardHomePage[] {
        return photos.map((photo) => ({
            ...photo,
            isLike: false,
            countUsers: '45k',
            countLikes: '1k',
            isHorizontal: false,
        }));
    }

    async function fetchPhotosAndUpdateState(limit: string) {
        const photos = await fetchPhotos(limit);
        const cards = transformPhotosToCards(photos);
        setCards(cards);
    }

    async function fetchCategoryCards(limit: string): Promise<ICardHomePage[]> {
        const photos = await fetchPhotos(limit);
        return transformPhotosToCards(photos);
    }

    async function fetchAndSetCategories() {
        const categoriesData: ICategory[] = [
            {
                counter: 127,
                name: 'community',
                label: 'community',
                src: 'heart',
                list: await fetchCategoryCards('4'),
            },
            {
                counter: 394,
                name: 'voices',
                label: 'more-voices',
                src: 'note',
                list: await fetchCategoryCards('16'),
            },
        ];

        setCategories(categoriesData);
    }

    const handleLike = (isLike: boolean, current: ICardHomePage): void => {
        setCards((prevCards) => {
            return prevCards.map((card) => {
                if (card.id === current.id) {
                    // Found the card that was liked/unliked, update its isLike property
                    return { ...card, isLike: isLike };
                }
                return card; // Return all other cards unchanged
            });
        });
    };

    const generateCardProps = (
        item: ICardHomePage,
        additionalClasses?: string
    ) => {
        return {
            header: {
                children: (
                    <div style={{ position: 'relative' }}>
                        <ImageComponent
                            src={item.thumbnailUrl}
                            width={150}
                            height={150}
                            classes={additionalClasses} // Dynamically add any additional classes
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                margin: '10px',
                            }}
                        >
                            <LikeComponent
                                color="white"
                                onEmitEvent={(isLike) =>
                                    handleLike(isLike, item)
                                }
                            />
                        </div>
                    </div>
                ),
            },

            body: {
                cardTitle: item.title,
                cardText: `${item.countUsers} uses - ${item.countLikes} likes`,
            },
            isHorizontal: item.isHorizontal,
        };
    };

    return (
        <Fragment>
            <div>
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
            </div>

            <div className={`${grid.row} mb-5 mt-20`}>
                {mockData.map((item) => (
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

            <div className={`${grid.row} mb-10`}>
                {cards?.length &&
                    cards.map((item) => {
                        const props = generateCardProps(item);
                        return (
                            <div
                                className={`${getCol(
                                    'col-sm-6',
                                    'col-md-6',
                                    'col-lg-3'
                                )}`}
                                key={item.id}
                            >
                                <CardComponent
                                    header={props.header}
                                    body={props.body}
                                />
                            </div>
                        );
                    })}
            </div>

            {categories.map((category: ICategory, i) => (
                <div key={i}>
                    {/* Flex container */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ maxWidth: '40px' }}>
                            <ImageComponent
                                src={`/categories/${category.src}.png`}
                                width={100}
                                height={100}
                            />
                        </div>
                        <h1 className="font-extrabold ml-4 mr-2">
                            {capitalizeFirstLetter(category.label)}
                        </h1>
                        <h1 className="font-extrabold tracking-tighter text-gray-400">
                            {category.counter}
                        </h1>
                    </div>
                    <div className={`${grid.row} mb-10`}>
                        {category.list.map((item: ICardHomePage, j: number) => {
                            const props = generateCardProps(
                                item,
                                'rounded-3xl'
                            );

                            return (
                                <div
                                    className={`${getCol(
                                        'col-sm-6',
                                        'col-md-6',
                                        'col-lg-3'
                                    )}`}
                                    key={j}
                                >
                                    <CardComponent
                                        header={props.header}
                                        body={props.body}
                                        borderless={true}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default HomePage;

// NOT WORKING YET...
// function generateGridLayout(data: any) {
//     const horizontalItems = data.filter((item: any) => item.isHorizontal);
//     const nonHorizontalItems = data.filter(
//         (item: any) => !item.isHorizontal
//     );
//     let rows = [];

//     if (horizontalItems.length === 1) {
//         // First row: 1 horizontal item and 1 non-horizontal item
//         const firstRow = [
//             { ...horizontalItems[0], colSize: 'col-md-8' },
//             { ...nonHorizontalItems[0], colSize: 'col-md-4' },
//         ];

//         // The rest of the items in their own row
//         const secondRow = nonHorizontalItems
//             .slice(1)
//             .map((item: any) => ({ ...item, colSize: 'default' }));

//         rows = [firstRow, secondRow];
//     } else if (horizontalItems.length === 2) {
//         // First row: 2 horizontal items
//         const firstRow = horizontalItems.map((item: any) => ({
//             ...item,
//             colSize: 'col-md-6',
//         }));

//         // The rest of the items in their own row
//         const secondRow = nonHorizontalItems.map((item: any) => ({
//             ...item,
//             colSize: 'default',
//         }));

//         rows = [firstRow, secondRow];
//     } else {
//         // If no horizontal items or more than expected, treat all as default in a single row
//         const onlyRow = nonHorizontalItems.map((item: any) => ({
//             ...item,
//             colSize: 'default',
//         }));
//         rows = [onlyRow];
//     }

//     // Filtering out any empty rows
//     return rows.filter((row) => row.length > 0);
// }
