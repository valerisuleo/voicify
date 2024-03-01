import React from 'react';
import Image from 'next/image';
import { Img } from './interfaces';

const ImageComponent = ({ src, height, width, classes }: Img) => {
    return (
        <Image
            src={src}
            alt=""
            width={width}
            height={height}
            className={`w-full h-auto ${classes || ''}`}
        />
    );
};

export default ImageComponent;
