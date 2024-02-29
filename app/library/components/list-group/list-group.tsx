import { useState } from 'react';
import { IListGroup } from './interface';
import { contextual } from '../../common/interfaces/contextual';

const ListGroupComponent = ({
    collection,
    propKey,
    propText,
    borderless,
    onEmitEvent,
}: IListGroup) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const classBorder = !borderless ? 'border-b border-gray-200' : '';

    return (
        <ul className="list-none">
            {collection.map((item, i) => (
                <li
                    onClick={() => {
                        onEmitEvent(item);
                        setActiveIndex(i);
                    }}
                    key={item[propKey]}
                    className={`cursor-pointer px-4 py-2 ${classBorder} ${
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
