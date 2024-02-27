/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { render, screen } from '@testing-library/react';
import {
    contextual,
    ContextualClass,
} from '../../common/interfaces/contextual';
import ChipsComponent from './chips';
import '@testing-library/jest-dom';

// Adjust the jest.mock call to define the mock component directly inside it
// Adjust the jest.mock call to require the Image component dynamically
jest.mock('../image/image', () => ({
    __esModule: true, // This is required to mock a module that has a default export
    default: (props: any) => {
        // Dynamically require the Image component here
        const NextImage = require('next/image').default;
        return <NextImage {...props} layout="fixed" />;
    },
}));

describe('ChipsComponent', () => {
    it('renders with provided label and applies contextual class', () => {
        const testProps = {
            label: 'Test Chip',
            classes: 'primary' as ContextualClass,
        };

        render(<ChipsComponent {...testProps} />);

        expect(
            screen.getByRole('button', { name: testProps.label })
        ).toBeInTheDocument();
        const expectedClass = contextual[testProps.classes];
        expect(screen.getByRole('button')).toHaveClass(expectedClass);
    });
});
