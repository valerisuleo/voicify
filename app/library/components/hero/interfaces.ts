import { ReactNode } from 'react';

export interface IHero {
    variant: 'image' | 'background';
    imageSrc?: string;
    backgroundColor?: string;
    isBreakingGrid?: boolean;
    children: ReactNode;
}
