import React from 'react';
import {
    render,
    fireEvent,
    RenderResult,
    cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { IBtn } from './interfaces';
import ButtonComponent from './button';

describe('ButtonComponent', () => {
    let component: (props: IBtn) => RenderResult;

    beforeEach(() => {
        // Dynamically render the ButtonComponent with given props
        component = (props: IBtn) => {
            return render(<ButtonComponent {...props} />);
        };
    });

    afterEach(() => {
        cleanup();
    });

    it('should create', () => {
        const { getByText } = component({
            classes: 'primary',
            label: 'Test Button',
            type: 'button',
        });
        expect(getByText('Test Button')).toBeInTheDocument();
    });

    it('renders with correct contextual class', () => {
        const { getByText } = component({
            classes: 'success',
            label: 'Success Button',
            type: 'button',
        });
        const button = getByText('Success Button');
        // Example: Checking for one class to ensure correct contextual class is applied
        expect(button).toHaveClass('bg-green-500');
    });

    it('calls onEmitEvent prop on click', () => {
        const onEmitEventMock = jest.fn();
        const { getByText } = component({
            classes: 'primary',
            label: 'Clickable Button',
            type: 'button',
            onEmitEvent: onEmitEventMock,
        });
        fireEvent.click(getByText('Clickable Button'));
        expect(onEmitEventMock).toHaveBeenCalledTimes(1);
    });

    it('renders correctly with different types', () => {
        const types: Array<'button' | 'submit' | 'reset'> = [
            'button',
            'submit',
            'reset',
        ];
        types.forEach((type) => {
            const { getByText } = component({
                classes: 'primary',
                label: `${type} type`,
                type,
            });
            const button = getByText(`${type} type`);
            expect(button).toHaveAttribute('type', type);
        });
    });
});
