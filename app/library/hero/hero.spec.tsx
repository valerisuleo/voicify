import React from 'react';
import { render, RenderResult, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IHero } from './interfaces'; // Ensure this path is correct
import HeroComponent from './hero';

describe('HeroComponent', () => {
    let component: (props: IHero) => RenderResult;

    beforeEach(() => {
        // Dynamically render the HeroComponent with given props
        component = (props: IHero) => {
            return render(<HeroComponent {...props} />);
        };
    });

    afterEach(() => {
        cleanup();
    });

    it('renders correctly with a background image', () => {
        const testImageSrc = 'https://example.com/test-image.jpg';
        const { getByTestId } = component({
            variant: 'image',
            imageSrc: testImageSrc,
            children: <div>Test Content</div>,
        });
        const heroElement = getByTestId('hero');
        expect(heroElement).toHaveStyle(
            `background-image: url(${testImageSrc})`
        );
    });

    it('applies the correct background color when variant is background', () => {
        const backgroundColor = 'bg-green-500';
        const { getByTestId } = component({
            variant: 'background',
            backgroundColor,
            children: <div>Test Content</div>,
        });
        const heroElement = getByTestId('hero');
        expect(heroElement).toHaveClass(backgroundColor);
    });

    it('properly includes children elements', () => {
        const childrenContent = 'Children Content';
        const { getByText } = component({
            variant: 'background',
            children: <div>{childrenContent}</div>,
        });
        expect(getByText(childrenContent)).toBeInTheDocument();
    });
});
