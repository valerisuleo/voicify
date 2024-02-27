import React from 'react';
import Image from 'next/image';
import { Img } from './interfaces';

const ImageComponent = ({ src, height, width }: Img) => {
    return (
        <div className="w-full mx-auto">
            <Image
                src={src}
                alt=""
                width={width}
                height={height}
                className="w-full h-auto"
            />
        </div>
    );
};

export default ImageComponent;
