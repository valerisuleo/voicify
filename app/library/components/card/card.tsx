import { ICard } from './interfaces';

const CardComponent = ({
    header,
    body,
    borderless,
    sameHeight = true,
}: ICard) => {
    const cardBase = 'rounded-3xl overflow-hidden flex flex-col'; // Added flex and flex-col
    const cardBorder = borderless ? '' : 'border border-gray-200';
    const cardHeight = sameHeight ? 'h-full' : ''; // Ensures the card can fill the container height
    const cardClasses = `${cardBase} ${cardBorder} ${cardHeight}`;

    const cardBody = 'px-6 py-4 flex flex-col flex-grow'; // Make card body a flex container
    const cardTitle = 'font-bold text-xl mb-2';
    const cardText = 'text-gray-700 text-base mt-auto'; // Use mt-auto to push cardText to the bottom

    return (
        <div className={cardClasses}>
            {header.children && (
                <div className="card-header">{header.children}</div>
            )}

            <div className={cardBody}>
                {body?.cardTitle && (
                    <div className={cardTitle}>{body.cardTitle}</div>
                )}
                {/* This div wraps non-bottom elements to ensure cardText can be pushed to the bottom */}
                <div className="flex-grow">{body.children}</div>
                {body?.cardText && (
                    <p className={cardText}>{body.cardText}</p> // This will sit at the bottom
                )}
            </div>
        </div>
    );
};

export default CardComponent;
