import { ReactNode } from 'react';

export interface ICard {
    header: {
        children?: ReactNode;
    };
    body: {
        cardTitle?: string;
        cardText?: string;
        children?: ReactNode;
    };
}

export interface ICardImage {
    path: string;
    width: number;
    height: number;
}
