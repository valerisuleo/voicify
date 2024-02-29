import { IHero } from './interfaces';
import styles from './hero.module.scss';

const HeroComponent = ({
    variant,
    imageSrc,
    backgroundColor = 'bg-gray-500',
    children,
    isBreakingGrid,
}: IHero) => {
    // Prepare dynamic style for image background
    const imageBackgroundStyle =
        variant === 'image' ? { backgroundImage: `url(${imageSrc})` } : {};

    return (
        <div
            data-testid="hero"
            className={`flex flex-col justify-center items-center h-[50vh] text-white rounded-3xl ${
                variant === 'background' ? backgroundColor : ''
            } ${isBreakingGrid && styles['grid-breaker']}`}
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
