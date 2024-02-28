import React from 'react';
import { IBtn } from './interfaces';
import { contextual } from '../../common/interfaces/contextual';

const ButtonComponent = ({ classes, label, onEmitEvent, type }: IBtn) => {
    const contextualClass = contextual[classes];

    return (
        <button
            type={type}
            className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${contextualClass}`}
            onClick={onEmitEvent}
        >
            {label}
        </button>
    );
};

export default ButtonComponent;
