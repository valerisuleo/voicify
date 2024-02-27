import React from 'react';
import ImageComponent from '../image/image';
import { IChipAvatar, IChipProps } from './interfaces';
import { contextual } from '../../common/interfaces/contextual';

function ChipsComponent(props: IChipProps) {
    const contextualClass = contextual[props.classes];
    // Check if the chip should include an avatar
    const isChipWithAvatar = (chip: IChipProps): chip is IChipAvatar => {
        return 'src' in chip && 'width' in chip && 'height' in chip;
    };

    return (
        <button
            onClick={props.onEmitEvent}
            className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full cursor-pointer focus:outline-none focus:shadow-outline ${contextualClass} gap-2`}
        >
            {isChipWithAvatar(props) && (
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                    <ImageComponent
                        src={props.src}
                        width={props.width}
                        height={props.height}
                    />
                </div>
            )}
            {props.label}
        </button>
    );
}

export default ChipsComponent;
