/* eslint-disable @typescript-eslint/no-unused-vars */
import { ICategory } from '../library/common/interfaces/category';
import { v4 as uuidv4 } from 'uuid';

const data = [
    {
        name: 'music',
        label: 'music',
        genre: '',
    },
    {
        name: 'cartoon',
        label: 'cartoon',
        genre: '',
    },
    {
        name: 'anime',
        label: 'anime',
        genre: '',
    },
    {
        name: 'gaming',
        label: 'gaming',
        genre: '',
    },
    {
        name: 'german',
        label: 'german',
        genre: 'languages',
    },
    {
        name: 'korean',
        label: 'korean',
        genre: 'languages',
    },
    {
        name: 'french',
        label: 'french',
        genre: 'languages',
    },
    {
        name: 'public',
        label: 'public figure',
        genre: '',
    },
];

export const categories: ICategory[] = data.map((item) => {
    return {
        ...item,
        src: `/categories/${item.name}.svg`,
    };
});
