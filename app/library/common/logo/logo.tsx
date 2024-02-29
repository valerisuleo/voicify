import React from 'react';
import Link from 'next/link';
import styles from './logo.module.scss';
import { svgList } from './config';

export const LogoComponent = () => {
    return (
        <div className="inline-flex items-center">
            <div className="whitespace-nowrap">
                {svgList.map((item, i) => (
                    <Link
                        href={''}
                        className={`inline-flex items-center justify-center ${
                            i === svgList.length - 1
                                ? `${styles['adjust-y']}`
                                : ''
                        }`}
                        key={i}
                        style={{ marginRight: `${item.margin}px` }}
                    >
                        {item.svg}
                    </Link>
                ))}
            </div>
        </div>
    );
};
