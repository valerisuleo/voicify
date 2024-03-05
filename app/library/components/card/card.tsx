import { ICard } from './interfaces';

const CardComponent = ({
    header,
    body,
    borderless,
    sameHeight = true,
    isHorizontal, // New prop for isHorizontal layout
}: ICard) => {
    const cardText = body?.cardText ? body.cardText : '';
    const borderClass = borderless ? '' : 'border border-gray-200';
    const heightClass = sameHeight ? 'h-full' : '';

    return (
        <div
            className={`${heightClass} ${borderClass} rounded-3xl overflow-hidden`}
        >
            {isHorizontal ? (
                <div className={`flex flex-row ${heightClass}`}>
                    <div className="w-1/2">{header.children}</div>
                    <div className="w-1/2 px-6 py-4 flex flex-col justify-between">
                        <div className="font-bold text-xl mb-2">
                            {body.cardTitle}
                        </div>
                        <div>{body.children}</div>
                        <p className="text-gray-700 text-base">{cardText}</p>
                    </div>
                </div>
            ) : (
                <div className={`flex flex-col ${heightClass}`}>
                    <div className="w-full">{header.children}</div>
                    <div className="px-6 py-4 flex flex-col flex-grow">
                        <div className="font-bold text-xl mb-2">
                            {body.cardTitle}
                        </div>
                        <div className="flex-grow">{body.children}</div>
                        <p className="text-gray-700 text-base mt-auto">
                            {cardText}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardComponent;
