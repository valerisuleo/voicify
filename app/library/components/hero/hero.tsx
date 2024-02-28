import { IHero } from './interfaces';

const HeroComponent = ({
    variant,
    imageSrc,
    backgroundColor = 'bg-gray-500',
    children,
}: IHero) => {
    // Prepare dynamic style for image background
    const imageBackgroundStyle =
        variant === 'image' ? { backgroundImage: `url(${imageSrc})` } : {};

    return (
        <div
            data-testid="hero"
            className={`flex flex-col justify-center items-center h-[50vh] px-5 text-white ${
                variant === 'background' ? backgroundColor : ''
            }`}
            style={{
                ...imageBackgroundStyle,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {children}
        </div>
    );
};

export default HeroComponent;
