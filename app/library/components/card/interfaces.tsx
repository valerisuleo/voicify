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
    borderless?: boolean;
    sameHeight?: boolean;

}





