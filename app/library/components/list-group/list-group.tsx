/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { IListGroup } from './interface';
import { contextual } from '../../common/interfaces/contextual';

const ListGroupComponent = ({
    collection,
    propKey,
    propText,
    shouldSetActiveIndex = false,
    borderless,
    onEmitEvent,
}: IListGroup) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const classBorder = !borderless ? 'border-b border-gray-200' : '';

    const handleClick = (item: any, index: number): void => {
        onEmitEvent(item);
        if (shouldSetActiveIndex) {
            setActiveIndex(index);
        }
    };

    return (
        <ul className="list-none">
            {collection.map((item, i) => (
                <li
                    onClick={() => handleClick(item, i)}
                    key={item[propKey]}
                    className={`cursor-pointer px-4 py-1 ${classBorder} ${
                        activeIndex === i
                            ? `${contextual.primary}`
                            : `bg-white text-gray-900 hover:${contextual.secondary}`
                    } last:border-b-0 `}
                >
                    {item[propText]}
                </li>
            ))}
        </ul>
    );
};

export default ListGroupComponent;
