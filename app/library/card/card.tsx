import { ICard } from './interfaces';

const CardComponent = ({ header, body, borderless }: ICard) => {
    const card = borderless ? 'rounded overflow-hidden' : 'rounded overflow-hidden border border-gray-200';
    const cardBody = 'px-6 py-4';
    const cardTitle = 'font-bold text-xl mb-2';
    const cardText = 'text-gray-700 text-base mb-5';

    return (
        <div className={card}>
            {header.children && (
                <div className="card-header">{header.children}</div>
            )}

            {(body?.children || body?.cardTitle || body?.cardTitle) && (
                <div className={cardBody}>
                    <div className={cardTitle}>{body.cardTitle}</div>
                    <p className={cardText}>{body.cardText}</p>
                    {body.children}
                </div>
            )}
        </div>
    );
};

export default CardComponent;
