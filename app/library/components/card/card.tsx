import { ICard } from './interfaces';

const CardComponent = ({
    header,
    body,
    borderless,
    sameHeight = true,
    isHorizontal, // New prop for isHorizontal layout
}: ICard) => {

    console.log("isHorizontal", isHorizontal);
    
    // Conditionally set flex direction based on isHorizontal prop
    const flexDirection = isHorizontal ? 'flex-row' : 'flex-col';
    const cardBase = `rounded-3xl overflow-hidden flex ${flexDirection}`;
    const cardBorder = borderless ? '' : 'border border-gray-200';
    const cardHeight = sameHeight ? 'h-full' : '';
    const cardClasses = `${cardBase} ${cardBorder} ${cardHeight}`;

    // Adjust cardBody for isHorizontal layout if needed
    const cardBody = `px-6 py-4 flex ${isHorizontal ? '' : 'flex-col flex-grow'}`;
    const cardTitle = 'font-bold text-xl mb-2';
    const cardText = 'text-gray-700 text-base mt-auto';

    return (
        <div className={cardClasses}>
            {header.children && (
                <div className="card-header">{header.children}</div>
            )}

            <div className={cardBody}>
                {body?.cardTitle && (
                    <div className={cardTitle}>{body.cardTitle}</div>
                )}
                <div className={`${isHorizontal ? '' : 'flex-grow'}`}>
                    {body.children}
                </div>
                {body?.cardText && (
                    <p className={cardText}>{body.cardText}</p>
                )}
            </div>
        </div>
    );
};

export default CardComponent;
