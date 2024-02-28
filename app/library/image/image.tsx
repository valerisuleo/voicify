import React from 'react';
import Image from 'next/image';
import { Img } from './interfaces';

const ImageComponent = ({ src, height, width }: Img) => {
    return (
        <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className="w-full h-auto"
    />
    );
};

export default ImageComponent;
