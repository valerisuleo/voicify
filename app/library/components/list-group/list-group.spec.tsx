/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent } from '@testing-library/react';
import ListGroupComponent from './list-group';

describe('ListGroupComponent', () => {
    const items = [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
    ];

    it('renders a list of items', () => {
        const { getByText } = render(
            <ListGroupComponent
                collection={items}
                propKey="id"
                propText="text"
                onEmitEvent={() => {}}
            />
        );
        expect(getByText('Item 1')).toBeDefined();
        expect(getByText('Item 2')).toBeDefined();
        expect(getByText('Item 3')).toBeDefined();
    });

    it('calls onEmitEvent when an item is clicked', () => {
        const mockFn = jest.fn();
        const { getByText } = render(
            <ListGroupComponent
                collection={items}
                propKey="id"
                propText="text"
                onEmitEvent={mockFn}
            />
        );
        fireEvent.click(getByText('Item 2'));
        expect(mockFn).toHaveBeenCalledWith(items[1]);
    });

    it('adds appropriate Tailwind CSS classes to the clicked item', () => {
        const activeClass = 'bg-purple-700 hover:bg-purple-800 text-white'; // Example active class
        const inactiveClass = 'bg-white text-gray-900'; // Example inactive class
        const { getByText } = render(
            <ListGroupComponent
                collection={items}
                propKey="id"
                propText="text"
                onEmitEvent={() => {}}
            />
        );
        fireEvent.click(getByText('Item 2'));
        // Verify that the active item has the expected active class
        expect(getByText('Item 2').className).toContain(activeClass);
        // Optionally, verify that other items have the expected inactive class
        expect(getByText('Item 1').className).toContain(inactiveClass);
    });
});
